import csv
import yaml



with open("results_230125.tsv") as csvfile:
	reader = csv.DictReader(csvfile, delimiter="\t")
	for row in reader:
		out_dict = {}
		for field in row:
			prefix, name = field.split("::")
			if not prefix in out_dict:
				out_dict[prefix] = {}

			if name in ["Other useful links", "Example projects"]:
				out_dict[prefix][name] = {}
				if row[field]:
					data = row[field].split(",")
					data = [x.strip() for x in data]
					out_dict[prefix][name] = []
					for element in data:
						# print(prefix, name, data)
						key, value = element.rsplit(" ", 1)
						out_dict[prefix][name].append({key: value})

			elif name in ["Operating system", "Software availability", "Input format", "Integration of other resources", "Data export", "Diversity features", "Language of the interface", "Segmentation", "Annotation types", "Annotation scope", "Annotation mode", "Annotation display", "Collaborative annotation", "UD-specific annotations", "Other annotation layers", "PARSEME-specific annotations"]:
				out_dict[prefix][name] = [x.strip() for x in row[field].split(",") if x.strip()]

			else:
				out_dict[prefix][name] = row[field]

		yaml.dump(out_dict, open(f"../tools/{out_dict['Tool ID']['Tool name']}.yml", "w"), allow_unicode=True)