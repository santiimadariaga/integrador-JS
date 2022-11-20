// container de los productos del carrito
const contentCartProducts = document.querySelector(".content_cart_products");
// precio total de la compra
const totalPrice = document.getElementById("totalPrice");
// botón de finalizar compra
const btnFinalizeBuy = document.getElementById("btnFinalizeBuy");

let cart = JSON.parse(localStorage.getItem(`cart`)) || [];

const saveToLocalStorage = (cartList) => {
  localStorage.setItem(`cart`, JSON.stringify(cartList));
};

/* AGREGADO DE PRODUCTOS Y MANEJO DEL CARRITO */

const renderCartProduct = (cartProduct) => {
  const { id, name, price, img, quantity } = cartProduct;

  return `
  <div class="cart_product">
      <div class="img_cart_product">
          <img src=${img} alt="">
      </div>
      <div class="container_text_add">
          <div class="content_texts_cart">
              <h4>${name}</h4>
              <p class="price_cart">US$ ${price}</p>
          </div>
          <div class="content_pls_min">
              <div class="plsMin down" data-id=${id}>-</div>
              <div class="quantity">${quantity}</div>
              <div class="plsMin up" data-id=${id}>+</div>
          </div>
      </div>
  </div>
  `;
};

const renderCart = () => {
  // Si el carrito está vacío
  if (!cart.length) {
    contentCartProducts.innerHTML = `<p class="opacity">No hay productos en el carrito.</p>`;
    return;
  }
  // Renderizamos lo que haya
  contentCartProducts.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
    0
  );
};

const showTotal = () => {
  totalPrice.textContent = `US$ ${Number(getCartTotal()).toFixed(2)}`;
};

const disabledBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};

/* AÑADIDO DE PRODUCTOS */

const createProductData = (id, name, price, img) => {
  return { id, name, price, img };
};

const checkCartState = () => {
  saveToLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disabledBtn(btnFinalizeBuy);
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const addProduct = (e) => {
  if (
    !e.target.classList.contains("add_to_cart") &&
    !e.target.classList.contains("close_add")
  ) {
    return;
  } else {
    const { id, name, price, img } = e.target.dataset;

    const product = createProductData(id, name, price, img);

    // El producto existe en el carrito
    if (isExistingCartProduct(product)) {
      const producto = cart.find((p) => p.id === product.id);
      addUnitToProduct(producto);
    } else {
      // El producto no existe
      createCartProduct(product);
    }
    checkCartState();
  }
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const minusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const plusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    minusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    plusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;

  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = (e) => {
  completeCartAction(
    "¿Desea finalizar su compra?",
    "La compra se ha realizado correctamente"
  );
};

const initCart = () => {
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  cardsContainer.addEventListener("click", addProduct);
  contentCartProducts.addEventListener("click", handleQuantity);
  btnFinalizeBuy.addEventListener("click", completeBuy);
  disabledBtn(btnFinalizeBuy);
};

initCart();
