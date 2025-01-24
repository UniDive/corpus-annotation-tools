const jsonUrl = 'https://raw.githubusercontent.com/UniDive/corpus-annotation-tools/main/data/latest_export.json';

let activeTools = [];
let filteredTools = [];

let selectedCells = []; // Map to track selected cells and their elements
// let selectedCells = new Map(); // Map to track selected cells and their elements

// Helper function to toggle selection
const toggleCellSelection = (item, group, feature, value) => {

    filteredTools = [];

	item.classList.add('highlight')
    selectedCells.push([`${group}::${feature}`, value])
    console.log(selectedCells);

	activeTools.forEach(tool => {
		// const toolvalue = tool[`${group}::${feature}`]

        let includetool = true;

        selectedCells.forEach(([feat, val]) => {
            toolvalue = tool[feat];
            console.log(feat)
            console.log(toolvalue)
            if (Array.isArray(toolvalue)){
                if (!toolvalue.includes(val)) includetool = false;
            } else {
                if (toolvalue!=val) includetool = false
            }
        });

        if (includetool) {
            filteredTools.push(tool);
        } else {
            console.log(tool["Tool ID::Tool name"])
            tooldiv = document.querySelectorAll(`[data-value="${tool["Tool ID::Tool name"]}"`)[0]
            tooldiv.classList.add("grayed-out")
        }
    });

    //     if (Array.isArray(toolvalue)){

    //         const allIncluded = selectedCells.every(feat, val => {
    //             if (feat===feature) toolvalue.includes(val);
    //             });

	// 		if (allIncluded){
	// 			filteredTools.push(tool)
	// 		}

	// 	} else {
    //         const allIncluded = selectedCells.every(feat, val => (feat === )
    //             if (feat===feature) toolvalue==val);
    //             });

	// 		if (value == toolvalue) {
	// 			filteredTools.push(tool)
	// 		}
	// 	}
    // });
    console.log(filteredTools)

	updateTableCounts(filteredTools);
};


const toggleCardSelection = (card_id, card_index) => {

    resetPage();

    card = document.querySelectorAll(`[data-value="${card_id}"]`)[0]
    card.classList.add("highlight")

    othercards = document.querySelectorAll("div.card")

    othercards.forEach(othercard => {

        if (othercard.getAttribute("data-value") != card_id) {
            othercard.classList.add("grayed-out")
        }
    });

    tool = activeTools[card_index];

    Object.entries(tool).forEach(([key, value]) => {
        const [curr_group, curr_feature] = key.split('::');

        if (Array.isArray(value)) {
            value.forEach(val => {
                document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${val}"][data-type='value']`).forEach(cell => {
                    if (cell.textContent.trim() === val) {
                        cell.classList.add('highlight');
                    }
                });
            });
        } else {
            document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${value}"][data-type='value']`).forEach(cell => {
                if (cell.textContent.trim() === value) {
                    cell.classList.add('highlight');
                }
            });
        }
    });



}

// Function to update counts for the table
const updateTableCounts = (toolslist) => {

    const groups = {};
    activeTools.forEach(tool => {
        Object.keys(tool).forEach(key => {
            const [group, feature] = key.split('::');
            if (!groups[group]) groups[group] = [];
            if (!groups[group].includes(feature)) groups[group].push(feature);
        });
    });

    Object.keys(groups).forEach(group => {
        groups[group].forEach(feature => {
			const valueCounts = {};
            toolslist.forEach(tool => {
                const values = Array.isArray(tool[`${group}::${feature}`]) ? tool[`${group}::${feature}`] : [tool[`${group}::${feature}`]];
                values.forEach(value => {
                    if (value) valueCounts[value] = (valueCounts[value] || 0) + 1;
                });
            });

			countCells = document.querySelectorAll(`[data-feature="${feature}"][data-type='count']`)
            // itemCells =

			countCells.forEach(countCell => {
				cellvalue = countCell.getAttribute("data-value");

                if (cellvalue in valueCounts){
					countCell.textContent = `(${valueCounts[cellvalue]})`
				} else {
                    itemCell = document.querySelectorAll(`[data-feature="${feature}"][data-value="${cellvalue}"][data-type='value']`)[0]
                    countCell.classList.add("grayed-out");
                    itemCell.classList.add("grayed-out");
					countCell.textContent = `(0)`
				}
			});
		});
	});

};

const resetPage = () => {
    filteredTools = [];
    selectedCells = [];
    // selectedCells.forEach((cell) => cell.classList.remove('selected'));
    // selectedCells;
    renderSidebar();
    renderTable();
};

