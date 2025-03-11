document.getElementById("login-btn").addEventListener("click", handleLogin);

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Send a POST request to the backend
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => {
        if (response.redirected) {
            // Redirect to the home page if login is successful
            window.location.href = response.url;
        } else {
            return response.json(); // Handle errors
        }
    })
    .then((data) => {
        if (data && data.error) {
            alert(data.error); // Display error message
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
}