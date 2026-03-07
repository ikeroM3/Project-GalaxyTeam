import{a as w,S as C,A as T,b as W,N as H,P as N,K as _}from"./assets/vendor-B_nt7KEY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const m=document.querySelector(".mobile-menu"),j=document.querySelector(".burger-menu.bth-open"),D=document.querySelector(".mobile-menu .close-btn"),K=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),z=document.querySelectorAll(".list-mob, .mob-menu"),E=()=>m.classList.toggle("is-open"),k=()=>document.body.classList.toggle("is-scroll-disabled");m.addEventListener("click",e=>{e.target===m&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&m.classList.contains("is-open")&&v()});const v=()=>{E(),k()};j.addEventListener("click",()=>{E(),k()});D.addEventListener("click",()=>{E(),k()});K.forEach(e=>{e.addEventListener("click",v)});z.forEach(e=>{e.addEventListener("click",v)});const $="https://paw-hut.b.goit.study/api",F=async({page:e=1,limit:t=9,categoryId:n=""}={})=>{try{return(await w.get(`${$}/animals`,{params:{page:e,limit:t,...n&&{categoryId:n}}})).data}catch(a){throw console.error("API Error (getAnimals):",a),a}},G=async()=>{try{return(await w.get(`${$}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},V=async e=>{try{return(await w.post(`${$}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},p=document.querySelector(".backdrop"),J=document.querySelector(".modal-close"),Q=document.querySelector(".modal-form");let M=null;function R(e){M=e,p.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",P)}function b(){p.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",P)}function P(e){e.key==="Escape"&&b()}J.addEventListener("click",b);p.addEventListener("click",e=>{e.target===p&&b()});Q.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comment:a}=e.target.elements,s={name:t.value,phone:n.value,animalId:M,comment:a.value};try{await V(s),C.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),b()}catch{C.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function U(e,t){e.innerHTML=`
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
  `}const d=document.querySelector(".pet-modal-overlay"),S=document.querySelector(".pet-modal-content"),X=document.querySelector(".pet-modal-close-btn");let r=null,c=null;function Y(e){e&&(U(S,e),d.classList.remove("visually-hidden"),d.classList.add("is-open"),document.body.classList.add("no-scroll"),Z())}function g(){d.classList.remove("is-open"),document.body.classList.remove("no-scroll"),ee(),S.innerHTML=""}function Z(){r||(r=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",r)),c||(c=e=>{e.target===d&&g()},d.addEventListener("click",c))}function ee(){r&&(document.removeEventListener("keydown",r),r=null),c&&(d.removeEventListener("click",c),c=null)}X.addEventListener("click",g);S.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),R(e.target.dataset.animalId))});new T(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new W(".swiper",{modules:[H,N,_],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const te=e=>{const t=e.categories.map(n=>`<span class="info-categories">${n.name}</span>`).join("");return`
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
  `},se=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(te).join(""))},ne=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(n=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${n._id}">${n.name}</button>
          </li>`).join("")},q=document.querySelector(".pets-list"),i=document.querySelector(".loadmore-btn"),oe=document.querySelector(".categories-list"),l=document.querySelector(".loader");let u=1,f=x(),y=[],I="",A=0;function x(){return window.innerWidth>=1440?9:8}const ie=()=>l==null?void 0:l.classList.remove("visually-hidden"),ae=()=>l==null?void 0:l.classList.add("visually-hidden");async function O(e,t){ie();try{return await e(t)}finally{ae()}}const B=()=>{u=1,y=[],q.innerHTML="",i.disabled=!1,i.textContent="Показати більше"},L=async()=>{try{const e=await O(F,{page:u,limit:f,categoryId:I});if(y=[...y,...e.animals],A=e.totalItems,e.animals.length===0){i.disabled=!0,i.textContent="Кінець";return}se(q,e.animals),u+=1,u*f>=A?(i.disabled=!0,i.textContent="Кінець"):(i.disabled=!1,i.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),i.disabled=!1,i.textContent="Спробувати ще раз"}},re=async()=>{try{const e=await O(G);ne(oe,e),ce()}catch(e){console.error("Помилка завантаження категорій:",e)}},ce=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),I=t.dataset.id,B(),L()})})};q.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),n=y.find(a=>a._id===t.dataset.animalId);n&&Y(n)}});i.addEventListener("click",L);window.addEventListener("resize",()=>{const e=x();e!==f&&(f=e,B(),L())});re();L();
//# sourceMappingURL=index.js.map
