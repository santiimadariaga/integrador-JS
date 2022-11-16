const headerindex = document.querySelector("header");
const menuBars = document.getElementById("bars");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const homeIcon = document.getElementById("home");
const productsIcon = document.getElementById("productsIcon");
const btnAddToCart = document.getElementById("addToCart");
const numberToAddBtn =
  document.querySelector(".number"); /* AGARRA AL PRIMERO */
const addedToCart = document.getElementById("addedToCart");
const cartIcon = document.getElementById("cart");
const cartMenu = document.getElementById("cartMenu");

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

const openCart = () => {
  if (cartMenu.classList.contains("close_cart")) {
    cartMenu.classList.remove("close_cart");
    cartMenu.classList.add("open_cart");
    overlay.classList.add("overlay");
  } else if (!cartMenu.classList.contains("close_cart")) {
    cartMenu.classList.remove("open_cart");
    cartMenu.classList.add("close_cart");
    overlay.classList.remove("overlay");
  }
  return;
};

const closeOnClick = (e) => {
  menu.classList.remove("open_menu");
  menu.classList.add("close_menu");
  cartMenu.classList.remove("open_cart");
  cartMenu.classList.add("close_cart");
  overlay.classList.remove("overlay");
};

const addToCartButton = (e) => {
  btnAddToCart.classList.remove("close_add");
  btnAddToCart.classList.add("add_to_cart");
};

const addedToCartModal = () => {
  btnAddToCart.classList.remove("add_to_cart");
  btnAddToCart.classList.add("close_add");

  addedToCart.classList.add("added_to_cart");
  addedToCart.textContent = "PRODUCTO AÑADIDO AL CARRITO!";
  setTimeout(() => {
    addedToCart.classList.remove("added_to_cart");
    addedToCart.textContent = "";
  }, 2000);
};

const init = () => {
  window.addEventListener("scroll", changeColorHeader);
  menuBars.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeOnClick);
  productsIcon.addEventListener("click", closeOnClick);
  homeIcon.addEventListener("click", closeOnClick);
  closeCart.addEventListener("click", closeOnClick);
  numberToAddBtn.addEventListener("click", addToCartButton);
  btnAddToCart.addEventListener("click", addedToCartModal);
  cartIcon.addEventListener("click", openCart);
};

init();
