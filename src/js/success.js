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
    <svg class="star-half" viewBox="0 0 34 32" width="20" height="20"> <path d="M11.5312 3.80664C11.7032 3.39816 12.2968 3.39816 12.4688 3.80664L14.4971 8.625C14.7155 9.14358 15.2076 9.49471 15.7676 9.53906L21.0332 9.95605C21.4909 9.99232 21.6545 10.5412 21.3242 10.8213L17.3115 14.2168C16.8819 14.5804 16.6919 15.1542 16.8242 15.7021L18.0508 20.7783C18.1502 21.1902 17.6892 21.5518 17.291 21.3115H17.29L12.7832 18.5918C12.3023 18.3016 11.6977 18.3016 11.2168 18.5918L6.70898 21.3115C6.31078 21.5518 5.84983 21.1902 5.94922 20.7783L7.17578 15.7021C7.30809 15.1543 7.11814 14.5805 6.68848 14.2168L2.67578 10.8213C2.34544 10.5412 2.5091 9.99231 2.9668 9.95605L8.23242 9.53906C8.79243 9.49471 9.28456 9.14369 9.50293 8.625L11.5312 3.80664Z" fill="url(#paint0_linear_8242_16266)" stroke="#02060A" />
 
    <linearGradient id="paint0_linear_8242_16266" x1="2" y1="12.3716" x2="22" y2="12.3716" gradientUnits="userSpaceOnUse">
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
