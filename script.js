const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Replace this placeholder with your real business email before publishing.
  const businessEmail = 'YOUR_EMAIL@example.com';
  if (businessEmail === 'YOUR_EMAIL@example.com') {
    document.getElementById('formNote').textContent =
      'Website demo: open script.js and replace YOUR_EMAIL@example.com with your real business email to activate enquiries.';
    return;
  }

  const data = new FormData(this);
  const subject = encodeURIComponent('Website enquiry — Oracle Consult Ghana');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nService: ${data.get('service')}\nGoals: ${data.get('message') || 'Not specified'}`
  );
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
