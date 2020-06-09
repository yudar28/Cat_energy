var header = document.querySelector(".page-header");
var mainNav = document.querySelector(".main-nav");
var btnToggle = document.querySelector(".page-header__btn-menu");

header.classList.remove("page-header--nojs");

btnToggle.addEventListener("click", function() {
  btnToggle.classList.toggle("page-header__btn-menu--close");
  if (btnToggle.classList.contains("page-header__btn-menu--close")) {
    console.log("меню открыто")
    mainNav.classList.remove("main-nav--close");
  } else {
    mainNav.classList.add("main-nav--close");
  }
});
