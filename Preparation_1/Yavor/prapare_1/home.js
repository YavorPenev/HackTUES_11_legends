document.addEventListener("DOMContentLoaded", function () {
    const contact = document.getElementById("contact"); // Бутонът "Контакти"
    const modal = document.getElementById("contactModal"); // Модалното прозорче
    const close = document.querySelector(".close"); // Бутонът за затваряне

    // Отваряне на модала при клик на бутона
    contact.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Затваряне на модала при клик на бутона за затваряне
    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Затваряне на модала при клик извън него
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

