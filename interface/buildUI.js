const jsonUrl = 'https://raw.githubusercontent.com/ellepannitto/corpus-annotation-tools/refs/heads/main/data/latest_export.json';
let tools = [];
let tools_dict = {};
let current_selection = {};
let current_tool;
let active_selection = false;

let excluded_filters = ["Other annotation layers"];

function filterTools (){
    // Find matching tools
    const matchingTools = tools.filter(tool => {
        let match = true;
        Object.entries(current_selection).forEach(([feature, questionDict]) => {
            Object.entries(questionDict).forEach(([question, values]) => {
                // Collect all selected values for this question
                const selectedValues = Object.entries(values)
                    .filter(([_, isSelected]) => isSelected)
                    .map(([value]) => value);

				if (selectedValues.length > 0) {
					const key = `${feature}::${question}`;
					let toolValues = [];
					if (Array.isArray(tool[key])) {
						toolValues = tool[key];
					} else if (tool[key]) {
						toolValues = [tool[key]];
					}
					// Tool matches if it has ANY of the selected values
					const hasAny = selectedValues.some(val => toolValues.includes(val));
					if (!hasAny) {
						match = false;
					}
				}
            });
        });
        return match;
    });

    // Reorder cards: matching first, others after
    const toolsContainer = document.querySelector('.tools');
    const allCards = Array.from(toolsContainer.querySelectorAll('.card'));
    allCards.forEach(card => {
        card.classList.remove('filtered');
        card.classList.remove('disabled');
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
    });

    allCards.forEach(card => {
        const toolName = card.dataset.value;
        const isMatch = matchingTools.some(t => t["Tool ID::Tool name"] === toolName);
        if (isMatch) {
            card.classList.add('filtered');
            card.style.order = 0;
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
        } else {
            card.classList.remove('filtered');
            card.style.order = 1;
            card.style.opacity = '0.4';
            // card.style.pointerEvents = 'none';
        }
    });
    return matchingTools;
}

function updateFeatures(matchingTools) {

    // Update counts and value states
    document.querySelectorAll('.feature-question').forEach(featureQuestion => {
        const featureCat = featureQuestion.querySelector('.value')?.getAttribute('data-category');
        const questionName = featureQuestion.querySelector('.value')?.getAttribute('data-feature');
        if (!featureCat || !questionName) return;

        // Recalculate counts for this question
        const valueCounts = {};
        matchingTools.forEach(tool => {
            const key = `${featureCat}::${questionName}`;
            let vals = [];
            if (Array.isArray(tool[key])) {
                vals = tool[key];
            } else if (tool[key]) {
                vals = [tool[key]];
            }
            vals.forEach(v => {
                if (v && v.trim() !== "") {
                    valueCounts[v] = (valueCounts[v] || 0) + 1;
                }
            });
        });

        // Update UI for each value/count pair
        featureQuestion.querySelectorAll('span').forEach(pairSpan => {
            const valueElem = pairSpan.querySelector('.value');
            const countElem = pairSpan.querySelector('.count');
            if (!valueElem || !countElem) return;
            const val = valueElem.getAttribute('data-value');
            const overall_count = valueElem.getAttribute('overall-count');
            const current_count = valueCounts[val] || 0;

            valueElem.setAttribute('current-count', current_count);
            countElem.textContent = `${current_count}/${overall_count}`;

			if (current_selection[featureCat][questionName][val]) {
				valueElem.classList.add('selected');
				valueElem.classList.remove('disabled');
			} else {
				valueElem.classList.add('disabled');
                valueElem.classList.remove('selected');
			}
        });
    });


}

function highlightCardFeatures(tool) {
    // Remove previous highlights
    document.querySelectorAll('.feature-question .value').forEach(valueElem => {
        valueElem.classList.remove('card-highlight');
    });

    // Find the tool object
    if (!tool) return;

    Object.entries(tool).forEach(([key, value]) => {
        if (!key.startsWith('Tool ID::')) {
            const [prefix, question] = key.split('::');
            let values = Array.isArray(value) ? value : [value];
            values.forEach(val => {
                if (val && val.trim() !== "") {
                    // Highlight the relevant value
                    document.querySelectorAll(
                        `.feature-question .value[data-category="${prefix}"][data-feature="${question}"][data-value="${val}"]`
                    ).forEach(elem => {
                        elem.classList.add('card-highlight');
                    });
                }
            });
        }
    });
}

function removeCardHighlights() {
    document.querySelectorAll('.feature-question .value').forEach(valueElem => {
        valueElem.classList.remove('card-highlight');
    });
}

