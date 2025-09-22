# Survey on manual corpus annotation tools

This is a working repository to elaborate on results from survey on manual corpora annotation tools (WG1 Task 1.4)


## 🛠️ How to Contribute a Tool

We welcome contributions of new tools or updates to existing ones!
All tool metadata lives in YAML files under the [tools/](tools/) directory.
The TSV (`data/results_230125.tsv`) and JSON (`data/latest_export.json`) are generated automatically from those YAMLs.

### 1. Add a new tool

1. Copy the [YAML template](tools/_template.yaml)
   ```
   cp tools/_template.yml tools/<tool-slug>.yml
   ```
   - Use a short, lowercase, hyphenated slug for the filename (e.g., tools/arboratorgrew.yml).
2. Fill in the fields:
   - Text fields → fill in with a string or leave as "" if unknown.
   - Lists → use YAML lists (- item1, - item2) or [] if none.
   - Yes/No/partial → write exactly "Yes", "No", or "partial".
   - Links → full https://…. For extra resources, use Label: "URL".
   - Operating system → mark each as "Yes" or "No".
3. Save and commit only this new YAML file.


Tips:
- Keep descriptions short and clear (one line in Short-description).
- If unsure, leave the field blank ("") — don’t delete the key.
- Use ISO codes for interface languages (en, fr, it, …).
- You can check an [example file](tools/arborator.yaml) for inspiration

### 2. Update an existing tool

1. Open its YAML file in [tools/](tools/)
2. Edit the fields you want to update.
3. Do not change the filename unless renaming the tool.

### 3. Build TSV & JSON locally (optional but recommended)

If you want to check your file before opening a PR:
```
pip install -r src/requirements.txt
python src/build_from_yaml.py
```
This will regenerate:
- `data/results_230125.tsv`
- `data/latest_export.json`

### 4. Open a Pull Request

- Add one YAML file (for a new tool) or edit one (to update).
- Our CI will automatically run the build and validate your contribution.
- Reviewers will check the generated TSV/JSON.