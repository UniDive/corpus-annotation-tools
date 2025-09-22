
document.addEventListener("DOMContentLoaded", () => {
    // Instructions collapse logic
	const instructions = document.getElementById('instructions');
    const collapseBtn = document.getElementById('collapse-instructions');
    collapseBtn.addEventListener('click', function() {
        instructions.classList.toggle('collapsed');
        collapseBtn.textContent = instructions.classList.contains('collapsed') ? '+' : '−';
    });


	const resizer = document.querySelector('.resizer');
	const sidebar = document.querySelector('.sidebar');
	const content = document.querySelector('.content');
	let isResizing = false;

	resizer.addEventListener('mousedown', function(e) {
		isResizing = true;
		document.body.style.cursor = 'ew-resize';
	});

	document.addEventListener('mousemove', function(e) {
		if (!isResizing) return;
		const containerRect = document.querySelector('.container').getBoundingClientRect();
		let newSidebarWidth = e.clientX - containerRect.left;
		// Clamp sidebar width
		newSidebarWidth = Math.max(250, Math.min(newSidebarWidth, containerRect.width - 250));
		sidebar.style.width = newSidebarWidth + 'px';
		content.style.width = (containerRect.width - newSidebarWidth - resizer.offsetWidth) + 'px';
	});

	document.addEventListener('mouseup', function() {
		if (isResizing) {
			isResizing = false;
			document.body.style.cursor = '';
		}
	});
});