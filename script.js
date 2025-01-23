const jsonUrl = 'https://raw.githubusercontent.com/UniDive/corpus-annotation-tools/main/data/latest_export.json';

let activeTools = [];
let selectedCells = new Map(); // Map to track selected cells and their elements

// Helper function to toggle selection
const toggleCellSelection = (item, group, feature, value) => {

	item.classList.add('highlight')

	console.log(activeTools)
	const filteredTools = []
	activeTools.forEach(tool => {
		const toolvalue = tool[`${group}::${feature}`]
		console.log(toolvalue)
		if (Array.isArray(toolvalue)){

			if (toolvalue.includes(value)){
				filteredTools.push(tool)
			}

		} else {
			console.log(value == toolvalue)
			if (value == toolvalue) {
				filteredTools.push(tool)
			}
		}
    });
	console.log(filteredTools)

	updateTableCounts(filteredTools);

};

// Function to update counts for the table
const updateTableCounts = (toolslist) => {

    const pivotTableBody = document.querySelector('.pivot-table tbody');

    const groups = {};
    toolslist.forEach(tool => {
        Object.keys(tool).forEach(key => {
            const [group, feature] = key.split('::');
            if (!groups[group]) groups[group] = [];
            if (!groups[group].includes(feature)) groups[group].push(feature);
        });
    });

    Object.keys(groups).forEach(group => {
        if (group === "Tool ID") return;

        groups[group].forEach(feature => {
            const valueCounts = {};
            toolslist.forEach(tool => {
                const values = Array.isArray(tool[`${group}::${feature}`]) ? tool[`${group}::${feature}`] : [tool[`${group}::${feature}`]];
                values.forEach(value => {
                    if (value) valueCounts[value] = (valueCounts[value] || 0) + 1;
                });
            });

            const featureRows = Array.from(pivotTableBody.querySelectorAll('tr'));

            featureRows.forEach(row => {
                const featureCell = row.querySelector('td:first-child');
                if (featureCell && featureCell.textContent === feature) {
                    const valueCell = row.querySelector('td:last-child');
                    const cellContent = document.createElement('table');

                    Object.entries(valueCounts).forEach(([value, count]) => {
                        const itemRow = document.createElement('tr');
                        const itemCell = document.createElement('td');
                        const countCell = document.createElement('td');
						itemCell.setAttribute("data-category", group)
						itemCell.setAttribute("data-feature", feature)
						itemCell.setAttribute("data-value", value)

                        itemCell.textContent = value;
                        countCell.textContent = `(${count})`;

                        if (selectedCells.has(value)) {
                            itemCell.classList.add('selected');
                        }

                        itemCell.addEventListener('click', () => {
                            toggleCellSelection(itemCell, group, feature, value);
                        });

                        itemRow.appendChild(itemCell);
                        itemRow.appendChild(countCell);
                        cellContent.appendChild(itemRow);
                    });

                    valueCell.innerHTML = '';
                    valueCell.appendChild(cellContent);
                }
            });
        });
    });
};


// ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    const pivotTableBody = document.querySelector('.pivot-table tbody');

    const resetPage = () => {
        selectedCells.forEach((cell) => cell.classList.remove('selected'));
        selectedCells.clear();
        renderSidebar();
        renderTable();
    };

    const renderSidebar = (highlightedValues = []) => {
        sidebar.innerHTML = '';
        activeTools.forEach((tool, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;

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
            link.style.textDecoration = 'none';
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
            highlightBtn.addEventListener('click', () => {
                const index = highlightBtn.dataset.index;
            const tool = activeTools[index];

			document.querySelectorAll('.highlight').forEach(cell => cell.classList.remove('highlight'));

            Object.entries(tool).forEach(([key, value]) => {
				const [curr_group, curr_feature] = key.split('::');
                if (Array.isArray(value)) {
					console.log(value)
                    value.forEach(val => {
                        document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${val}"]`).forEach(cell => {
							console.log(cell)
                            if (cell.textContent.trim() === val) {
                                cell.classList.add('highlight');
                            }
                        });
                    });
                } else {
                    document.querySelectorAll(`[data-feature="${curr_feature}"][data-value="${value}"]`).forEach(cell => {
						console.log(cell)
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
            plus.addEventListener('click', () => {
                const details = card.querySelector('.details');
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            });
            card.appendChild(plus);

            const details = document.createElement('div');
            details.className = 'details';
            details.style.display = 'none';

            Object.keys(tool).forEach(key => {
                if (key.startsWith('Tool ID::') && !['Tool ID::Tool name', 'Tool ID::Short description', 'Tool ID::Website', 'Tool ID::Logo'].includes(key)) {
                    const detail = document.createElement('p');
                    detail.innerHTML = `<strong>${key.replace('Tool ID::', '')}:</strong> ${tool[key]}`;
                    details.appendChild(detail);
                }
            });

            card.appendChild(details);
            sidebar.appendChild(card);
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
				console.log(feature)
                const featureRow = document.createElement('tr');
                const featureCell = document.createElement('td');
                const valueCell = document.createElement('td');

                featureCell.textContent = feature;

                const valueCounts = {};
                activeTools.forEach(tool => {
                    const values = Array.isArray(tool[`${group}::${feature}`]) ? tool[`${group}::${feature}`] : [tool[`${group}::${feature}`]];
					console.log(tool)
					console.log(values)
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
                    itemCell.textContent = value;
                    countCell.textContent = `(${count})`;
                    row.appendChild(itemCell);
                    row.appendChild(countCell);

                    if (selectedCells.has(value)) {
                        itemCell.classList.add('selected');
                    }

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

