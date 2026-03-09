import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper-about', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination-about',
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    dynamicBullets: window.innerWidth < 768,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
    disabledClass: 'swiper-btn-disabled',
  },
});
