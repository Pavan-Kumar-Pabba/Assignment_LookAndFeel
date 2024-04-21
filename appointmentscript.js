// Add event listener to the form submission
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("City").value;
  const state = document.getElementById("State").value;
  const zip = document.getElementById("ZIP").value;
  const appointmentDate = document.getElementById("appointmentDate").value;
  const mobile = document.getElementById("Mobile").value;
  const email = document.getElementById("Email").value;
  const serviceRequired = document.getElementById("illnessType").value;
  const describeIllness = document.getElementById("Describe Illness").value;

  // Create new table row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td>${address}</td>
    <td>${city}</td>
    <td>${state}</td>
    <td>${zip}</td>
    <td>${appointmentDate}</td>
    <td>${mobile}</td>
    <td>${email}</td>
    <td>${serviceRequired}</td>
    <td>${describeIllness}</td>
    <td>
      <button onclick="deleteRow(this)">Delete</button>
      <button onclick="editRow(this)">Edit</button>
    </td>
  `;

  // Add row to table
  document.getElementById("appointmentData").appendChild(newRow);

  // Clear form fields
  document.getElementById("appointmentForm").reset();
});

// Function to delete a row
function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Function to edit a row
function editRow(btn) {
  const row = btn.parentNode.parentNode;
  // Extract data from the row
  const firstName = row.cells[0].textContent;
  const lastName = row.cells[1].textContent;
  const age = row.cells[2].textContent;
  const address = row.cells[3].textContent;
  const city = row.cells[4].textContent;
  const state = row.cells[5].textContent;
  const zip = row.cells[6].textContent;
  const appointmentDate = row.cells[7].textContent;
  const mobile = row.cells[8].textContent;
  const email = row.cells[9].textContent;
  const serviceRequired = row.cells[10].textContent;
  const describeIllness = row.cells[11].textContent;

  // Populate form fields with extracted data
  document.getElementById("firstName").value = firstName;
  document.getElementById("lastName").value = lastName;
  document.getElementById("age").value = age;
  document.getElementById("address").value = address;
  document.getElementById("City").value = city;
  document.getElementById("State").value = state;
  document.getElementById("ZIP").value = zip;
  document.getElementById("appointmentDate").value = appointmentDate;
  document.getElementById("Mobile").value = mobile;
  document.getElementById("Email").value = email;
  document.getElementById("illnessType").value = serviceRequired;
  document.getElementById("Describe Illness").value = describeIllness;

  // Remove the current row
  deleteRow(btn);
  editrow(btn);
}