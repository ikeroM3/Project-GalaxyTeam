import{a as m,S as A,A as _,b as P,N as I,P as O,K as z}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const k of i.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&o(k)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const v=document.querySelector(".mobile-menu"),D=document.querySelector(".burger-menu.bth-open"),G=document.querySelector(".mobile-menu .close-btn"),K=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),V=document.querySelectorAll(".list-mob, .mob-menu"),$=()=>v.classList.toggle("is-open"),S=()=>document.body.classList.toggle("is-scroll-disabled");v.addEventListener("click",e=>{e.target===v&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&h()});const h=()=>{$(),S()};D.addEventListener("click",()=>{$(),S()});G.addEventListener("click",()=>{$(),S()});K.forEach(e=>{e.addEventListener("click",h)});V.forEach(e=>{e.addEventListener("click",h)});const q="https://paw-hut.b.goit.study/api",F=async({page:e=1,limit:t=9,categoryId:s=""}={})=>{try{return(await m.get(`${q}/animals`,{params:{page:e,limit:t,...s&&{categoryId:s}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},U=async()=>{try{return(await m.get(`${q}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},J=async e=>{try{return(await m.post(`${q}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},g=document.querySelector(".backdrop"),Q=document.querySelector(".modal-close"),X=document.querySelector(".modal-form");let T=null;function Y(e){T=e,g.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",j)}function L(){g.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",j)}function j(e){e.key==="Escape"&&L()}Q.addEventListener("click",L);g.addEventListener("click",e=>{e.target===g&&L()});X.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:s,comment:o}=e.target.elements,n={name:t.value,phone:s.value,animalId:T,comment:o.value};try{await J(n),A.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),L()}catch{A.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function Z(e,t){e.innerHTML=`
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
  `}const p=document.querySelector(".pet-modal-overlay"),M=document.querySelector(".pet-modal-content"),ee=document.querySelector(".pet-modal-close-btn");let c=null,l=null;function te(e){e&&(Z(M,e),p.classList.remove("visually-hidden"),p.classList.add("is-open"),document.body.classList.add("no-scroll"),se())}function f(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll"),ne(),M.innerHTML=""}function se(){c||(c=e=>{e.key==="Escape"&&f()},document.addEventListener("keydown",c)),l||(l=e=>{e.target===p&&f()},p.addEventListener("click",l))}function ne(){c&&(document.removeEventListener("keydown",c),c=null),l&&(p.removeEventListener("click",l),l=null)}ee.addEventListener("click",f);M.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(f(),Y(e.target.dataset.animalId))});new _(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new P(".swiper-about",{modules:[I,O,z],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const oe=e=>{const t=e.categories.map(s=>`<span class="info-categories">${s.name}</span>`).join("");return`
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
          </li>`).join("")},C=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),re=document.querySelector(".categories-list"),d=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let y=1,w=W(),b=[],H="",x=0;function W(){return window.innerWidth>=1440?9:8}const ce=()=>d==null?void 0:d.classList.remove("visually-hidden"),le=()=>d==null?void 0:d.classList.add("visually-hidden"),de=()=>r==null?void 0:r.classList.remove("visually-hidden"),ue=()=>r==null?void 0:r.classList.add("visually-hidden");async function N(e,t){r?de():ce();try{return await e(t)}finally{r?ue():le()}}const R=()=>{y=1,b=[],C.innerHTML="",a.disabled=!1,a.textContent="Показати більше"},E=async()=>{try{const e=await N(F,{page:y,limit:w,categoryId:H});if(b=[...b,...e.animals],x=e.totalItems,e.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}ie(C,e.animals),y*w>=x?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),a.disabled=!1,a.textContent="Спробувати ще раз"}},pe=async()=>{try{const e=await N(U);ae(re,e),me()}catch(e){console.error("Помилка завантаження категорій:",e)}},me=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),H=t.dataset.id,R(),E()})})};C.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),s=b.find(o=>o._id===t.dataset.animalId);s&&te(s)}});a.addEventListener("click",()=>{y+=1,E()});window.addEventListener("resize",()=>{const e=W();e!==w&&(w=e,R(),E())});pe();E();const B=document.querySelector(".pets-list-item");if(B){const{height:e}=B.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const u=document.querySelector(".success-loader"),ve=()=>u==null?void 0:u.classList.remove("visually-hidden"),ge=()=>u==null?void 0:u.classList.add("visually-hidden"),fe=document.querySelector(".swiper-reviews .swiper-wrapper");function ye(e){const t=e.map(({rate:s,description:o,author:n})=>`
        <div class="swiper-slide">
          <div class="review-card-slide">
            <div class="rating star-icon value-${Math.floor(s)} ${s%1===.5?"half":""}">
              <div class="star-container">
                ${`<div class="star">
    <svg class="star-empty">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
    <svg class="star-half">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
    <svg class="star-filled">  <symbol id="star-empty" viewBox="0 0 34 32">
          <path
            d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"
          />
        </symbol></svg>
</div>`.repeat(5)}
              </div>
            </div>
            <p class="review-card-text">${o}</p>
            <span class="review-author">${n}</span>
          </div>
        </div>`).join("");fe.insertAdjacentHTML("beforeend",t)}m.defaults.baseURL="https://paw-hut.b.goit.study/";async function we(){const{data:e}=await m.get("/api/feedbacks");return e.feedbacks}async function be(){ve();try{const e=await we();ye(e),new P(".swiper-reviews",{modules:[I,O,z],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,renderBullet:function(t,s){return`
            <span class="${s}">
              <svg width="4" height="4" viewBox="0 0 4 4">
                <circle cx="2" cy="2" r="2"></circle>
              </svg>
            </span>
          `}},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:30}}})}catch(e){console.error("API Error:",e)}finally{ge()}}be();
//# sourceMappingURL=index.js.map
