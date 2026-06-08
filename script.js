const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        menu.hidden = expanded;
        menuToggle.querySelector('.sr-only').textContent = expanded ? 'Navigationsmenü öffnen' : 'Navigationsmenü schließen';
    });
}

const infoCards = Array.from(document.querySelectorAll('.info-card'))
    .filter((card) => !card.closest('button.card-button'));

if (infoCards.length) {
    infoCards.forEach((card) => {
        const title = card.querySelector('.card-text h2')?.textContent.trim() || '';
        const detailHtml = card.querySelector('.card-text p')?.innerHTML || '';
        const popupTitle = card.dataset.popupTitle || title;
        const popupContent = card.querySelector('.popup-text')?.innerHTML || detailHtml;

        const popup = document.createElement('div');
        popup.className = 'card-popup';
        popup.innerHTML = `<strong>${popupTitle}</strong>${popupContent}`;
        card.appendChild(popup);

        card.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.stopPropagation();
                const isActive = card.classList.contains('info-card--active');
                infoCards.forEach((item) => item.classList.remove('info-card--active'));
                if (!isActive) {
                    card.classList.add('info-card--active');
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && !event.target.closest('.info-card')) {
            infoCards.forEach((card) => card.classList.remove('info-card--active'));
        }
    });
}
