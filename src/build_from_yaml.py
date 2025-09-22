#!/usr/bin/env python3
"""
Build/UPsert latest_export.json from nested YAML files.

Key behaviors:
- DO NOT rewrite the JSON from scratch.
- Read existing data/latest_export.json as the base and upsert records by tool name.
- Preserve existing order; updated records stay in place; new records are appended.
- Normalize fields to match the original (old) JSON schema:
    * exact keys like "Tool ID::Tool name", "Software::Operating system", etc.
    * per-key string vs array format learned from an "old" JSON (or the current one).
- Mirror offline usage into:
    * "Software::Offline usage" and
    * "Software::Offline usage (for web-based applications)"

Usage:
  python src/build_from_yaml.py
  python src/build_from_yaml.py tools/brat.yml
  python src/build_from_yaml.py --check-only
  python src/build_from_yaml.py --old-json data/old_latest_export.json
"""

import argparse
import json
import pathlib
import sys
from typing import Any, Dict, List, Tuple

# Repo paths
ROOT = pathlib.Path(__file__).resolve().parents[1]
TOOLS_DIR = ROOT / "tools"
JSON_OUT = ROOT / "data" / "latest_export.json"
OLD_JSON_DEFAULT = ROOT / "data" / "old_latest_export.json"

# YAML loader
try:
    import yaml  # type: ignore
except Exception:
    print("❌ PyYAML is required. Install with: pip install pyyaml", file=sys.stderr)
    sys.exit(1)


# ---------- IO helpers ----------

def read_json(path: pathlib.Path) -> List[Dict[str, Any]]:
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    if isinstance(data, dict) and "items" in data:
        return data["items"]
    if isinstance(data, list):
        return data
    return []

def save_json(path: pathlib.Path, items: List[Dict[str, Any]]):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
        f.write("\n")


# ---------- normalization utils ----------

def as_list(v: Any) -> List[Any]:
    if v is None or v == "":
        return []
    if isinstance(v, list):
        return [x for x in v if not (isinstance(x, str) and x.strip() == "")]
    return [v]

def yes_no_bool(v: Any) -> Tuple[bool, str]:
    """Normalize yes/no/partial/bool to (bool_value, canonical_string)."""
    if isinstance(v, bool):
        return (v, "Yes" if v else "No")
    if v is None:
        return (False, "")
    s = str(v).strip()
    low = s.lower()
    if low in {"yes", "y", "true", "1"}:
        return (True, "Yes")
    if low in {"no", "n", "false", "0"}:
        return (False, "No")
    if low in {"partial", "partially"}:
        return (True, "partial")
    return (False, s)

def normalize_os_names(name: str) -> str:
    """Map YAML OS label to the label used in old JSON."""
    n = name.strip()
    if n.lower() in {"macos", "mac os", "osx"}:
        return "Mac OS"
    if n.lower() == "windows":
        return "Windows"
    if n.lower() == "linux":
        return "Linux"
    return n

def normalize_os_block(os_block: Any) -> List[str]:
    """
    YAML:
      Operating-system:
        Windows: "Yes"
        macOS: "No"
        Linux: true
    -> ["Windows", "Linux"] (order: Windows, Mac OS, Linux, then others)
    """
    if not isinstance(os_block, dict):
        return []
    keep = []
    for k, v in os_block.items():
        b, _ = yes_no_bool(v)
        if b:
            keep.append(normalize_os_names(k))
    order = ["Windows", "Mac OS", "Linux"]
    tail = [x for x in keep if x not in order]
    return [x for x in order if x in keep] + tail

def links_to_label_url_list(links: Any) -> List[str]:
    """
    Accept:
      - [{Examples: "https://..."}, {Docs: "https://..."}]
      - ["Examples::https://...", "Docs::https://..."]
    Return:
      ["Examples::https://...", "Docs::https://..."]
    """
    out: List[str] = []
    for item in as_list(links):
        if isinstance(item, dict) and len(item) == 1:
            label, url = next(iter(item.items()))
            label = str(label).strip()
            url = str(url).strip()
            if label and url:
                out.append(f"{label}::{url}")
        elif isinstance(item, str):
            s = item.strip()
            if s and "::" in s:
                out.append(s)
    return out

def join_or_array(values: List[str], prefer_string: bool) -> Any:
    vals = [v for v in (x.strip() for x in values) if v]
    if not vals:
        return "" if prefer_string else []
    return "; ".join(vals) if prefer_string else vals

