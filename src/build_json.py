import os
import yaml
import json
import re

TOOLS_DIR = 'tools'
OUTPUT_JSON = 'data/latest_export.json'

def normalize_key(key):
    # Replace underscores and hyphens with spaces, capitalize first letter of each word
    key = key.replace('_', ' ').replace('-', ' ')
    # Insert space before capital letters (for e.g. ToolID)
    key = re.sub(r'([a-z])([A-Z])', r'\1 \2', key)
    # Remove extra spaces
    key = ' '.join(key.split())
    # Capitalize first letter
    return key[0].upper() + key[1:] if key else key

def flatten_dict(d, parent_key=''):
    items = {}
    for k, v in d.items():
        norm_k = normalize_key(k)
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