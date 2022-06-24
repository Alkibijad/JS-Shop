

//Sign Up form submit button
let btnSubmitSignUP = document.querySelector('.btn_SignUP');
// Sign up form section
let signUpForm = document.querySelector('.section-signUP');
//Sign Up form inputs
let iSignUpEmail = document.querySelector('.signUp-email');
let iSignUpPassword = document.querySelector('.signUp-password');
//Sign Up form verification p
let vSignUPEmail = document.querySelector('.v_signUP_email');
let vSignUpPassword = document.querySelector('.v_signUP_password');
//email verification
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


btnSignUP.addEventListener("click", function () { 
    signUpForm.style.display = "flex"
    btnSignUP.style.display = "none";
    shopAddsView.style.display = "none"

})

function createUserAccount() { 
    if (iSignUpEmail.value.match(mailformat)) { 
        vSignUPEmail.style.visibility = "hidden"
        usersAccount.username = iSignUpEmail.value
    }else if (iSignUpEmail.value.length < 3) { 
        vSignUPEmail.style.visibility = "visible"
    }
    if (iSignUpPassword.value.length < 3) { 
        vSignUpPassword.style.visibility = "visible"
    }else if (iSignUpPassword.value.length > 2) { 
        vSignUpPassword.style.visibility = "hidden"
        usersAccount.password = iSignUpPassword.value
    }
    saveUser()
}

function saveUser() { 
    if (usersAccount.username !== "" && usersAccount.password !== "") { 
        btnSubmitSignUP.disabled = false
        btnSubmitSignUP.addEventListener("click", function () { 
            localStorage.setItem('userLogin', JSON.stringify(usersAccount))
            signUpSection.style.display = "none"
            loginSection.style.display = "flex"
        })

    }

}