
// ==============================
// DARK MODE
// ==============================

const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});


// ==============================
// PORTFOLIO FILTER
// ==============================

const workCards = document.querySelectorAll(".work-card");

const filterButtons = document.querySelectorAll(".work-filters button");


function filterProjects(category) {

    // Show and hide project cards

    workCards.forEach(function(card) {

        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });


    // Remove active class from all buttons

    filterButtons.forEach(function(button) {
        button.classList.remove("active");
    });


    // Add active class to selected button

    const activeButton = document.getElementById("filter-" + category);

    activeButton.classList.add("active");

}


// Add click event to filter buttons

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.id.replace("filter-", "");

        filterProjects(category);

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contact-form");

const nameInput = document.querySelector("#contact-form input[type='text']");

const emailInput = document.querySelector("#contact-form input[type='email']");

const subjectSelect = document.querySelector("#contact-form select");

const messageTextarea = document.querySelector("#contact-form textarea");

contactForm.addEventListener("submit", function(event) {

    console.log("Form submitted!");

});
