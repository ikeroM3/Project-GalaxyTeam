import{A as S,S as q,N as k,P as C,K as $,a as f,b as h}from"./assets/vendor-C56-LFmk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d=document.querySelector(".mobile-menu"),A=document.querySelector(".burger-menu.bth-open"),x=document.querySelector(".mobile-menu .close-btn"),M=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),O=document.querySelectorAll(".list-mob"),y=()=>d.classList.toggle("is-open"),b=()=>document.body.classList.toggle("is-scroll-disabled");d.addEventListener("click",e=>{e.target===d&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("is-open")&&u()});const u=()=>{y(),b()};A.addEventListener("click",()=>{y(),b()});x.addEventListener("click",()=>{y(),b()});M.forEach(e=>{e.addEventListener("click",u)});O.forEach(e=>{e.addEventListener("click",u)});new S(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new q(".swiper",{modules:[k,C,$],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const m=document.querySelector(".backdrop"),I=document.querySelector(".modal-close"),P=document.querySelector(".modal-form");let B;I.addEventListener("click",p);m.addEventListener("click",e=>{e.target===m&&p()});function D(e){e.key==="Escape"&&p()}function p(){m.classList.add("visually-hidden"),document.removeEventListener("keydown",D),document.body.style.overflow=""}P.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:o,comment:r}=e.target.elements,s={name:t.value,phone:o.value,animalId:B,comment:r.value};try{const c=(await f.post("https://paw-hut.b.goit.study/api/orders",s)).data;h.fire({title:"Success!",icon:"success",draggable:!0,timer:1e3}),e.target.reset(),p()}catch{h.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});const E=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),N=document.querySelector(".categories-list"),i=document.querySelector(".loader");let l=1;const L=j();function j(){var e=window.innerWidth;return e>=1440?9:8}let g="",w=0;const T=()=>i==null?void 0:i.classList.remove("hidden"),W=()=>i==null?void 0:i.classList.add("hidden"),H=e=>{const t=e.categories.map(o=>`<span class="info-categories">${o.name}</span>`).join("");return`
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
  `},K=e=>{E.insertAdjacentHTML("beforeend",e.map(H).join(""))},v=async()=>{T();try{const t=(await f.get("https://paw-hut.b.goit.study/api/animals",{params:{page:l,limit:L,...g&&{categoryId:g}}})).data;if(w=t.totalItems,t.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}K(t.animals),l+=1,l*L>=w?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e)}finally{W()}},F=async()=>{try{const t=(await f.get("https://paw-hut.b.goit.study/api/categories")).data;N.innerHTML=`<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>`+t.map(o=>`<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${o._id}">
            ${o.name}
          </button>
        </li>`).join(""),_()}catch(e){console.error("Помилка завантаження категорій:",e)}},_=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),t.classList.add("active"),g=t.dataset.id,l=1,E.innerHTML="",a.disabled=!1,a.textContent="Показати більше",v()})})};F();v();a.addEventListener("click",v);
//# sourceMappingURL=index.js.map
