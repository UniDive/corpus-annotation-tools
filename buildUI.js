const jsonUrl = 'https://raw.githubusercontent.com/UniDive/corpus-annotation-tools/main/data/latest_export.json';
let tools = [];
let tools_dict = {};
let current_selection = {};

function filterTools (){

	console.log(current_selection);
    // Find matching tools
    const matchingTools = tools.filter(tool => {

		match = true;

		Object.entries(current_selection).forEach(([feature, questionDict]) => {
			Object.entries(questionDict).forEach(([question, values]) => {
				Object.entries(values).forEach(([value, boolean]) => {
					if (boolean) {
						const key = `${feature}::${question}`;
						console.log(key);
						console.log(tool[key]);
						if (Array.isArray(tool[key])) {
							if (!tool[key].includes(value)){
								match=false;
							}
						} else if (tool[key] !== value){
							match = false;
						}
					}
				});
			});
		});

		console.log(tool);
		console.log(match);

		return match
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
            card.style.pointerEvents = 'none';
        }
    });

    // Update counts for all values in the UI
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
            const count = valueCounts[val] || 0;
            countElem.textContent = count;
            if (count === 0) {
                valueElem.classList.add('disabled');
                valueElem.style.pointerEvents = 'none';
                pairSpan.style.opacity = '0.5';
            } else {
                valueElem.classList.remove('disabled');
                valueElem.style.pointerEvents = 'auto';
                pairSpan.style.opacity = '1';
            }
        });
    });

}

function filterToolsByValue(feature, question, value) {
	console.log(feature, question, value);
	console.log(current_selection[feature][question][value]);
	current_selection[feature][question][value] = !current_selection[feature][question][value]
	console.log(current_selection[feature][question][value]);
	filterTools();
}

function highlightFeatures() {
	expandAllFeatureSections();
    const expandedCard = document.querySelector('.card.expanded');
    if (!expandedCard) return;

    const toolName = expandedCard.dataset.value;
    const tool = tools.find(t => t["Tool ID::Tool name"] === toolName);
    if (!tool) return;

    document.querySelectorAll('.feature-question').forEach(featureQuestion => {
        const firstValue = featureQuestion.querySelector('.value');
        if (!firstValue) return;
        const feature = firstValue.getAttribute('data-category');
        const question = firstValue.getAttribute('data-feature');
        const key = `${feature}::${question}`;

        let relevantValues = [];
        if (Array.isArray(tool[key])) {
            relevantValues = tool[key].map(v => v && v.trim()).filter(Boolean);
        } else if (tool[key] && tool[key].trim() !== "") {
            relevantValues = [tool[key].trim()];
        }

        // Show only relevant value/count pairs
        featureQuestion.querySelectorAll('span').forEach(pairSpan => {
            const valueElem = pairSpan.querySelector('.value');
            if (!valueElem) return;
            const value = valueElem.getAttribute('data-value');
            if (relevantValues.includes(value)) {
                pairSpan.style.display = 'inline-flex';
            } else {
                pairSpan.style.display = 'none';
            }
        });
    });
}

function expandAllFeatureSections() {
    document.querySelectorAll('.feature-section').forEach(section => {
        section.classList.remove('collapsed');
    });
}

function collapse() {
	console.log("now here");
    document.querySelectorAll('.card.expanded').forEach(card => {
        card.classList.remove('expanded');
        // Hide image and details
        const img = card.querySelector('img');
        if (img) img.style.display = 'none';
        const details = card.querySelector('.details');
        if (details) details.style.display = 'none';
    });

	console.log("collapsing");
	document.querySelectorAll('.feature-question span').forEach(pairSpan => {
		// console.log(pairSpan);
        pairSpan.style.display = 'inline-flex';
    });
}