def learn_string_preferences(old_records: List[Dict[str, Any]]) -> Dict[str, bool]:
    """
    For each key, if ANY old value is a string -> prefer string.
    Otherwise prefer array for list-like values.
    """
    prefs: Dict[str, bool] = {}
    for rec in old_records:
        for k, v in rec.items():
            if isinstance(v, str):
                prefs[k] = True
            elif k not in prefs:
                prefs[k] = False
    return prefs

def tool_key_from_record(rec: Dict[str, Any]) -> str:
    return (rec.get("Tool ID::Tool name") or "").strip().lower()

def tool_key_from_yaml(doc: Dict[str, Any]) -> str:
    return ((doc.get("ToolID") or {}).get("Tool-name") or "").strip().lower()


# ---------- mapping to old JSON field names ----------

FIELD_MAP_LIST = {
    # list-like
    "Data support::Input format": ("Data-support", "Input-format"),
    "Data support::Integration of other resources": ("Data-support", "Integration-of-other-resources"),
    "Data support::Data export": ("Data-support", "Data-export"),
    "Diversity features::Diversity features": ("Diversity-features", "Diversity-features"),
    "Diversity features::Language of the interface": ("Diversity-features", "Language-of-the-interface"),
    "Annotation::Segmentation": ("Annotation", "Segmentation"),
    "Annotation::Annotation types": ("Annotation", "Annotation-types"),
    "Annotation::Annotation scope": ("Annotation", "Annotation-scope"),
    "User Experience::Annotation mode": ("User-Experience", "Annotation-mode"),
    "User Experience::Annotation display": ("User-Experience", "Annotation-display"),
    "Tool ID::Example projects": ("Extras", "Example-projects"),
    # UD/PARSEME lists
    "UD/PARSEME specifics::UD-specific annotations": ("UD-PARSEME-specifics", "UD-specific-annotations"),
    "UD/PARSEME specifics::PARSEME-specific annotations": ("UD-PARSEME-specifics", "PARSEME-specific-annotations"),
    "UD/PARSEME specifics::Other annotation layers": ("UD-PARSEME-specifics", "Other-annotation-layers"),
}

FIELD_MAP_STR = {
    # strings
    "Tool ID::Tool name": ("ToolID", "Tool-name"),
    "Tool ID::Logo": ("ToolID", "Logo"),
    "Tool ID::Short description": ("ToolID", "Short-description"),
    "Tool ID::Website": ("ToolID", "Website"),
    "Tool ID::Respondent involved in development": ("ToolID", "Developer"),
    "Tool ID::Code repository": ("Software", "Code-repository"),
    "Software::License": ("Software", "License"),
    "Software::Active maintenance": ("Software", "Active-maintenance"),
    "Software::Software type": ("Software", "Software-type"),
    "User Experience::Keyboard annotation and shortcuts": ("User-Experience", "Keyboard-shortcuts"),
    "User Experience::Automatic pre-annotation": ("User-Experience", "Automatic-pre-annotation"),
    "User Experience::Automatic recommendation": ("User-Experience", "Automatic-recommendation"),
    "User Experience::Collaborative annotation": ("User-Experience", "Collaborative-annotation"),
    "User Experience::Project management": ("User-Experience", "Project-management"),
    "User Experience::User roles": ("User-Experience", "User-roles"),
    "User Experience::Comparison of annotations": ("User-Experience", "Comparison-of-annotations"),
    "User Experience::Agreement calculation": ("User-Experience", "Agreement-calculation"),
    "User Experience::Querying": ("User-Experience", "Querying"),
    "User Experience::Mass editing": ("User-Experience", "Mass-editing"),
    "Annotation::Tagset customization": ("Annotation", "Tagset-customization"),
    "UD/PARSEME specifics::UD validation": ("UD-PARSEME-specifics", "UD-validation"),
    "UD/PARSEME specifics::Consistency check": ("UD-PARSEME-specifics", "Consistency-check"),
    # Additional features (now under ToolID in YAML)
    "Tool ID::Additional features": ("ToolID", "Additional-features"),
}

SPECIAL_KEYS = [
    "Tool ID::Other useful links",
    "Software::Operating system",
    "Software::Software availability",
    "Software::Offline usage",
    "Software::Offline usage (for web-based applications)",
]

