 import Swiper from 'swiper';
import 'swiper/css/keyboard';

    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
const mySwiper = document.querySelector('.swiper').swiper;
swiper.slideNext();