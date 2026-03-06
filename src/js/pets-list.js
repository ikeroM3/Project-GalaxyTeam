import axios from 'axios';
import { openPetModal } from './animal-details-modal.js';

const galleryElement = document.querySelector('.pets-list');
const loadMoreButton = document.querySelector('.loadmore-btn');
const categoriesContainer = document.querySelector('.categories-list');
const loaderElement = document.querySelector('.loader');

let page = 1;

const limit = getLimit();

function getLimit() {
  var width = window.innerWidth;
  if (width >= 1440) {
    return 9;
  } else {
    return 8;
  }
}

let animalsList = [];
let currentCategoryId = '';
let totalItems = 0;

const showLoader = () => loaderElement?.classList.remove('hidden');
const hideLoader = () => loaderElement?.classList.add('hidden');

const createAnimalCardMarkup = animal => {
  const categoriesMarkup = animal.categories
    .map(category => `<span class="info-categories">${category.name}</span>`)
    .join('');

  return `
    <li class="pets-list-item" data-animal-id="${animal._id}">
      <img class="gallery-image" src="${animal.image}" alt="${animal.name}" loading="lazy" />
      <div class="info">
        <p class="info-species">${animal.species}</p>
        <p class="info-name">${animal.name}</p>
       <div class="categories-box">${categoriesMarkup}</div> 
        <div class="age-gender">
          <p class="info-age">${animal.age}</p>
          <p class="info-gender">${animal.gender}</p>
        </div>
        <p class="info-text">${animal.shortDescription}</p> 
        </div>
        <button class="show-info-btn">Дізнатись більше</button>
     
    </li>
  `;
};

const appendAnimalsToGallery = animals => {
  galleryElement.insertAdjacentHTML(
    'beforeend',
    animals.map(createAnimalCardMarkup).join('')
  );
};

const loadAnimals = async () => {
  showLoader();

  try {
    const response = await axios.get(
      'https://paw-hut.b.goit.study/api/animals',
      {
        params: {
          page,
          limit,
          ...(currentCategoryId && { categoryId: currentCategoryId }),
        },
      }
    );

    const data = response.data;
    animalsList = [...animalsList, ...data.animals];
    totalItems = data.totalItems;

    if (data.animals.length === 0) {
      loadMoreButton.disabled = true;
      loadMoreButton.textContent = 'Кінець';
      return;
    }

    appendAnimalsToGallery(data.animals);
    page += 1;

    if (page * limit >= totalItems) {
      loadMoreButton.disabled = true;
      loadMoreButton.textContent = 'Кінець';
    } else {
      loadMoreButton.disabled = false;
      loadMoreButton.textContent = 'Показати більше';
    }
  } catch (error) {
    console.error('Помилка завантаження:', error);
  } finally {
    hideLoader();
  }
};

const loadCategories = async () => {
  try {
    const response = await axios.get(
      'https://paw-hut.b.goit.study/api/categories'
    );

    const categories = response.data;

    categoriesContainer.innerHTML =
      `<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>` +
      categories
        .map(
          category =>
            `<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${category._id}">
            ${category.name}
          </button>
        </li>`
        )
        .join('');

    setupCategoryListeners();
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
  }
};

const setupCategoryListeners = () => {
  const buttons = document.querySelectorAll('.pets-btn-categ');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      currentCategoryId = button.dataset.id;
      page = 1;
      galleryElement.innerHTML = '';
      loadMoreButton.disabled = false;
      loadMoreButton.textContent = 'Показати більше';

      loadAnimals();
    });
  });
};

loadCategories();
loadAnimals();

loadMoreButton.addEventListener('click', loadAnimals);

galleryElement.addEventListener('click', e => {
  if (e.target.classList.contains('show-info-btn')) {
    const card = e.target.closest('.pets-list-item');
    const animal = animalsList.find(a => a._id === card.dataset.animalId);
    if (animal) {
      openPetModal(animal);
    }
  }
});
