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

/*after restting the form have the username input prefill with 
username saved in localstorage, but local storage can be blocked 
or full, because this code is at the top level, which means it runs
when the page loads, if this trows an error the rest of the code would not run
fixing this by wrapping it in a try/catch block
*/
try {
  // throw new Error("test");//this can be used to force the failure
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
} catch (err) {
  console.warn("Could not load username, error");
}

//Validates the username field
function validateUsername() {
  /* because I have minlength="4" and required propeties on the input
   when logging the validity object you can see valueMissing and 
   tooShort flip between true and false as I type
 */

  /* the CSS :invalid rule makes empty required fields red before the user types anything
        could use :user-invalid because with it the browser applies the border after the 
        user has interacted with a input, but tested this I found that the borders do not
        appear, when I submit an empty form that has not been interacted with, so I
        added touched class to the input to handle the red borders on page load
    */
  usernameInput.classList.add("touched");

  //for the username input a user could only enter space and
  // the input will accept it, this if statement checks for that
  //set custom rule, usernameInput.validationMessage will hold the result
  if (usernameInput.value.length > 0 && usernameInput.value.trim() === "") {
    usernameInput.setCustomValidity("Enter a username, not just spaces");
  } else {
    usernameInput.setCustomValidity("");
  }

  //Validation Messages
  if (usernameInput.validity.tooShort) {
    //handle short username
    usernameError.innerText = "Username must be at least 4 characters";
  } else if (usernameInput.validity.valueMissing) {
    //handle missing username
    usernameError.innerText = "Username is required";
  } else if (usernameInput.validity.customError) {
    //handle username with only spaces, check for custom error
    usernameError.innerText = usernameInput.validationMessage;
  } else {
    usernameError.innerText = "";
  }

  // console.log(usernameInput.validity.valid);
  return usernameInput.validity.valid; //returns true if field is valid and false if it is not valid
}

//Validates the email field
function validateEmail() {
  emailInput.classList.add("touched");
  //Something like .com or .org is not required so in the html
  // I added the pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}" will not allow something like Email@Email
  if (emailInput.validity.valueMissing) {
    //handle missing email
    emailError.innerText = "Email is required";
  } else if (emailInput.validity.patternMismatch) {
    //handle invalid email
    emailError.innerText = "Please enter a valid email address.";
  } else {
    emailError.innerText = "";
  }

  return emailInput.validity.valid; //returns true if field is valid and false if it is not valid
}

//Validates the password field
function validatePassword() {
  passwordInput.classList.add("touched");
  if (passwordInput.validity.valueMissing) {
    //handle missing password
    passwordError.innerText = "Password is required";
  } else if (passwordInput.validity.tooShort) {
    //handle password too short
    passwordError.innerText = "Password must be at least 8 characters long.";
  } else if (passwordInput.validity.patternMismatch) {
    //handle invalid email
    // console.log(/[A-Z]/.test(passwordInput.value))
    if (!/[A-Z]/.test(passwordInput.value)) {
      //if the value does not contain a uppercase letter
      passwordError.innerText = "Password must include a uppercase letter";
    } else if (!/[a-z]/.test(passwordInput.value)) {
      //if the value does not contain a lowercase letter
      passwordError.innerText = "Password must include a lowercase letter";
    } else if (!/\d/.test(passwordInput.value)) {
      //if the value does not contain a number
      passwordError.innerText = "Password must include a number";
    } else {
      passwordError.innerText = "";
    }
  } else {
    passwordError.innerText = "";
  }

  //if the user goes back and chhanges the password after confirming the password
  //this will recheck the confirm password field only if it has a value
  if (confirmPasswordInput.value) {
    validateConfirmPassword();
  }

  return passwordInput.validity.valid; //returns true if field is valid and false if it is not valid
}

//Validates the confirm password field
function validateConfirmPassword() {
  confirmPasswordInput.classList.add("touched");

  //The browser do not know that the confirm password field must match the password field
  // so it does not mark it invalid when the two field do not match
  //setting setCustomValidity() with a string that is not empty will mark the field invalid
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Password does not match");
  } else {
    confirmPasswordInput.setCustomValidity(""); //clears the custom error
  }

  if (confirmPasswordInput.validity.valueMissing) {
    //handle missing password
    confirmPasswordError.innerText = "Please re-enter your password to confirm";
  } else if (confirmPasswordInput.validity.customError) {
    //handle when password does not match, check for the custom error
    confirmPasswordError.innerText = confirmPasswordInput.validationMessage;
  } else {
    confirmPasswordError.innerText = "";
  }

  return confirmPasswordInput.validity.valid; //returns true if field is valid and false if it is not valid
}

//with input as the event type each keystroke log the value
//with change as the event type the value is logged when
// you leave the input or press enter

// username listener
usernameInput.addEventListener("input", function () {
  validateUsername();
});

//email listener
emailInput.addEventListener("input", function () {
  validateEmail();
});

//password listener
passwordInput.addEventListener("input", function () {
  validatePassword();
});

//confirm password listener
confirmPasswordInput.addEventListener("input", function () {
  validateConfirmPassword();
});

//Form listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); //this stops the browser's default submit behavior, which is why when I submit the form the page does not reload on its own
  console.log("Submitted");

  //find out if the fields are valid, each one returns true of false
  const usernameFieldValid = validateUsername();
  const emailFieldValid = validateEmail();
  const passwordFieldValid = validatePassword();
  const confirmPasswordFieldValid = validateConfirmPassword();

  //creating a form fields object with a true or false value for 
  // each input that indicates if the field is valid or not
  const formFields = {
    usernameField: usernameFieldValid,
    emailField: emailFieldValid,
    passwordField: passwordFieldValid,
    confirmPasswordField: confirmPasswordFieldValid,
  };

  //get all the values
  const formFieldsValuesArr = Object.values(formFields); //returns an array of the objects values something like [true, true, false, false]

  //Fully Valid Form: check if all values are true
  const formValid = formFieldsValuesArr.every((field) => field === true); //if every value in the array is true, this returns true

  const firstInvalidfield = form.querySelector(":invalid"); //return first invalid field

  if (formValid) {
    alert("Form Submitted");
    try {
      localStorage.setItem("username", usernameInput.value);
    } catch (err) {
      console.log("Could not load username, error");
    }

    form.reset();
    /*once the form is resets the fields then become empty again so
    the touched class needs to be removed from all inputs
    */
    [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
      (input) => input.classList.remove("touched"),
    );

    /* this line allows the name to reappear right after submitting
    it is commented out because I am not sure if I am suppose to do this
    for this lab
    */
    // usernameInput.value = savedUsername;
  } else if (firstInvalidfield) {
    //If any field is invalid, focus on the first invalid field.
    firstInvalidfield.focus();
  }

  console.log(formValid);
});
