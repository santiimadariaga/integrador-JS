const headerindex = document.querySelector("header");
const menuBars = document.getElementById("bars");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const homeIcon = document.getElementById("home");
const input = document.querySelectorAll("input");
const label = document.querySelector(".label_name");

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

const auxInputClass = () => {
  if (input[0].value && input[1].value) {
    input[0].labels[0].children[0].classList.add("auxInputClass");
    input[1].labels[0].children[0].classList.add("auxInputClass");
    return;
  } else if (input[0].value && !input[1].value) {
    input[0].labels[0].children[0].classList.add("auxInputClass");
    input[1].labels[0].children[0].classList.remove("auxInputClass");
    return;
  } else if (!input[0].value && input[1].value) {
    input[0].labels[0].children[0].classList.remove("auxInputClass");
    input[1].labels[0].children[0].classList.add("auxInputClass");
    return;
  } else {
    input[0].labels[0].children[0].classList.remove("auxInputClass");
    input[1].labels[0].children[0].classList.remove("auxInputClass");
    return;
  }
};

const init = () => {
  window.addEventListener("scroll", changeColorHeader);
  menuBars.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeOnClick);
  homeIcon.addEventListener("click", closeOnClick);
  window.addEventListener("click", auxInputClass);
};

init();
