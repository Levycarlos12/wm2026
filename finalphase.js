document.addEventListener("DOMContentLoaded", () => {
    initBurgerMenu();
    loadWorldCupMatches();
    generateKnockoutSlots();
});

function initBurgerMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("js-nav-list");

    if (!menuToggle || !navList) return;

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

function loadWorldCupMatches() {
    fetch("proxy.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Données API :", data);

            if (!data.matches || data.matches.length === 0) {
                showFallbackMatches();
                return;
            }

            displayMatchesByGroups(data.matches);
        })
        .catch(error => {
            console.error("Erreur API :", error);
            showFallbackMatches();
        });
}

function displayMatchesByGroups(matches) {
    const groups = {};

    matches.forEach(match => {
        if (!match.group) return;

        const groupLetter = match.group.replace("GROUP_", "");

        if (!groups[groupLetter]) {
            groups[groupLetter] = [];
        }

        groups[groupLetter].push(match);
    });

    Object.keys(groups).forEach(groupLetter => {
        const groupContainer = document.querySelector(`[data-group="${groupLetter}"]`);
        if (!groupContainer) return;

        let html = `<div class="group-header">GRUPPE ${groupLetter}</div>`;

        groups[groupLetter].forEach(match => {
            const teamA = match.homeTeam?.name || "TBD";
            const teamB = match.awayTeam?.name || "TBD";

            const scoreA = match.score?.fullTime?.home ?? "";
            const scoreB = match.score?.fullTime?.away ?? "";

            const date = new Date(match.utcDate);

            const formattedDate = date.toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit"
            });

            const formattedTime = date.toLocaleTimeString("de-DE", {
                hour: "2-digit",
                minute: "2-digit"
            });

            html += `
                <div class="match-row">
                    <div class="match-time">${formattedDate}<br>${formattedTime}</div>

                    <div class="team-inputs">
                        <span class="team-name" title="${teamA}">${teamA}</span>
                        <input type="text" class="score-box" maxlength="2" value="${scoreA}">
                        <span>:</span>
                        <input type="text" class="score-box" maxlength="2" value="${scoreB}">
                        <span class="team-name" title="${teamB}">${teamB}</span>
                    </div>
                </div>
            `;
        });

        groupContainer.innerHTML = html;
    });
}

function generateKnockoutSlots() {
    const grid16 = document.querySelector(".slots-grid-16");

    if (grid16) {
        grid16.innerHTML = "";

        for (let i = 1; i <= 16; i++) {
            grid16.innerHTML += `
                <div class="match-slot" title="1/16 Finale ${i}">
                    1/16 ${i}
                </div>
            `;
        }
    }

    const grid8 = document.querySelector(".slots-grid-8");

    if (grid8) {
        grid8.innerHTML = "";

        for (let i = 1; i <= 8; i++) {
            grid8.innerHTML += `
                <div class="match-slot" title="Achtelfinale ${i}">
                    1/8 ${i}
                </div>
            `;
        }
    }
}

function showFallbackMatches() {
    const fallbackGroups = {
        A: ["Mexiko", "Südafrika", "Südkorea", "Tschechien"],
        B: ["Kanada", "Bosnien und Herzegowina", "Katar", "Schweiz"],
        C: ["Brasilien", "Marokko", "Haiti", "Schottland"],
        D: ["USA", "Paraguay", "Australien", "Türkei"],
        E: ["Deutschland", "Curaçao", "Elfenbeinküste", "Ecuador"],
        F: ["Niederlande", "Japan", "Schweden", "Tunesien"],
        G: ["Belgien", "Ägypten", "Iran", "Neuseeland"],
        H: ["Spanien", "Kap Verde", "Saudi-Arabien", "Uruguay"],
        I: ["Frankreich", "Senegal", "Irak", "Norwegen"],
        J: ["Argentinien", "Algerien", "Österreich", "Jordanien"],
        K: ["Portugal", "DR Kongo", "Usbekistan", "Kolumbien"],
        L: ["England", "Kroatien", "Ghana", "Panama"]
    };

    const matchPattern = [
        [0, 1],
        [2, 3],
        [0, 2],
        [3, 1],
        [3, 0],
        [1, 2]
    ];

    Object.keys(fallbackGroups).forEach(groupLetter => {
        const groupContainer = document.querySelector(`[data-group="${groupLetter}"]`);
        const teams = fallbackGroups[groupLetter];

        if (!groupContainer) return;

        let html = `<div class="group-header">GRUPPE ${groupLetter}</div>`;

        matchPattern.forEach((match, index) => {
            const teamA = teams[match[0]];
            const teamB = teams[match[1]];

            html += `
                <div class="match-row">
                    <div class="match-time">Match ${index + 1}</div>

                    <div class="team-inputs">
                        <span class="team-name" title="${teamA}">${teamA}</span>
                        <input type="text" class="score-box" maxlength="2">
                        <span>:</span>
                        <input type="text" class="score-box" maxlength="2">
                        <span class="team-name" title="${teamB}">${teamB}</span>
                    </div>
                </div>
            `;
        });

        groupContainer.innerHTML = html;
    });
}