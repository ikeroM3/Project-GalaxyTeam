import{a as p,S as M,A as _,b as I,N as x,P as B,K as O}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const E of a.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const v=document.querySelector(".mobile-menu"),R=document.querySelector(".burger-menu.bth-open"),V=document.querySelector(".mobile-menu .close-btn"),G=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),K=document.querySelectorAll(".list-mob, .mob-menu"),$=()=>v.classList.toggle("is-open"),S=()=>document.body.classList.toggle("is-scroll-disabled");v.addEventListener("click",e=>{e.target===v&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&b()});const b=()=>{$(),S()};R.addEventListener("click",()=>{$(),S()});V.addEventListener("click",()=>{$(),S()});G.forEach(e=>{e.addEventListener("click",b)});K.forEach(e=>{e.addEventListener("click",b)});const q="https://paw-hut.b.goit.study/api",z=async({page:e=1,limit:t=9,categoryId:s=""}={})=>{try{return(await p.get(`${q}/animals`,{params:{page:e,limit:t,...s&&{categoryId:s}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},F=async()=>{try{return(await p.get(`${q}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},U=async e=>{try{return(await p.post(`${q}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},f=document.querySelector(".backdrop"),Z=document.querySelector(".modal-close"),J=document.querySelector(".modal-form");let T=null;function Q(e){T=e,f.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",j)}function h(){f.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",j)}function j(e){e.key==="Escape"&&h()}Z.addEventListener("click",h);f.addEventListener("click",e=>{e.target===f&&h()});J.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:s,comment:o}=e.target.elements,n={name:t.value,phone:s.value,animalId:T,comment:o.value};try{await U(n),M.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),h()}catch{M.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function X(e,t){e.innerHTML=`
    <img src="${t.image}" alt="${t.name}" class="pet-modal-img">
    <div class="pet-modal-info">
      <div class="pet-modal-data">
        <p class="pet-modal-species">${t.species}</p>
        <h3 class="pet-modal-name">${t.name}</h3>
        <div class="pet-modal-meta">
          <p class="pet-modal-age">${t.age}</p>
          <p class="pet-modal-gender">${t.gender}</p>
        </div>
      </div>
      <ul class="pet-modal-list">
        <li class="pet-modal-item">
          <h4>Опис:</h4>
          <p>${t.description}</p>
        </li>
        <li class="pet-modal-item">
          <h4>Здоров'я:</h4>
          <p>${t.healthStatus}</p>
        </li>
        <li class="pet-modal-item">
          <h4>Поведінка:</h4>
          <p>${t.behavior}</p>
        </li>
      </ul>
      <button class="take-btn" data-animal-id="${t._id}">Взяти додому</button>
    </div>
  `}const u=document.querySelector(".pet-modal-overlay"),A=document.querySelector(".pet-modal-content"),Y=document.querySelector(".pet-modal-close-btn");let r=null,c=null;function ee(e){e&&(X(A,e),u.classList.remove("visually-hidden"),u.classList.add("is-open"),document.body.classList.add("no-scroll"),te())}function g(){u.classList.remove("is-open"),document.body.classList.remove("no-scroll"),se(),A.innerHTML=""}function te(){r||(r=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",r)),c||(c=e=>{e.target===u&&g()},u.addEventListener("click",c))}function se(){r&&(document.removeEventListener("keydown",r),r=null),c&&(u.removeEventListener("click",c),c=null)}Y.addEventListener("click",g);A.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),Q(e.target.dataset.animalId))});new _(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new I(".swiper-about",{modules:[x,B,O],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:window.innerWidth<768},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const ne=e=>{const t=e.categories.map(s=>`<span class="info-categories">${s.name}</span>`).join("");return`
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
  `},oe=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(ne).join(""))},ae=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(s=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${s._id}">${s.name}</button>
          </li>`).join("")},C=document.querySelector(".pets-list"),i=document.querySelector(".loadmore-btn"),ie=document.querySelector(".categories-list"),l=document.querySelector(".loader");let m=1,y=H(),w=[],W="",P=0;function H(){return window.innerWidth>=1440?9:8}const re=()=>l==null?void 0:l.classList.remove("visually-hidden"),ce=()=>l==null?void 0:l.classList.add("visually-hidden");async function D(e,t){re();try{return await e(t)}finally{ce()}}const N=()=>{m=1,w=[],C.innerHTML="",i.disabled=!1,i.textContent="Показати більше"},L=async()=>{try{const e=await D(z,{page:m,limit:y,categoryId:W});if(w=[...w,...e.animals],P=e.totalItems,e.animals.length===0){i.disabled=!0,i.textContent="Кінець";return}oe(C,e.animals),m+=1,m*y>=P?(i.disabled=!0,i.textContent="Кінець"):(i.disabled=!1,i.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),i.disabled=!1,i.textContent="Спробувати ще раз"}},le=async()=>{try{const e=await D(F);ae(ie,e),de()}catch(e){console.error("Помилка завантаження категорій:",e)}},de=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),W=t.dataset.id,N(),L()})})};C.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),s=w.find(o=>o._id===t.dataset.animalId);s&&ee(s)}});i.addEventListener("click",L);window.addEventListener("resize",()=>{const e=H();e!==y&&(y=e,N(),L())});le();L();const k="/Project-GalaxyTeam/assets/icons-DVIhtMkZ.svg",d=document.querySelector(".success-loader"),ue=()=>d==null?void 0:d.classList.remove("visually-hidden"),pe=()=>d==null?void 0:d.classList.add("visually-hidden"),me=document.querySelector(".swiper-reviews .swiper-wrapper");function ve(e){const t=e.map(({rate:s,description:o,author:n})=>`
      <div class="swiper-slide">
        <div class="review-card-slide">
          <div class="rating star-icon value-${Math.floor(s)} ${s%1===.5?"half":""}">
            <div class="star-container">
              ${`
              <div class="star">
                <svg class="star-empty"><use href="${k}#star-empty"></use></svg>
                <svg class="star-half"><use href="${k}#star-half"></use></svg>
                <svg class="star-filled"><use href="${k}#star-filled"></use></svg>
              </div>
              `.repeat(5)}
            </div>
          </div>
          <p class="review-card-text">${o}</p>
          <span class="review-author">${n}</span>
        </div>
      </div>`).join("");me.insertAdjacentHTML("beforeend",t)}p.defaults.baseURL="https://paw-hut.b.goit.study/";async function fe(){const{data:e}=await p.get("/api/feedbacks");return e.feedbacks}async function ge(){ue();try{const e=await fe();ve(e),new I(".swiper-reviews",{modules:[x,B,O],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:50}}})}catch(e){console.error("API Error:",e)}finally{pe()}}ge();
//# sourceMappingURL=index.js.map
