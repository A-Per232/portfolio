/* ── CONTACT FORM ── */
var form = document.getElementById('contact-form');
var status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!fname || !lname || !email || !message) {
      status.textContent = 'Please fill in all required fields.';
      status.className = 'form-status error';
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'form-status error';
      return;
    }

    /* Simulate a successful send */
    status.textContent = 'Message sent! I\'ll get back to you soon.';
    status.className = 'form-status success';
    form.reset();
  });
}
