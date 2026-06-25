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

// QUIZ PAGE //
document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "Welches Land hat die meisten Fußball-Weltmeisterschaften gewonnen?",
            answers: ["Deutschland", "Brasilien", "Italien", "Argentinien"],
            correct: "Brasilien"
        },
        {
            question: "Wann fand die erste FIFA-Weltmeisterschaft statt?",
            answers: ["1920", "1930", "1950", "1966"],
            correct: "1930"
        },
        {
            question: "Wer ist der erfolgreichste WM-Torschütze aller Zeiten?",
            answers: ["Pelé", "Miroslav Klose", "Lionel Messi", "Ronaldo Nazário"],
            correct: "Lionel Messi"
        },
        {
            question: "In welchen Ländern findet die WM 2026 statt?",
            answers: ["Deutschland und Frankreich", "USA, Kanada und Mexiko", "Brasilien und Argentinien", "Spanien und Portugal"],
            correct: "USA, Kanada und Mexiko"
        },
        {
            question: "Wie viele Teams nehmen an der WM 2026 teil?",
            answers: ["32", "40", "48", "64"],
            correct: "48"
        }
    ];

    const startScreen = document.getElementById("quiz-start");
    const gameScreen = document.getElementById("quiz-game");
    const resultScreen = document.getElementById("quiz-result");

    const startButton = document.getElementById("start-quiz");
    const nextButton = document.getElementById("next-question");
    const restartButton = document.getElementById("restart-quiz");

    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const questionCounter = document.getElementById("question-counter");
    const scoreCounter = document.getElementById("score-counter");
    const progressFill = document.getElementById("progress-fill");
    const resultText = document.getElementById("result-text");

    if (!startButton) return;

    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", showNextQuestion);
    restartButton.addEventListener("click", startQuiz);

    loadQuizState();

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;

        startScreen.hidden = true;
        resultScreen.hidden = true;
        gameScreen.hidden = false;

        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];

        questionText.textContent = currentQuestion.question;
        answerButtons.innerHTML = "";
        nextButton.hidden = true;

        questionCounter.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
        scoreCounter.textContent = `Punkte: ${score}`;

        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressFill.style.width = `${progress}%`;

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("answer-btn");
            button.type = "button";

            button.addEventListener("click", () => selectAnswer(button, answer));
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(selectedButton, selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correct;
        const allAnswerButtons = answerButtons.querySelectorAll(".answer-btn");

        allAnswerButtons.forEach((button) => {
            button.disabled = true;

            if (button.textContent === correctAnswer) {
                button.classList.add("correct");
            }
        });

        if (selectedAnswer === correctAnswer) {
            score++;
            selectedButton.classList.add("correct");
        } else {
            selectedButton.classList.add("wrong");
        }

        scoreCounter.textContent = `Punkte: ${score}`;
        nextButton.hidden = false;

        saveQuizState();
    }

    function showNextQuestion() {
        currentQuestionIndex++;

          saveQuizState();

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }

        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
         progressFill.style.width = `${progress}%`;

    }

    function showResult() {
        gameScreen.hidden = true;
        resultScreen.hidden = false;

        localStorage.removeItem("wmQuizState");

        resultText.textContent = `Du hast ${score} von ${questions.length} Fragen richtig beantwortet.`;
    }

    function saveQuizState() {
    const quizState = {
        currentQuestionIndex: currentQuestionIndex,
        score: score
    };

    localStorage.setItem("wmQuizState", JSON.stringify(quizState));
}

function loadQuizState() {
    const savedState = localStorage.getItem("wmQuizState");

    if (savedState) {
        const quizState = JSON.parse(savedState);
        currentQuestionIndex = quizState.currentQuestionIndex;
        score = quizState.score;

        startScreen.hidden = true;
        resultScreen.hidden = true;
        gameScreen.hidden = false;

        showQuestion();
    }
}

});

