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

    const button = document.getElementById('music-button');
    const notes = ['🎵', '🎶', '♫', '♬', '♩'];

    button.addEventListener('click', () => {
      const note = document.createElement('div');
      note.classList.add('note');
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      
      // Randomize position around the button
      const x = button.offsetLeft + button.offsetWidth / 2 + (Math.random() * 100 - 50);
      const y = button.offsetTop;

      note.style.left = `${x}px`;
      note.style.top = `${y}px`;

      // Add the note to the body
      document.body.appendChild(note);

      // Remove the note after animation
      note.addEventListener('animationend', () => {
        note.remove();
      });
    });


