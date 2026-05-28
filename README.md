# WM-2026
# WEB-SS26
Eine webseite über die WM26
================================================================================
          PLAN DE TRAVAIL DÉTAILLÉ - PROJET WEB 2026 (FIFA WORLD CUP)
               Hochschule Worms - University of Applied Sciences
================================================================================

[CONTEXTE ET OBJECTIFS]
- Thème : Coupe du Monde de la FIFA 2026.
- Durée estimée : 4 semaines (environ 2h30 de travail par jour).
- Livrable 1 (Site Web) : 26 juin 2026 à 23h59 (Dépôt Kursserver + Moodle en .zip).
- Livrable 2 (Kurzvortrag) : 29 ou 30 juin 2026 (Présentation de 6 minutes pile).
- Stack technique requise : HTML, CSS, JS (sans framework, sans code généré par IA).

--------------------------------------------------------------------------------
SEMAINE 1 : CONCEPTION, MAQUETTAGE ET STRUCTURE HTML (SÉMANTIQUE)
--------------------------------------------------------------------------------
Objectif : Valider la structure globale, le design (Mobile-First) et coder tout le HTML.

• Jour 1 (2h30) - Idéation & Structure :
  - Définir l'arborescence des 4 pages individuelles minimales requises.
  - Répartir les rôles équitablement (le projet exige une implication égale).
  - Collecter les textes informatifs et lister les images/médias (sourcer les licences).

• Jour 2 (2h30) - Maquettage Mobile-First :
  - Dessiner les wireframes des 4 pages d'abord en version Mobile (375x667px).
  - Dessiner ensuite l'adaptation en version Desktop (1920x1080px).
  - Planifier les zones d'intégration de CSS Grid (layout) et Flexbox (navigation).

• Jour 3 (2h30) - Architecture & HTML Page d'Accueil :
  - Initialiser le dépôt de fichiers (arborescence propre).
  - Écrire le HTML de la page d'accueil avec des balises sémantiques strictes 
    (<header>, <nav>, <main>, <section>, <footer>).

• Jour 4 (2h30) - HTML Pages 2 & 3 (Contenu & Quiz) :
  - Coder la structure HTML de la page "Calendrier/Matchs".
  - Coder la structure HTML de la page "Quiz/Interactif" (formulaires/boutons).

• Jour 5 (2h30) - HTML Page 4 & SEO de base :
  - Finaliser la structure de la dernière page informative.
  - Intégrer les balises SEO indispensables : <title>, meta-tags (description, 
    keywords, author), attributs "alt" sur chaque image, et le Favicon.

* Week-end (Optionnel) : Premier test de toutes les pages sur le validateur W3C.

--------------------------------------------------------------------------------
SEMAINE 2 : RESPONSIVE DESIGN & MISE EN PAGE CSS
--------------------------------------------------------------------------------
Objectif : Rendre le site esthétique, fluide et conforme aux exigences de rendu.

• Jour 6 (2h30) - Feuille de style unique & Flexbox :
  - Créer l'unique feuille de style CSS externe commune à toutes les pages.
  - Configurer les variables globales (couleurs officielles du Mondial, polices).
  - Coder la barre de navigation responsive en utilisant obligatoirement CSS Flexbox.

• Jour 7 (2h30) - Intégration Mobile-First :
  - Écrire le CSS de base pour le viewport minimal (375px). 
  - S'assurer que tous les éléments multimédias s'empilent de manière fluide.

• Jour 8 (2h30) - Passage au Desktop avec CSS Grid :
  - Ajouter les Media Queries pour les grands écrans (jusqu'à 1920x1080px).
  - Structurer les agencements de pages complexes en utilisant CSS Grid (interdiction 
    d'utiliser des layouts en float).

• Jour 9 (2h30) - Design des composants spécifiques :
  - Styliser le tableau/grille du calendrier des matchs de la Coupe du Monde.
  - Styliser l'interface visuelle du futur quiz (boutons, surbricolage, feedbacks).

• Jour 10 (2h30) - Polissage visuel & Accessibilité :
  - Ajouter les transitions fluides et les effets au survol (:hover).
  - Effectuer une inspection rigoureuse sur différents navigateurs.

--------------------------------------------------------------------------------
SEMAINE 3 : JAVASCRIPT & FONCTIONNALITÉS AVANCÉES (EIGENLEISTUNG)
--------------------------------------------------------------------------------
Objectif : Rendre le site interactif grâce au DOM et valider techniquement le code.

• Jour 11 (2h30) - Logique du Quiz & Event Listeners :
  - Créer le script JS externe.
  - Mettre en place le tableau de questions/réponses sur le football.
  - Lier les clics via la DOM Event Handling API (interdiction d'utiliser 
    les attributs HTML "onclick").

• Jour 12 (2h30) - Dynamisme du Quiz :
  - Coder la vérification des réponses, le calcul du score en temps réel 
    et l'affichage des résultats de manière dynamique dans le DOM.

• Jour 13 (2h30) - Interactivité du Calendrier :
  - Ajouter un script JS permettant de filtrer les matchs (par exemple, filtrer 
    par ville hôte comme Vancouver, Mexico City, New York, etc.).

• Jour 14 (2h30) - Validation W3C & Nettoyage :
  - Passer l'intégralité du projet au W3C Validator. ZÉRO erreur tolérée.
  - Ajouter des commentaires clairs et pertinents dans le code source. Si des 
    extraits de code externes autorisés ont été utilisés, citer obligatoirement 
    la source en commentaire.

• Jour 15 (2h30) - Bonus "Eigenleistung" (10% + 5% bonus) :
  - Implémenter une fonctionnalité hors-programme pour maximiser la note (ex: un 
    système de favoris pour les équipes via localStorage, ou un mode sombre).

--------------------------------------------------------------------------------
SEMAINE 4 : DÉPLOIEMENT, SÉCURISATION ET PRÉPARATION DE L'ORAL
--------------------------------------------------------------------------------
Objectif : Mettre en ligne le projet fonctionnel et s'entraîner pour le pitch.

• Jour 16 (2h30) - Déploiement sur le Kursserver :
  - Mettre en ligne les fichiers sur le Webspace attribué par l'université.
  - Tester les liens absolus/relatifs directement en ligne pour éviter les erreurs 404.

• Jour 17 (2h30) - Livraison Moodle (DEADLINE 26 JUIN) :
  - Effectuer les ultimes vérifications de conformité.
  - Compresser le projet complet au format .zip.
  - Déposer le fichier sur Moodle avant 23h59.

• Jour 18 (2h30) - Conception du support visuel (Kurzvortrag) :
  - Créer un diaporama concis (5-6 slides max).
  - Structurer la présentation : Fonctionnalités (UX), Choix techniques (Grid/JS), 
    et valeur ajoutée (Eigenleistung).

• Jour 19 (2h30) - Répétition au chronomètre :
  - S'entraîner à présenter en binôme/trinôme. Temps de parole strictement égal.
  - Le pitch doit faire EXACTEMENT 6 minutes. S'entraîner à être percutant.

• Jour 20 (2h30) - Préparation aux questions techniques :
  - Simuler l'entretien avec les professeurs. Chaque membre du groupe doit être 
    capable d'expliquer n'importe quelle ligne de code du projet (critère de 
    notation à hauteur de 50%).
================================================================================

