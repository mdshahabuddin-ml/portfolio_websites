/* ═══════════════════════════════════════
   js/theme.js — Dark / Light mode toggle
═══════════════════════════════════════ */
(function () {
  const html      = document.documentElement;
  const themeBtn  = document.getElementById('themeToggle');
  let isDark      = true;

  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeBtn.innerHTML = isDark
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });
})();
