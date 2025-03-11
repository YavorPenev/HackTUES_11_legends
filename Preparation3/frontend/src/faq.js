document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.style.display = 'none';
    });

    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.cursor = 'pointer';
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                this.innerHTML = this.innerHTML.replace('⮞', '⮟');
            } else {
                answer.style.display = 'none';
                this.innerHTML = this.innerHTML.replace('⮟', '⮞');
            }
        });
    });
});