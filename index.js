import{a as m,S as M,A as _,b as B,N as I,P as O,K as j}from"./assets/vendor-BaqKq6FA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const E of i.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const f=document.querySelector(".mobile-menu"),D=document.querySelector(".burger-menu.bth-open"),Z=document.querySelector(".mobile-menu .close-btn"),F=document.querySelectorAll(".mob-menu-link, .mob-menu-button"),G=document.querySelectorAll(".list-mob, .mob-menu"),k=()=>f.classList.toggle("is-open"),S=()=>document.body.classList.toggle("is-scroll-disabled");f.addEventListener("click",e=>{e.target===f&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f.classList.contains("is-open")&&h()});const h=()=>{k(),S()};D.addEventListener("click",()=>{k(),S()});Z.addEventListener("click",()=>{k(),S()});F.forEach(e=>{e.addEventListener("click",h)});G.forEach(e=>{e.addEventListener("click",h)});const $="https://paw-hut.b.goit.study/api",K=async({page:e=1,limit:t=9,categoryId:s=""}={})=>{try{return(await m.get(`${$}/animals`,{params:{page:e,limit:t,...s&&{categoryId:s}}})).data}catch(o){throw console.error("API Error (getAnimals):",o),o}},z=async()=>{try{return(await m.get(`${$}/categories`)).data}catch(e){throw console.error("API Error (getCategories):",e),e}},U=async e=>{try{return(await m.post(`${$}/orders`,e)).data}catch(t){throw console.error("API Error (createOrder):",t),t}},g=document.querySelector(".backdrop"),J=document.querySelector(".modal-close"),Q=document.querySelector(".modal-form");let H=null;function X(e){H=e,g.classList.remove("visually-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",T)}function b(){g.classList.add("visually-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",T)}function T(e){e.key==="Escape"&&b()}J.addEventListener("click",b);g.addEventListener("click",e=>{e.target===g&&b()});Q.addEventListener("submit",async e=>{e.preventDefault();const{name:t,phone:s,comment:o}=e.target.elements,n={name:t.value,phone:s.value,animalId:H,comment:o.value};try{await U(n),M.fire({title:"Success!",icon:"success",timer:1e3,draggable:!0}),e.target.reset(),b()}catch{M.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}});function Y(e,t){e.innerHTML=`
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
  `}const p=document.querySelector(".pet-modal-overlay"),A=document.querySelector(".pet-modal-content"),ee=document.querySelector(".pet-modal-close-btn");let c=null,l=null;function te(e){e&&(Y(A,e),p.classList.remove("visually-hidden"),p.classList.add("is-open"),document.body.classList.add("no-scroll"),se())}function v(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll"),ne(),A.innerHTML=""}function se(){c||(c=e=>{e.key==="Escape"&&v()},document.addEventListener("keydown",c)),l||(l=e=>{e.target===p&&v()},p.addEventListener("click",l))}function ne(){c&&(document.removeEventListener("keydown",c),c=null),l&&(p.removeEventListener("click",l),l=null)}ee.addEventListener("click",v);A.addEventListener("click",e=>{e.target.classList.contains("take-btn")&&(v(),X(e.target.dataset.animalId))});new _(".faq-list",{duration:400,elementClass:"faq-list-card",triggerClass:"faq-list-question-container",panelClass:"faq-list-answer-container"});new B(".swiper-about",{modules:[I,O,j],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-about",clickable:!0,type:"bullets",bulletActiveClass:"swiper-pagination-bullet-active",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,disabledClass:"swiper-btn-disabled"}});const oe=e=>{const t=e.categories.map(s=>`<span class="info-categories">${s.name}</span>`).join("");return`
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
          </li>`).join("")},q=document.querySelector(".pets-list"),a=document.querySelector(".loadmore-btn"),re=document.querySelector(".categories-list"),d=document.querySelector(".loader"),r=document.querySelector(".loadmore-loader");let L=1,w=N(),y=[],W="",x=0;function N(){return window.innerWidth>=1440?9:8}const ce=()=>d==null?void 0:d.classList.remove("visually-hidden"),le=()=>d==null?void 0:d.classList.add("visually-hidden"),de=()=>r==null?void 0:r.classList.remove("visually-hidden"),ue=()=>r==null?void 0:r.classList.add("visually-hidden");async function R(e,t){r?de():ce();try{return await e(t)}finally{r?ue():le()}}const V=()=>{L=1,y=[],q.innerHTML="",a.disabled=!1,a.textContent="Показати більше"},C=async()=>{try{const e=await R(K,{page:L,limit:w,categoryId:W});if(y=[...y,...e.animals],x=e.totalItems,e.animals.length===0){a.disabled=!0,a.textContent="Кінець";return}ie(q,e.animals),L*w>=x?(a.disabled=!0,a.textContent="Кінець"):(a.disabled=!1,a.textContent="Показати більше")}catch(e){console.error("Помилка завантаження:",e),a.disabled=!1,a.textContent="Спробувати ще раз"}},pe=async()=>{try{const e=await R(z);ae(re,e),me()}catch(e){console.error("Помилка завантаження категорій:",e)}},me=()=>{const e=document.querySelectorAll(".pets-btn-categ");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),W=t.dataset.id,V(),C()})})};q.addEventListener("click",e=>{if(e.target.classList.contains("show-info-btn")){const t=e.target.closest(".pets-list-item"),s=y.find(o=>o._id===t.dataset.animalId);s&&te(s)}});a.addEventListener("click",()=>{L+=1,C()});window.addEventListener("resize",()=>{const e=N();e!==w&&(w=e,V(),C())});pe();C();const P=document.querySelector(".pets-list-item");if(P){const{height:e}=P.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const u=document.querySelector(".success-loader"),fe=()=>u==null?void 0:u.classList.remove("visually-hidden"),ge=()=>u==null?void 0:u.classList.add("visually-hidden"),ve=document.querySelector(".swiper-reviews .swiper-wrapper"),Le=`<svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#02060A"/>
</svg>`,we=`<svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#02060A" fill-opacity="0.3"/>
  <path d="M10 1.5V15.8L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343C9.24 0.2 9.62 0 10 0V1.5Z" fill="#02060A"/>
</svg>`,ye=`<svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#02060A" fill-opacity="0.3"/>
</svg>`;function he(e){const t=Math.floor(e),s=e%1===.5,o=5-t-(s?1:0);return[...Array(t).fill(Le),...s?[we]:[],...Array(o).fill(ye)].join("")}function be(e){const t=e.map(({rate:s,description:o,author:n})=>`
        <div class="swiper-slide">
          <div class="review-card-slide">
            <div class="stars">${he(s)}</div>
            <p class="review-card-text">${o}</p>
            <span class="review-author">${n}</span>
          </div>
        </div>`).join("");ve.insertAdjacentHTML("beforeend",t)}m.defaults.baseURL="https://paw-hut.b.goit.study/";async function Ce(){const{data:e}=await m.get("/api/feedbacks");return e.feedbacks}async function Ee(){fe();try{const e=await Ce();be(e),new B(".swiper-reviews",{modules:[I,O,j],slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-reviews",clickable:!0,renderBullet:function(t,s){return`<span class="${s}"></span>`}},navigation:{nextEl:".swiper-nav-buttons .swiper-button-next1",prevEl:".swiper-nav-buttons .swiper-button-prev1",addIcons:!1,disabledClass:"swiper-btn-disabled"},breakpoints:{768:{slidesPerView:2,spaceBetween:30}}})}catch(e){console.error("API Error:",e)}finally{ge()}}Ee();
//# sourceMappingURL=index.js.map
