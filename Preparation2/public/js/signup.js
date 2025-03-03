document.getElementById('signup-btn').addEventListener('click', async () => {
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
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        // Handle the response
        if (response.ok) {
            alert('Signup successful!');
            window.location.href = '/login'; // Redirect to the login page
        } else {
            alert(result.error || 'Signup failed');
        }
    } catch (err) {
        console.error('Error during signup:', err);
        alert('An error occurred. Please try again.');
    }
});