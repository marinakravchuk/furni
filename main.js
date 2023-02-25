$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots:true,
    autoplay: false,
    autoplayTimeout: false,

  });
});


const openButton = document.querySelector("[data-modal-button]");
const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const openBurgerButton = document.querySelector(".burger_btn");
const menuHhamburger = document.querySelector(".hidden_burger");


openButton.addEventListener("click", ()=>{
  modal.classList.remove("hidden")
})

modal.addEventListener("click", ()=> {
  modal.classList.add("hidden")
})

modal.querySelector(".modal_window").addEventListener("click", function(event){
event.stopPropagation();
})

closeButton.addEventListener("click", ()=>{
  modal.classList.add("hidden")
})

openBurgerButton.addEventListener("click", ()=>{
  menuHhamburger.classList.toggle("hidden_burger")
})