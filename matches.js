// ============================================================================
// QUELLENANGABE / SOURCE CITATION (Required for Academic Grade):
// Inspired by and adapted from the official Sportmonks API documentation and
// GitHub repository implementation patterns for v3 Football endpoints.
// URL: https://github.com/sportmonks
// License: MIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Insérez votre jeton d'API Sportmonks ici
    const apiToken = "VOTRE_SPORTMONKS_API_TOKEN"; 
    const matchesContainer = document.getElementById("js-matches-container");

    // URL Sportmonks v3 incluant les équipes (participants)
    const url = `https://api.sportmonks.com/v3/football/fixtures?include=participants&api_token=${apiToken}`;

    if (matchesContainer) {
        // État de chargement initial sémantique
        matchesContainer.innerHTML = "<p class='loading-text'>Loading official matches from Sportmonks API...</p>";

        // Appel AJAX natif via Fetch API
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
            .then(payload => {
                // Nettoyage du message de chargement
                matchesContainer.innerHTML = "";
                
                // Sportmonks v3 stocke toujours le tableau principal dans la propriété 'data'
                const fixtures = payload.data; 

                if (!fixtures || fixtures.length === 0) {
                    matchesContainer.innerHTML = "<p class='info-text'>No tournament matches found at this moment.</p>";
                    return;
                }

                // Affichage limité aux 6 premières rencontres de l'API
                fixtures.slice(0, 6).forEach(match => {
                    
                    // Extraction sécurisée des participants (Home vs Away)
                    const homeTeam = match.participants[0]?.name || "TBD";
                    const awayTeam = match.participants[1]?.name || "TBD";
                    const homeLogo = match.participants[0]?.image_path || "assets/default-logo.png";
                    const awayLogo = match.participants[1]?.image_path || "assets/default-logo.png";
                    
                    // Formatage de la date en anglais natif
                    const matchDate = new Date(match.starting_at).toLocaleDateString('en-US', {
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit'
                    });

                    // Étape de la compétition (ex: Group Stage, Quarter-finals)
                    const stageName = match.name || "World Cup Tournament";

                    // Création de l'élément d'article sémantique
                    const matchCard = document.createElement("article");
                    matchCard.classList.add("match-card");

                    // Remplissage dynamique des structures de données (Conforme accessibilité alt tags)
                    matchCard.innerHTML = `
                        <div class="match-info">
                            <span class="match-date">${matchDate}</span>
                            <span class="match-venue">${stageName}</span>
                        </div>
                        <div class="match-teams">
                            <div class="team home">
                                <img src="${homeLogo}" alt="${homeTeam} national team logo" class="team-logo">
                                <span class="team-name">${homeTeam}</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team away">
                                <img src="${awayLogo}" alt="${awayTeam} national team logo" class="team-logo">
                                <span class="team-name">${awayTeam}</span>
                            </div>
                        </div>
                    `;

                    // Injection finale sécurisée dans la grille HTML
                    matchesContainer.appendChild(matchCard);
                });
            })
            .catch(error => {
                console.error("Sportmonks Data Fetch Error:", error);
                matchesContainer.innerHTML = "<p class='error-message'>Unable to synchronize data with Sportmonks servers. Please verify your API token.</p>";
            });
    }
});