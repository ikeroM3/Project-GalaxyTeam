import axios from 'axios';

const galleryEl = document.querySelector('.pets-list');
const loadmoreBtn = document.querySelector('.loadmore-btn');

let page = 1;
const limit = 9;

function markupCard({
  age,
  gender,
  shortDescription,
  categories,
  species,
  name,
  image,
}) {
  const categoriesStr = categories
    .map(c => `<span class="categories-box">${c.name}</span>`)
    .join('');

  return `
    <li class="pets-list-item">
      <img class="gallery-image" src="${image}" alt="${name}" loading="lazy" />
      <div class="info">
        <p class="info-species">${species}</p>
        <p class="info-name">${name}</p>
        <p class="info-categories">${categoriesStr}</p>
       <div class="age-gender">
       <p class="info-age">${age}</p>
        <p class="info-gender">${gender}</p>
        </div>
        <p class="info-text">${shortDescription}</p>
        <button class="show-info-btn">Дізнатись більше</button>
      </div>
    </li>
  `;
}

function createGallery(arr) {
  const markup = arr.map(markupCard).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

async function loadAnimals() {
  try {
    const response = await axios.get(
      `https://paw-hut.b.goit.study/api/animals?page=${page}&limit=${limit}`
    );

    const animals = response.data.animals;

    if (!animals || animals.length === 0) {
      loadmoreBtn.disabled = true;
      loadmoreBtn.textContent = 'Кінець';
      return;
    }

    createGallery(animals);
    page += 1;
  } catch (error) {
    console.error('Помилка завантаження:', error);
  }
}

loadmoreBtn.addEventListener('click', loadAnimals);

const categoriesContainer = document.querySelector('.categories-list');

async function loadCategories() {
  try {
    const { data: categories } = await axios.get(
      'https://paw-hut.b.goit.study/api/categories'
    );

    categoriesContainer.innerHTML =
      `<li class="pets-list-categ-item"><button class="pets-btn-categ active">Всі</button></li>` +
      categories
        .map(
          cat =>
            `<li class="pets-list-categ-item"><button class="pets-btn-categ">${cat.name}</button></li>`
        )
        .join('');
  } catch (err) {
    console.error('Ошибка загрузки категорий:', err);
  }
}

loadCategories();
