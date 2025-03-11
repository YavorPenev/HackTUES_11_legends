document.getElementById('signup-btn').addEventListener('click', async () => {
    console.log("Signup button clicked!"); // Debugging line

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Username:", username); // Debugging line
    console.log("Password:", password); // Debugging line

    // Validate input
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Send a POST request to the backend
    try {
        console.log("Sending request to /signup..."); // Debugging line
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log("Response status:", response.status); // Debugging line

        const result = await response.json();
        console.log("Response data:", result); // Debugging line

        // Handle the response
        if (response.ok) {
            alert('Signup successful!');
            window.location.href = '/login'; // Redirect to the login page
        } else {
            alert(result.error || 'Signup failed');
        }
    } catch (err) {
        console.error('Error during signup:', err); // Debugging line
        alert('An error occurred. Please try again.');
    }
});