//views
let loginSection = document.querySelector(".login-section");
let signIn = document.querySelector(".sign-in");
let shopPage = document.querySelector('.shop-page');
//input 
let iFirstName = document.querySelector(".iFirstName");
let iLastName = document.querySelector(".iLastName");
let iEmail = document.querySelector(".iEmail");
let iPassword = document.querySelector(".iPassword");
//verification
let vFirstName = document.querySelector(".vFirstName");
let vLastName = document.querySelector(".vLastName");
let vEmail = document.querySelector(".vEmail");
let vPassword = document.querySelector(".vPassword");
let btnLogin = document.querySelector(".btnLogin");

//signIn
let signInEmail = document.querySelector(".signInEmail");

let signInPassword = document.querySelector(".signInPassword");
let signInNotification = document.querySelector(".signIn-notification");
let btnSignIN = document.querySelector(".btnSignIN");

let userLogin = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

if (localStorage.hasOwnProperty("userLogIn")) {
  loginSection.style.display = "none";
  signIn.style.display = "block";
}

function signUser() {
  let userCredentials = JSON.parse(localStorage.getItem("userLogIn"));

  if (
    signInEmail.value === userCredentials.email &&
    signInPassword.value === userCredentials.password
  ) {
    btnSignIN.disabled = false;
    signInNotification.style.visibility = "hidden";
    takeMeToShopPage(userCredentials);
  } else {
    signInNotification.style.visibility = "visible";
  }
}
function takeMeToShopPage(userCredentials) {
  let userID = document.querySelector('.userID');
  userID.innerHTML = `<h4>Hello, ${userCredentials.firstName}</h4>`
  btnSignIN.addEventListener("click", function () {
      signIn.style.display = "none";
      shopPage.style.display = "block"
  });
}
function checkLogin() {
  if (iFirstName.value.length < 3) {
    vFirstName.style.visibility = "visible";
  } else if (iFirstName.value.length >= 3) {
    vFirstName.style.visibility = "hidden";
    saveUserLogin();
  }
  if (iLastName.value.length < 3) {
    vLastName.style.visibility = "visible";
  } else if (iLastName.value.length >= 3) {
    vLastName.style.visibility = "hidden";
    saveUserLogin();
  }
  if (iEmail.value.length < 3) {
    userLogin.email = iEmail.value;
  } else if (iEmail.value.length >= 3) {
    vEmail.style.visibility = "hidden";
    saveUserLogin();
  }

  if (iPassword.value.length < 3) {
    vPassword.style.visibility = "visible";
  } else if (iPassword.value.length >= 6) {
    vPassword.style.visibility = "hidden";
    saveUserLogin();
  }
}
function saveUserLogin() {
  userLogin.firstName = iFirstName.value;
  userLogin.lastName = iLastName.value;
  userLogin.email = iEmail.value;
  userLogin.password = iPassword.value;

  if (
    userLogin.firstName !== "" &&
    userLogin.lastName !== "" &&
    userLogin.email !== "" &&
    userLogin.password !== ""
  ) {
    btnLogin.disabled = false;
  } else {
    btnLogin.disabled = true;
  }
}

btnLogin.addEventListener("click", function () {
  localStorage.setItem("userLogIn", JSON.stringify(userLogin));
  loginSection.style.display = "none";
  signIn.style.display = "block"
});
