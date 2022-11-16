const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const isCorrectLogin = document.getElementById("is_correct_login");
const btn = document.getElementById("btn");

const isEmpty = (valor) => {
  valor === "" ? false : true;
};

const showError = (input, message) => {
  const formField = input.parentElement;

  const lblError = formField.children[1];

  const lblSpan = lblError.children[0];
  lblSpan.classList.remove("success");
  lblError.classList.remove("lbl_correct");

  const inputField = formField.parentElement;
  const small = inputField.children[1];
  small.classList.add("error");

  small.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  const lblError = formField.children[1];

  const lblSpan = lblError.children[0];
  lblSpan.classList.add("success");
  lblError.classList.add("lbl_correct");

  const inputField = formField.parentElement;
  const small = inputField.children[1];
  small.classList.remove("error");
  small.textContent = "";
};

const isPassSecure = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

const isBetween = (longitud, min, max) =>
  longitud < min || longitud > max ? false : true;

const checkUserName = () => {
  let valid = false;

  const min = 8;
  const max = 25;

  const username = usernameInput.value.trim();

  if (isEmpty(username)) {
    showError(usernameInput, "El usuario es requerido");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameInput,
      "El nombre de usuario debe tener entre 8 y 25 caracteres"
    );
  } else {
    showSuccess(usernameInput);
    valid = true;
  }

  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordInput.value.trim();

  if (isEmpty(password)) {
    showError(passwordInput, "La contraseña es obligatoria");
  } else if (!isPassSecure(password)) {
    showError(
      passwordInput,
      "La contraseña debe tener al menos una mayúscula, una minúscula, y un número"
    );
  } else {
    showSuccess(passwordInput);

    valid = true;
  }

  return valid;
};

const correctLogin = () => {
  isCorrectLogin.classList.add("correct_login");
  isCorrectLogin.textContent = "Ingreso Correcto!";
  setTimeout(() => {
    isCorrectLogin.classList.remove("correct_login");
  }, 2000);
};

const incorrectLogin = () => {
  isCorrectLogin.classList.add("incorrect_login");
  isCorrectLogin.textContent = "Hay datos incorrectos";
  setTimeout(() => {
    isCorrectLogin.classList.remove("incorrect_login");
  }, 2000);
};

const initRegister = () => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let isUsernameValid = checkUserName();
    let isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid && isPasswordValid;

    if (isFormValid) {
      // alert("Registro correcto, Ahora puedes iniciar sesión!");
      correctLogin();
    } else {
      // alert("Hay datos incorrectos");
      incorrectLogin();
    }
  });

  const debounce = (fn, delay = 500) => {
    let timeoutId;

    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
  };

  form.addEventListener(
    "input",
    debounce((e) => {
      switch (e.target.id) {
        case "username":
          checkUserName();
          break;

        case "password":
          checkPassword();
          break;
      }
    })
  );
};

initRegister();
