let menu = document.querySelector(".menu");
let menuImg = document.querySelector(".menu img");
let links = document.querySelector(".links");


let isExpanded = localStorage.getItem("menuExpanded") === "true";
if (isExpanded) {
   links.classList.add('expand');
   menuImg.classList.add('active');
}


menu.addEventListener("click", () => {
   links.classList.toggle('expand');
   let currentState = menuImg.classList.toggle('active');


   localStorage.setItem("menuExpanded", links.classList.contains('expand'));
});
