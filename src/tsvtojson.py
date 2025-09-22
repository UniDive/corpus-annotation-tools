import csv
import json

list_type_fields = [x.strip() for x in open("data/list_fields.txt", encoding="utf-8").readlines()]

data = []

with open('data/results_230125.tsv', newline='') as csvfile:

	reader = csv.DictReader(csvfile, delimiter="\t")

	for row in reader:

		for field in row:
			if field in list_type_fields:
				if row[field]:
					row[field] = [x.strip() for x in row[field].split(",")]
				else:
					row[field] = [""]

		data.append(row)


with open("data/latest_export.json", "w", encoding="utf-8") as fout:
	print(json.dumps(data, ensure_ascii=True, indent=2), file=fout)
