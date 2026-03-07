import { getAnimals, getCategories } from './api.js';
import { openPetModal } from './animal-details-main.js';
import {
  appendAnimalsToGallery,
  renderCategories,
} from './pets-list-render.js';

const gallery = document.querySelector('.pets-list');
const loadMoreBtn = document.querySelector('.loadmore-btn');
const categoriesContainer = document.querySelector('.categories-list');
const loader = document.querySelector('.loader');
const loadmoreLoader = document.querySelector('.loadmore-loader');

let page = 1;
let limit = getLimit();
let animalsList = [];
let currentCategoryId = '';
let totalItems = 0;

function getLimit() {
  const width = window.innerWidth;
  return width >= 1440 ? 9 : 8;
}

const showLoader = () => loader?.classList.remove('visually-hidden');
const hideLoader = () => loader?.classList.add('visually-hidden');

const showLoadmoreLoader = () =>
  loadmoreLoader?.classList.remove('visually-hidden');
const hideloadmoreLoader = () =>
  loadmoreLoader?.classList.add('visually-hidden');

async function callApiWithLoader(apiFunction, params) {
  if (loadmoreLoader) {
    showLoadmoreLoader();
  } else {
    showLoader();
  }
  try {
    return await apiFunction(params);
  } finally {
    if (loadmoreLoader) {
      hideloadmoreLoader();
    } else {
      hideLoader();
    }
  }
}

const resetGallery = () => {
  page = 1;
  animalsList = [];
  gallery.innerHTML = '';
  loadMoreBtn.disabled = false;
  loadMoreBtn.textContent = 'Показати більше';
};

const loadAnimals = async () => {
  try {
    const data = await callApiWithLoader(getAnimals, {
      page,
      limit,
      categoryId: currentCategoryId,
    });
    animalsList = [...animalsList, ...data.animals];
    totalItems = data.totalItems;
    if (data.animals.length === 0) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'Кінець';
      return;
    }
    appendAnimalsToGallery(gallery, data.animals);
    const shown = page * limit;

    if (shown >= totalItems) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'Кінець';
    } else {
      loadMoreBtn.disabled = false;
      loadMoreBtn.textContent = 'Показати більше';
    }
  } catch (error) {
    console.error('Помилка завантаження:', error);
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = 'Спробувати ще раз';
  }
};

const loadCategories = async () => {
  try {
    const categories = await callApiWithLoader(getCategories);
    renderCategories(categoriesContainer, categories);
    setupCategoryListeners();
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
  }
};

const setupCategoryListeners = () => {
  const buttons = document.querySelectorAll('.pets-btn-categ');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategoryId = btn.dataset.id;
      resetGallery();
      loadAnimals();
    });
  });
};

gallery.addEventListener('click', e => {
  if (e.target.classList.contains('show-info-btn')) {
    const card = e.target.closest('.pets-list-item');
    const animal = animalsList.find(a => a._id === card.dataset.animalId);
    if (animal) openPetModal(animal);
  }
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  loadAnimals();
});

window.addEventListener('resize', () => {
  const newLimit = getLimit();
  if (newLimit !== limit) {
    limit = newLimit;
    resetGallery();
    loadAnimals();
  }
});

loadCategories();
loadAnimals();

const itemGallery = document.querySelector('.pets-list-item');

if (itemGallery) {
  const { height } = itemGallery.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
