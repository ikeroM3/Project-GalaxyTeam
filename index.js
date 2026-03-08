import{a as m,S as x,A as N,b as P,N as I,P as O,K as _}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const k of i.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&o(k)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const v=document.querySelector(".mobile-menu"),R=document.querySelector(".burger-menu.bth-open"),D=document.querySelector(".mobile-menu .close-btn"),K=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),U=document.querySelectorAll(".list-mob, .mob-menu"),C=()=>v.classList.toggle("is-open"),$=()=>document.body.classList.toggle("is-scroll-disabled");v.addEventListener("click",e=>{e.target===v&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&b()});const b=()=>{C(),$()};R.addEventListener("click",()=>{C(),$()});D.addEventListener("click",()=>{C(),$()});K.forEach(e=>{e.addEventListener("click",b)});U.forEach(e=>{e.addEventListener("click",b)});const S="https://paw-hut.b.goit.study/api",V=async({page:e=1,limit:t=9,categoryId:s=""}={})=>{try{return(await m.get(`${S}/animals`,{params:{page:e,limit:t,...s&&{categoryId:s}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},F=async()=>{try{return(await m.get(`${S}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},Z=async e=>{try{return(await m.post(`${S}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},f=document.querySelector(".backdrop"),J=document.querySelector(".modal-close"),Q=document.querySelector(".modal-form");let H=null;function X(e){H=e,f.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",T)}function L(){f.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",T)}function T(e){e.key==="Escape"&&L()}J.addEventListener("click",L);f.addEventListener("click",e=>{e.target===f&&L()});Q.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:s,comment:o}=e.target.elements,n={name:t.value,phone:s.value,animalId:H,comment:o.value};try{await Z(n),x.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),L()}catch{x.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function Y(e,t){e.innerHTML=`
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
  `}const p=document.querySelector(".pet-modal-overlay"),q=document.querySelector(".pet-modal-content"),ee=document.querySelector(".pet-modal-close-btn");let c=null,l=null;function te(e){e&&(Y(q,e),p.classList.remove("visually-hidden"),p.classList.add("is-open"),document.body.classList.add("no-scroll"),se())}function g(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll"),ne(),q.innerHTML=""}function se(){c||(c=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",c)),l||(l=e=>{e.target===p&&g()},p.addEventListener("click",l))}function ne(){c&&(document.removeEventListener("keydown",c),c=null),l&&(p.removeEventListener("click",l),l=null)}ee.addEventListener("click",g);q.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),X(e.target.dataset.animalId))});new N(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new P(".swiper-about",{modules:[I,O,_],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const oe=e=>{const t=e.categories.map(s=>`<span class="info-categories">${s.name}</span>`).join("");return`
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
  `},ie=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(oe).join(""))},ae=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(s=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${s._id}">${s.name}</button>
          </li>`).join("")},A=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),re=document.querySelector(".categories-list"),d=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let y=1,w=W(),h=[],j="",M=0;function W(){return window.innerWidth>=1440?9:8}const ce=()=>d==null?void 0:d.classList.remove("visually-hidden"),le=()=>d==null?void 0:d.classList.add("visually-hidden"),de=()=>r==null?void 0:r.classList.remove("visually-hidden"),ue=()=>r==null?void 0:r.classList.add("visually-hidden");async function z(e,t){r?de():ce();try{return await e(t)}finally{r?ue():le()}}const G=()=>{y=1,h=[],A.innerHTML="",a.disabled=!1,a.textContent="Показати більше"},E=async()=>{try{const e=await z(V,{page:y,limit:w,categoryId:j});if(h=[...h,...e.animals],M=e.totalItems,e.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}ie(A,e.animals),y*w>=M?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),a.disabled=!1,a.textContent="Спробувати ще раз"}},pe=async()=>{try{const e=await z(F);ae(re,e),me()}catch(e){console.error("Помилка завантаження категорій:",e)}},me=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),j=t.dataset.id,G(),E()})})};A.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),s=h.find(o=>o._id===t.dataset.animalId);s&&te(s)}});a.addEventListener("click",()=>{y+=1,E()});window.addEventListener("resize",()=>{const e=W();e!==w&&(w=e,G(),E())});pe();E();const B=document.querySelector(".pets-list-item");if(B){const{height:e}=B.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const u=document.querySelector(".success-loader"),ve=()=>u==null?void 0:u.classList.remove("visually-hidden"),fe=()=>u==null?void 0:u.classList.add("visually-hidden"),ge=document.querySelector(".swiper-reviews .swiper-wrapper");function ye(e){const t=e.map(({rate:s,description:o,author:n})=>`
        <div class="swiper-slide">
          <div class="review-card-slide">
            <div class="rating star-icon value-${Math.floor(s)} ${s%1===.5?"half":""}">
              <div class="star-container">
                ${`<div class="star">
    <svg class="star-empty" viewBox="0 0 34 32" width="20" height="20">
    <path d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"/>
    </svg>
    <svg class="star-half" viewBox="0 0 34 32" width="20" height="20"> <path d="M11.5312 3.80664C11.7032 3.39816 12.2968 3.39816 12.4688 3.80664L14.4971 8.625C14.7155 9.14358 15.2076 9.49471 15.7676 9.53906L21.0332 9.95605C21.4909 9.99232 21.6545 10.5412 21.3242 10.8213L17.3115 14.2168C16.8819 14.5804 16.6919 15.1542 16.8242 15.7021L18.0508 20.7783C18.1502 21.1902 17.6892 21.5518 17.291 21.3115H17.29L12.7832 18.5918C12.3023 18.3016 11.6977 18.3016 11.2168 18.5918L6.70898 21.3115C6.31078 21.5518 5.84983 21.1902 5.94922 20.7783L7.17578 15.7021C7.30809 15.1543 7.11814 14.5805 6.68848 14.2168L2.67578 10.8213C2.34544 10.5412 2.5091 9.99231 2.9668 9.95605L8.23242 9.53906C8.79243 9.49471 9.28456 9.14369 9.50293 8.625L11.5312 3.80664Z" fill="url(#paint0_linear_8242_16266)" stroke="#02060A" />
  <defs>
    <linearGradient id="paint0_linear_8242_16266" x1="2" y1="12.3716" x2="22" y2="12.3716" gradientUnits="userSpaceOnUse">
      <stop offset="0.5" stop-color="#02060A" />
      <stop offset="0.5" stop-color="#02060A" stop-opacity="0" />
    </linearGradient>
  </defs>
    </svg>
    <svg class="star-filled" viewBox="0 0 34 32" width="20" height="20"><path d="M16.941 25.621l10.179 6.144-2.701-11.579 8.993-7.791-11.842-1.005-4.628-10.92-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579z"/></svg>
</div>`.repeat(5)}
              </div>
            </div>
            <p class="review-card-text">${o}</p>
            <span class="review-author">${n}</span>
          </div>
        </div>`).join("");ge.insertAdjacentHTML("beforeend",t)}m.defaults.baseURL="https://paw-hut.b.goit.study/";async function we(){const{data:e}=await m.get("/api/feedbacks");return e.feedbacks}async function he(){ve();try{const e=await we();ye(e),new P(".swiper-reviews",{modules:[I,O,_],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,renderBullet:function(t,s){return`
            <span class="${s}">
              <svg width="4" height="4" viewBox="0 0 4 4">
                <circle cx="2" cy="2" r="2"></circle>
              </svg>
            </span>
          `}},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:30}}})}catch(e){console.error("API Error:",e)}finally{fe()}}he();
//# sourceMappingURL=index.js.map
