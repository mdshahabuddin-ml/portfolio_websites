/* ═══════════════════════════════════════
   js/reveal.js — IntersectionObserver scroll reveal
═══════════════════════════════════════ */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const siblings = Array.from(entry.target.parentElement?.children || []);
        const index    = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(index * 80, 400)}ms`;
        entry.target.classList.add('visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
