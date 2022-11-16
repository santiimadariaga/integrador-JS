const headerindex = document.querySelector("header");
const input = document.querySelectorAll("input");
const label = document.querySelector(".label_name");
const showOrHidePass = document.getElementById("showOrHide");

const changeColorHeader = () => {
  headerindex.classList.toggle("change_color", window.scrollY > 0);
};

const auxInputClass = () => {
  input.forEach((input) => {
    if (input.value) {
      input.labels[0].children[0].classList.add("auxInputClass");
    } else if (!input.value) {
      input.labels[0].children[0].classList.remove("auxInputClass");
    }
  });
};

const showOrHidePassword = (e) => {
  if (input[4].value) {
    if (e.target.classList.contains("show")) {
      showOrHidePass.classList.remove("show");
      showOrHidePass.classList.add("hidden");
      input[4].type = "text";
    } else if (e.target.classList.contains("hidden")) {
      showOrHidePass.classList.remove("hidden");
      showOrHidePass.classList.add("show");
      input[4].type = "password";
    }
  }
  return;
};

const init = () => {
  window.addEventListener("scroll", changeColorHeader);
  window.addEventListener("click", auxInputClass);
  window.addEventListener("DOMContentLoaded", auxInputClass);
  showOrHidePass.addEventListener("click", showOrHidePassword);
};

init();
