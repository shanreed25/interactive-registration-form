# Interactive User Registration Form

> Demonstrates DOM manipulation, event handling, HTML5 and JavaScript form validation, and localStorage. The form provides real-time feedback to the user and demonstrate handlng user input effectively and persisting simple data.




## Implement Checklist
- [X] Select all necessary DOM elements (form, inputs, error message spans)
- [X] Real-time validation: Add input event listeners to each field.
    - [X] Check validity using the Constraint Validation API (inputElement.validity).
    - [X] For the “Confirm Password” field, explicitly check if it matches the “Password” field.
    - [X] Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
- [X] Form submission: Add a submit event listener to the form.
    - [X] Call event.preventDefault().
    - [X] Perform a final validation check on all fields.
    - [X] If all fields are valid:
        - [X] Display a success message (e.g., an alert or update a status message on the page).
        - [X] Save the username to localStorage.
        - [X] Optionally, reset the form.
    - [X] If any field is invalid, ensure error messages are displayed and focus on the first invalid field.


---

## Testing and Validation Checklist
- [X] Test Basic Registration: Fill out all fields with valid data and submit the form. Verify the success message and that the username is saved in localStorage (check your browser’s Developer Tools > Application > Local Storage).
- [X] Test Username Validation:
    - [X] Try submitting with an empty username.
    - [X] Enter a username that is too short.
    - [X] Verify error messages appear in real-time as you type (or on blur/submit).
- [X] Test Email Validation:
    - [X] Try submitting with an empty email.
    - [X] Enter an invalid email format (e.g., “test@”, “test.com”).
- [X] Test Password Validation:
    - [X] Try submitting with an empty password.
    - [X] Enter a password that is too short.
    - [X] Enter a password that doesn’t meet the pattern (e.g., all lowercase, no numbers).
    - [X] Ensure the “Confirm Password” field shows an error if it doesn’t match the password.
- [X] Test Local Storage Persistence: After a successful registration, refresh the page. The username field should be pre-filled with the value you entered.
- [X] Edge Cases: Think about what happens if a user tries to bypass validation (though client-side validation is mainly for UX, server-side is for security). What happens if  localStorage is full or disabled (for this lab, we assume it works, but it’s a real-world consideration)?

## Reflection Questions

#### How did event.preventDefault() help in handling form submission?

> In all my listener I first log something to the console to make sure it is working. With the form submit listener the console log appeared in the console for a split second then disappeared. This is because the browser's default behavior is to submit and reload. I used event.preventDefault() to stop the default submission behavior. This way anything that happened on submit actually shows and stays because the page does not reload.

#### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

> HTML5 validation such as required, minlength and type="email" declare rules for the inputs. The browser uses the validity object to track the inputs against those rules and automatically applies the :invalid pseudo-class to any input that fails its rules. It was important to understand that the browser automatically applies the :invalid pseudo-class, otherwise you would be confused about where it is coming from and how to use it.

> JavaScript validation determines what invalidation message to show and when to show it. Since the form had a novalidate attribute the browser will not show its own message or popups. The validation function for each input reads the validity object's flags, such as valueMissing, tooShort, typeMismatch, and patternMismatch, and writes custom errors into the error span. There are no HTML attribute to use for some rules like checking to see if the password input and the confirm password input values match, or invalidating an input with only spaces, so using setCustomValidity() is used to tell the browser about these rules, so that the :invalid pseudo class get added if these rules are broken.

> You might use both HTML5 validation attributes and JavaScript-based validation because they both can work together to do different jobs. The HTML attributes can provide rules, validity state and password pattern matching using regex lookaheads. JavaScript can give you custom error messages, and you can create custom errors.

#### Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

> I saved the username with localStorage.setItem("username", usernameInput.value); when the form is submitted successfully. I then used localStorage.getItem("username"); to set the username to the username input's value on page load. With local Storage values are stored as plain text, so anyone with access to the browser and any script running on the same site can read them. This makes it vulnerable to an attack to steal the information. Local Storage also has a size limit, the data never expires and it can only hold strings.

#### Describe a challenge you faced in implementing the real-time validation and how you solved it.

> While I was testing, I realized that the username field would accept a value made of only spaces and long as it was the required length. I tried to use setCustomValidity() the way I understood it at the time. I could never get the message to show up and I realized the way I was using it was wrong, because I was trying to use setCustomValidity() to set and display the message but I was only setting it and not accessing it after it has been set. I realized this because I was getting undefined as the error message and not the actual message, because setCustomValidity() returns undefined. I fixed this by using one if statement that sets the custom validity based on if the trimmed value was empty, then used validity.customError to check for the error and display it.

#### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

> I wrote a different message for each validity flag, an empty field says the field is required, a short username or password states the minimum length, an invalid email asks for a valid address, and a password that fails the pattern explains which requirement is missing. Where two problems could apply at once, like a short password that also fails the pattern, I ordered my checks so the most useful message shows first. Each field also has a listener, and messages update as the user types and then the messages clear when the input becomes valid. The validatePassword() function checks the confirm field when the password changes, but only if the confirm input already has a value, so an untouched field doesn't show an error early. To avoid red borders on page load, I added a touched class inside each validation function and styled only touched fields as invalid, then removed the class on reset. In the form submit listener, I call each validation functions every time, so every error appears at once, and the cursor moves to the first invalid field.