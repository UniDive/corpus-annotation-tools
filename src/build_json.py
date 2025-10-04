import os
import yaml
import json
import re

TOOLS_DIR = 'tools'
OUTPUT_JSON = 'data/latest_export.json'

def flatten_dict(d, parent_key=''):
    items = {}
    for k, v in d.items():
        norm_k = k
        new_key = f"{parent_key}::{norm_k}" if parent_key else norm_k
        if isinstance(v, dict):
            items.update(flatten_dict(v, new_key))
        else:
            items[new_key] = v
    return items

def main():
    tools = []
    for fname in os.listdir(TOOLS_DIR):
        if fname.endswith('.yml') or fname.endswith('.yaml'):
            with open(os.path.join(TOOLS_DIR, fname), 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
                flat = flatten_dict(data)
                # Convert None to empty string, lists to lists, everything else to string
                for k, v in flat.items():
                    if v is None:
                        flat[k] = ""
                    elif isinstance(v, list):
                        flat[k] = v
                    else:
                        flat[k] = str(v)
                tools.append(flat)
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as out:
        json.dump(tools, out, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()