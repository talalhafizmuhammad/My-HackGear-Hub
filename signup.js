
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");

    const loginForm = document.querySelector('.auth-form[action="dashboard.html"]');
    const signupForm = document.querySelector('.auth-form[action="dashboard.html"]');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("Login Form Submitted");
            alert("Logged in successfully!");
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("Sign Up Form Submitted");
            alert("Signed up successfully!");
        });
    }
});