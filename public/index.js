let slideindex = 0;

function nextslide(step) {
    slideindex += step;
    ShowSlide();
}

function ButtSlide(input){
    slideindex = input;
    ShowSlide();
}

function ShowSlide() {
    let slides = document.getElementsByClassName("slide");
    let buttons = document.getElementsByClassName("navbutt");

    if (slideindex >= slides.length) {
        slideindex = 0;
    }

    if (slideindex < 0) {
        slideindex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(100%)';
        slides[i].style.opacity = 0; 
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    buttons[slideindex].classList.add("active");

    slides[slideindex].style.transform = 'translateX(0)';
    slides[slideindex].style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(100%)';
        slides[i].style.opacity = 0;
    }

    ShowSlide();
});

setInterval(() => {
    slideindex++;
    ShowSlide();
}, 10000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////*↑ END OF FIRST CAROUSEL ↑;; ↓START OF SECOND CAROUSEL↓*///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let slideindex2 = 0;

function nextslide2(step2) {
    slideindex2 += step2;
    ShowSlide2();
}

function ButtSlide2(input2){
    slideindex2 = input2;
    ShowSlide2();
}

function ShowSlide2() {
    let slides2 = document.getElementsByClassName("slide-2");
    let buttons2 = document.getElementsByClassName("navbutt-2");

    if (slideindex2 >= slides2.length) {
        slideindex2 = 0;
    }

    if (slideindex2 < 0) {
        slideindex2 = slides2.length - 1;
    }

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.transform = 'translateX(100%)';
        slides2[i].style.opacity = 0; 
    }

    for (let i = 0; i < buttons2.length; i++) {
        buttons2[i].classList.remove("active");
    }

    buttons2[slideindex2].classList.add("active");

    slides2[slideindex2].style.transform = 'translateX(0)';
    slides2[slideindex2].style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
    let slides2 = document.getElementsByClassName("slide-2");

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.transform = 'translateX(100%)';
        slides2[i].style.opacity = 0;
    }

    ShowSlide2();
});

////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profileButton");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    profileButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents navigation to profile.html
        sidebar.style.right = "0";
        overlay.style.display = "block";
    });

    overlay.addEventListener("click", function () {
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
    });

    // Logout functionality
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", async function () {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.reload(); // Reload page after logout
            } else {
                alert('Logout failed. Please try again.');
            }
        } catch (err) {
            console.error('Logout error:', err);
            alert('An error occurred while logging out.');
        }
    });

    // Check authentication status on page load
    checkAuth();
});

async function checkAuth() {
    try {
        const response = await fetch('/check-auth');
        const data = await response.json();

        const profileButton = document.getElementById("profileButton");
        const logoutButton = document.getElementById("logoutButton");
        const loginButton = document.getElementById("loginButton");

        if (data.loggedIn) {
            profileButton.style.display = "inline-block";
            logoutButton.style.display = "inline-block";
            info2.style.display = "none";
        } else {
            profileButton.style.display = "none";
            logoutButton.style.display = "none";
            loginButton.style.display = "inline-block";
        }
    } catch (err) {
        console.error('Error checking authentication:', err);
    }
}

app.get('/user-info', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: "Not logged in" });
    }

    try {
        const user = await User.findOne({ username: req.session.user.username }).select('-password'); // Exclude password
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({ username: user.username });
    } catch (err) {
        console.error("User Info Fetch Error:", err);
        res.status(500).json({ error: "Server error fetching user info" });
    }
});


