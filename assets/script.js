// DECLARE our variables
// Start Screen Variables
let startBtnEl = document.getElementById('startBtn');
let startScreenEl = document.getElementById('startScreen');

// Question Screen Variables
let questionEl = document.getElementById('question');
let questionContainerEl = document.getElementById('questionContainer');
let answerBtnAEl = document.getElementById('answerBtnA');
let answerBtnBEl = document.getElementById('answerBtnB');
let answerBtnCEl = document.getElementById('answerBtnC');
let answerBtnDEl = document.getElementById('answerBtnD');
let randomQuestion, questionIndex

// Game Over Screen Variables
let gameOverEl = document.getElementById('gameOverScreen');
let submitBtnEl = document.getElementById('submitBtn');
let retakeBtnEL = document.getElementById('retakeBtn');
let userIdEL = document.getElementById('#userInitials');

// Timer/Score Variables
let timeLeft = 75;
let timerDisplayEL = document.getElementById('timer');

// addEventListeners
startBtnEl.addEventListener('click', startQuiz)
answerBtnAEl.addEventListener('click', nextQuestion)
answerBtnBEl.addEventListener('click', nextQuestion)
answerBtnCEl.addEventListener('click', nextQuestion)
answerBtnDEl.addEventListener('click', nextQuestion)

// Functions
function timer() {
    setInterval(function() {

        // IF the timer hit 0 we want the timer to stop.
        if (timeLeft <= 0){
            // Clear the interval so that we don't get weird countdowns.
            clearInterval(timeLeft = 0);
            // Once the interval is cleared and the timer hits 0 the game is over and user is prompted to the 'gameOverScreen'
            startScreenEl.classList.add('hide');
            questionContainerEl.classList.add('hide')
            gameOverEl.classList.remove('hide')
        };
        // We need to now render the time so that we see it in our display.
        timerDisplayEL.innerHTML = ('Timer/Score: ' + timeLeft)
        // And then set timeLeft to -1 every second.
        timeLeft -= 1
    }, 1000)     
};

function startQuiz() {
    // WHEN the user clicks the START BUTTON we want the start screen to switch with the question screen.
    startScreenEl.classList.add('hide');
    questionContainerEl.classList.remove('hide')

    // WHEN the user clicks the START BUTTON we want the timer in the top-left corner to start counting down from 60.
    timer();

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0; {
    randomQuestion = quizQuestions.sort(() => Math.random() - .5)
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showQuestion();
    console.log(randomQuestion);
}
};

function showQuestion() {

    // THEN the user is presented with a question. 
    questionEl.innerText = randomQuestion[questionIndex].question
    answerBtnAEl.innerText = 'A. ' + randomQuestion[questionIndex].answers[0].text
    answerBtnBEl.innerText = 'B. ' + randomQuestion[questionIndex].answers[1].text
    answerBtnCEl.innerText = 'C. ' + randomQuestion[questionIndex].answers[2].text
    answerBtnDEl.innerText = 'D. ' + randomQuestion[questionIndex].answers[3].text

    // IF the user answers a question correctly then they are presented with another question and the user is rewarded a point.
    if (answers.correct[true]) {
        
    }

    // IF NOT then we don't want the page to change the question, but notify them in a textbox below that they are wrong and 5 seconds are removed off of the timer.

};

function wrongAnswer(timer) {

};

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.

};

// Quiz Question Index
let quizQuestions = [
    {
        question: 'Who do you play in the main games?',
        answers: [
            {text: 'Zelda', correct: false},
            {text: 'Tingle', correct: false},
            {text: 'Skull Kid', correct: false},
            {text: 'Link', correct: true}
        ]
    },
    {
        question: 'What is the TriForce?',
        answers: [
            {text: 'The power of the Golden Goddesses', correct: true},
            {text: 'Tattoo for members of the Yiga Clan', correct: false},
            {text: 'The instrument Link plays music with', correct: false},
            {text: 'A powerful finishing move', correct: false}
        ]
    },
    {
        question: 'Who is the usual main antagonist?',
        answers: [
            {text: 'Zant', correct: false},
            {text: 'King of Red Lions', correct: false},
            {text: 'Majora', correct: false},
            {text: 'Ganon', correct: true}
        ]
    },
    {
        question: 'What does each piece of the TriForce stand for?',
        answers: [
            {text: 'Cool, Calm, and Collected', correct: false},
            {text: 'Water, Fire, and Grass', correct: false},
            {text: 'Power, Wisdom, and Courage', correct: true},
            {text: 'Love, Peace, and Tranquility', correct: false}
        ]
    },
    {
        question: 'Who created the Legend of Zelda?',
        answers: [
            {text: 'Shigeru Miyamoto', correct: true},
            {text: 'Takashi Tezuke', correct: true},
            {text: 'Shigeki Morimoto', correct: false},
            {text: 'Koji Okada', correct: false}
        ]
    },
    {
        question: 'What is Zelda\'s alter ego in Ocarina of Time?',
        answers: [
            {text: 'Impa', correct: false},
            {text: 'Sheik', correct: true},
            {text: 'Tetra', correct: false},
            {text: 'Saria', correct: false}
        ]
    },
    {
        question: 'When was the first Legend of Zelda originally released?',
        answers: [
            {text: '1986', correct: true},
            {text: '1982', correct: false},
            {text: '1985', correct: false},
            {text: '1990', correct: false}
        ]
    },
    {
        question: 'Which of the games is set in the span of 3 days?',
        answers: [
            {text: 'Wind Waker', correct: false},
            {text: 'Link\s Awakening', correct: false},
            {text: 'Majora\'s Mask', correct: true},
            {text: 'Minish Cap', correct: false}
        ]
    },
    {
        question: 'Which of the games main plot involves time travel?',
        answers: [
            {text: 'Skyward Sword', correct: false},
            {text: 'Twilight Princess', correct: false},
            {text: 'The Adventure of Link', correct: false},
            {text: 'Ocarina of Time', correct: true}
        ]
    },
    {
        question: 'What is the best selling Legend of Zelda game?',
        answers: [
            {text: 'Ocarina of Time', correct: false},
            {text: 'Legend of Zelda (the Original)', correct: false},
            {text: 'Breath of the Wild', correct: true},
            {text: 'Phantom Hourglass', correct: false}
        ]
    }
];










// WHEN all questions are answered or the timer reaches 0 then the game is over. 



