var btnMenu = document.querySelector(".btn__menu");
var nav = document.querySelector(".nav__bottom");
btnMenu.onclick = function () {
  nav.classList.toggle("disapper");
}
// ________________________________________
var toggle = document.querySelector("#toggleBtn");
var body = document.querySelector(".html");

toggle.addEventListener("change", function() {
  body.classList.toggle("dark");
});
