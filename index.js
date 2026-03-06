import{A as h,S as v,N as L,P as w,K as C,a as b}from"./assets/vendor-Btx0yHoX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))g(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&g(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function g(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const q=document.querySelector(".mobile-menu"),S=document.querySelector(".burger-menu.bth-open"),$=document.querySelector(".mobile-menu .close-btn"),A=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),d=()=>q.classList.toggle("is-open"),u=()=>document.body.classList.toggle("is-scroll-disabled"),x=()=>{d(),u()};S.addEventListener("click",()=>{d(),u()});$.addEventListener("click",()=>{d(),u()});A.forEach(e=>{e.addEventListener("click",x)});new h(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new v(".swiper",{modules:[L,w,C],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const y=document.querySelector(".pets-list"),o=document.querySelector(".loadmore-btn"),E=document.querySelector(".categories-list"),a=document.querySelector(".loader");let r=1;const m=M();function M(){var e=window.innerWidth;return e>=1440?9:8}let l="",f=0;const k=()=>a==null?void 0:a.classList.remove("hidden"),O=()=>a==null?void 0:a.classList.add("hidden"),P=e=>{const t=e.categories.map(i=>`<span class="info-categories">${i.name}</span>`).join("");return`
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
  `},I=e=>{y.insertAdjacentHTML("beforeend",e.map(P).join(""))},p=async()=>{k();try{const t=(await b.get("https://paw-hut.b.goit.study/api/animals",{params:{page:r,limit:m,...l&&{categoryId:l}}})).data;if(f=t.totalItems,t.animals.length===0){o.disabled=!0,o.textContent="Кінець";return}I(t.animals),r+=1,r*m>=f?(o.disabled=!0,o.textContent="Кінець"):(o.disabled=!1,o.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e)}finally{O()}},B=async()=>{try{const t=(await b.get("https://paw-hut.b.goit.study/api/categories")).data;E.innerHTML=`<li class="pets-list-categ-item">
        <button class="pets-btn-categ active" data-id="">
          Всі
        </button>
      </li>`+t.map(i=>`<li class="pets-list-categ-item">
          <button class="pets-btn-categ" data-id="${i._id}">
            ${i.name}
          </button>
        </li>`).join(""),N()}catch(e){console.error("Помилка завантаження категорій:",e)}},N=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),t.classList.add("active"),l=t.dataset.id,r=1,y.innerHTML="",o.disabled=!1,o.textContent="Показати більше",p()})})};B();p();o.addEventListener("click",p);
//# sourceMappingURL=index.js.map