function highlightFeatures() {
    expandAllFeatureSections();
    const expandedCard = document.querySelector('.card.expanded');
    if (!expandedCard) return;

    const toolName = expandedCard.dataset.value;
    const tool = tools.find(t => t["Tool ID::Tool name"] === toolName);
    if (!tool) return;

    Object.entries(tool).forEach(([key, value]) => {
        if (!key.startsWith('Tool ID::')) {
            const [prefix, question] = key.split('::');
            let values = Array.isArray(value) ? value : [value];
            values.forEach(val => {
                if (val && val.trim() !== "") {
                    current_selection[prefix][question][val] = true;
                }
            });
        }
    });

    let matchingTools = filterTools();
    updateFeatures(matchingTools);
}

function expandAllFeatureSections() {
    document.querySelectorAll('.feature-section').forEach(section => {
        section.classList.remove('collapsed');
    });
}

function collapse() {
    document.querySelectorAll('.card.expanded').forEach(card => {
        card.classList.remove('expanded');
        // Hide image and details
        const img = card.querySelector('img');
        if (img) img.style.display = 'none';
        const details = card.querySelector('.details');
        if (details) details.style.display = 'none';
    });

	document.querySelectorAll('.feature-question span').forEach(pairSpan => {
        pairSpan.style.display = 'inline-flex';
    });
}

function populateViz(tool) {
    // console.log(tool);
    const toolsVisualization = document.querySelector('.tools-viz');
    toolsVisualization.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'card-header';

    // Title
    const h3 = document.createElement('h3');
    const link = document.createElement('a');
    link.href = tool["Tool ID::Website"];
    link.target = "_blank";
    link.textContent = tool["Tool ID::Tool name"];
    h3.appendChild(link);
    header.appendChild(h3);

    // Logo
    if (tool["Tool ID::Logo"]) {
        const img = document.createElement('img');
        img.src = tool["Tool ID::Logo"];
        img.alt = `${tool["Tool ID::Tool name"]} Logo`;
        // img.style.display = 'none';
        header.appendChild(img);
    }



    toolsVisualization.appendChild(header);

    const shortDesc = document.createElement("div");
    shortDesc.className = "short-description";

    if (tool['Tool ID::Code repository'] !== '') {
        const form = document.createElement('form');
        form.action = tool['Tool ID::Code repository'];
        form.method = "get";
        form.target = "_blank";
        const repository = document.createElement('button');
        repository.className = 'repo';
        repository.setAttribute('aria-label', 'Code repository');
        repository.textContent = "Code repository"
        form.appendChild(repository)
        shortDesc.appendChild(form);
    }

    const description = document.createElement("p");
    description.innerHTML = `${tool["Tool ID::Short description"] || ''}`;
    shortDesc.appendChild(description);
    toolsVisualization.appendChild(shortDesc);

    // Details
    const details = document.createElement('div');
    details.className = 'details';

    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';




    const add_features = document.createElement("p");
    if (tool["Tool ID::Information provider"] == 'Developer') {
        add_features.innerHTML = `${tool["Tool ID::Additional features"] || ""}. Information provided by tool developer.`;
    } else {
        add_features.innerHTML = `${tool["Tool ID::Additional features"] || ""}.`
    }
    infoBox.appendChild(add_features);

    // Useful links
    if (tool["Tool ID::Other useful links"] && Array.isArray(tool["Tool ID::Other useful links"])) {
        const projectsSection = document.createElement('div');
        projectsSection.className = 'example-projects';
        projectsSection.innerHTML = '<h4>Other useful links</h4>';
        tool["Tool ID::Other useful links"].forEach((tool_link) => {
            Object.entries(tool_link).forEach(([link_key, link_ref]) => {
                // console.log(link_key, link_ref);
                const linkElem = document.createElement('a');
                linkElem.href = link_ref;
                linkElem.textContent = link_key;
                linkElem.target = '_blank';
                projectsSection.appendChild(linkElem);
            });
        });
        infoBox.appendChild(projectsSection);
    }

    if (tool["Tool ID::Example projects"] && Array.isArray(tool["Tool ID::Example projects"])) {
        const projectsSection = document.createElement('div');
        projectsSection.className = 'example-projects';
        projectsSection.innerHTML = '<h4>Example projects</h4>';

        tool["Tool ID::Example projects"].forEach((tool_link) => {
            Object.entries(tool_link).forEach(([link_key, link_ref]) => {
                // console.log(link_key, link_ref);
                const linkElem = document.createElement('a');
                linkElem.href = link_ref;
                linkElem.textContent = link_key;
                linkElem.target = '_blank';
                projectsSection.appendChild(linkElem);
            });
        });
        infoBox.appendChild(projectsSection);
    }
    details.appendChild(infoBox);
    // toolsVisualization.appendChild(details);

    // Info box with features (right side of card)
    const featuresBox = document.createElement('div');
    featuresBox.className = 'features-box';
    // featuresBox.style.flexDirection = 'column';
    // featuresBox.style.alignItems = 'flex-end';

    Object.entries(tool).forEach(([key, value]) => {
        if (!key.startsWith('Tool ID::')) {
            const [prefix, question] = key.split('::');
            if (!question) return;
            // Create a container for value/count pairs
            const featureRow = document.createElement('div');
            featureRow.style.display = 'flex';
            featureRow.style.flexWrap = 'wrap';
    //         // featureRow.style.marginBottom = '4px';

            // Handle array or single value
            let values = Array.isArray(value) ? value : [value];
            values.forEach(val => {
                if (val && val.trim() !== "") {
                    const pairSpan = document.createElement('span');
                    pairSpan.style.display = 'inline-flex';
                    pairSpan.style.alignItems = 'center';

                    const valueP = document.createElement('p');
                    valueP.className = 'tool-value';
                    valueP.textContent = val;

                    pairSpan.appendChild(valueP);
                    featureRow.appendChild(pairSpan);
                }
            });

            // Add question label and values
            if (featureRow.childNodes.length > 0) {
                const label = document.createElement('p');
                label.classList.add("tool-question")
                label.textContent = `${question}: `;
                // label.style.fontWeight = 'bold';
                // label.style.marginRight = '6px';
                featureRow.insertBefore(label, featureRow.firstChild);
                featuresBox.appendChild(featureRow);
            }
        }
    });
    details.appendChild(featuresBox);
    // details.appendChild(infoBox);

    toolsVisualization.appendChild(details);

}

