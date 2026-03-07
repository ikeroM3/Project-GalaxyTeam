export const createAnimalCardMarkup = animal => {
  const categoriesMarkup = animal.categories
    .map(c => `<span class="info-categories">${c.name}</span>`)
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
        <button class="show-info-btn">Дізнатись більше</button>
      </div>
    </li>
  `;
};

export const appendAnimalsToGallery = (gallery, animals) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    animals.map(createAnimalCardMarkup).join('')
  );
};

export const renderCategories = (container, categories) => {
  container.innerHTML =
    `<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>` +
    categories
      .map(
        c =>
          `<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${c._id}">${c.name}</button>
          </li>`
      )
      .join('');
};
