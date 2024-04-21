const doctorData = [
    { regId: 1, name: "Dr. John Doe", sex: "Male", degree: "MD", specialization: "Cardiology", rating: 0 },
    { regId: 2, name: "Dr. Jane Smith", sex: "Female", degree: "MBBS", specialization: "Pediatrics", rating: 0 },
    { regId: 3, name: "Dr. Michael Johnson", sex: "Male", degree: "MD", specialization: "Orthopedics", rating: 0 },
    { regId: 4, name: "Dr. Emily Brown", sex: "Female", degree: "MBBS", specialization: "Dermatology", rating: 0 },
    { regId: 5, name: "Dr. David Wilson", sex: "Male", degree: "MD", specialization: "Ophthalmology", rating: 0 },
    { regId: 6, name: "Dr. Sarah Martinez", sex: "Female", degree: "MBBS", specialization: "Neurology", rating: 0 },
    { regId: 7, name: "Dr. Robert Taylor", sex: "Male", degree: "MD", specialization: "Gastroenterology", rating: 0 },
    { regId: 8, name: "Dr. Laura Garcia", sex: "Female", degree: "MBBS", specialization: "Obstetrics and Gynecology", rating: 0 },
    { regId: 9, name: "Dr. Christopher Anderson", sex: "Male", degree: "MD", specialization: "Psychiatry", rating: 0 },
    { regId: 10, name: "Dr. Amanda Hernandez", sex: "Female", degree: "MBBS", specialization: "Endocrinology", rating: 0 }
    // Add more doctor data as needed
];

function displayDoctors(data) {
    const tableBody = document.getElementById("doctorData");
    tableBody.innerHTML = "";

    data.forEach(doctor => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${doctor.regId}</td>
          <td>${doctor.name}</td>
          <td>${doctor.sex}</td>
          <td>${doctor.degree}</td>
          <td>${doctor.specialization}</td>
          <td>${doctor.rating}</td>
      `;

        const rateButton = document.createElement("button");
        rateButton.textContent = "Give Rating";
        rateButton.addEventListener("click", () => giveRating(doctor));

        row.cells[5].appendChild(rateButton);

        tableBody.appendChild(row);
    });
}

function giveRating(doctor) {
    const rating = prompt(`Enter rating for ${doctor.name}:`);
    if (rating !== null && !isNaN(rating) && rating >= 0 && rating <= 5) {
        doctor.rating = parseFloat(rating);
        displayDoctors(doctorData);
    } else {
        alert("Please enter a valid rating between 0 and 5.");
    }
}

function searchDoctor() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredDoctors = doctorData.filter(doctor => doctor.name.toLowerCase().includes(searchInput));
    displayDoctors(filteredDoctors);
}

window.onload = function () {
    displayDoctors(doctorData);
};
