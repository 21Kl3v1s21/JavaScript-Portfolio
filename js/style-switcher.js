// Get the toggle button for the style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Get all alternate style sheets
const alternateStyles = document.querySelectorAll(".alternate-style");

// Function to set the active style by enabling the selected style and disabling others
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");  // Enable selected style
        } else {
            style.setAttribute("disabled", "true");  // Disable other styles
        }
    });
}

const dayNight = document.querySelector(".day-night");
const body = document.body;

dayNight.addEventListener("click", () => {
    // Toggle the 'dark' class to change background and text color
    body.classList.toggle("dark");
    
    // Toggle the icon between sun and moon
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
});

// Initialize the icon on page load based on the body class
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    if (body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
    } else {
        icon.classList.add("fa-moon");
    }
});

