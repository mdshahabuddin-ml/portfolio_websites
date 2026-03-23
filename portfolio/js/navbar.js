/* ═══════════════════════════════════════
   js/navbar.js — Scroll shadow + Mobile
═══════════════════════════════════════ */
(function () {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : 'none';
  });

  // Mobile toggle
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
})();

// Exposed globally for onclick in HTML
function closeMobile () {
  document.getElementById('mobileNav').classList.remove('open');
}
