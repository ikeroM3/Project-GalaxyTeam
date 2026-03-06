import{A as L,S,N as q,P as C,K as E,a as m,b as y}from"./assets/vendor-C56-LFmk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const k=document.querySelector(".mobile-menu"),$=document.querySelector(".burger-menu.bth-open"),A=document.querySelector(".mobile-menu .close-btn"),x=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),g=()=>k.classList.toggle("is-open"),f=()=>document.body.classList.toggle("is-scroll-disabled"),M=()=>{g(),f()};$.addEventListener("click",()=>{g(),f()});A.addEventListener("click",()=>{g(),f()});x.forEach(e=>{e.addEventListener("click",M)});new L(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new S(".swiper",{modules:[q,C,E],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const u=document.querySelector(".backdrop"),O=document.querySelector(".modal-close"),I=document.querySelector(".modal-form");let P;O.addEventListener("click",d);u.addEventListener("click",e=>{e.target===u&&d()});function B(e){e.key==="Escape"&&d()}function d(){u.classList.add("visually-hidden"),document.removeEventListener("keydown",B),document.body.style.overflow=""}I.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:o,comment:i}=e.target.elements,s={name:t.value,phone:o.value,animalId:P,comment:i.value};try{const c=(await m.post("https://paw-hut.b.goit.study/api/orders",s)).data;y.fire({title:"Success!",icon:"success",draggable:!0,timer:1e3}),e.target.reset(),d()}catch{y.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});const w=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),D=document.querySelector(".categories-list"),r=document.querySelector(".loader");let l=1;const v=N();function N(){var e=window.innerWidth;return e>=1440?9:8}let p="",h=0;const j=()=>r==null?void 0:r.classList.remove("hidden"),T=()=>r==null?void 0:r.classList.add("hidden"),H=e=>{const t=e.categories.map(o=>`<span class="info-categories">${o.name}</span>`).join("");return`
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
  `},K=e=>{w.insertAdjacentHTML("beforeend",e.map(H).join(""))},b=async()=>{j();try{const t=(await m.get("https://paw-hut.b.goit.study/api/animals",{params:{page:l,limit:v,...p&&{categoryId:p}}})).data;if(h=t.totalItems,t.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}K(t.animals),l+=1,l*v>=h?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e)}finally{T()}},W=async()=>{try{const t=(await m.get("https://paw-hut.b.goit.study/api/categories")).data;D.innerHTML=`<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>`+t.map(o=>`<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${o._id}">
            ${o.name}
          </button>
        </li>`).join(""),F()}catch(e){console.error("Помилка завантаження категорій:",e)}},F=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),t.classList.add("active"),p=t.dataset.id,l=1,w.innerHTML="",a.disabled=!1,a.textContent="Показати більше",b()})})};W();b();a.addEventListener("click",b);
//# sourceMappingURL=index.js.map
