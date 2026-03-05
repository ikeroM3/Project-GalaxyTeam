




const backdrop = document.querySelector('.pet-modal-overlay');
const modalPet = document.querySelector('.pet-modal-window');
const closeBtnPet = document.querySelector('.pet-modal-close-btn');
const takeBtn = document.querySelector('.take-btn');


let escListener = null;
let outsideClickListener = null;



// Відкрити модальне вікно Animals

async function openPetModal(PetId) {
  if (!PetId) return console.error('Animal ID is missing!');
 
if (backdrop.classList.contains('is-open')) return;
// loader

//   const animal = await getAnimalById(PetId);

  renderPetModal (animal);

 
backdrop.classList.add('is-open');
document.body.classList.add('no-scroll');
addEventListeners();
  }



  // Закриття модального вікна
function closePetModal() {
 backdrop.classList.remove('is-open');
document.body.classList.remove('no-scroll');
//   document.body.style.overflow = '';
  removeEventListeners();
}

// Слухачі подій
function addEventListeners() {
  if (!escListener) {
    escListener = (e) => { if (e.key === 'Escape') closePetModal(); };
    document.addEventListener('keydown', escListener);
  }

  if (!outsideClickListener) {
    outsideClickListener = (e) => { if (e.target === backdrop) closePetModal(); };
    backdrop.addEventListener('click', outsideClickListener);
  }
}

function removeEventListeners() {
  if (escListener) { document.removeEventListener('keydown', escListener); escListener = null; }
  if (outsideClickListener) { backdrop.removeEventListener('click', outsideClickListener); outsideClickListener = null; }
}


// Кнопка "Взяти додому"
contentPet.addEventListener('click', e => {
  if (e.target.classList.contains('take-btn')) {
    closePetModal();
    // openModal();   модалка Святослава
  }
});


 //Кнопка закриття
    closeBtnPet.addEventListener('click', closePetModal);


 //Рендер 

function renderPetModal(animal) {
  const markup = `
  
<img src="${animal.imgURL}" alt="${animal.name}" class="pet-modal-img">

<div class="pet-modal-info">

<p class="pet-modal-species">${animal.species}</p>

<h3 class="pet-modal-name">${animal.name}</h3>

<div class="pet-modal-meta">
<p class="pet-modal-age">${animal.age}</p>
<p class="pet-modal-gender">${animal.gender}</p>
</div>

<ul class="pet-modal-list">

<li class="pet-modal-item">
<h4 class="pet-modal-title">Опис:</h4>
<p class="pet-modal-text">${animal.description}</p>
</li>

<li class="pet-modal-item">
<h4 class="pet-modal-title">Здоров'я:</h4>
<p class="pet-modal-text">${animal.healthStatus}</p>
</li>

<li class="pet-modal-item">
<h4 class="pet-modal-title">Поведінка:</h4>
<p class="pet-modal-text">${animal.behavior}</p>
</li>

</ul>

<button type="button" class="take-btn">Взяти додому</button>

</div>
`;

  contentPet.innerHTML = markup;
}