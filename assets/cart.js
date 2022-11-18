// sacando los elementos del dom me tiraba null, intente mil cosas pero no salió, por lo tanto se hizo de la manera larga...

// contenedor de los botones de talles a elegir
// const numberButtonContainer = document.querySelector(".numbers_row");
// modal de "PRODUCTO AÑADIDO AL CARRITO"
// const addedToCart = document.getElementById("addedToCart");
// botón "AÑADIR AL CARRITO", oculto en la card del producto
// const btnAddToCart = document.getElementById("addToCart");

// contenedor de los productos a renderizar
const cardsContainer = document.querySelector(".cards_container");

// Al tocar un numero de talle (los 4 que aparecen en las cards), que aparezca el boton de "Añadir al Carrito"
const buttonAddToCart = (e) => {
  if (e.target.classList.contains("number")) {
    let numberRow = e.target.parentElement;
    let numberContainer = numberRow.parentElement;
    let cardProduct = numberContainer.parentElement;
    let containerCard = cardProduct.parentElement;
    let contentBtn = containerCard.children[1];
    let btnAddToCart = contentBtn.children[0];

    btnAddToCart.classList.remove("close_add");
    btnAddToCart.classList.add("add_to_cart");
    return;
  }
  return;
};

// Al hacer click en el botón "Añadir al carrito", hacer aparecer modal y eliminarlo luego de 2s
const addedToCartModal = (e) => {
  if (e.target.classList.contains("add_to_cart")) {
    let btnAddToCart = e.target;
    btnAddToCart.classList.remove("add_to_cart");
    btnAddToCart.classList.add("close_add");

    // modal
    let contentBtn = e.target.parentElement;
    let containerCard = contentBtn.parentElement;
    let containerAdded = containerCard.children[2];
    let btnAdded = containerAdded.children[0];
    btnAdded.classList.add("added_to_cart");
    btnAdded.textContent = "PRODUCTO AÑADIDO AL CARRITO!";
    setTimeout(() => {
      btnAdded.classList.remove("added_to_cart");
      btnAdded.textContent = "";
    }, 2000);
  }
  return;
};

const initCart = () => {
  cardsContainer.addEventListener("click", buttonAddToCart);
  cardsContainer.addEventListener("click", addedToCartModal);
};

initCart();
