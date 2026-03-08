const modalWindow = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.burger-menu.bth-open');
const menuBtnClose = document.querySelector('.mobile-menu .close-btn');
const menuLinks = document.querySelectorAll('.mob-menu-link, .mob-menu-button');
const listLinks = document.querySelectorAll('.list-mob, .mob-menu');


const toggleMenu = () => modalWindow.classList.toggle('is-open');
const toggleScroll = () => document.body.classList.toggle('is-scroll-disabled');

// Закриття модального вікна при кліку поза його межами
modalWindow.addEventListener('click', e => {
  if (e.target === modalWindow) {
    handleLinkClick();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalWindow.classList.contains('is-open')) {
    handleLinkClick();
  }
});

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
// Додайте обробник подій для посилань у списку
listLinks.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});
