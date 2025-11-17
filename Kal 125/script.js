console.log("Page Loaded");
console.log("Page Loaded");

// ---------------- DARK MODE TOGGLE ----------------
document.querySelector('.dark-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const btn = document.querySelector('.dark-toggle');
    btn.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});


// Load theme on page start
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};
