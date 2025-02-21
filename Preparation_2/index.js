let slideindex = 0;

function nextslide(step) {
    slideindex += step;
    ShowSlide();
}

function ShowSlide() {
    let slides = document.getElementsByClassName("slide");

    if (slideindex >= slides.length) {
        slideindex = 0;
    }

    if (slideindex < 0) {
        slideindex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideindex].style.display = "flex"; 
}

document.addEventListener("DOMContentLoaded", function () 
{
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    ShowSlide();
});

setInterval(() => {
    slideindex++;
    ShowSlide();
}, 3000);

ShowSlide();

