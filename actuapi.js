/**
 * FIFA World Cup 2026 - Academic Project
 * Main JavaScript File (Global Interactivity & Live News)
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. NAVIGATION RESPONSIVE (MENU BURGER)
       ========================================================================== */
    const burgerMenu = document.getElementById("js-burger");
    const navigationList = document.getElementById("js-nav-list");

    if (burgerMenu && navigationList) {
        
        // Gestion du clic sur le bouton Burger
        burgerMenu.addEventListener("click", () => {
            navigationList.classList.toggle("open");
            
            const isOpen = navigationList.classList.contains("open");
            burgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
            burgerMenu.classList.toggle("active");
        });

        // Fermeture ergonomique en cliquant en dehors du menu
        document.addEventListener("click", (event) => {
            const isClickInsideMenu = navigationList.contains(event.target);
            const isClickOnBurger = burgerMenu.contains(event.target);

            if (navigationList.classList.contains("open") && !isClickInsideMenu && !isClickOnBurger) {
                navigationList.classList.remove("open");
                burgerMenu.setAttribute("aria-expanded", "false");
                burgerMenu.classList.remove("active");
            }
        });
    }

    /* ==========================================================================
       2. INTÉGRATION DE L'API LATEST FOOTBALL NEWS
       ========================================================================== */
    const apiKey = "7d14a18d0dmsh818972033772a6ep16e0eajsn19c4fa48792b"; 
    
    // Éléments cibles de la troisième carte d'actualités
    const newsImg = document.getElementById("js-live-news-img");
    const newsCat = document.getElementById("js-live-news-cat");
    const newsTitle = document.getElementById("js-live-news-title");
    const newsDesc = document.getElementById("js-live-news-desc");
    const newsLink = document.getElementById("js-live-news-link");

    const url = "https://latest-football-news.p.rapidapi.com/news";

    // L'appel API se lance uniquement si la structure de la carte est présente
    if (newsImg && newsTitle && newsDesc) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'latest-football-news.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) throw new Error("Erreur réseau lors du chargement des actualités");
                return response.json();
            })
            .then(articles => {
                // Si l'API retourne des articles, on met à jour la troisième carte avec le plus récent
                if (articles && articles.length > 0) {
                    const latestArticle = articles[0];

                    newsImg.src = latestArticle.image || "assets/news-teams.jpg";
                    newsImg.alt = latestArticle.title || "Live Football News";
                    newsCat.textContent = latestArticle.source || "Live Update";
                    newsTitle.textContent = latestArticle.title;
                    newsDesc.textContent = latestArticle.description || "Click the link below to read the full coverage of this story.";
                    
                    if (latestArticle.url) {
                        newsLink.href = latestArticle.url;
                        newsLink.style.display = "inline-block";
                    }
                }
            })
            .catch(error => {
                console.error("Impossible de charger les actualités en temps réel:", error);
                // En cas d'erreur ou de quota atteint, le contenu HTML par défaut reste intact
            });
    }
});