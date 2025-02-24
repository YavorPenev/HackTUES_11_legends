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
////////////////////////////*↑ END OF FIRST CAROUSEL ↑;; ↓START OF SECOND CAROUSEL↓*/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let slideindex2 = 0;

function nextslide2(step2) {
    slideindex2 += step2;
    ShowSlide();
}

function ButtSlide2(input2){
    slideindex2 = input2;
    ShowSlide();
}

document.addEventListener("DOMContentLoaded", function () {
    let slides2 = document.getElementsByClassName("slide-2");

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.transform = 'translateX(100%)';
        slides2[i].style.opacity = 0;
    }

    ShowSlide();
});



