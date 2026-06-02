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