function buildTools() {

    const toolsContainer = document.querySelector('.tools');
    toolsContainer.innerHTML = '';

    const toolsVisualization = document.querySelector('.tools-viz');
    toolsVisualization.innerHTML = '';

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.value = tool["Tool ID::Tool name"];

        // Card header
        const header = document.createElement('div');
        header.className = 'card-header';

        // Title
        const h3 = document.createElement('h3');
        h3.textContent = tool["Tool ID::Tool name"];
        // const link = document.createElement('a');
        // link.href = tool["Tool ID::Website"];
        // link.target = "_blank";
        // link.textContent = tool["Tool ID::Tool name"];
        // link.style.color = 'inherit';
        // h3.appendChild(link);
        header.appendChild(h3);

        // Plus/minus buttons
        const plus = document.createElement('button');
        plus.className = 'plus';
        plus.setAttribute('aria-label', 'Expand details');
        plus.textContent = '+';
        header.appendChild(plus);

        const minus = document.createElement('button');
        minus.className = 'minus';
        minus.setAttribute('aria-label', 'Collapse details');
        minus.textContent = '−';
        // minus.style.display = 'none';
        header.appendChild(minus);

		plus.addEventListener('click', function(e) {

            // active_selection = true;
            // console.log(e);
			e.stopPropagation();
			collapse();
            highlightCardFeatures(tool); // highlight relevant features
            populateViz(tool);

            let button_plus = card.querySelector('.plus');
            let button_minus = card.querySelector('.minus');
            button_plus.style.display = 'none';
            button_minus.style.display = 'inline-flex';

            let cards = document.querySelectorAll(".card");
            cards.forEach(other_card => {

                if (other_card.getAttribute('data-value') !== card.getAttribute('data-value'))  {
                    let button_plus = other_card.querySelector('.plus');
                    let button_minus = other_card.querySelector('.minus');
                    button_plus.style.display = 'inline-flex';
                    button_minus.style.display = 'none';
                }
            })

		});

		minus.addEventListener('click', function(e) {
            // active_selection = false;
			e.stopPropagation();
			removeCardHighlights(); // remove highlights
            toolsVisualization.innerHTML = '';

            let button_plus = card.querySelector('.plus');
            let button_minus = card.querySelector('.minus');
            button_plus.style.display = 'inline-flex';
            button_minus.style.display = 'none';

            // let cards = document.querySelectorAll(".card");
            // cards.forEach(other_card => {

            //     if (other_card.getAttribute('data-value') !== card.getAttribute('data-value'))  {
            //         let button_plus = other_card.querySelector('.plus');
            //         let button_minus = other_card.querySelector('.minus');
            //         button_plus.style.display = 'none';
            //         button_minus.style.display = 'inline-flex';
            //     }
            // })
		});

        card.addEventListener('mouseover', function(e) {
            // console.log(card);
			e.stopPropagation();
            let button = card.querySelector('.plus');
            // console.log(button);
            button.classList.add("orange-plus");
            // console.log(button);
		});

        card.addEventListener('mouseout', function(e) {
            // console.log(card);
			e.stopPropagation();
            let button = card.querySelector('.plus');
            // console.log(button);
            button.classList.remove("orange-plus");
            // console.log(button);
		});

        card.appendChild(header);

        toolsContainer.appendChild(card);
    });
}

