const form = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const registerButton = document.getElementById("register-button");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

// console.log(form);
// console.log(usernameInput);
// console.log(passwordInput);
// console.log(confirmPasswordInput);
// console.log(registerButton);

// console.log(usernameError);
// console.log(emailError);
// console.log(passwordError);
// console.log(confirmPasswordError);


function validateUsername(){console.log(usernameInput.value);}


function validateEmail(){console.log(emailInput.value);}


function validatePassword(){console.log(passwordInput.value);}


function validateConfirmPassword(){console.log(confirmPasswordInput.value);}


usernameInput.addEventListener("change", function(){
    validateUsername();
})

usernameInput.addEventListener("change", function(){
    validateUsername();
})

usernameInput.addEventListener("change", function(){
    validateUsername();
})

confirmPasswordInput.addEventListener("change", function(){
    validateUsername();
})