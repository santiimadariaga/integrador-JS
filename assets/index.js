const headerindex = document.querySelector("header");
const menuBars = document.getElementById("bars");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const homeIcon = document.getElementById("home");
const productsIcon = document.getElementById("productsIcon");
// icono del carrito
const cartIcon = document.getElementById("cart");
// el contenedor del carrito en sí
const cartMenu = document.getElementById("cartMenu");
// botón de cerrar carrito
const closeCart = document.getElementById("closeCart");
// contenedor de los filtros (calzado hombre, mujer, niño)
const filterContent = document.querySelector(".filter_content");
// Título de la sección de los productos (en defecto "BEST SELLER")
const nameFilter = document.getElementById("nameFilter");

let cart = JSON.parse(localStorage.getItem(`cart`)) || [];

const saveToLocalStorage = (cartList) => {
  localStorage.setItem(`cart`, JSON.stringify(cartList));
};

// Cambiar de color el header al scrollear
const changeColorHeader = () => {
  headerindex.classList.toggle("change_color", window.scrollY > 0);
};

// Abrir y cerrar el menu hamburguesa
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

// Abrir y cerrar el carrito
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

// Cerrar menu y carrito al hacer click fuera de éstos
const closeOnClick = () => {
  menu.classList.remove("open_menu");
  menu.classList.add("close_menu");
  cartMenu.classList.remove("open_cart");
  cartMenu.classList.add("close_cart");
  overlay.classList.remove("overlay");
};

// Retorna el talle seleccionado en los botones

// intento de pasar los últimos tres listeners a una función aparte
// const listenersCards = () => {
//   numberButtonContainer.addEventListener("click", buttonAddToCart);
//   btnAddToCart.addEventListener("click", addedToCartModal);
//   numberButtonContainer.addEventListener("click", sizeSelected);
// };

// Card del producto a renderizar
const renderProduct = (product) => {
  const { id, img, name, price, sizeSelected, size1, size2, size3, size4 } =
    product;

  return `
    <div class="container_card_product">
      <div class="card_product">
          <div class="content_price">
              <p>US$ ${price}</p>
          </div>
          <div class="content_img_product">
              <img src=${img} alt="">
          </div>
          <h3>${name}</h3>
          <div class="numbers_container">
              <div class="numbers_row">
                  <button class="number">${size1}</button>
                  <button class="number">${size2}</button>
                  <button class="number">${size3}</button>
                  <button class="number">${size4}</button>
              </div>
          </div>
      </div>
      <div class="content_btn_add">
          <button id="addToCart" class="close_add"
          data-id="${id}"
          data-img="${img}"
          data-name="${name}"
          data-price${price}
          data-size="${sizeSelected}"
          >AÑADIR AL CARRITO</button>
      </div>

      <div class="container_addedToCart">
          <div id="addedToCart"></div>
      </div>
    </div>
  `;
};

// Filtrar de todos los productos, los más populares
const renderPopularProducts = () => {
  const productsList = productsData.filter((products) => {
    return products.popular;
  });
  cardsContainer.innerHTML = productsList.map(renderProduct).join("");

  // listenersCards();
  // intento de función auxiliar
};

// Renderizado de productos filtrados en la seccion dos
const renderFilteredProducts = (e) => {
  const selectedFilter = e.target.dataset.person;
  console.log({ selectedFilter });

  if (selectedFilter) {
    const productsList = productsData.filter((products) => {
      return products.person === selectedFilter;
    });
    cardsContainer.innerHTML = productsList.map(renderProduct).join("");
  } else {
    renderPopularProducts();
    nameFilter.textContent = "BEST SELLER";
  }

  //cambiar el título h2 según se filtre
  if (selectedFilter === "men") {
    nameFilter.textContent = "MENS";
  } else if (selectedFilter === "kid") {
    nameFilter.textContent = "KIDS";
  } else if (selectedFilter === "women") {
    nameFilter.textContent = "WOMENS";
  } else {
    nameFilter.textContent = "BEST SELLER";
  }
};

const init = () => {
  // renderPopularProducts();
  document.addEventListener("DOMContentLoaded", renderPopularProducts);
  window.addEventListener("scroll", changeColorHeader);
  menuBars.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeOnClick);
  productsIcon.addEventListener("click", closeOnClick);
  homeIcon.addEventListener("click", closeOnClick);
  closeCart.addEventListener("click", closeOnClick);
  cartIcon.addEventListener("click", openCart);
  filterContent.addEventListener("click", renderFilteredProducts);
};

init();
