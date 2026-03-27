import argparse
import json
from pathlib import Path

import yaml


FIELD_MAP = {
    "Name": ("Tool ID", "Tool name"),
    "URL": ("Tool ID", "Website"),
    "Licence": ("1. Software", "2. License"),
    "Infrastructure": None,
    "Publication": ("Tool ID", "Other useful links"),
    "Input format": ("2. Data support", "1. Input format"),
    "Description": ("Tool ID", "Short description"),
    "Software type": ("1. Software", "3. Software type"),
    "Annotation types": ("6. Annotation layers", "1. Annotation types"),
}


def get_nested(data, path):
    current = data
    for key in path:
        if not isinstance(current, dict):
            return None
        current = current.get(key)
        if current is None:
            return None
    return current


def normalize_value(field_name, value):
    if value is None:
        return None

    if field_name == "Publication":
        if not isinstance(value, list):
            return []
        publications = []
        for entry in value:
            if isinstance(entry, dict):
                for label, url in entry.items():
                    if "publication" in label.lower():
                        publications.append({"label": label, "url": url})
        return publications

    return value


def convert_tool(data):
    converted = {}
    for target_field, source_path in FIELD_MAP.items():
        value = None if source_path is None else get_nested(data, source_path)
        converted[target_field] = normalize_value(target_field, value)
    return converted


def load_yaml(path):
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def slugify_filename(name):
    normalized = "".join(
        character.lower() if character.isalnum() else "-" for character in name
    )
    parts = [part for part in normalized.split("-") if part]
    return "-".join(parts) or "tool"


def iter_input_files(paths):
    for raw_path in paths:
        path = Path(raw_path)
        if path.is_dir():
            yield from sorted(path.glob("*.yml"))
            yield from sorted(path.glob("*.yaml"))
        else:
            yield path


def main():
    parser = argparse.ArgumentParser(
        description="Convert tool YAML files into the CRF JSON format."
    )
    parser.add_argument(
        "inputs",
        nargs="*",
        default=["tools/ArboratorGrew.yml"],
        help="YAML file(s) or directory/directories containing YAML files.",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="data/crf",
        help="Output directory for per-tool JSON files.",
    )
    args = parser.parse_args()

    input_files = list(iter_input_files(args.inputs))
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    for input_file in input_files:
        converted_tool = convert_tool(load_yaml(input_file))
        tool_name = converted_tool.get("Name") or input_file.stem
        output_path = output_dir / f"{slugify_filename(tool_name)}.json"
        with output_path.open("w", encoding="utf-8") as handle:
            json.dump(converted_tool, handle, ensure_ascii=False, indent=2)
            handle.write("\n")


if __name__ == "__main__":
    main()
