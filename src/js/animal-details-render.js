export function renderPetModal(container, animal) {
  container.innerHTML = `
    <img src="${animal.image}" alt="${animal.name}" class="pet-modal-img">
    <div class="pet-modal-info">
      <div class="pet-modal-data">
        <p class="pet-modal-species">${animal.species}</p>
        <h3 class="pet-modal-name">${animal.name}</h3>
        <div class="pet-modal-meta">
          <p class="pet-modal-age">${animal.age}</p>
          <p class="pet-modal-gender">${animal.gender}</p>
        </div>
      </div>
      <ul class="pet-modal-list">
        <li class="pet-modal-item">
          <h4>Опис:</h4>
          <p>${animal.description}</p>
        </li>
        <li class="pet-modal-item">
          <h4>Здоров'я:</h4>
          <p>${animal.healthStatus}</p>
        </li>
        <li class="pet-modal-item">
          <h4>Поведінка:</h4>
          <p>${animal.behavior}</p>
        </li>
      </ul>
      <button class="take-btn" data-animal-id="${animal._id}">Взяти додому</button>
    </div>
  `;
}
