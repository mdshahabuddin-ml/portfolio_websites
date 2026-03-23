/* ═══════════════════════════════════════
   js/contact.js — Form + Toast
═══════════════════════════════════════ */
function showToast (msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function handleFormSubmit () {
  const name    = document.getElementById('formName').value.trim();
  const email   = document.getElementById('formEmail').value.trim();
  const subject = document.getElementById('formSubject').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  if (!name || !email || !message) {
    showToast('⚠️  Please fill in all required fields.');
    return;
  }

  const mailto = [
    'mailto:mdshahabuddinktr1370@gmail.com',
    `?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}`,
    `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
  ].join('');

  window.location.href = mailto;
  showToast('✅  Opening your email client…');

  // Clear fields
  ['formName','formEmail','formSubject','formMessage'].forEach(
    (id) => { document.getElementById(id).value = ''; }
  );
}