function buildTools() {

    const toolsContainer = document.querySelector('.tools');
    toolsContainer.innerHTML = '';

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.value = tool["Tool ID::Tool name"];

        // Card header
        const header = document.createElement('div');
        header.className = 'card-header';

        // Logo
        if (tool["Tool ID::Logo"]) {
            const img = document.createElement('img');
            img.src = tool["Tool ID::Logo"];
            img.alt = `${tool["Tool ID::Tool name"]} Logo`;
            img.style.display = 'none';
            header.appendChild(img);
        }

        // Title
        const h3 = document.createElement('h3');
        const link = document.createElement('a');
        link.href = tool["Tool ID::Website"];
        link.textContent = tool["Tool ID::Tool name"];
        link.style.color = 'inherit';
        h3.appendChild(link);
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
			e.stopPropagation();
			collapse();
			card.classList.add('expanded');
			highlightFeatures();
			// Show image and details
			const img = card.querySelector('img');
			if (img) img.style.display = 'block';
			const details = card.querySelector('.details');
			if (details) details.style.display = 'block';
		});

		minus.addEventListener('click', function(e) {
			e.stopPropagation();
			card.classList.remove('expanded');
			// Hide image and details
			const img = card.querySelector('img');
			if (img) img.style.display = 'none';
			const details = card.querySelector('.details');
			if (details) details.style.display = 'none';
		});

        card.appendChild(header);

        // Card preview
        const preview = document.createElement('div');
        preview.className = 'card-preview';
        preview.innerHTML = `<p>${tool["Tool ID::Short description"] || ''}</p>`;
        card.appendChild(preview);

        // Details
        const details = document.createElement('div');
        details.className = 'details';
        details.style.display = 'none';
        details.innerHTML = `
            <p><a href="${tool["Tool ID::Code repository"] || '#'}" style="color: inherit;">Code repository</a></p>
            <p>${tool["Tool ID::Additional features"] || ''}</p>
        `;
        card.appendChild(details);

        toolsContainer.appendChild(card);
    });
}

function buildSelections() {
	// const featurePrefixes = new Set();
	// const featureQuestions = {}; // { prefix: Set of questions }
	const questionValues = {};   // { prefix: { question: Set of values } }
	const questionValues_counts = {};

	tools.forEach(tool => {
		Object.entries(tool).forEach(([key, value]) => {
			const [prefix, question] = key.split('::');
			if (prefix !== 'Tool ID' && question) {

				// featurePrefixes.add(prefix);

				// Collect questions for each prefix
				// if (!featureQuestions[prefix]) featureQuestions[prefix] = new Set();
				// featureQuestions[prefix].add(question);

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

	// console.log(questionValues_counts);
    const featuresTable = document.querySelector('.features-table');
    featuresTable.innerHTML = '';

	Object.entries(questionValues_counts).forEach(([feature, ValueSet])=> {
		// console.log(`Building ${feature}`);

		const featureSection = document.createElement('div');
		featureSection.className = 'feature-section';
		featureSection.innerHTML = `<h3>${feature || '#'} <span class="toggle-arrow">&#9662;</span></h3>`;

		Object.entries(ValueSet).forEach(([question, values]) => {
			// console.log(`Building ${question}`);

			const featureQuestion = document.createElement('div');
			featureQuestion.className = 'feature-question';
			featureQuestion.innerHTML = `<h4>${question}</h4>`;

			Object.entries(values).forEach(([value, count]) => {
				// console.log(`Building ${value}-${count}`);

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
				valueP.textContent = value;

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
				// console.log(`Adding ${value}-${count} to ${featureQuestion}`);

			});
			featureSection.appendChild(featureQuestion);
			// console.log(`Adding ${featureQuestion} to ${featureSection}`);

		});
		featuresTable.appendChild(featureSection);
		// console.log(`Adding ${featureSection} to ${featuresTable}`);
	});

	document.querySelectorAll('.feature-section h3').forEach(header => {
		header.addEventListener('click', function() {
			const section = header.parentElement;
			section.classList.toggle('collapsed');
		});
	});

	document.querySelectorAll('.feature-question .value').forEach(function(valueElem) {
		valueElem.addEventListener('click', function() {
			if (valueElem.classList.contains('disabled')) return;
			const feature = valueElem.getAttribute('data-category');
			const question = valueElem.getAttribute('data-feature');
			const value = valueElem.getAttribute('data-value');
			filterToolsByValue(feature, question, value);
		});
	});

	document.querySelectorAll('.feature-question .value').forEach(function(valueElem) {
		// Find the next sibling count element
		const countElem = valueElem.nextElementSibling;
		if (countElem && countElem.classList.contains('count')) {
			const count = parseInt(countElem.textContent, 10);
			if (count === 0) {
				valueElem.classList.add('disabled');
			} else {
				valueElem.addEventListener('click', function() {
					if (valueElem.classList.contains('disabled')) return;
					const feature = valueElem.getAttribute('data-category');
					const question = valueElem.getAttribute('data-feature');
					const value = valueElem.getAttribute('data-value');
					// filterToolsByValue(feature, question, value);
				});
			}
		}
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
			// console.log("here");
			// e.stopPropagation();
			collapse();
		}
	});

	document.querySelector('.reset-btn').addEventListener('click', buildUI);

});

