import axios from "axios"
import Swal from 'sweetalert2'

const modalWindow = document.querySelector(".backdrop")
const closeButton = document.querySelector(".modal-close")
const modalForm = document.querySelector(".modal-form")

let currentAnimalID; //для прийому id тварини при відкритті модалки з описом

//Закриття через кнопку modal-close
closeButton.addEventListener("click", closeModalWindow)

//Закриття через клік за межі вікна

modalWindow.addEventListener("click", e => {
    if (e.target === modalWindow) {
        closeModalWindow()
    }
})

// Закриття через ESCAPE

function closeOnEscape(e){
    if (e.key === "Escape") {
        closeModalWindow()
    }
}


function closeModalWindow(){
    modalWindow.classList.add("visually-hidden")
    document.removeEventListener("keydown", closeOnEscape)
    document.body.style.overflow = ""

}

export function openModalWindow(animalId) {
  currentAnimalID = animalId
    modalWindow.classList.remove("visually-hidden")
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
}

//сабміт форми та запит на сервер
modalForm.addEventListener("submit", async e => {
    e.preventDefault()
    const {name, phone, comment} = e.target.elements
    const formData = {
        name: name.value,
        phone: phone.value,
        animalId: currentAnimalID,
        comment: comment.value
    }
    try {
        const response = await axios.post("https://paw-hut.b.goit.study/api/orders", formData)
        const orderData = response.data
    
    Swal.fire({
    title: "Success!",
    icon: "success",
        draggable: true,
     timer: 1000
    });
        e.target.reset()
         closeModalWindow()
    }
   
    catch (error) {
        Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
});
    }
})