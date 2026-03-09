import{a as m,S as P,A as G,b as B,N as O,P as T,K as j}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const k of i.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&o(k)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const v=document.querySelector(".mobile-menu"),V=document.querySelector(".burger-menu.bth-open"),K=document.querySelector(".mobile-menu .close-btn"),z=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),F=document.querySelectorAll(".list-mob, .mob-menu"),S=()=>v.classList.toggle("is-open"),q=()=>document.body.classList.toggle("is-scroll-disabled");v.addEventListener("click",e=>{e.target===v&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&b()});const b=()=>{S(),q()};V.addEventListener("click",()=>{S(),q()});K.addEventListener("click",()=>{S(),q()});z.forEach(e=>{e.addEventListener("click",b)});F.forEach(e=>{e.addEventListener("click",b)});const C="https://paw-hut.b.goit.study/api",U=async({page:e=1,limit:t=9,categoryId:n=""}={})=>{try{return(await m.get(`${C}/animals`,{params:{page:e,limit:t,...n&&{categoryId:n}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},Z=async()=>{try{return(await m.get(`${C}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},J=async e=>{try{return(await m.post(`${C}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},f=document.querySelector(".backdrop"),Q=document.querySelector(".modal-close"),X=document.querySelector(".modal-form");let W=null;function Y(e){W=e,f.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",H)}function L(){f.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",H)}function H(e){e.key==="Escape"&&L()}Q.addEventListener("click",L);f.addEventListener("click",e=>{e.target===f&&L()});X.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comment:o}=e.target.elements,s={name:t.value,phone:n.value,animalId:W};o.value.trim()&&(s.comment=o.value.trim());try{await J(s),P.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),L()}catch{P.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function ee(e,t){e.innerHTML=`
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
  `}const c=document.querySelector(".backdrop-pet"),A=c.querySelector(".pet-modal-content"),te=c.querySelector(".pet-modal-close-btn");let l=null,d=null;function se(e){e&&(ee(A,e),c.classList.remove("visually-hidden"),c.classList.add("is-open"),document.body.classList.add("no-scroll"),ne())}function g(){c.classList.remove("is-open"),document.body.classList.remove("no-scroll"),oe(),A.innerHTML=""}function ne(){l||(l=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",l)),d||(d=e=>{e.target===c&&g()},c.addEventListener("click",d))}function oe(){l&&(document.removeEventListener("keydown",l),l=null),d&&(c.removeEventListener("click",d),d=null)}te.addEventListener("click",g);A.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),Y(e.target.dataset.animalId))});new G(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new B(".swiper-about",{modules:[O,T,j],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:window.innerWidth<768},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const ie=e=>{const t=e.categories.map(n=>`<span class="info-categories">${n.name}</span>`).join("");return`
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
  `},ae=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(ie).join(""))},re=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(n=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${n._id}">${n.name}</button>
          </li>`).join("")},M=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),ce=document.querySelector(".categories-list"),u=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let y=1,w=N(),h=[],D="",I=0;function N(){return window.innerWidth>=1440?9:8}const le=()=>u==null?void 0:u.classList.remove("visually-hidden"),de=()=>u==null?void 0:u.classList.add("visually-hidden"),ue=()=>r==null?void 0:r.classList.remove("visually-hidden"),pe=()=>r==null?void 0:r.classList.add("visually-hidden");async function R(e,t){r?ue():le();try{return await e(t)}finally{r?pe():de()}}const _=()=>{y=1,h=[],M.innerHTML="",a.disabled=!1,a.textContent="Показати більше"},E=async()=>{try{const e=await R(U,{page:y,limit:w,categoryId:D});if(h=[...h,...e.animals],I=e.totalItems,e.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}ae(M,e.animals),y*w>=I?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),a.disabled=!1,a.textContent="Спробувати ще раз"}},me=async()=>{try{const e=await R(Z);re(ce,e),ve()}catch(e){console.error("Помилка завантаження категорій:",e)}},ve=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),D=t.dataset.id,_(),E()})})};M.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),n=h.find(o=>o._id===t.dataset.animalId);n&&se(n)}});a.addEventListener("click",()=>{y+=1,E()});window.addEventListener("resize",()=>{const e=N();e!==w&&(w=e,_(),E())});me();E();const x=document.querySelector(".pets-list-item");if(x){const{height:e}=x.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const $="/Project-GalaxyTeam/assets/icons-DVIhtMkZ.svg",p=document.querySelector(".success-loader"),fe=()=>p==null?void 0:p.classList.remove("visually-hidden"),ge=()=>p==null?void 0:p.classList.add("visually-hidden"),ye=document.querySelector(".swiper-reviews .swiper-wrapper");function we(e){const t=e.map(({rate:n,description:o,author:s})=>`
      <div class="swiper-slide">
        <div class="review-card-slide">
          <div class="rating star-icon value-${Math.floor(n)} ${n%1===.5?"half":""}">
            <div class="star-container">
              ${`
              <div class="star">
                <svg class="star-empty"><use href="${$}#star-empty"></use></svg>
                <svg class="star-half"><use href="${$}#star-half"></use></svg>
                <svg class="star-filled"><use href="${$}#star-filled"></use></svg>
              </div>
              `.repeat(5)}
            </div>
          </div>
          <p class="review-card-text">${o}</p>
          <span class="review-author">${s}</span>
        </div>
      </div>`).join("");ye.insertAdjacentHTML("beforeend",t)}m.defaults.baseURL="https://paw-hut.b.goit.study/";async function he(){const{data:e}=await m.get("/api/feedbacks",{params:{page:1,limit:25}});return e.feedbacks}async function be(){fe();try{const e=await he();we(e),new B(".swiper-reviews",{modules:[O,T,j],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:50}}})}catch(e){console.error("API Error:",e)}finally{ge()}}be();
//# sourceMappingURL=index.js.map
