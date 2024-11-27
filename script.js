let editIndex = null;
document.getElementById('phno').addEventListener('input', function () {
    const phno = document.getElementById('phno').value;
    document.getElementById('phno').value = phno.replace(/[^0-9]/g, '');
    // Checking input contains exactly 10 digits
    if (phno.length === 10 && /^[0-9]+$/.test(phno)) {
       
        document.getElementById('phno-instruction').style.display = 'none';
    } else {
       
        document.getElementById('phno-instruction').style.display = 'block';
    }
});

//getting inputs from submit
document.getElementById('Submit').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const phno = document.getElementById('phno').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    
    
    // Validating inputs
    if (!name || !phno || !email || !location) {
        alert('Please fill all the fields');
        return;
    }

    // Retrieve data from localStorage
    let data = JSON.parse(localStorage.getItem('formDataList')) || [];

    const formData = {
        name: name,
        phone: phno,
        email: email,   
        location: location
    };
    
    if (editIndex !== null) {
        
        data[editIndex] = formData;
        editIndex = null; // Reset edit index
        document.getElementById('Submit').innerText = 'Submit'; // Reset button text
        document.getElementById('Cancel').style.display = 'none'; // Hide Cancel button
    } else {
        // If not in edit mode, add new data
        data.unshift(formData);
    }

    // Save updated data to localStorage
    localStorage.setItem('formDataList', JSON.stringify(data));

    // Reset form and refresh displayed data
    document.getElementById('form').reset();
    displayData();
});

document.getElementById('Cancel').addEventListener('click', function () {
    // Reset form and cancel edit mode
    document.getElementById('form').reset();
    editIndex = null;
    document.getElementById('Submit').innerText = 'Submit'; // Reset button text
    this.style.display = 'none'; // Hide Cancel button
});

function displayData() {
    const data = JSON.parse(localStorage.getItem('formDataList')) || [];
    const tableBody = document.getElementById('table-body');
    const noDataMessage = document.getElementById('no-data-message'); // Reference to the "No data found" message

    tableBody.innerHTML = ''; // Clear existing table rows
    if (data.length === 0) {
        noDataMessage.style.display = 'block'; 
    } else {
        noDataMessage.style.display = 'none'; 
        // Generate new table rows based on data
        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>${item.location}</td>
                <td>
                    <img src="edit-icon.png" alt="Edit" class="edit-icon" onclick="editData(${index})">
                    <img src="delete-icon.png" alt="Delete" class="delete-icon" onclick="deleteData(${index})">
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}


function deleteData(index) {
    let data = JSON.parse(localStorage.getItem('formDataList')) || [];

    // Confirm deletion
    const userConfirmed = confirm("Are you sure you want to delete this content?");
    if (userConfirmed) {
        data.splice(index, 1); // Remove the item
        localStorage.setItem('formDataList', JSON.stringify(data)); // Update localStorage
        displayData();
    }
}

function editData(index) {
    const data = JSON.parse(localStorage.getItem('formDataList')) || [];
    const item = data[index];
    document.getElementById('name').value = item.name;
    document.getElementById('phno').value = item.phone;
    document.getElementById('email').value = item.email;
    document.getElementById('location').value = item.location;

    // change the Submit button text
    editIndex = index;
    document.getElementById('Submit').innerText = 'Update';
    document.getElementById('Cancel').style.display = 'inline-block'; // Show Cancel button
}

// Initialize display on page load
window.onload = displayData;
