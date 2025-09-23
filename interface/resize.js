
document.addEventListener("DOMContentLoaded", () => {
    // Instructions collapse logic
	const instructions = document.getElementById('instructions');
    const collapseBtn = document.getElementById('collapse-instructions');
    collapseBtn.addEventListener('click', function() {
        instructions.classList.toggle('collapsed');
        collapseBtn.textContent = instructions.classList.contains('collapsed') ? '+' : '−';
    });


	const resizer = document.querySelector('.resizer');
	const resizer_hor = document.querySelector('.resizer-horizontal');

	const sidebar = document.querySelector('.sidebar');
	const content = document.querySelector('.content');

	const tools = document.querySelector('.tools');
	const tools_viz = document.querySelector('.tools-viz');

	let isResizing = false;
	let isResizing_hor = false;

	resizer.addEventListener('mousedown', function(e) {
		isResizing = true;
		document.body.style.cursor = 'ew-resize';
	});

	resizer_hor.addEventListener('mousedown', function(e) {
		isResizing_hor = true;
		document.body.style.cursor = 'ns-resize';
	});

	document.addEventListener('mousemove', function(e) {
		if (!isResizing && !isResizing_hor) return;

		if (isResizing){
			const containerRect = document.querySelector('.container').getBoundingClientRect();
			let newSidebarWidth = e.clientX - containerRect.left;
			// Clamp sidebar width
			newSidebarWidth = Math.max(250, Math.min(newSidebarWidth, containerRect.width - 250));
			sidebar.style.width = newSidebarWidth + 'px';
			content.style.width = (containerRect.width - newSidebarWidth - resizer.offsetWidth) + 'px';
		}

		if (isResizing_hor){
			const sidebarRect = sidebar.getBoundingClientRect();
			let newVizHeight = e.clientY - sidebarRect.top;
			// Clamp tools_viz height
			newVizHeight = Math.max(100, Math.min(newVizHeight, sidebarRect.height - 100));
			tools.style.height = newVizHeight + 'px';
			tools_viz.style.height = (sidebarRect.height - newVizHeight - resizer_hor.offsetHeight) + 'px';
		}

	});

	document.addEventListener('mouseup', function() {
		if (isResizing) {
			isResizing = false;
			document.body.style.cursor = '';
		}

		if (isResizing_hor) {
			isResizing_hor = false;
			document.body.style.cursor = '';
		}
	});
});