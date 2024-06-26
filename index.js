document.querySelectorAll('.question-container').forEach(container => {
    const question = container.querySelector('.question');
    const plus = container.querySelector('.fa-plus');
    const xmark = container.querySelector('.fa-xmark');
    const answer = container.querySelector('.answer');

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            plus.style.display = 'block';
            xmark.style.display = 'none';
        } else {
            answer.style.display = 'block';
            plus.style.display = 'none';
            xmark.style.display = 'block';
        }
    });
});