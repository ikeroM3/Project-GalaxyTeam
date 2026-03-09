import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import axios from 'axios';
import 'css-star-rating/css/star-rating.css';
import icons from '../img/icons.svg';

const loader = document.querySelector('.success-loader');
const showLoader = () => loader?.classList.remove('visually-hidden');
const hideLoader = () => loader?.classList.add('visually-hidden');

const swiperMarkup = document.querySelector('.swiper-reviews .swiper-wrapper');

function createReviews(reviews) {
  const markup = reviews
    .map(
      ({ rate, description, author }) => `
      <div class="swiper-slide">
        <div class="review-card-slide">
          <div class="rating star-icon value-${Math.floor(rate)} ${rate % 1 === 0.5 ? 'half' : ''}">
            <div class="star-container">
              ${`
              <div class="star">
                <svg class="star-empty"><use href="${icons}#star-empty"></use></svg>
                <svg class="star-half"><use href="${icons}#star-half"></use></svg>
                <svg class="star-filled"><use href="${icons}#star-filled"></use></svg>
              </div>
              `.repeat(5)}
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
  const { data } = await axios.get('/api/feedbacks', {
    params: { page: 1, limit: 25 },
  });
  return data.feedbacks;
}

async function initReviews() {
  showLoader();

  try {
    const reviews = await fetchReviews();
    createReviews(reviews);

    new Swiper('.swiper-reviews', {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      spaceBetween: 30,

      keyboard: {
        enabled: true,
      },

      pagination: {
        el: '.swiper-pagination-reviews',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },

      navigation: {
        nextEl: '.swiper-nav-buttons .swiper-button-next1',
        prevEl: '.swiper-nav-buttons .swiper-button-prev1',
        addIcons: false,
        disabledClass: 'swiper-btn-disabled',
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    });
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    hideLoader();
  }
}

initReviews();
