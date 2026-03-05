// import axios from 'axios';

// const galleryEl = document.querySelector('.pets-list');
// const loadmoreBtn = document.querySelector('.loadmore-btn');

// let page = 1;
// const limit = 9;

// function markupCard({
//   age,
//   gender,
//   shortDescription,
//   categories,
//   species,
//   name,
//   image,
// }) {
//   const categoriesStr = categories
//     .map(c => `<span class="categories-box">${c.name}</span>`)
//     .join('');

//   return `
//     <li class="pets-list-item">
//       <img class="gallery-image" src="${image}" alt="${name}" loading="lazy" />
//       <div class="info">
//         <p class="info-species">${species}</p>
//         <p class="info-name">${name}</p>
//         <p class="info-categories">${categoriesStr}</p>
//        <div class="age-gender">
//        <p class="info-age">${age}</p>
//         <p class="info-gender">${gender}</p>
//         </div>
//         <p class="info-text">${shortDescription}</p>
//         <button class="show-info-btn">Дізнатись більше</button>
//       </div>
//     </li>
//   `;
// }

// function createGallery(arr) {
//   const markup = arr.map(markupCard).join('');
//   galleryEl.insertAdjacentHTML('beforeend', markup);
// }

// async function loadAnimals() {
//   try {
//     const response = await axios.get(
//       `https://paw-hut.b.goit.study/api/animals?page=${page}&limit=${limit}`
//     );

//     const animals = response.data.animals;

//     if (!animals || animals.length === 0) {
//       loadmoreBtn.disabled = true;
//       loadmoreBtn.textContent = 'Кінець';
//       return;
//     }

//     createGallery(animals);
//     page += 1;
//   } catch (error) {
//     console.error('Помилка завантаження:', error);
//   }
// }

// loadmoreBtn.addEventListener('click', loadAnimals);

// const categoriesContainer = document.querySelector('.categories-list');

// async function loadCategories() {
//   try {
//     const { data: categories } = await axios.get(
//       'https://paw-hut.b.goit.study/api/categories'
//     );

//     categoriesContainer.innerHTML =
//       `<li class="pets-list-categ-item"><button class="pets-btn-categ active">Всі</button></li>` +
//       categories
//         .map(
//           cat =>
//             `<li class="pets-list-categ-item"><button class="pets-btn-categ">${cat.name}</button></li>`
//         )
//         .join('');
//   } catch (err) {
//     console.error('Ошибка загрузки категорий:', err);
//   }
// }

// loadCategories();

import axios from 'axios';

const galleryElement = document.querySelector('.pets-list');
const loadMoreButton = document.querySelector('.loadmore-btn');
const categoriesContainer = document.querySelector('.categories-list');
const loaderElement = document.querySelector('.loader');

let page = 1;
const limit = 9;

let currentCategoryId = '';
let totalItems = 0;

const showLoader = () => loaderElement?.classList.remove('hidden');
const hideLoader = () => loaderElement?.classList.add('hidden');

const createAnimalCardMarkup = animal => {
  const categoriesMarkup = animal.categories
    .map(category => `<span class="categories-box">${category.name}</span>`)
    .join('');

  return `
    <li class="pets-list-item">
      <img class="gallery-image" src="${animal.image}" alt="${animal.name}" loading="lazy" />
      <div class="info">
        <p class="info-species">${animal.species}</p>
        <p class="info-name">${animal.name}</p>
        <p class="info-categories">${categoriesMarkup}</p>
        <div class="age-gender">
          <p class="info-age">${animal.age}</p>
          <p class="info-gender">${animal.gender}</p>
        </div>
        <p class="info-text">${animal.shortDescription}</p>
        <button class="show-info-btn">Дізнатись більше</button>
      </div>
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
