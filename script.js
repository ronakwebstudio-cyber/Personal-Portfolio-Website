document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
