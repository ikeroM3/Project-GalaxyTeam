import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import axios from 'axios';
import 'css-star-rating/css/star-rating.css';


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
                ${`<div class="star">
    <svg class="star-empty">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
    <svg class="star-half">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
    <svg class="star-filled">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
</div>`.repeat(5)}
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
        renderBullet: function (index, className) {
          return `
            <span class="${className}">
              <svg width="4" height="4" viewBox="0 0 4 4">
                <circle cx="2" cy="2" r="2"></circle>
              </svg>
            </span>
          `;
        },
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
          spaceBetween: 30,
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
