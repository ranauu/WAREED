
const donorsList = [
    {
        name: "Ahmed Mohamed",
        blood: "O+",
        city: "Dakahlia",
        phone: "01000000001"
    },
    {
        name: "Sara Ali",
        blood: "A+",
        city: "Cairo",
        phone: "01000000002"
    },
    {
        name: "Omar Hassan",
        blood: "B+",
        city: "Alexandria",
        phone: "01000000003"
    },
    {
        name: "Mona Ahmed",
        blood: "AB+",
        city: "Giza",
        phone: "01000000004"
    },
    {
        name: "Youssef Adel",
        blood: "O-",
        city: "Dakahlia",
        phone: "01000000005"
    },
    {
        name: "Nour Mohamed",
        blood: "A-",
        city: "Sharkia",
        phone: "01000000006"
    },
    {
        name: "Mahmoud Ali",
        blood: "B-",
        city: "Gharbia",
        phone: "01000000007"
    },
    {
        name: "Salma Hassan",
        blood: "AB-",
        city: "Cairo",
        phone: "01000000008"
    },
    {
        name: "Mostafa Samir",
        blood: "O+",
        city: "Giza",
        phone: "01000000009"
    }
];

const bloodInput = document.getElementById("blood");
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const donorsBox = document.getElementById("donors");
const resultCount = document.getElementById("resultCount");

function displayDonors(donors) {
    donorsBox.innerHTML = "";

    resultCount.textContent = donors.length + " sample donors found";

    if (donors.length === 0) {
        donorsBox.innerHTML = `
            <div class="no-results">
                <h3>No Donors Found 🩸</h3>
                <p>Try another blood group or governorate.</p>
            </div>
        `;
        return;
    }

    donors.forEach(function(donor, index) {
        const card = document.createElement("div");
        card.className = "donor-card";
        card.style.animationDelay = (index * 0.1) + "s";

        card.innerHTML = `
            <div class="donor-top">
                <div class="avatar">👤</div>

                <div>
                    <div class="donor-name">${donor.name}</div>
                    <div class="demo-label">Sample donor profile</div>
                </div>

                <div class="blood-type">${donor.blood}</div>
            </div>

            <div class="donor-info">
                📍 Governorate: ${donor.city}<br>
                📞 Demo phone: ${donor.phone}
            </div>

            <button class="contact-donor" type="button">
                Contact Donor
            </button>
        `;

        card.querySelector(".contact-donor").addEventListener("click", function() {
            alert("This is a demo profile. Real donor contact details are not connected yet.");
        });

        donorsBox.appendChild(card);
    });
}

searchBtn.addEventListener("click", function() {
    const selectedBlood = bloodInput.value;
    const selectedCity = cityInput.value;

    const filteredDonors = donorsList.filter(function(donor) {
        const matchesBlood =
            selectedBlood === "" || donor.blood === selectedBlood;

        const matchesCity =
            selectedCity === "" || donor.city === selectedCity;

        return matchesBlood && matchesCity;
    });

    displayDonors(filteredDonors);
});

// Show all sample donors when the page opens
displayDonors(donorsList);
