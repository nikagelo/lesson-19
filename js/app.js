// COMMENT form ვალიდაციები
const userSignUpForm = document.querySelector("#sign-up"),
  userName = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  perNum = document.querySelector("#personal_number"),
  mobNum = document.querySelector("#mobile_number"),
  position = document.querySelector("#position"),
  perNumError = document.querySelector("#personal_number-error"),
  mobNumError = document.querySelector("#mobile_number-error"),
  positionError = document.querySelector("#position-error"),
  userNameError = document.querySelector("#username-error"),
  passwordError = document.querySelector("#password-error"),
  emailError = document.querySelector("#email-error");
/////// შეამოწმებს არის თუ არა მხოლოდ ასოები////////
// letters = /^[A-Za-z]+$/,
// userNameCheck = userName.value.match(letters);
console.log(userName.value);
function validateUserName() {
  // როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
  // console.log(userNameCheck);
  ////
  ////////  if (userNameCheck) {
  if (!userName.validity.valid) {
    userName.classList.add("error");
    userNameError.textContent = "user name required";

    // true ან დაბლა false ს ვაბრუნებთ იმის მიხედვით ვალიდაცია გაიარა თუ არა
    return false;
  } else {
    userNameError.textContent = "";
    userName.classList.remove("error");
    return true;
  }
  //// } else {
  ////   userNameError.textContent = "Use only letters";
  ///  }
}

function validateEmail() {
  // როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
  if (!email.validity.valid) {
    email.classList.add("error");
    emailError.textContent = "email required";
    // როცა, ცარიელი არაა, მაგრამ მეილის სწორი ფორმა არაა და @ სიმბოლო არაა გამოყენებული
    if (email.validity.typeMismatch) {
      emailError.textContent = "not valid email";
    }
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  // როცა პაროლი 4 სიმბოლოზე ნაკლებია, მაშინ გამოვა ერორი
  if (password.value.length <= 4) {
    password.classList.add("error");
    passwordError.textContent = "password must be 4 or more charachter";
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    return true;
  }
}
function validatePersonalNumber() {
  if (perNum.value.length != 11) {
    perNum.classList.add("error");
    perNumError.textContent = "password must be 11 charachter";
    console.log(perNum.value.length);
    return false;
  } else {
    perNumError.textContent = "";
    perNum.classList.remove("error");
    return true;
  }
}
function validateMobileNumber() {
  if (mobNum.value.length != 9) {
    mobNum.classList.add("error");
    mobNumError.textContent = "Mobile number must be 9 charachter";
    return false;
  } else {
    mobNumError.textContent = "";
    mobNum.classList.remove("error");
    return true;
  }
}
function validatePosition() {
  if ((position.value.length = position.value.length > 30)) {
    position.classList.add("error");
    positionError.textContent =
      "Enter your position, it must be less than 30 charachter";
    return false;
  } else {
    position.textContent = "";
    positionError.classList.remove("error");
    return true;
  }
}

userName.addEventListener("input", validateUserName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
perNum.addEventListener("input", validatePersonalNumber);
mobNum.addEventListener("input", validateMobileNumber);
position.addEventListener("input", validatePosition);
console.log;
userSignUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(userName.validity.valid);
  // console.log(email.validity);
  // ამ ცვლადებში ვინახავთ ინფორმაციას იმის შესახებ თითოეული ინფუთი იყო თუ არა ვალიდური
  const isValidUserName = validateUserName();
  const isValidEmail = validateEmail();
  const isValidPassword = validatePassword();
  const isValidPerNum = validatePersonalNumber();
  const isValidMobNum = validateMobileNumber();
  const isValidPosition = validatePosition();

  if (
    isValidUserName &&
    isValidEmail &&
    isValidPassword &&
    isValidPerNum &&
    isValidMobNum &&
    isValidPosition
  ) {
    // თუ სამივე ინფუთი ვალიდურია ფორმა დასაბმითდეს / ან შევინახოთ ინფორმაცია და ბექის მხარეს გავაგზავნოთ
    // userSignUpForm.submit()

    const userInfo = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      perNum: perNum.value,
      mobNum: mobNum.value,
      position: position.value,
    };

    console.log(userInfo);
    // მოდალის გამოტანა
    dynamicOpenModal("#sign-in-modal");
  }
});

// COMMENT modals, popup
const modalEl = document.querySelector(".modal"),
  closeBtn = document.querySelector(".modal-close");

function showModal() {
  modalEl.classList.add("open");
}

function closeModal() {
  modalEl.classList.remove("open");
}

// closeBtn.addEventListener("click", closeModal);

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => {
      dynamicCloseModal(selector);
    });
  }
}

function dynamicCloseModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("open");
  }
}
