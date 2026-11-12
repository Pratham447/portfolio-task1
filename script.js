(function () {
  var form = document.getElementById('contact');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('status'), bad = null;
    ['name', 'email', 'msg'].forEach(function (id) {
      var f = document.getElementById(id), ok = f.checkValidity() && f.value.trim() !== '';
      f.setAttribute('aria-invalid', String(!ok));
      if (!ok && !bad) bad = f;
    });
    if (bad) { status.textContent = 'Please fill in the highlighted fields with valid details.'; bad.focus(); return; }
    status.textContent = 'Thanks! Your message is ready to send.';
    form.reset();
  });
})();
