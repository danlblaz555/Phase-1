document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signUpForm");
    const tableBody = document.querySelector("#infoTable tbody");

    // Load saved data from localStorage
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.forEach(user => addRowToTable(user.email, user.password));

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Save data to localStorage
        const newUser = { email, password };
        savedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(savedUsers));

        // Update the table
        addRowToTable(email, password);

        // Clear the form
        form.reset();
    });

    function addRowToTable(email, password) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${email}</td>
            <td>${password}</td>
        `;
        tableBody.appendChild(row);
    }
// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Retrieve the saved credentials from localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Check if the credentials match
    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        alert('Login successful! Welcome, ' + savedUsername + '.');
        // Redirect to a protected page or home page
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
