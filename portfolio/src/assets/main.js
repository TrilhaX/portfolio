document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    document.body.classList.add("dark-theme");
    toggle.checked = false;

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
    });
});