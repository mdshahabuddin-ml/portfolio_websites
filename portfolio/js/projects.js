/* ═══════════════════════════════════════
   js/projects.js — Category filter
═══════════════════════════════════════ */
(function () {
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.style.display    = match ? 'flex' : 'none';
        card.style.animation  = match ? 'fade-up 0.4s ease both' : 'none';
      });
    });
  });
})();
