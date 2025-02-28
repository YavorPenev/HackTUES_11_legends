document.getElementById('login-btn').addEventListener('click', async () => {
    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Send a POST request to the backend
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Only send username and password
        });

        const result = await response.json();

        // Handle the response
        if (response.ok) {
            alert('Login successful!');
            window.location.href = '/'; // Redirect to home page
        } else {
            alert(result.error || 'Login failed');
        }
    } catch (err) {
        console.error('Error during login:', err);
        alert('An error occurred. Please try again.');
    }
});
