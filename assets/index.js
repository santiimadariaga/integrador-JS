const headerindex = document.querySelector("header");
const cart = document.getElementById("cart");
const menuBars = document.getElementById("bars");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const homeIcon = document.getElementById("home");
const productIcon = document.getElementById("productsIcon");

const changeColorHeader = () => {
  headerindex.classList.toggle("change_color", window.scrollY > 0);
};

const openMenu = () => {
  if (menu.classList.contains("close_menu")) {
    menu.classList.remove("close_menu");
    menu.classList.add("open_menu");
    overlay.classList.add("overlay");
  } else if (!menu.classList.contains("close_menu")) {
    menu.classList.remove("open_menu");
    menu.classList.add("close_menu");
    overlay.classList.remove("overlay");
  }
  return;
};

const closeOnClick = (e) => {
  menu.classList.remove("open_menu");
  menu.classList.add("close_menu");
  overlay.classList.remove("overlay");
};

const init = () => {
  window.addEventListener("scroll", changeColorHeader);
  menuBars.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeOnClick);
  productsIcon.addEventListener("click", closeOnClick);
  homeIcon.addEventListener("click", closeOnClick);
};

init();
