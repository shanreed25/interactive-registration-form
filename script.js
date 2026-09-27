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
function validateUsername() {
    // console.log(usernameInput.validity);

    //for the username input a user could only enter space and 
    // the input will accept it, this if statement checks for that
    //set custom rule, usernameInput.validationMessage will hold the result
    if (usernameInput.value.length > 0 && usernameInput.value.trim() === ""){
        usernameInput.setCustomValidity("Enter a username, not just spaces");
    } else {
        usernameInput.setCustomValidity("");
    };



    //Validation Messages
    if (usernameInput.validity.tooShort){//handle short username
        usernameError.innerText = "Username must be at least 4 characters";
    } else if (usernameInput.validity.valueMissing){//handle missing username
        usernameError.innerText = "Username is required";
    } else if (usernameInput.validity.customError){//handle username with only spaces, check for custom error
        usernameError.innerText = usernameInput.validationMessage;
    } else {
         usernameError.innerText = "";
    };


};

function validateEmail(){
    //Something like .com or .org is not required so in the html 
    // I added the pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}" will not allow something like Email@Email
    if (emailInput.validity.valueMissing){//handle missing email
        emailError.innerText = "Email is required";
    } else if (emailInput.validity.patternMismatch) {//handle invalid email
         emailError.innerText = "Please enter a valid email address.";
    } else {
        emailError.innerText = ""
    };

    // console.log(emailInput.value);
}


function validatePassword() {
    if (passwordInput.validity.valueMissing){//handle missing password
        passwordError.innerText = "Password is required";
    } else if (passwordInput.validity.tooShort) {//handle password too short
         passwordError.innerText = "Password must be at least 8 characters long.";
    } else if (passwordInput.validity.patternMismatch) {//handle invalid email
        // console.log(/[A-Z]/.test(passwordInput.value))
        if (!/[A-Z]/.test(passwordInput.value)){//if the value does not contain a uppercase letter
            passwordError.innerText = "Password must include a uppercase letter";
        } else if (!/[a-z]/.test(passwordInput.value)){//if the value does not contain a lowercase letter
            passwordError.innerText = "Password must include a lowercase letter";
        } else if (!/\d/.test(passwordInput.value)){//if the value does not contain a number
            passwordError.innerText = "Password must include a number";
        } else {
            passwordError.innerText = ""
        }
        //  passwordError.innerText = "Wait";
    } else {
        passwordError.innerText = ""
    };

    //if the user goes back and chhanges the password after confirming the password
    //this will recheck the confirm password field only if it has a value
    if (confirmPasswordInput.value){
        validateConfirmPassword();
    }
//   console.log(passwordInput.value);
}

function validateConfirmPassword() {


    //The browser do not know that the confirm password field must match the password field
    // so it does not mark it invalid when the two field do not match
    //setting setCustomValidity() with a string that is not empty will mark the field invalid
    if (passwordInput.value !== confirmPasswordInput.value){
        confirmPasswordInput.setCustomValidity("Password does not match");
    } else {
        confirmPasswordInput.setCustomValidity("");//clears the custom error
    };


    console.log(passwordInput.value);
    if (confirmPasswordInput.validity.valueMissing){//handle missing password
        confirmPasswordError.innerText = "Please re-enter your password to confirm";
    } else if (confirmPasswordInput.validity.customError) {//handle when password does not match, check for the custom error
        confirmPasswordError.innerText = confirmPasswordInput.validationMessage;
    } else {
        confirmPasswordError.innerText = "";
    }
  console.log(confirmPasswordInput.value);
}

//with input as the event type each keystroke log the value
//with change as the event type the value is logged when
// you leave the input or press enter
usernameInput.addEventListener("input", function () {
    validateUsername();
});

emailInput.addEventListener("input", function () {
  validateEmail();
});

passwordInput.addEventListener("input", function () {
  validatePassword();
});

confirmPasswordInput.addEventListener("input", function () {
  validateConfirmPassword();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted");
});
