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

			elif name in ["Operating system", "6. Software access", "1. Input format", "3. Integration of other resources", "2. Data export", "Diversity features", "5. Language of the interface", "3. Segmentation", "1. Annotation types", "2. Annotation scope", "2. Annotation mode", "1. Annotation display", "3. Collaborative annotation", "1. UD-specific annotations", "Other Annotation layers", "1. PARSEME-specific annotations"]:
				out_dict[prefix][name] = [x.strip() for x in row[field].split(",") if x.strip()]

			else:
				out_dict[prefix][name] = row[field]

		yaml.dump(out_dict, open(f"../tools/{out_dict['Tool ID']['Tool name']}.yml", "w"), allow_unicode=True)