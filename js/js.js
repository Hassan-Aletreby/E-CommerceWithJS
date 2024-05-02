var btnMenu = document.querySelector(".btn__menu");
var nav = document.querySelector(".nav__bottom");
btnMenu.onclick = function () {
  nav.classList.toggle("disapper");
}