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


