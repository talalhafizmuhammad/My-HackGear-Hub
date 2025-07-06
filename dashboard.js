document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard Loaded");

    const welcomeSection = document.querySelector(".welcome-section");
    const greeting = welcomeSection.querySelector(".greeting");

    if (!greeting) {
        const newGreeting = document.createElement("p");
        newGreeting.classList.add("greeting");
        const hour = new Date().getHours();

        if (hour < 12) {
            newGreeting.textContent = "Good morning, Hacking enthusiasts!";
        } else if (hour < 18) {
            newGreeting.textContent = "Good afternoon, Hacking enthusiasts!";
        } else {
            newGreeting.textContent = "Good evening, Hacking enthusiasts!";
        }

        welcomeSection.appendChild(newGreeting);
    }

    const categoryButtons = document.querySelectorAll(".category-card .btn");

    categoryButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const category = event.target.parentElement.querySelector("h3").textContent;
            console.log(`Navigating to ${category} category`);
            alert(`You clicked on the ${category} category!`);
        });
    });

    const categoriesGrid = document.querySelector(".category-grid");

}); 