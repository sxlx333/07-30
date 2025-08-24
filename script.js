document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const headerNav = document.querySelector('.headerNav');
  const headerContainer = document.querySelector('.headerContainer');
  const topLine = document.querySelector('.topLine');

  hamburger.addEventListener('click', () => {
    document.documentElement.classList.toggle('no-scroll');
    document.body.classList.toggle('no-scroll');
    headerNav.classList.toggle('active');
  });

  const topLineHeight = topLine.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= topLineHeight) {
      headerContainer.classList.add('fixed');
    } else {
      headerContainer.classList.remove('fixed');
    }
  });
});
