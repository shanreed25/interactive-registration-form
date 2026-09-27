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
    } else if (usernameInput.validity.customError){//handle username with only spaces
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

    console.log(emailInput.value);
}


function validatePassword() {
  console.log(passwordInput.value);
}

function validateConfirmPassword() {
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

passwordInput.addEventListener("change", function () {
  validatePassword();
});

confirmPasswordInput.addEventListener("change", function () {
  validateConfirmPassword();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
