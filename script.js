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


/* because I have minlength="4" and required propeties on the input
   when logging th validity object you can see valueMissing and 
   tooShort flip between true and false as I type
 */
function validateUsername(){
    // console.log(usernameInput.validity);

    //handle if value is missing
    console.log(`Value Missing: ${usernameInput.validity.valueMissing}`);

    //handle short username
    console.log(`Too Short: ${usernameInput.validity.tooShort}`);

}


function validateEmail(){console.log(emailInput.value);}


function validatePassword(){console.log(passwordInput.value);}


function validateConfirmPassword(){console.log(confirmPasswordInput.value);}



//with input as the event type each keystroke log the value
//with change as the event type the value is logged when you leave the input or press enter
usernameInput.addEventListener("input", function(){
    validateUsername();
})

emailInput.addEventListener("change", function(){
    validateEmail();
})

passwordInput.addEventListener("change", function(){
    validatePassword();
})

confirmPasswordInput.addEventListener("change", function(){
    validateConfirmPassword();
})