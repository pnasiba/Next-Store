("use strict");

// For Carousel

let wrapper = document.querySelector(".card__wrapper");
let mostSale = document.querySelector(".most_sale");

data.forEach((element) => {
  let card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
    
    
   <div class="card px-[10px] h-[408px] w-[230px] bg-white border-none">

<a href="#">
 <img src="./assets/images/heart.svg" alt="favourite" class="absolute right-[14px] top-[14px] z-1"/>
 </a>
<a href="#">
        <img src='${element.image}'
         alt="macbook"
        class="w-[180px] relative left-[14px] -bottom-3 "/>
</a>
<div class="card_wrapper px-[10px] pt-[10px]">
    <h3 class="card_price text-[#0D63F3] text-lg font-[591] pb-[6px]">${element.price}</h3>
    <p class="card_title text-[14px] pb-[33px] text-[#1E1E1E]">${element.title}</p>
    <span class="card_desc text-[#6C757D] text-sm">${element.desc}</span>
    <div class="card_btn flex justify-between items-center mt-[25px] pb-0 mb-0">
<button
    class="py-[10px] px-[25px] bg-[#0D63F3] rounded-lg text-white text-base hover:bg-[#0d61f3d1]">Sotib
    olish</button>
<img src="./assets/images/shopping_cart1.svg" alt="shopping-cart"
    class="h-[29px] cursor-pointer">
    </div>
</div>
    `;
  wrapper.append(card);
});

data.forEach((el) => {
  let cards = document.createElement("div");

  cards.classList.add("cards");

  cards.innerHTML = `
    
    
   <div class="card px-[10px] h-[408px] w-[230px] bg-white border-none">

<a href="#">
 <img src="./assets/images/heart.svg" alt="favourite" class="absolute right-[14px] top-[14px] z-1"/>
 </a>
<a href="#">
        <img src='${el.image}'
         alt="macbook"
        class="w-[180px] relative left-[14px] -bottom-3 "/>
</a>
<div class="card_wrapper px-[10px] pt-[10px]">
    <h3 class="card_price text-[#0D63F3] text-lg font-[591] pb-[6px]">${el.price}</h3>
    <p class="card_title text-[14px] pb-[33px] text-[#1E1E1E]">${el.title}</p>
    <span class="card_desc text-[#6C757D] text-sm">${el.desc}</span>
    <div class="card_btn flex justify-between items-center mt-[25px] pb-0 mb-0">
<button
    class="py-[10px] px-[25px] bg-[#0D63F3] rounded-lg text-white text-base hover:bg-[#0d61f3d1]">Sotib
    olish</button>
<img src="./assets/images/shopping_cart1.svg" alt="shopping-cart"
    class="h-[29px] cursor-pointer">
    </div>
</div>
    `;
  mostSale.append(cards);
});

// For Carousel

// Loader and dropdown

let loadWrapper = document.querySelector(".load_wrapper");

window.addEventListener("DOMContentLoaded", () => {
  loadWrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loadWrapper.style.display = "none";
    document.body.style.overflow = "visible";
  }, 1500);
});

let modalWrapper = document.querySelector(".modal_wrapper"),
  open = document.querySelector("#user-account"),
  close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  modalWrapper.style.display = "none";
  document.body.style.overflow = "visible";
});

modalWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal_body")) {
    modalWrapper.style.display = "flex";
    console.log(e.target.classList);
    document.body.style.overflow = "hidden";
  } else {
    modalWrapper.style.display = "none";
    console.log(e.target.classList);
    document.body.style.overflow = "visible";
  }
});

// Loader and dropdown

let allModal = document.querySelector(".modal_enter"),
  enter = document.querySelector("#enter-btn"),
  exit = document.querySelector("#exit");

enter.addEventListener("click", () => {
  allModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

exit.addEventListener("click", () => {
  allModal.style.display = "none";
  document.body.style.overflow = "visible";
});

allModal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal-enter_header") ||
    e.target.classList.contains("modal-items") ||
    e.target.classList.contains("enter_body")
  ) {
    allModal.style.display = "flex";
    console.log(e.target.classList);
    document.body.style.overflow = "hidden";
  } else {
    allModal.style.display = "none";
    console.log(e.target.classList);
    document.body.style.overflow = "visible";
  }
});

// Catalog btn

// let catalogWrapper = document.querySelector(".modal_catalog"),
//   opened = document.querySelector("#catalog-btn")

// opened.addEventListener("click", () => {
//   catalogWrapper.style.display = "flex";
//   document.body.style.overflow = "hidden";
// });

// close.addEventListener("click", () => {
//   catalogWrapper.style.display = "none";
//   document.body.style.overflow = "visible";
// });

// catalogWrapper.addEventListener("click", (e) => {
//   if (e.target.classList.contains("catalog_body")) {
//     catalogWrapper.style.display = "flex";
//     console.log(e.target.classList);
//     document.body.style.overflow = "hidden";
//   } else {
//     catalogWrapper.style.display = "none";
//     console.log(e.target.classList);
//     document.body.style.overflow = "visible";
//   }
// });
