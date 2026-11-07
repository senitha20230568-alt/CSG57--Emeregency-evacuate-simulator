// =====================================
// CONTACT FORM FUNCTIONALITY
// =====================================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for your message! This is a prototype form and your message has not been sent.");

        contactForm.reset();

    });

}


// =====================================
// SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});