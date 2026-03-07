import { createOrder } from './api.js';
import Swal from 'sweetalert2';

const modalWindow = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close');
const modalForm = document.querySelector('.modal-form');

let currentAnimalID = null;

export function openModalWindow(animalId) {
  currentAnimalID = animalId;
  modalWindow.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscape);
}

function closeModalWindow() {
  modalWindow.classList.add('visually-hidden');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscape);
}

function onEscape(e) {
  if (e.key === 'Escape') closeModalWindow();
}

closeBtn.addEventListener('click', closeModalWindow);
modalWindow.addEventListener('click', e => {
  if (e.target === modalWindow) closeModalWindow();
});

modalForm.addEventListener('submit', async e => {
  e.preventDefault();
  const { name, phone, comment } = e.target.elements;
  const formData = {
    name: name.value,
    phone: phone.value,
    animalId: currentAnimalID,
    comment: comment.value,
  };
  try {
    await createOrder(formData);
    Swal.fire({
      title: 'Success!',
      icon: 'success',
      timer: 1000,
      draggable: true,
    });
    e.target.reset();
    closeModalWindow();
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }
});
