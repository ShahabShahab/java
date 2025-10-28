document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const readmeCards = document.querySelectorAll('.readme-card');

    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get selected language
            const selectedLang = this.getAttribute('data-lang');

            // Filter cards
            readmeCards.forEach(card => {
                if (selectedLang === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardLang = card.getAttribute('data-lang');
                    if (cardLang === selectedLang) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});

