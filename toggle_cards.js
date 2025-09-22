function collapseAllCards() {
    document.querySelectorAll('.card.expanded').forEach(card => {
        card.classList.remove('expanded');
        // Hide image and details
        const img = card.querySelector('img');
        if (img) img.style.display = 'none';
        const details = card.querySelector('.details');
        if (details) details.style.display = 'none';
    });
}

// document.querySelectorAll('.card .plus').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         e.stopPropagation();
//         // Collapse any expanded card
//         document.querySelectorAll('.card.expanded').forEach(card => {
//             card.classList.remove('expanded');
//         });
//         // Expand this card
//         const card = btn.closest('.card');
//         card.classList.add('expanded');
//         // Show image and details
//         const img = card.querySelector('img');
//         if (img) img.style.display = 'block';
//         const details = card.querySelector('.details');
//         if (details) details.style.display = 'block';
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.card').forEach(card => {
		const plus = card.querySelector('.plus');
		const minus = card.querySelector('.minus');
		plus.addEventListener('click', function(e) {
			e.stopPropagation();
			collapseAllCards();
			card.classList.add('expanded');
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
	});

	// Collapse expanded card when clicking outside
	document.addEventListener('click', function(e) {
		const expandedCard = document.querySelector('.card.expanded');
		if (expandedCard && !expandedCard.contains(e.target)) {
			collapseAllCards();
		}
	});
});