import{a as m,S as B,A as K,b as O,N as T,P as j,K as W}from"./assets/vendor-DD8E1I8W.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const $ of i.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&o($)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const v=document.querySelector(".mobile-menu"),V=document.querySelector(".burger-menu.bth-open"),z=document.querySelector(".mobile-menu .close-btn"),F=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),Q=document.querySelectorAll(".list-mob, .mob-menu"),q=()=>v.classList.toggle("is-open"),C=()=>document.body.classList.toggle("is-scroll-disabled");v.addEventListener("click",e=>{e.target===v&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.contains("is-open")&&L()});const L=()=>{q(),C()};V.addEventListener("click",()=>{q(),C()});z.addEventListener("click",()=>{q(),C()});F.forEach(e=>{e.addEventListener("click",L)});Q.forEach(e=>{e.addEventListener("click",L)});const A="https://paw-hut.b.goit.study/api",U=async({page:e=1,limit:t=9,categoryId:n=""}={})=>{try{return(await m.get(`${A}/animals`,{params:{page:e,limit:t,...n&&{categoryId:n}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},Y=async()=>{try{return(await m.get(`${A}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},J=async e=>{try{return(await m.post(`${A}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},f=document.querySelector(".backdrop"),X=document.querySelector(".modal-close"),Z=document.querySelector(".modal-form");let H=null;function ee(e){H=e,f.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",_)}function E(){f.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",_)}function _(e){e.key==="Escape"&&E()}X.addEventListener("click",E);f.addEventListener("click",e=>{e.target===f&&E()});Z.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comment:o}=e.target.elements,s={name:t.value,phone:n.value,animalId:H};o.value.trim()&&(s.comment=o.value.trim());try{await J(s),B.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),E()}catch{B.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function te(e,t){e.innerHTML=`
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
  `}const c=document.querySelector(".backdrop-pet"),M=c.querySelector(".pet-modal-content"),se=c.querySelector(".pet-modal-close-btn");let l=null,d=null;function ne(e){e&&(te(M,e),c.classList.remove("visually-hidden"),c.classList.add("is-open"),document.body.classList.add("no-scroll"),oe())}function g(){c.classList.remove("is-open"),document.body.classList.remove("no-scroll"),ie(),M.innerHTML=""}function oe(){l||(l=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",l)),d||(d=e=>{e.target===c&&g()},c.addEventListener("click",d))}function ie(){l&&(document.removeEventListener("keydown",l),l=null),d&&(c.removeEventListener("click",d),d=null)}se.addEventListener("click",g);M.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),ee(e.target.dataset.animalId))});new K(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new O(".swiper-about",{modules:[T,j,W],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:window.innerWidth<768},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const ae=e=>{const t=e.categories.map(n=>`<span class="info-categories">${n.name}</span>`).join("");return`
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
  `},re=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(ae).join(""))},ce=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(n=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${n._id}">${n.name}</button>
          </li>`).join("")},P=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),le=document.querySelector(".categories-list"),u=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let y=1,w=R(),h=[],N="",I=0;function R(){return window.innerWidth>=1440?9:8}const de=()=>u==null?void 0:u.classList.remove("visually-hidden"),ue=()=>u==null?void 0:u.classList.add("visually-hidden"),pe=()=>r==null?void 0:r.classList.remove("visually-hidden"),me=()=>r==null?void 0:r.classList.add("visually-hidden");async function D(e,t){r?pe():de();try{return await e(t)}finally{r?me():ue()}}const G=()=>{y=1,h=[],P.innerHTML="",a.disabled=!1,a.textContent="Показати більше"},k=async()=>{try{const e=await D(U,{page:y,limit:w,categoryId:N});if(h=[...h,...e.animals],I=e.totalItems,e.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}re(P,e.animals),y*w>=I?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),a.disabled=!1,a.textContent="Спробувати ще раз"}},ve=async()=>{try{const e=await D(Y);ce(le,e),fe()}catch(e){console.error("Помилка завантаження категорій:",e)}},fe=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),N=t.dataset.id,G(),k()})})};P.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),n=h.find(o=>o._id===t.dataset.animalId);n&&ne(n)}});a.addEventListener("click",()=>{y+=1,k()});window.addEventListener("resize",()=>{const e=R();e!==w&&(w=e,G(),k())});ve();k();const x=document.querySelector(".pets-list-item");if(x){const{height:e}=x.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const S="/Project-GalaxyTeam/assets/icons-_0i1nMOQ.svg",p=document.querySelector(".success-loader"),ge=()=>p==null?void 0:p.classList.remove("visually-hidden"),ye=()=>p==null?void 0:p.classList.add("visually-hidden"),we=document.querySelector(".swiper-reviews .swiper-wrapper");function he(e){const t=e.map(({rate:n,description:o,author:s})=>`
      <div class="swiper-slide">
        <div class="review-card-slide">
          <div class="rating star-icon value-${Math.floor(n)} ${n%1===.5?"half":""}">
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
          <span class="review-author">${s}</span>
        </div>
      </div>`).join("");we.insertAdjacentHTML("beforeend",t)}m.defaults.baseURL="https://paw-hut.b.goit.study/";async function be(){const{data:e}=await m.get("/api/feedbacks",{params:{page:1,limit:25}});return e.feedbacks}async function Le(){ge();try{const e=await be();he(e),new O(".swiper-reviews",{modules:[T,j,W],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:50}}})}catch(e){console.error("API Error:",e)}finally{ye()}}Le();const b=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.scrollY>400?b.classList.add("show"):b.classList.remove("show")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),b.blur()});
//# sourceMappingURL=index.js.map
