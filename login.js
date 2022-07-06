//Selected Views
let signUpSection = document.querySelector(".section-signUP");
let loginSection = document.querySelector(".section-login");
let shopAddsView = document.querySelector(".section_shop_adds");
let shopNavbar = document.querySelector(".navbar_items_container");

// Navbar button to show Sign Up Form
let btnSignUP = document.querySelector(".btn-signUP");
let btnLogin = document.querySelector(".btnLogin");
let btnNavbarLogin = document.querySelector('.btn-LogIn');

// login inputs
let iLoginEmail = document.querySelector(".input_login_email");
let iLoginPassword = document.querySelector(".input_login_pass");

//incorect login verification
let loginEmailNotification = document.querySelector(
  ".login_email_notification"
);
let loginPassNotification = document.querySelector(".login_pass_notification");

//stay login checkbox
let checkbox = document.querySelector("#checkbox");

let usersCredentials = JSON.parse(localStorage.getItem("userLogin"));

let usersAccount = {
  username: "",
  password: "",
  stayLogged: false,
};

btnLogin.addEventListener("click", verifyLogin);

if (localStorage.hasOwnProperty("userLogin")) {
  signUpSection.style.display = "none";
  loginSection.style.display = "flex";
  shopAddsView.style.display = "none";
  btnSignUP.style.display = "none";

  if (usersCredentials.stayLogged == true) {
    signUpSection.style.display = "none";
    loginSection.style.display = "none";
    shopAddsView.style.display = "block";
      shopNavbar.style.visibility = "visible";
      btnNavbarLogin.innerHTML = "Log out"
  }
}

function verifyLogin() {
  let usersCredentials = JSON.parse(localStorage.getItem("userLogin"));

  if (iLoginEmail.value !== usersCredentials.username) {
    loginEmailNotification.style.visibility = "visible";
  }
  if (iLoginPassword.value !== usersCredentials.password) {
    loginPassNotification.style.visibility = "visible";
  }

  if (
    iLoginEmail.value === usersCredentials.username &&
    iLoginPassword.value === usersCredentials.password
  ) {
    signUpSection.style.display = "none";
    loginSection.style.display = "none";
    shopAddsView.style.display = "block";
    shopNavbar.style.visibility = "visible";

    if (checkbox.checked) {
      usersAccount.stayLogged = true;
      localStorage.setItem("userLogin", JSON.stringify(usersAccount));
    }
  }
}
