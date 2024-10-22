document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c', '#34495e']; // Add more colors if needed
    const cards = document.querySelectorAll('.card-body');

    cards.forEach(card => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.backgroundColor = randomColor;
    });
});
