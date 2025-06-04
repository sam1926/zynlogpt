document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Hide mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('#hero img', { duration: 1, y: 50, opacity: 0 });
  gsap.from('#hero h1', { duration: 1, x: -50, opacity: 0, delay: 0.3 });

  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      }
    });
  });
});
