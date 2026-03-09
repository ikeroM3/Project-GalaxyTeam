import { openModalWindow } from './order-modal.js';
import { renderPetModal } from './animal-details-render.js';

const backdrop = document.querySelector('.backdrop-pet');
const content = backdrop.querySelector('.pet-modal-content');
const closeBtn = backdrop.querySelector('.pet-modal-close-btn');

let escListener = null;
let outsideClickListener = null;

export function openPetModal(animal) {
  if (!animal) return;
  renderPetModal(content, animal);
  backdrop.classList.remove('visually-hidden');
  backdrop.classList.add('is-open');
  document.body.classList.add('no-scroll');
  addEventListeners();
}

function closePetModal() {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  removeEventListeners();
  content.innerHTML = '';
}

function addEventListeners() {
  if (!escListener) {
    escListener = e => {
      if (e.key === 'Escape') closePetModal();
    };
    document.addEventListener('keydown', escListener);
  }
  if (!outsideClickListener) {
    outsideClickListener = e => {
      if (e.target === backdrop) closePetModal();
    };
    backdrop.addEventListener('click', outsideClickListener);
  }
}

function removeEventListeners() {
  if (escListener) {
    document.removeEventListener('keydown', escListener);
    escListener = null;
  }
  if (outsideClickListener) {
    backdrop.removeEventListener('click', outsideClickListener);
    outsideClickListener = null;
  }
}

closeBtn.addEventListener('click', closePetModal);

content.addEventListener('click', e => {
  if (e.target.classList.contains('take-btn')) {
    closePetModal();
    openModalWindow(e.target.dataset.animalId);
  }
});
