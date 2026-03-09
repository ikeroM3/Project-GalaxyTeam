import{a as p,S as I,A as V,b as T,N as j,P as H,K as N}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const $ of a.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&o($)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const g=document.querySelector(".mobile-menu"),z=document.querySelector(".burger-menu.bth-open"),U=document.querySelector(".mobile-menu .close-btn"),Y=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),J=document.querySelectorAll(".list-mob, .mob-menu"),q=()=>g.classList.toggle("is-open"),A=()=>document.body.classList.toggle("is-scroll-disabled");g.addEventListener("click",e=>{e.target===g&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("is-open")&&L()});const L=()=>{q(),A()};z.addEventListener("click",()=>{q(),A()});U.addEventListener("click",()=>{q(),A()});Y.forEach(e=>{e.addEventListener("click",L)});J.forEach(e=>{e.addEventListener("click",L)});const C="https://paw-hut.b.goit.study/api",Q=async({page:e=1,limit:t=9,categoryId:s=""}={})=>{try{return(await p.get(`${C}/animals`,{params:{page:e,limit:t,...s&&{categoryId:s}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},X=async()=>{try{return(await p.get(`${C}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},Z=async e=>{try{return(await p.post(`${C}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},v=document.querySelector(".backdrop"),ee=document.querySelector(".modal-close"),te=document.querySelector(".modal-form");let W=null;function se(e){W=e,v.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",R)}function E(){v.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",R)}function R(e){e.key==="Escape"&&E()}ee.addEventListener("click",E);v.addEventListener("click",e=>{e.target===v&&E()});te.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:s,comment:o}=e.target.elements,n={name:t.value,phone:s.value,animalId:W};o.value.trim()&&(n.comment=o.value.trim());try{await Z(n),I.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),E()}catch{I.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function ne(e,t){e.innerHTML=`
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
  `}const l=document.querySelector(".backdrop-pet"),M=l.querySelector(".pet-modal-content"),oe=l.querySelector(".pet-modal-close-btn");let c=null,d=null;function ae(e){e&&(ne(M,e),l.classList.remove("visually-hidden"),l.classList.add("is-open"),document.body.classList.add("no-scroll"),ie())}function f(){l.classList.remove("is-open"),document.body.classList.remove("no-scroll"),re(),M.innerHTML=""}function ie(){c||(c=e=>{e.key==="Escape"&&f()},document.addEventListener("keydown",c)),d||(d=e=>{e.target===l&&f()},l.addEventListener("click",d))}function re(){c&&(document.removeEventListener("keydown",c),c=null),d&&(l.removeEventListener("click",d),d=null)}oe.addEventListener("click",f);M.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(f(),se(e.target.dataset.animalId))});new V(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new T(".swiper-about",{modules:[j,H,N],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active"},on:{init:x,slideChange:x},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});function x(e){const t=e.pagination.bullets,s=e.activeIndex;t.forEach((o,n)=>{o.classList.remove("bullet-small","bullet-medium","bullet-large");const a=Math.abs(n-s);a===0?o.classList.add("bullet-large"):a===1?o.classList.add("bullet-medium"):o.classList.add("bullet-small")})}const le=e=>{const t=e.categories.map(s=>`<span class="info-categories">${s.name}</span>`).join("");return`
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
  `},ce=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(le).join(""))},de=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(s=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${s._id}">${s.name}</button>
          </li>`).join("")},B=document.querySelector(".pets-list"),i=document.querySelector(".loadmore-btn"),ue=document.querySelector(".categories-list"),u=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let h=1,b=D(),y=[],_="",P=0;function D(){return window.innerWidth>=1440?9:8}const me=()=>u==null?void 0:u.classList.remove("visually-hidden"),pe=()=>u==null?void 0:u.classList.add("visually-hidden"),ge=()=>r==null?void 0:r.classList.remove("visually-hidden"),ve=()=>r==null?void 0:r.classList.add("visually-hidden");async function F(e,t){r?ge():me();try{return await e(t)}finally{r?ve():pe()}}const G=()=>{h=1,y=[],B.innerHTML="",i.disabled=!1,i.textContent="Показати більше"},k=async()=>{try{const e=await F(Q,{page:h,limit:b,categoryId:_});if(y=[...y,...e.animals],P=e.totalItems,e.animals.length===0){i.disabled=!0,i.textContent="Кінець";return}ce(B,e.animals),h*b>=P?(i.disabled=!0,i.textContent="Кінець"):(i.disabled=!1,i.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),i.disabled=!1,i.textContent="Спробувати ще раз"}},fe=async()=>{try{const e=await F(X);de(ue,e),he()}catch(e){console.error("Помилка завантаження категорій:",e)}},he=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),_=t.dataset.id,G(),k()})})};B.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),s=y.find(o=>o._id===t.dataset.animalId);s&&ae(s)}});i.addEventListener("click",()=>{h+=1,k()});window.addEventListener("resize",()=>{const e=D();e!==b&&(b=e,G(),k())});fe();k();const O=document.querySelector(".pets-list-item");if(O){const{height:e}=O.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const S="/Project-GalaxyTeam/assets/icons-B0h5IbbM.svg",m=document.querySelector(".success-loader"),be=()=>m==null?void 0:m.classList.remove("visually-hidden"),ye=()=>m==null?void 0:m.classList.add("visually-hidden"),we=document.querySelector(".swiper-reviews .swiper-wrapper");function Le(e){const t=e.map(({rate:s,description:o,author:n})=>`
      <div class="swiper-slide">
        <div class="review-card-slide">
          <div class="rating star-icon value-${Math.floor(s)} ${s%1===.5?"half":""}">
            <div class="star-container">
              ${`
              <div class="star">
                <svg class="star-empty"><use href="${S}#star-empty"></use></svg>
                <svg class="star-half"><use href="${S}#star-half"></use></svg>
                <svg class="star-filled"><use href="${S}#star-filled"></use></svg>
              </div>
              `.repeat(5)}
            </div>
          </div>
          <p class="review-card-text">${o}</p>
          <span class="review-author">${n}</span>
        </div>
      </div>`).join("");we.insertAdjacentHTML("beforeend",t)}p.defaults.baseURL="https://paw-hut.b.goit.study/";async function Ee(){const{data:e}=await p.get("/api/feedbacks",{params:{page:1,limit:25}});return e.feedbacks}async function ke(){be();try{const e=await Ee();Le(e),new T(".swiper-reviews",{modules:[j,H,N],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:50}}})}catch(e){console.error("API Error:",e)}finally{ye()}}ke();const w=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.scrollY>400?w.classList.add("show"):w.classList.remove("show")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),w.blur()});const $e=document.querySelectorAll("#themeBtn, #themeBtnMob"),Se=document.querySelectorAll("#themeBtnLabel, #themeBtnMobLabel");function K(e){document.documentElement.setAttribute("data-theme",e),Se.forEach(t=>t.textContent=e==="light"?"ON":"OFF")}$e.forEach(e=>{e.addEventListener("click",()=>{const s=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";localStorage.setItem("theme",s),K(s)})});K(localStorage.getItem("theme")||"light");
//# sourceMappingURL=index.js.map