const renderSidebar = (highlightedValues = []) => {
    sidebar.innerHTML = '';

    activeTools.forEach((tool, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.setAttribute("data-value", tool["Tool ID::Tool name"])

        const isRelevant = highlightedValues.every(value => {
            return Object.values(tool).some(val => {
                if (Array.isArray(val)) {
                    return val.includes(value);
                }
                return val === value;
            });
        });

        if (!isRelevant && highlightedValues.length > 0) {
            card.classList.add('grayed-out');
        }

        if (tool["Tool ID::Logo"]) {
            const logo = document.createElement('img');
            logo.src = tool["Tool ID::Logo"];
            logo.alt = `${tool["Tool ID::Tool name"]} Logo`;
            card.appendChild(logo);
        }

        const name = document.createElement('h3');
        const link = document.createElement('a');
        link.href = tool["Tool ID::Website"];
        link.textContent = tool["Tool ID::Tool name"];
        link.style.color = 'inherit';
        name.appendChild(link);
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = tool["Tool ID::Short description"];
        card.appendChild(description);

        const highlightBtn = document.createElement('button');
        highlightBtn.className = 'highlight-btn';
        highlightBtn.textContent = 'Highlight in Table';
        highlightBtn.dataset.index = index;
        highlightBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = highlightBtn.dataset.index;
        const tool = activeTools[index];

        document.querySelectorAll('.highlight').forEach(cell => cell.classList.remove('highlight'));

        Object.entries(tool).forEach(([key, value]) => {
            const [curr_group, curr_feature] = key.split('::');
            if (Array.isArray(value)) {
                value.forEach(val => {
                    document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${val}"][data-type='value']`).forEach(cell => {
                        if (cell.textContent.trim() === val) {
                            cell.classList.add('highlight');
                        }
                    });
                });
            } else {
                document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${value}"][data-type='value']`).forEach(cell => {
                    if (cell.textContent.trim() === value) {
                        cell.classList.add('highlight');
                    }
                });
            }
        });
        });
        card.appendChild(highlightBtn);

        const plus = document.createElement('button');
        plus.className = 'plus';
        plus.setAttribute('aria-label', 'Expand details');
        plus.textContent = '+';
        plus.addEventListener('click', (event) => {
            event.stopPropagation();
            const details = card.querySelector('.details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
        plus.style.visibility = 'hidden';
        card.appendChild(plus);

        let additionalInfo = false;

        const details = document.createElement('div');
        details.className = 'details';
        details.style.display = 'none';

        Object.keys(tool).forEach(key => {
            if (key.startsWith('Tool ID::')) {
                if (key === "Tool ID::Respondent involved in development" && tool[key] === "Yes") {
                    const detail = document.createElement('p');
                    detail.innerHTML = `Data provided by tool developers`;
                    details.appendChild(detail);
                    additionalInfo = true;
                }

                if (key === "Tool ID::Code repository" && tool[key]) {
                    const detail = document.createElement('p');
                    const link = document.createElement('a');
                    link.href = tool[key];
                    link.textContent = "Code repository";
                    link.style.color = 'inherit';
                    detail.appendChild(link);
                    details.appendChild(detail);
                    additionalInfo = true;
                }

                if (key === "Tool ID::Additional features" && tool[key]) {
                    const detail = document.createElement('p');
                    detail.innerHTML = tool[key];
                    details.appendChild(detail);
                    additionalInfo = true;
                }
            }

            if (additionalInfo) {
                plus.style.visibility = "visible";
            }
        });

        card.appendChild(details);
        sidebar.appendChild(card);

        card.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleCardSelection(tool["Tool ID::Tool name"], index);
        });

    });
};

const renderTable = () => {
    pivotTableBody.innerHTML = '';
    const groups = {};
    activeTools.forEach(tool => {
        Object.keys(tool).forEach(key => {
            const [group, feature] = key.split('::');
            if (!groups[group]) groups[group] = [];
            if (!groups[group].includes(feature)) groups[group].push(feature);
        });
    });

    Object.keys(groups).forEach(group => {
        if (group === "Tool ID") return; // Exclude "Tool ID" group

        const groupRow = document.createElement('tr');
        groupRow.className = 'group';
        const groupCell = document.createElement('td');
        groupCell.colSpan = 2;
        groupCell.textContent = group;
        groupRow.appendChild(groupCell);
        pivotTableBody.appendChild(groupRow);

        groups[group].forEach(feature => {
            const featureRow = document.createElement('tr');
            const featureCell = document.createElement('td');
            const valueCell = document.createElement('td');

            featureCell.textContent = feature;

            const valueCounts = {};
            activeTools.forEach(tool => {
                const values = Array.isArray(tool[`${group}::${feature}`]) ? tool[`${group}::${feature}`] : [tool[`${group}::${feature}`]];
                values.forEach(value => {
                    if (value) valueCounts[value] = (valueCounts[value] || 0) + 1;
                });
            });

            const cellContent = document.createElement('table');
            let row = null;
            Object.entries(valueCounts).forEach(([value, count], index) => {
                if (index % 2 === 0) {
                    row = document.createElement('tr');
                    cellContent.appendChild(row);
                }
                const itemCell = document.createElement('td');
                const countCell = document.createElement('td');
                itemCell.setAttribute("data-category", group)
                itemCell.setAttribute("data-feature", feature)
                itemCell.setAttribute("data-value", value)
                itemCell.setAttribute("data-type", "value")
                itemCell.classList.add("value")

                countCell.setAttribute("data-category", group)
                countCell.setAttribute("data-feature", feature)
                countCell.setAttribute("data-value", value)
                countCell.setAttribute("data-type", "count")
                itemCell.textContent = value;
                countCell.textContent = `(${count})`;
                row.appendChild(itemCell);
                row.appendChild(countCell);

                // if (selectedCells.has(value)) {
                //     itemCell.classList.add('selected');
                // }

                itemCell.addEventListener('click', () => {
                    toggleCellSelection(itemCell, group, feature, value);
                });
            });

            valueCell.appendChild(cellContent);
            featureRow.appendChild(featureCell);
            featureRow.appendChild(valueCell);
            pivotTableBody.appendChild(featureRow);
        });
    });
};

let sidebar;
let pivotTableBody;

// ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    sidebar = document.querySelector('.sidebar');
    pivotTableBody = document.querySelector('.pivot-table tbody');

    const loadJsonData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    };


    loadJsonData(jsonUrl).then(data => {
        if (data) {
            activeTools = [...data];
            renderSidebar();
            renderTable();
        }
    });

    document.querySelector('.reset-btn').addEventListener('click', resetPage);
});

