function toggleAnswer(element) {
    const section = element.parentElement.parentElement;
    section.classList.toggle('active');
    element.textContent = section.classList.contains('active') ? '➖' : '➕';
}