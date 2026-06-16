/**
 * FIFA World Cup 2026 - Academic Project
 * Main JavaScript File (Global Interactivity)
 * * Target: Handles responsive navigation and menu toggle without onclick attributes.
 */

// Attente du chargement complet du DOM pour sécuriser l'accès aux éléments HTML
document.addEventListener("DOMContentLoaded", () => {
    
    // Sélection des éléments nécessaires via leur identifiant unique (IDs)
    const burgerMenu = document.getElementById("js-burger");
    const navigationList = document.getElementById("js-nav-list");

    // Vérification de sécurité pour s'assurer que les éléments existent sur la page courante
    if (burgerMenu && navigationList) {
        
        /**
         * Écouteur d'événement sur le bouton Burger
         * Gère l'affichage du menu mobile en ajoutant/supprimant la classe CSS '.open'
         */
        burgerMenu.addEventListener("click", () => {
            // Bascule de la classe .open sur la liste de navigation (déclenche la transition CSS)
            navigationList.classList.toggle("open");
            
            // Accessibilité (SEO/W3C) : Mise à jour dynamique de l'état du menu pour les lecteurs d'écran
            const isOpen = navigationList.classList.contains("open");
            burgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
            
            // Optionnel : Ajoute un effet visuel de rotation optionnel sur le bouton burger lui-même
            burgerMenu.classList.toggle("active");
        });

        /**
         * Sécurité Ergonomie : Ferme automatiquement le menu mobile si l'utilisateur 
         * clique n'importe où en dehors du menu ou du bouton burger.
         */
        document.addEventListener("click", (event) => {
            const isClickInsideMenu = navigationList.contains(event.target);
            const isClickOnBurger = burgerMenu.contains(event.target);

            // Si le menu est ouvert et que le clic n'est ni sur le menu ni sur le burger
            if (navigationList.classList.contains("open") && !isClickInsideMenu && !isClickOnBurger) {
                navigationList.classList.remove("open");
                burgerMenu.setAttribute("aria-expanded", "false");
                burgerMenu.classList.remove("active");
            }
        });
    }
});