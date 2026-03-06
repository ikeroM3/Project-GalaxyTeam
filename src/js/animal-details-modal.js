import axios from 'axios';
import Swal from 'sweetalert2'
import {openModalWindow} from '/order-modal.js' //import open modal

const backdrop = document.querySelector('.pet-modal-overlay');
const modalPet = document.querySelector('.pet-modal-window');
const closeBtnPet = document.querySelector('.pet-modal-close-btn');
const contentPet = document.querySelector('.pet-modal-content');



let escListener = null;
let outsideClickListener = null;



// Запит на сервер
async function getAnimalById(id) {
  const url = `https://paw-hut.b.goit.study/api/animals/${id}`;

  const res = await axios.get(url);
  return res.data;
}


// Відкрити модальне вікно Animals

export async function openPetModal(PetId) {
 
if (!PetId) return console.error('Animal ID is missing!');
    
 if (backdrop.classList.contains('is-open')) return;

try {
    showLoader();
const animal = await getAnimalById(PetId);

renderPetModal (animal);

 
backdrop.classList.add('is-open');
document.body.classList.add('no-scroll');
addEventListeners();

} catch (error) {
    console.error('Failed to load animal:', error);
    Swal.fire({
  icon: 'error',
  title: 'Помилка',
  text: 'Не вдалося завантажити інформацію про тваринку',
});
}finally
{
    hideLoader();
}
;
}


  // Закриття модального вікна
function closePetModal() {
 backdrop.classList.remove('is-open');
document.body.classList.remove('no-scroll');
  removeEventListeners();
  contentPet.innerHTML = '';
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
    openModalWindow(id); 
    // модалка Святослава + відкриття модалки js
  }
});


 //Кнопка закриття
    closeBtnPet.addEventListener('click', closePetModal);


 //Рендер 

function renderPetModal(animal) {
  const markup = `
  
<img 
  src="${animal.imgURL}" 
  srcset="${animal.imgURL} 1x, ${animal.imgURL2x} 2x"
  alt="${animal.name}" 
  class="pet-modal-img">

<div class="pet-modal-info">

<div class="pet-modal-data">
<p class="pet-modal-species">${animal.species}</p>

<h3 class="pet-modal-name">${animal.name}</h3>

<div class="pet-modal-meta">
<p class="pet-modal-age">${animal.age}</p>
<p class="pet-modal-gender">${animal.sex}</p>
</div>
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

