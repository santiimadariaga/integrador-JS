const headerindex = document.querySelector("header");
const input = document.querySelectorAll("input");
const label = document.querySelector(".label_name");
const showOrHidePass = document.getElementById("showOrHide");
const btnSubmit = document.getElementById("btn");

const changeColorHeader = () => {
  headerindex.classList.toggle("change_color", window.scrollY > 0);
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

const showOrHidePassword = (e) => {
  if (input[1].value) {
    if (e.target.classList.contains("show")) {
      showOrHidePass.classList.remove("show");
      showOrHidePass.classList.add("hidden");
      input[1].type = "text";
    } else if (e.target.classList.contains("hidden")) {
      showOrHidePass.classList.remove("hidden");
      showOrHidePass.classList.add("show");
      input[1].type = "password";
    }
  }
  return;
};

const prevent = (e) => {
  e.preventDefault();
};

const init = () => {
  window.addEventListener("scroll", changeColorHeader);
  window.addEventListener("click", auxInputClass);
  window.addEventListener("DOMContentLoaded", auxInputClass);
  showOrHidePass.addEventListener("click", showOrHidePassword);
  btnSubmit.addEventListener("click", prevent);
};

init();
