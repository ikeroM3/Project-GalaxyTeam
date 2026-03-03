const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.burger-menu.bth-open');
const menuBtnClose = document.querySelector('.mobile-menu .close-btn');
const menuLinks = document.querySelectorAll('.mob-menu-link, .mob-menu-button');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleScroll = () => document.body.classList.toggle('is-scroll-disabled');

const handleLinkClick = () => {
  toggleMenu();
  toggleScroll();
};

menuBtnOpen.addEventListener('click', () => {
  toggleMenu();
  toggleScroll();
});

menuBtnClose.addEventListener('click', () => {
  toggleMenu();
  toggleScroll();
});
menuLinks.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});
