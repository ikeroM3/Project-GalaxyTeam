import{a as E,S as A,A as H,b as N,N as _,P as j,K as D}from"./assets/vendor-B_nt7KEY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const w of o.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&a(w)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const m=document.querySelector(".mobile-menu"),G=document.querySelector(".burger-menu.bth-open"),K=document.querySelector(".mobile-menu .close-btn"),z=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),F=document.querySelectorAll(".list-mob, .mob-menu"),k=()=>m.classList.toggle("is-open"),S=()=>document.body.classList.toggle("is-scroll-disabled");m.addEventListener("click",e=>{e.target===m&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&m.classList.contains("is-open")&&h()});const h=()=>{k(),S()};G.addEventListener("click",()=>{k(),S()});K.addEventListener("click",()=>{k(),S()});z.forEach(e=>{e.addEventListener("click",h)});F.forEach(e=>{e.addEventListener("click",h)});const $="https://paw-hut.b.goit.study/api",R=async({page:e=1,limit:t=9,categoryId:n=""}={})=>{try{return(await E.get(`${$}/animals`,{params:{page:e,limit:t,...n&&{categoryId:n}}})).data}catch(a){throw console.error("API Error (getAnimals):",a),a}},V=async()=>{try{return(await E.get(`${$}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},J=async e=>{try{return(await E.post(`${$}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},p=document.querySelector(".backdrop"),Q=document.querySelector(".modal-close"),U=document.querySelector(".modal-form");let I=null;function X(e){I=e,p.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",x)}function L(){p.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",x)}function x(e){e.key==="Escape"&&L()}Q.addEventListener("click",L);p.addEventListener("click",e=>{e.target===p&&L()});U.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:n,comment:a}=e.target.elements,s={name:t.value,phone:n.value,animalId:I,comment:a.value};try{await J(s),A.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),L()}catch{A.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function Y(e,t){e.innerHTML=`
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
  `}const u=document.querySelector(".pet-modal-overlay"),q=document.querySelector(".pet-modal-content"),Z=document.querySelector(".pet-modal-close-btn");let c=null,l=null;function ee(e){e&&(Y(q,e),u.classList.remove("visually-hidden"),u.classList.add("is-open"),document.body.classList.add("no-scroll"),te())}function g(){u.classList.remove("is-open"),document.body.classList.remove("no-scroll"),se(),q.innerHTML=""}function te(){c||(c=e=>{e.key==="Escape"&&g()},document.addEventListener("keydown",c)),l||(l=e=>{e.target===u&&g()},u.addEventListener("click",l))}function se(){c&&(document.removeEventListener("keydown",c),c=null),l&&(u.removeEventListener("click",l),l=null)}Z.addEventListener("click",g);q.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(g(),X(e.target.dataset.animalId))});new H(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new N(".swiper",{modules:[_,j,D],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const ne=e=>{const t=e.categories.map(n=>`<span class="info-categories">${n.name}</span>`).join("");return`
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
  `},oe=(e,t)=>{e.insertAdjacentHTML("beforeend",t.map(ne).join(""))},ie=(e,t)=>{e.innerHTML=`<li class="pets-list-categ-item">
       <button class="pets-btn-categ active" data-id="">Всі</button>
     </li>`+t.map(n=>`<li class="pets-list-categ-item">
            <button class="pets-btn-categ" data-id="${n._id}">${n.name}</button>
          </li>`).join("")},C=document.querySelector(".pets-list"),i=document.querySelector(".loadmore-btn"),ae=document.querySelector(".categories-list"),d=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let f=1,y=O(),v=[],B="",M=0;function O(){return window.innerWidth>=1440?9:8}const re=()=>d==null?void 0:d.classList.remove("visually-hidden"),ce=()=>d==null?void 0:d.classList.add("visually-hidden"),le=()=>r==null?void 0:r.classList.remove("visually-hidden"),de=()=>r==null?void 0:r.classList.add("visually-hidden");async function T(e,t){r?le():re();try{return await e(t)}finally{r?de():ce()}}const W=()=>{f=1,v=[],C.innerHTML="",i.disabled=!1,i.textContent="Показати більше"},b=async()=>{try{const e=await T(R,{page:f,limit:y,categoryId:B});if(v=[...v,...e.animals],M=e.totalItems,e.animals.length===0){i.disabled=!0,i.textContent="Кінець";return}oe(C,e.animals),f*y>=M?(i.disabled=!0,i.textContent="Кінець"):(i.disabled=!1,i.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),i.disabled=!1,i.textContent="Спробувати ще раз"}},ue=async()=>{try{const e=await T(V);ie(ae,e),me()}catch(e){console.error("Помилка завантаження категорій:",e)}},me=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),B=t.dataset.id,W(),b()})})};C.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),n=v.find(a=>a._id===t.dataset.animalId);n&&ee(n)}});i.addEventListener("click",()=>{f+=1,b()});window.addEventListener("resize",()=>{const e=O();e!==y&&(y=e,W(),b())});ue();b();const P=document.querySelector(".pets-list-item");if(P){const{height:e}=P.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
