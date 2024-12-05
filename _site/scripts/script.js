document.querySelectorAll('.dropdown-block').forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const content = dropdown.querySelector('.dropdown-content');
    const arrow = toggle.querySelector('.dropdown-arrow');

    // Toggle the current dropdown
    toggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent clicks on the toggle from triggering the block click
        content.classList.toggle('open');
        arrow.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Close the dropdown if clicking anywhere inside the block while open
    dropdown.addEventListener('click', function () {
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            arrow.style.transform = 'rotate(0deg)';
        }
    });
});
