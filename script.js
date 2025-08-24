document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const headerNav = document.querySelector('.headerNav');

  hamburger.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
});
