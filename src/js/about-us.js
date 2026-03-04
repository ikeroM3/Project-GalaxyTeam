 import Swiper from 'swiper';
 import { Navigation, Pagination, Keyboard } from 'swiper/modules';
 import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
        bulletActiveClass:"swiper-pagination-bullet-active",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        addIcons: false,
        disabledClass: "swiper-btn-disabled"
      },
    });
/* const mySwiper = document.querySelector('.swiper').swiper;
swiper.slideNext(); */