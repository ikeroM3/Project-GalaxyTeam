import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import 'css-star-rating/css/star-rating.css';

const swiperMarkup = document.querySelector('.swiper');

export function createReviews(reviews) {
  const markup = reviews
    .map(
      ({ rate, description, author }) => `
        <div class="swiper-slide">
        <div class="review-card-slide">
        <div class="rating star-icon value-${Math.floor(rate)} ${rate % 1 === 0.5 ? 'half' : ''}">
      <div class="star-container">
        ${'<div class="star"><i class="star-empty"></i><i class="star-half"></i><i class="star-filled"></i></div>'.repeat(5)}
      </div>
    </div>
        <p class="review-card-text">${description}</p>
        <span class="review-author">${author}</span>
        </div>
        </div>`
    )
    .join('');

  swiperMarkup.insertAdjacentHTML('beforeend', markup);
}

axios.defaults.baseURL = 'https://paw-hut.b.goit.study/';

async function fetchReviews() {
  const { data } = await axios.get('/api/feedbacks');
  return data.feedbacks;
}

try {
  const reviews = await fetchReviews();
  console.log(reviews);
  createReviews(reviews);

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      addIcons: false,
      disabledClass: 'swiper-btn-disabled',
    },
  });
} catch (error) {
  //Here will be an error message
}
