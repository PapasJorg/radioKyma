document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Έλεγχος αν υπάρχει αποθηκευμένη ρύθμιση στο localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "🌙"; // Dark Mode (Moon)
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Μικρή καθυστέρηση για smooth αλλαγή του emoji
        setTimeout(() => {
            if (document.body.classList.contains("dark-mode")) {
                toggleButton.textContent = "🌙"; // Moon emoji
                localStorage.setItem("dark-mode", "enabled");
            } else {
                toggleButton.textContent = "🌞"; // Sun emoji
                localStorage.setItem("dark-mode", "disabled");
            }
        }, 200); // Καθυστέρηση 200ms για να ταιριάζει με το transition
    });
});

