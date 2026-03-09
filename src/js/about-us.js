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
  },
  on: {
    init: updateBullets,
    slideChange: updateBullets,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
    disabledClass: 'swiper-btn-disabled',
  },
});

function updateBullets(swiper) {
  const bullets = swiper.pagination.bullets;
  const active = swiper.activeIndex;

  bullets.forEach((bullet, index) => {
    bullet.classList.remove('bullet-small', 'bullet-medium', 'bullet-large');

    const distance = Math.abs(index - active);

    if (distance === 0) {
      bullet.classList.add('bullet-large');
    } else if (distance === 1) {
      bullet.classList.add('bullet-medium');
    } else {
      bullet.classList.add('bullet-small');
    }
  });
}
