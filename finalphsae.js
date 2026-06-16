document.addEventListener("DOMContentLoaded", () => {
    // Les 12 groupes officiels du Mondial 2026
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    // Les 6 journées/matchs réglementaires pour chaque groupe
    const officialGroupMatches = [
        { label: "Match 1", time: "11.06 / 21:00", t1: "Équipe 1", t2: "Équipe 2" },
        { label: "Match 2", time: "12.06 / 18:00", t1: "Équipe 3", t2: "Équipe 4" },
        { label: "Match 3", time: "16.06 / 15:00", t1: "Équipe 1", t2: "Équipe 3" },
        { label: "Match 4", time: "17.06 / 21:00", t1: "Équipe 4", t2: "Équipe 2" },
        { label: "Match 5", time: "24.06 / 18:00", t1: "Équipe 4", t2: "Équipe 1" },
        { label: "Match 6", time: "25.06 / 21:00", t1: "Équipe 2", t2: "Équipe 3" }
    ];

    // Génération dynamique des 6 matchs dans chaque bloc de groupe HTML
    groups.forEach(groupLetter => {
        const groupContainer = document.querySelector(`[data-group="${groupLetter}"]`);
        if (groupContainer) {
            let html = `<div class="group-header">GRUPPE ${groupLetter}</div>`;
            
            officialGroupMatches.forEach(match => {
                // Remplacement dynamique du nom par défaut (ex: Équipe 1 -> A1, B1...)
                const teamA = match.t1.replace("Équipe ", groupLetter);
                const teamB = match.t2.replace("Équipe ", groupLetter);

                html += `
                    <div class="match-row">
                        <div class="match-time">${match.time}</div>
                        <div class="team-inputs">
                            <span class="team-name">${teamA}</span>
                            <input type="text" class="score-box" maxlength="2">
                            <span>:</span>
                            <input type="text" class="score-box" maxlength="2">
                            <span class="team-name">${teamB}</span>
                        </div>
                    </div>
                `;
            });
            groupContainer.innerHTML = html;
        }
    });

    // Génération des slots vides pour la phase finale au centre
    const grid16 = document.querySelector('.slots-grid-16');
    if (grid16) {
        grid16.innerHTML = '';
        for (let i = 1; i <= 16; i++) {
            grid16.innerHTML += `<div class="match-slot" title="1/16 de finale ${i}"></div>`;
        }
    }

    const grid8 = document.querySelector('.slots-grid-8');
    if (grid8) {
        grid8.innerHTML = '';
        for (let i = 1; i <= 8; i++) {
            grid8.innerHTML += `<div class="match-slot" title="1/8 de finale ${i}"></div>`;
        }
    }
});