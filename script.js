// SIGN-UP FORM-VALIDATION

const usernameEl = document.querySelector("#first-name");
const phonenumberEl = document.querySelector("#phone-number");
const emailEl = document.querySelector("#signup-email");
const passwordEl = document.querySelector("#signup-password");
const confirmPasswordEl = document.querySelector("#password2");

const form = document.querySelector("#signup");

// usernameEl.addEventListener("input", function (){

// })

const checkUsername = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else if (!isalphabets(username)) {
    showError(usernameEl, `Username must contain only letters.`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

//REAL TIME Validation

// USERNAME

const realtimevalidationusername = function () {
  checkUsername();
};

usernameEl.addEventListener("keyup", function () {
  realtimevalidationusername();
});

// Phone number

const realtimevalidationphonenumber = function () {
  checkPhoneNumber();
};

phonenumberEl.addEventListener("keyup", function () {
  realtimevalidationphonenumber();
});

// Email

const realtimevalidationemail = function () {
  checkEmail();
};

emailEl.addEventListener("keyup", function () {
  realtimevalidationemail();
});

// Password

const realtimevalidationpassword = function () {
  checkPassword();
};

passwordEl.addEventListener("keyup", function () {
  checklistEl = document.querySelector(".checklist");
  checklistEl.style.display = "block";
  realtimevalidationpassword();
});

//Confirm Password

const realtimevalidationconfirmpassword = function () {
  checkConfirmPassword();
};

confirmPasswordEl.addEventListener("keyup", function () {
  realtimevalidationconfirmpassword();
});

//REAL TIME Validation END

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank");
  } else if (!haseight(password)) {
    showError(passwordEl);
  } else if (haseight(password)) {
    const first = document.querySelector("#first-point");
    first.textContent = "";
  }
  if (!hasupperandlower(password)) {
    showError(passwordEl);
  } else if (hasupperandlower(password)) {
    const second = document.querySelector("#second-point");
    second.textContent = "";
  }
  if (!number(password)) {
    showError(passwordEl);
  } else if (number(password)) {
    const third = document.querySelector("#third-point");
    third.textContent = "";
    showSuccess(passwordEl);
    valid = true;
    indicator = true;
  }
  return valid;
};

const checkPassword2 = () => {
  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  }
};

const checkConfirmPassword = () => {
  let valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "This field cannot be empty");
  } else if (!isConfirmPasswordSecure(confirmPassword)) {
    showError(
      confirmPasswordEl,
      "Minimum 8 characters, at least one uppercase, one lower case, and must contain at least one number"
    );
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "The password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }

  return valid;
};

const checkPhoneNumber = () => {
  let valid = false;
  const phoneNum = phonenumberEl.value.trim();
  console.log(phoneNum);
  if (!isRequired(phoneNum)) {
    showError(phonenumberEl, "Phone-Number cannot be blank.");
  } else if (!isnumberValid(phoneNum)) {
    showError(
      phonenumberEl,
      "Phone Number is not valid.(Phone number should be in the format XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX,XXXXXXXXXX)"
    );
  } else {
    showSuccess(phonenumberEl);
    valid = true;
  }
  return valid;
};

const isalphabets = (username) => {
  const re = /^[A-Za-z]+$/;
  return re.test(username);
};

const isnumberValid = (phoneNum) => {
  const re = /^(([0-9]{3})([\s.-]?)([0-9]{3})([\s.-]?)([0-9]{4}))$/;
  return re.test(phoneNum);
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isConfirmPasswordSecure = (confirmPassword) => {
  const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
  return re.test(confirmPassword);
};

// const isPasswordSecure = (password) => {
//   const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
//   return re.test(password);
// };

const haseight = (password) => (password.length >= 8 ? true : false);

const hasupperandlower = (password) => {
  const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).*$/);
  return re.test(password);
};
const number = (password) => {
  const re = new RegExp(/^.*\d.*$/);
  return re.test(password);
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEqualto = (length) => (length === 10 ? true : false);

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// form.addEventListener("keyup", function (e) {
//   checkUsername();
// });

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
    isPhoneNumValid = checkPhoneNumber(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  checkPassword2();

  let isFormValid =
    isUsernameValid &&
    isPhoneNumValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    const loginbtn = document.querySelector(".btn-warning");
    loginbtn.click();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "phoneNum":
        checkPhoneNumber();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "confirm-password":
        checkConfirmPassword();
        break;
    }
  })
);

// SIGN-UP FORM-VALIDATION END

// LOGIN FORM-VALIDATION

const loginEmailEl = document.querySelector("#login-email");
const loginPasswordEl = document.querySelector("#login-password");

const forms = document.querySelector("#login-form");

