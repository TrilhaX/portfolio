console.log("A")
// public/main.js
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");

    // Aplica o tema escuro por padrão
    document.body.classList.add("dark-theme");
    toggle.checked = false;

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
    });
});
