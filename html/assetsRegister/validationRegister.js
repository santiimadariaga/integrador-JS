const form = document.querySelector("form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const isCorrectLogin = document.getElementById("is_correct_login");

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

const isEmailValid = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const isBetween = (longitud, min, max) =>
  longitud < min || longitud > max ? false : true;

const checkFirstName = () => {
  let valid = false;

  const min = 3;
  const max = 30;

  const firstName = firstNameInput.value.trim();

  if (isEmpty(firstName)) {
    showError(firstNameInput, "El nombre es requerido");
  } else if (!isBetween(firstName.length, min, max)) {
    showError(firstNameInput, "El nombre debe tener entre 3 y 30 caracteres");
  } else {
    showSuccess(firstNameInput);
    valid = true;
  }

  return valid;
};

const checkLastName = () => {
  let valid = false;

  const min = 3;
  const max = 30;

  const lastName = lastNameInput.value.trim();

  if (isEmpty(lastName)) {
    showError(lastNameInput, "El apellido es requerido");
  } else if (!isBetween(lastName.length, min, max)) {
    showError(lastNameInput, "El apellido debe tener entre 3 y 30 caracteres");
  } else {
    showSuccess(lastNameInput);
    valid = true;
  }

  return valid;
};

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

const checkEmail = () => {
  let valid = false;

  const emailValue = emailInput.value.trim();

  if (isEmpty(emailValue)) {
    showError(emailInput, "El email es requerido");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "Ingrese un email correcto");
  } else {
    showSuccess(emailInput);

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

const correctRegister = () => {
  isCorrectLogin.classList.add("correct_login");
  isCorrectLogin.textContent =
    "Registro Correcto, ahora puedes iniciar sesión!";
  setTimeout(() => {
    isCorrectLogin.classList.remove("correct_login");
  }, 2000);
};

const incorrectRegister = () => {
  isCorrectLogin.classList.add("incorrect_login");
  isCorrectLogin.textContent = "Hay datos incorrectos";
  setTimeout(() => {
    isCorrectLogin.classList.remove("incorrect_login");
  }, 2000);
};

const initRegister = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFirstNameValid = checkFirstName();
    let isLastNameValid = checkLastName();
    let isUsernameValid = checkUserName();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();

    let isFormValid =
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isFirstNameValid &&
      isLastNameValid;

    if (isFormValid) {
      // alert("Registro correcto, Ahora puedes iniciar sesión!");
      correctRegister();
    } else {
      // alert("Hay datos incorrectos");
      incorrectRegister();
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
        case "firstName":
          checkFirstName();
          break;

        case "lastName":
          checkLastName();
          break;

        case "username":
          checkUserName();
          break;

        case "email":
          checkEmail();
          break;

        case "password":
          checkPassword();
          break;
      }
    })
  );
};

initRegister();
