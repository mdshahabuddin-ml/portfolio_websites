/* ═══════════════════════════════════════
   js/typing.js — Typewriter animation
═══════════════════════════════════════ */
(function () {
  const roles = [
    'AI & ML Undergraduate',
    'Python Developer',
    'Web Developer',
    'Machine Learning Engineer',
    'Problem Solver'
  ];

  const el = document.getElementById('typed-text');
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type () {
    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? 60 : 90);
  }

  type();
})();
