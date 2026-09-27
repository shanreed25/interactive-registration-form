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
- [ ] Edge Cases: Think about what happens if a user tries to bypass validation (though client-side validation is mainly for UX, server-side is for security). What happens if  localStorage is full or disabled (for this lab, we assume it works, but it’s a real-world consideration)?