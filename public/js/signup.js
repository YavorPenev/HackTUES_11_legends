document.getElementById('signup-btn').addEventListener('click', async () => {
    // Get input values
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (!email || !username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Send data to the backend
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Signup successful!');
            // Redirect to the homepage or login page
            window.location.href = '/';
        } else {
            alert(result.error || 'Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});