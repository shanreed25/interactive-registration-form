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

#### How did `event.preventDefault()` help in handling form submission?
> In all my listener I first log comething to the console to make sure it is working. With the form submit listener the console log appeared in the console for a split second then disappeared. This is because the browser's default behavior is to submit and reload. I used `event.preventDefault()` to stop the default submission behavior. This way anything that happen on submit actually shows and stays because the page does not reload.

#### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
> HTML5 validation such as `required`, `minlength` and `type="email"` declare rules for the inputs. The browser uses the`validity` object to track the inputs against those rules, and automatically applies the `:invalid` pseudo-class to any input that fails its rules. It was important to understand that the browser automatically applies the `:invalid` pseudo-class, otherwise you would be confused about where it is coming from and how to use it.

> JavaScript validation determins what invalidation message to show and when to show it. Since the form

#### Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
#### Describe a challenge you faced in implementing the real-time validation and how you solved it.
#### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?