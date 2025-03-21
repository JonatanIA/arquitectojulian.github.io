document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question span').forEach(span => span.textContent = '+');
        answer.style.display = isVisible ? 'none' : 'block';
        item.querySelector('span').textContent = isVisible ? '+' : '-';
    });
});