const checkEmails = () => {
  let valid = false;
  const loginEmail = loginEmailEl.value.trim();
  if (!isloginRequired(loginEmail)) {
    showloginError(loginEmailEl, "Email cannot be blank.");
  } else if (!isloginEmailValid(loginEmail)) {
    showloginError(loginEmailEl, "Email is not valid.");
  } else {
    showloginSuccess(loginEmailEl);
    valid = true;
  }
  return valid;
};

const checkPasswords = () => {
  let valid = false;

  const loginpassword = loginPasswordEl.value.trim();

  if (!isloginRequired(loginpassword)) {
    showloginError(loginPasswordEl, "Password cannot be blank.");
  } else if (!isloginPasswordSecure(loginpassword)) {
    showloginError(
      loginPasswordEl,
      "Minimum 8 characters, at least one uppercase, one lower case, and must contain at least one number"
    );
  } else {
    showloginSuccess(loginPasswordEl);
    valid = true;
    indicator = true;
  }
  return valid;
};

const isloginEmailValid = (loginEmail) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(loginEmail);
};

const isloginPasswordSecure = (loginpassword) => {
  const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
  return re.test(loginpassword);
};

const isloginRequired = (value) => (value === "" ? false : true);

const isloginBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isloginEqualto = (length) => (length === 10 ? true : false);

const showloginError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showloginSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

forms.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isloginEmailValid = checkEmails(),
    isloginPasswordValid = checkPasswords();

  let isloginFormValid = isloginEmailValid && isloginPasswordValid;

  // submit to the server if the form is valid
  if (isloginFormValid) {
    const loginButton = document.querySelector(".btn-warning");
    const signupButton = document.querySelector(".btn-success");

    loginButton.style.pointerEvents = "none";
    signupButton.style.pointerEvents = "none";

    console.log("Welcome");

    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("Login")
    ).hide();
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("exampleModal")
    ).hide();

    loginButton.textContent = "Welcome";
    signupButton.textContent = "My profile";
  }
});

const debouncer = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

forms.addEventListener(
  "input",
  debouncer(function (e) {
    switch (e.target.id) {
      case "loginEmail":
        checkEmails();
        break;
      case "loginpassword":
        checkPasswords();
        break;
    }
  })
);

///METER
const strength = {
  0: "Weak",
  1: "Too Guessable",
  2: "Good",
  3: "Strong",
  4: "Secure",
};

const password = document.getElementById("signup-password");
const meter = document.getElementById("password-strength-meter");
const text = document.getElementById("password-strength-text");
const suggestions = document.getElementById("password-strength-suggestions");

password.addEventListener("input", function () {
  const val = password.value;
  const result = zxcvbn(val);
  const progressIndicator = document.querySelector("#showValue");
  progressIndicator.style.display = "flex";
  const progressEL = document.getElementById("showValue");
  const stylingClass = document.querySelector(".progress-bar");
  progressEL.style.animation = "progressBar 3s ease-in-out";
  progressEL.style.animationFillMode = "both";
  // Update the password strength meter
  // meter.value = result.score;

  const suggestionText = result.feedback.suggestions;
  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score];
    suggestions.textContent = suggestionText;
  } else {
    text.innerHTML = "";
  }

  const resultScore = strength[result.score];

  if (val === "") {
    stylingClass.style.width = "0%";
  } else if (resultScore === "Weak") {
    stylingClass.style.width = "20%";
    console.log(resultScore);
    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-warning(?!\S)/g,
      ""
    );
    if (!stylingClass.className.match(/(?:^|\s)bg-danger(?!\S)/)) {
      stylingClass.className += " bg-danger";
    }
  } else if (resultScore === "Too Guessable") {
    stylingClass.style.width = "40%";
    console.log(resultScore);
    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-info(?!\S)/g,
      ""
    );
    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-danger(?!\S)/g,
      ""
    );
    if (!stylingClass.className.match(/(?:^|\s)bg-warning(?!\S)/)) {
      stylingClass.className += " bg-warning";
    }
  } else if (resultScore === "Good") {
    stylingClass.style.width = "60%";
    console.log(resultScore);

    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-warning(?!\S)/g,
      ""
    );
    if (!stylingClass.className.match(/(?:^|\s)bg-info(?!\S)/)) {
      stylingClass.className += " bg-info";
    }
  } else if (resultScore === "Strong") {
    stylingClass.style.width = "80%";
    console.log(resultScore);
    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-success(?!\S)/g,
      ""
    );
    stylingClass.className = stylingClass.className.replace(
      /(?:^|\s)bg-info(?!\S)/g,
      ""
    );
  } else {
    stylingClass.style.width = "100%";
    console.log(resultScore);
    if (!stylingClass.className.match(/(?:^|\s)bg-success(?!\S)/)) {
      stylingClass.className += " bg-success";
    }
  }
});
