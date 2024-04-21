const sampleData = [
    { hospitalId: 1, name: "Mayo Clinic", regId: "MAYO001", address: "200 1st St SW", city: "Rochester", state: "MN", zip: "55905", phone: "(507) 284-2511", email: "info@mayo.edu" },
    { hospitalId: 2, name: "Johns Hopkins Hospital", regId: "JH001", address: "1800 Orleans St", city: "Baltimore", state: "MD", zip: "21287", phone: "(410) 955-5000", email: "contact@jhmi.edu" },
    { hospitalId: 3, name: "Cleveland Clinic", regId: "CLE001", address: "9500 Euclid Ave", city: "Cleveland", state: "OH", zip: "44195", phone: "(216) 444-2200", email: "info@clevelandclinic.org" },
    { hospitalId: 4, name: "Massachusetts General Hospital", regId: "MGH001", address: "55 Fruit St", city: "Boston", state: "MA", zip: "02114", phone: "(617) 726-2000", email: "contact@partners.org" },
    { hospitalId: 5, name: "University of Texas MD Anderson Cancer Center", regId: "MDA001", address: "1515 Holcombe Blvd", city: "Houston", state: "TX", zip: "77030", phone: "(713) 792-2121", email: "askmdanderson@mdanderson.org" },
    { hospitalId: 6, name: "New York-Presbyterian Hospital", regId: "NYP001", address: "525 E 68th St", city: "New York", state: "NY", zip: "10065", phone: "(212) 746-5454", email: "nypconnect@nyp.org" },
    { hospitalId: 7, name: "UCSF Medical Center", regId: "UCSF001", address: "505 Parnassus Ave", city: "San Francisco", state: "CA", zip: "94143", phone: "(415) 476-1000", email: "contactus@ucsf.edu" },
    { hospitalId: 8, name: "Stanford Health Care", regId: "STAN001", address: "300 Pasteur Dr", city: "Stanford", state: "CA", zip: "94305", phone: "(650) 723-4000", email: "contact@stanfordhealthcare.org" },
    { hospitalId: 9, name: "Hospitals of the University of Pennsylvania-Penn Presbyterian", regId: "HUP001", address: "3400 Spruce St", city: "Philadelphia", state: "PA", zip: "19104", phone: "(215) 662-4000", email: "pennmedicineweb@uphs.upenn.edu" },
    { hospitalId: 10, name: "Cedars-Sinai Medical Center", regId: "CSMC001", address: "8700 Beverly Blvd", city: "Los Angeles", state: "CA", zip: "90048", phone: "(310) 423-3277", email: "contactus@cshs.org" }
];


function displayDoctors(data) {
    const tableBody = document.getElementById("doctorData");
    tableBody.innerHTML = "";

    data.forEach(doctor => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${doctor.hospitalId}</td>
          <td>${doctor.name}</td>
          <td>${doctor.regId}</td>
          <td>${doctor.address}</td>
          <td>${doctor.city}</td>
          <td>${doctor.state}</td>
          <td>${doctor.zip}</td>
          <td>${doctor.phone}</td>
          <td>${doctor.email}</td>
      `;
        tableBody.appendChild(row);
    });
}

function searchDoctor() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredDoctors = sampleData.filter(doctor =>
        doctor.name.toLowerCase().includes(searchInput)
        || doctor.regId.toLowerCase().includes(searchInput)
        || doctor.city.toLowerCase().includes(searchInput)
        || doctor.state.toLowerCase().includes(searchInput)
        || doctor.email.toLowerCase().includes(searchInput)
    );
    displayDoctors(filteredDoctors);
}

window.onload = function () {
    displayDoctors(sampleData);
};