function buildSelections() {
	const questionValues = {};   // { prefix: { question: Set of values } }
	const questionValues_counts = {};

	tools.forEach(tool => {
		Object.entries(tool).forEach(([key, value]) => {
			const [prefix, question] = key.split('::');
			if (prefix !== 'Tool ID' && question && !excluded_filters.includes(question)) {

				// Collect values for each question
				if (!questionValues[prefix]){
					questionValues[prefix] = {};
					questionValues_counts[prefix] = {};
					current_selection[prefix] = {};
				}

				if (!questionValues[prefix][question]) {
					questionValues[prefix][question] = new Set();
					questionValues_counts[prefix][question] = {};
					current_selection[prefix][question] = {};
				}

				// Handle array or single value
				if (Array.isArray(value)) {
					value.forEach(v => {
						if (v && v.trim() !== ""){
							questionValues[prefix][question].add(v);
							if (!questionValues_counts[prefix][question][v]) {
								questionValues_counts[prefix][question][v] = 0;
								current_selection[prefix][question][v] = false;
							}
							questionValues_counts[prefix][question][v] += 1;
						}
					});
				} else if (value && value.trim() !== "") {
					questionValues[prefix][question].add(value);
					if (!questionValues_counts[prefix][question][value]) {
						questionValues_counts[prefix][question][value] = 0;
						current_selection[prefix][question][value] = false;
					}
					questionValues_counts[prefix][question][value] += 1;
				}
			}
		});
	});

    const featuresTable = document.querySelector('.features-table');
    featuresTable.innerHTML = '';

	Object.entries(questionValues_counts).forEach(([feature, ValueSet])=> {

		const featureSection = document.createElement('div');
		featureSection.className = 'feature-section';
		featureSection.classList.add('collapsed');
		featureSection.innerHTML = `<h3>${feature || '#'} <span class="toggle-arrow">&#9662;</span></h3>`;

		Object.entries(ValueSet).forEach(([question, values]) => {
			const featureQuestion = document.createElement('div');
			featureQuestion.className = 'feature-question';
			featureQuestion.innerHTML = `<h4>${question}</h4>`;

			Object.entries(values).forEach(([value, count]) => {
				const pairSpan = document.createElement('span');
				pairSpan.style.display = 'inline-flex';
				pairSpan.style.alignItems = 'center';
				pairSpan.style.marginRight = '8px';

				const valueP = document.createElement('p');
				valueP.className = 'value';
				valueP.setAttribute('data-category', feature);
				valueP.setAttribute('data-feature', question);
				valueP.setAttribute('data-value', value);
				valueP.setAttribute('data-type', 'value');
				valueP.setAttribute('overall-count', count);
				valueP.setAttribute('current-count', count);
				valueP.textContent = value;
				valueP.classList.add('disabled')

				const countP = document.createElement('p');
				countP.className = 'count';
				countP.setAttribute('data-category', feature);
				countP.setAttribute('data-feature', question);
				countP.setAttribute('data-value', value);
				countP.setAttribute('data-type', 'count');
				countP.textContent = count;

				pairSpan.appendChild(valueP);
				pairSpan.appendChild(countP);
				featureQuestion.appendChild(pairSpan);
			});
			featureSection.appendChild(featureQuestion);
		});
		featuresTable.appendChild(featureSection);
	});

	document.querySelectorAll('.feature-section h3').forEach(header => {
		header.addEventListener('click', function() {
			const section = header.parentElement;
			section.classList.toggle('collapsed');
		});
	});


	document.querySelectorAll('.feature-question .value').forEach(function(valueElem) {
		valueElem.addEventListener('click', function() {
			const feature = valueElem.getAttribute('data-category');
			const question = valueElem.getAttribute('data-feature');
			const value = valueElem.getAttribute('data-value');

			// Toggle selection regardless of current state
			current_selection[feature][question][value] = !current_selection[feature][question][value];
			// console.log(current_selection[feature][question][value]);

			let matchingTools = filterTools();
			updateFeatures(matchingTools);
		});
	});


}

async function buildUI() {
	// Load the JSON data
    const response = await fetch(jsonUrl);
	tools = await response.json()

	buildTools();
	buildSelections();
}

// ON LOAD
document.addEventListener("DOMContentLoaded", () => {
	buildUI();

	// Collapse expanded card when clicking outside
	document.querySelectorAll(".sidebar")[0].addEventListener('click', function(e) {
		const expandedCard = document.querySelector('.card.expanded');
		if (expandedCard && !expandedCard.contains(e.target)) {
			collapse();
		}
	});

	document.querySelector('.reset-btn').addEventListener('click', buildUI);

});

