import{A as q,S as E,N as k,P as C,K as $,a as g,b as h}from"./assets/vendor-C56-LFmk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d=document.querySelector(".mobile-menu"),A=document.querySelector(".burger-menu.bth-open"),x=document.querySelector(".mobile-menu .close-btn"),M=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),f=()=>d.classList.toggle("is-open"),y=()=>document.body.classList.toggle("is-scroll-disabled");d.addEventListener("click",e=>{e.target===d&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("is-open")&&b()});const b=()=>{f(),y()};A.addEventListener("click",()=>{f(),y()});x.addEventListener("click",()=>{f(),y()});M.forEach(e=>{e.addEventListener("click",b)});new q(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new E(".swiper",{modules:[k,C,$],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const p=document.querySelector(".backdrop"),O=document.querySelector(".modal-close"),I=document.querySelector(".modal-form");let P;O.addEventListener("click",u);p.addEventListener("click",e=>{e.target===p&&u()});function B(e){e.key==="Escape"&&u()}function u(){p.classList.add("visually-hidden"),document.removeEventListener("keydown",B),document.body.style.overflow=""}I.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:o,comment:r}=e.target.elements,s={name:t.value,phone:o.value,animalId:P,comment:r.value};try{const c=(await g.post("https://paw-hut.b.goit.study/api/orders",s)).data;h.fire({title:"Success!",icon:"success",draggable:!0,timer:1e3}),e.target.reset(),u()}catch{h.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});const S=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),D=document.querySelector(".categories-list"),i=document.querySelector(".loader");let l=1;const w=N();function N(){var e=window.innerWidth;return e>=1440?9:8}let m="",L=0;const j=()=>i==null?void 0:i.classList.remove("hidden"),T=()=>i==null?void 0:i.classList.add("hidden"),W=e=>{const t=e.categories.map(o=>`<span class="info-categories">${o.name}</span>`).join("");return`
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
  `},H=e=>{S.insertAdjacentHTML("beforeend",e.map(W).join(""))},v=async()=>{j();try{const t=(await g.get("https://paw-hut.b.goit.study/api/animals",{params:{page:l,limit:w,...m&&{categoryId:m}}})).data;if(L=t.totalItems,t.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}H(t.animals),l+=1,l*w>=L?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e)}finally{T()}},K=async()=>{try{const t=(await g.get("https://paw-hut.b.goit.study/api/categories")).data;D.innerHTML=`<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>`+t.map(o=>`<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${o._id}">
            ${o.name}
          </button>
        </li>`).join(""),F()}catch(e){console.error("Помилка завантаження категорій:",e)}},F=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),t.classList.add("active"),m=t.dataset.id,l=1,S.innerHTML="",a.disabled=!1,a.textContent="Показати більше",v()})})};K();v();a.addEventListener("click",v);
//# sourceMappingURL=index.js.map
