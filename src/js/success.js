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
    <svg class="star-empty" viewBox="0 0 34 32" width="20" height="20">
    <path d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"/>
    </svg>
    <svg class="star-half" viewBox="0 0 34 32" width="20" height="20">  <path d="M9.53125 0.806641C9.70323 0.398163 10.2968 0.398159 10.4688 0.806641L12.4971 5.625C12.7155 6.14358 13.2076 6.49471 13.7676 6.53906L19.0332 6.95605C19.4909 6.99232 19.6545 7.54121 19.3242 7.82129L15.3115 11.2168C14.8819 11.5804 14.6919 12.1542 14.8242 12.7021L16.0508 17.7783C16.1502 18.1902 15.6892 18.5518 15.291 18.3115H15.29L10.7832 15.5918C10.3023 15.3016 9.6977 15.3016 9.2168 15.5918L4.70898 18.3115C4.31078 18.5518 3.84983 18.1902 3.94922 17.7783L5.17578 12.7021C5.30809 12.1543 5.11814 11.5805 4.68848 11.2168L0.675781 7.82129C0.345442 7.54122 0.509097 6.99231 0.966797 6.95605L6.23242 6.53906C6.79243 6.49471 7.28456 6.14369 7.50293 5.625L9.53125 0.806641Z" fill="url(#paint0_linear_8242_16265)" stroke="#02060A" />

    <linearGradient id="paint0_linear_8242_16265" x1="0" y1="9.37158" x2="20" y2="9.37158" gradientUnits="userSpaceOnUse">
      <stop offset="0.5" stop-color="#02060A" />
      <stop offset="0.5" stop-color="#02060A" stop-opacity="0" />
    </linearGradient>


    </svg>
    <svg class="star-filled" viewBox="0 0 34 32" width="20" height="20"><path d="M16.941 25.621l10.179 6.144-2.701-11.579 8.993-7.791-11.842-1.005-4.628-10.92-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579z"/></svg>
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