def yaml_to_oldjson_record(doc: Dict[str, Any], string_pref: Dict[str, bool]) -> Dict[str, Any]:
    out: Dict[str, Any] = {}

    # direct strings
    for k, (block, key) in FIELD_MAP_STR.items():
        val = ((doc.get(block) or {}).get(key))
        out[k] = "" if val is None else str(val)

    # list-like (format as string or array per preference)
    for k, (block, key) in FIELD_MAP_LIST.items():
        vals = as_list((doc.get(block) or {}).get(key))
        vals = [str(x) for x in vals if not (isinstance(x, str) and x.strip() == "")]
        out[k] = join_or_array(vals, string_pref.get(k, False))

    # special: Other useful links -> "Label::URL"
    links_vals = links_to_label_url_list(((doc.get("ToolID") or {}).get("Other-useful-links")))
    out["Tool ID::Other useful links"] = join_or_array(
        links_vals, string_pref.get("Tool ID::Other useful links", False)
    )

    # special: Operating system
    os_list = normalize_os_block(((doc.get("Software") or {}).get("Operating-system")))
    out["Software::Operating system"] = join_or_array(
        os_list, string_pref.get("Software::Operating system", False)
    )

    # special: Software availability
    avail = as_list(((doc.get("Software") or {}).get("Software-availability")))
    avail = [str(x) for x in avail if str(x).strip() != ""]
    out["Software::Software availability"] = join_or_array(
        avail, string_pref.get("Software::Software availability", False)
    )

    # special: offline usage (mirror)
    off_raw = ((doc.get("Software") or {}).get("Offline-usage-webapps"))
    _, off_str = yes_no_bool(off_raw)
    out["Software::Offline usage"] = off_str
    out["Software::Offline usage (for web-based applications)"] = off_str

    # ensure all keys seen in prefs exist (avoid dropping columns)
    for k in string_pref.keys():
        if k not in out:
            out[k] = "" if string_pref[k] else []

    return out


# ---------- upsert logic ----------

def upsert_records(
    base: List[Dict[str, Any]],
    updates: List[Dict[str, Any]],
) -> List[Dict[str, Any]]:
    """
    Update in place:
      - if tool exists: overwrite only keys present in the new record, keep others
      - if new tool: append at the end
    Preserve original order.
    """
    index = {tool_key_from_record(r): i for i, r in enumerate(base)}
    for rec in updates:
        key = tool_key_from_record(rec)
        if not key:
            continue
        if key in index:
            i = index[key]
            merged = dict(base[i])
            merged.update(rec)  # overwrite provided fields, preserve unknown ones
            base[i] = merged
        else:
            base.append(rec)
            index[key] = len(base) - 1
    return base


# ---------- main build ----------

def main():
    ap = argparse.ArgumentParser(description="Upsert latest_export.json from YAML, normalized to old JSON style.")
    ap.add_argument("paths", nargs="*", help="YAML files to process. If omitted, processes all tools/*.yml")
    ap.add_argument("--old-json", default=str(OLD_JSON_DEFAULT), help="Existing JSON to learn per-key formats from")
    ap.add_argument("--check-only", action="store_true", help="Don't write; exit nonzero if changes would occur.")
    args = ap.parse_args()

    old_json_path = pathlib.Path(args.old_json)
    old_records = read_json(old_json_path)
    if not old_records:
        # fallback to current output
        old_records = read_json(JSON_OUT)

    string_pref = learn_string_preferences(old_records)

    # Base = current output JSON (append/edit in place)
    base = read_json(JSON_OUT)

    # Gather YAML files
    yaml_files = [pathlib.Path(p) for p in (args.paths or [])] or sorted(TOOLS_DIR.glob("*.yml"))
    if not yaml_files:
        print(f"ℹ️ No YAML files found in {TOOLS_DIR}")
        sys.exit(0)

    # Convert YAMLs to normalized records
    updates: List[Dict[str, Any]] = []
    for yf in yaml_files:
        try:
            raw = yaml.safe_load(yf.read_text(encoding="utf-8")) or {}
        except Exception as e:
            print(f"❌ Failed to parse {yf}: {e}")
            sys.exit(2)

        if not tool_key_from_yaml(raw):
            print(f"⚠️ Skipping {yf.name}: missing ToolID.Tool-name")
            continue

        rec = yaml_to_oldjson_record(raw, string_pref)
        updates.append(rec)

    # Keep a copy for comparison
    before = json.dumps(base, ensure_ascii=False, sort_keys=True)

    # Upsert
    after = upsert_records(base, updates)

    # Compare
    changed = (json.dumps(after, ensure_ascii=False, sort_keys=True) != before)

    if args.check_only:
        if changed:
            print("❌ JSON would change (run without --check-only to write).")
            sys.exit(3)
        print("✅ JSON is up to date.")
        sys.exit(0)

    save_json(JSON_OUT, after)
    print(f"✅ Upserted {len(updates)} record(s) into {JSON_OUT.relative_to(ROOT)} (total {len(after)}).")
    sys.exit(0)

if __name__ == "__main__":
    main()
