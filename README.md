# Interactive User Registration Form

> Demonstrates DOM manipulation, event handling, HTML5 and JavaScript form validation, and localStorage. The form provides real-time feedback to the user and demonstrate handlng user input effectively and persisting simple data.




## Implement Checklist
- [X] Select all necessary DOM elements (form, inputs, error message spans)
- [X] Real-time validation: Add input event listeners to each field.
    - [X] Check validity using the Constraint Validation API (inputElement.validity).
    - [X] For the “Confirm Password” field, explicitly check if it matches the “Password” field.
    - [X] Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
- [X] Form submission: Add a submit event listener to the form.
    - [ ] Call event.preventDefault().
    - [ ] Perform a final validation check on all fields.
    - [ ] If all fields are valid:
        - [ ] Display a success message (e.g., an alert or update a status message on the page).
        - [ ] Save the username to localStorage.
        - [ ] Optionally, reset the form.
    - [ ] If any field is invalid, ensure error messages are displayed and focus on the first invalid field.