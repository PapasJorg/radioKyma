document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

function toggleMenu() {
    let menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        let dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none"; // Κρύβει τελείως το dropdown
        });
    }
});
