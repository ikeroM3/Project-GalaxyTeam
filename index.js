import{a as h,S as $,A as P,b as I,N as O,P as B,K as T}from"./assets/vendor-B_nt7KEY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const p=document.querySelector(".mobile-menu"),j=document.querySelector(".burger-menu.bth-open"),D=document.querySelector(".mobile-menu .close-btn"),H=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),N=document.querySelectorAll(".list-mob, .mob-menu"),w=()=>p.classList.toggle("is-open"),k=()=>document.body.classList.toggle("is-scroll-disabled");p.addEventListener("click",e=>{e.target===p&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.classList.contains("is-open")&&v()});const v=()=>{w(),k()};j.addEventListener("click",()=>{w(),k()});D.addEventListener("click",()=>{w(),k()});H.forEach(e=>{e.addEventListener("click",v)});N.forEach(e=>{e.addEventListener("click",v)});const f=document.querySelector(".backdrop"),W=document.querySelector(".modal-close"),K=document.querySelector(".modal-form");let x;W.addEventListener("click",y);f.addEventListener("click",e=>{e.target===f&&y()});function A(e){e.key==="Escape"&&y()}function y(){f.classList.add("visually-hidden"),document.removeEventListener("keydown",A),document.body.style.overflow=""}function _(e){x=e,f.classList.remove("visually-hidden"),document.addEventListener("keydown",A),document.body.style.overflow="hidden"}K.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comment:a}=e.target.elements,s={name:t.value,phone:n.value,animalId:x,comment:a.value};try{const u=(await h.post("https://paw-hut.b.goit.study/api/orders",s)).data;$.fire({title:"Success!",icon:"success",draggable:!0,timer:1e3}),e.target.reset(),y()}catch{$.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});const d=document.querySelector(".pet-modal-overlay");document.querySelector(".pet-modal-window");const F=document.querySelector(".pet-modal-close-btn"),E=document.querySelector(".pet-modal-content");let c=null,l=null;function z(e){if(!e)return console.error("Animal object is missing!");J(e),d.classList.remove("visually-hidden"),d.classList.add("is-open"),document.body.classList.add("no-scroll"),G()}function g(){d.classList.remove("is-open"),document.body.classList.remove("no-scroll"),V(),E.innerHTML=""}function G(){c||(c=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",c)),l||(l=e=>{e.target===d&&g()},d.addEventListener("click",l))}function V(){c&&(document.removeEventListener("keydown",c),c=null),l&&(d.removeEventListener("click",l),l=null)}E.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),_())});F.addEventListener("click",g);function J(e){const t=`
  
<img 
  src="${e.image}" 
  alt="${e.name}" 
  class="pet-modal-img">

<div class="pet-modal-info">

<div class="pet-modal-data">
<p class="pet-modal-species">${e.species}</p>

<h3 class="pet-modal-name">${e.name}</h3>

<div class="pet-modal-meta">
<p class="pet-modal-age">${e.age}</p>
<p class="pet-modal-gender">${e.gender}</p>
</div>
</div>
<ul class="pet-modal-list">

<li class="pet-modal-item">
<h4 class="pet-modal-title">Опис:</h4>
<p class="pet-modal-text">${e.description}</p>
</li>

<li class="pet-modal-item">
<h4 class="pet-modal-title">Здоров'я:</h4>
<p class="pet-modal-text">${e.healthStatus}</p>
</li>

<li class="pet-modal-item">
<h4 class="pet-modal-title">Поведінка:</h4>
<p class="pet-modal-text">${e.behavior}</p>
</li>

</ul>

<button type="button" class="take-btn">Взяти додому</button>

</div>
`;E.innerHTML=t}new P(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new I(".swiper",{modules:[O,B,T],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const S=document.querySelector(".pets-list"),i=document.querySelector(".loadmore-btn"),Q=document.querySelector(".categories-list"),r=document.querySelector(".loader");let m=1;const C=R();function R(){var e=window.innerWidth;return e>=1440?9:8}let b=[],L="",M=0;const U=()=>r==null?void 0:r.classList.remove("visually-hidden"),X=()=>r==null?void 0:r.classList.add("visually-hidden"),Y=e=>{const t=e.categories.map(n=>`<span class="info-categories">${n.name}</span>`).join("");return`
    <li class="pets-list-item" data-animal-id="${e._id}">
      <img class="gallery-image" src="${e.image}" alt="${e.name}" loading="lazy" />
      <div class="info">
        <p class="info-species">${e.species}</p>
        <p class="info-name">${e.name}</p>
       <div class="categories-box">${t}</div> 
        <div class="age-gender">
          <p class="info-age">${e.age}</p>
          <p class="info-gender">${e.gender}</p>
        </div>
        <p class="info-text">${e.shortDescription}</p> 
        </div>
        <button class="show-info-btn">Дізнатись більше</button>
     
    </li>
  `},Z=e=>{S.insertAdjacentHTML("beforeend",e.map(Y).join(""))},q=async()=>{U();try{const t=(await h.get("https://paw-hut.b.goit.study/api/animals",{params:{page:m,limit:C,...L&&{categoryId:L}}})).data;if(b=[...b,...t.animals],M=t.totalItems,t.animals.length===0){i.disabled=!0,i.textContent="Кінець";return}Z(t.animals),m+=1,m*C>=M?(i.disabled=!0,i.textContent="Кінець"):(i.disabled=!1,i.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e)}finally{X()}},ee=async()=>{try{const t=(await h.get("https://paw-hut.b.goit.study/api/categories")).data;Q.innerHTML=`<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>`+t.map(n=>`<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${n._id}">
            ${n.name}
          </button>
        </li>`).join(""),te()}catch(e){console.error("Помилка завантаження категорій:",e)}},te=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),L=t.dataset.id,m=1,S.innerHTML="",i.disabled=!1,i.textContent="Показати більше",q()})})};ee();q();i.addEventListener("click",q);S.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),n=b.find(a=>a._id===t.dataset.animalId);n&&z(n)}});
//# sourceMappingURL=index.js.map
