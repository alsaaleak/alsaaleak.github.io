let menu=document.querySelector(".menu");
let menuImg=document.querySelector(".menu img");
let links=document.querySelector(".links");
menu.addEventListener("click",()=>{
   links.classList.toggle('expand');
   menuImg.classList.toggle('active');

})
