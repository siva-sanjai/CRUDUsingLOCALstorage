# CRUDUsingLOCALstorage
Form Data Management with LocalStorage
This project provides a simple form that allows users to input data (name, phone number, email, and location). The form validates the phone number input to ensure it contains exactly 10 digits and then stores the submitted data in localStorage. The user can also edit or delete previously entered data from the displayed list.

Features
Form Input Validation:

Ensures the phone number consists of only numeric values and contains exactly 10 digits.
Displays a warning message if the phone number is invalid.
Add, Edit, and Delete Entries:

Users can add new data to the list.
Users can edit any existing data entry.
Users can delete entries with a confirmation prompt.
Data Persistence:

All data is stored in the browser’s localStorage, so it persists even after page reloads.
Cancel Edit:

The form allows the user to cancel the edit process and reset the form to its initial state.
Technologies Used
HTML: Structure of the webpage.
CSS: Basic styling (can be customized).
JavaScript: For dynamic interaction and data management.
localStorage: To store and retrieve form data.
How It Works
Input Validation:

The phone number input field only allows numbers and automatically removes any non-numeric characters.
When the user enters a phone number with exactly 10 digits, the validation message is hidden.
If the phone number doesn't meet the criteria, a warning message is shown.
Submitting Data:

On clicking the "Submit" button, the form data (name, phone number, email, location) is collected and stored in the browser’s localStorage.
If the form is in edit mode, the existing entry is updated.
If the form is in add mode, a new entry is added.
Editing Data:

When clicking the "Edit" button on an entry, the form is populated with the existing data for that entry.
The button text changes to "Update" to indicate the edit mode.
Deleting Data:

Clicking the "Delete" button will prompt the user with a confirmation message before deleting the selected entry.
Display Data:

On page load, the stored data is displayed in a table format.
If no data is found, a message ("No data found") is shown.
Files Included
index.html: The main HTML file with the form and table.
styles.css: The CSS file for styling the form and the table.
script.js: The JavaScript file responsible for handling form validation, storing data in localStorage, and dynamically updating the page.
edit-icon.png: Image for the edit button.
delete-icon.png: Image for the delete button.
Local Storage Details
All form data is stored as a list of objects in localStorage under the key formDataList.
Each object contains the following fields:
name: The name of the person.
phone: The phone number (validated to be exactly 10 digits).
email: The email address.
location: The location of the person.
Notes
The phone number input will automatically remove any non-numeric characters as the user types.
The form resets after submitting or cancelling an edit.
You can only edit or delete entries that are already saved in local storage.
