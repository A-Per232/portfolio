/* ── HAMBURGER MENU ── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('[data-reveal]');

if (revealEls.length > 0) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
}

/* ── TYPED ROLES (index page only) ── */
var typedEl = document.getElementById('typed-roles');

if (typedEl) {
  var roles = [
    'Full-Stack Developer',
    'Video Editor',
    'Software Eng. Student',
    'Creative Builder',
  ];
  var roleIndex = 0;
  var charIndex = 0;
  var deleting = false;
  var PAUSE = 1800;
  var TYPE_SPEED = 75;
  var DELETE_SPEED = 40;

  function tick() {
    var current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
}
