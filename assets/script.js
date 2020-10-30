// DECLARE our variables
// Start Screen Variables
let startBtnEl = document.getElementById('startBtn');
let startScreenEl = document.getElementById('startScreen');

// Question Screen Variables
let questionEl = document.getElementById('question');
let questionContainerEl = document.getElementById('questionContainer');
let answerBtnEl = document.getElementById('answerBtn');
// let answerBtnBEl = document.getElementById('answerBtnB');
// let answerBtnCEl = document.getElementById('answerBtnC');
// let answerBtnDEl = document.getElementById('answerBtnD');
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
// answerBtnAEl.addEventListener('click', quizQuestions.answers.correct[1], nextQuestion)

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

    
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showQuestion();
    console.log(randomQuestion);
};

function showQuestion() {

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0;
    randomQuestion = quizQuestions.sort(() => Math.random() - .5);

    // THEN the user is presented with a question. 
    currentQuestion = randomQuestion[questionIndex].question;
    questionEl.innerText = currentQuestion
    
    answer.forEach(answer => {
        const btnNumber = answer.dataset['number'];
        answerBtnEl.innerText = currentQuestion['answer' + number];
    });

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
        answer: 'Zelda',
        answer: 'Tingle',
        answer: 'Skull Kid',
        answer: 'Link',
        correct: 'Link',
    },
    {
        question: 'What is the TriForce?',
        answer: 'The power of the Golden Goddesses',
        answer: 'Tattoo for members of the Yiga Clan',
        answer: 'The instrument Link plays music with',
        answer: 'A powerful finishing move',
        correctAnswer: 'The power of the Golden Goddesses',
    },
    {
        question: 'Who is the usual main antagonist?',
        answer: 'Zant',
        answer: 'King of Red Lions',
        answer: 'Majora',
        answer: 'Ganon',
        correctAnswer: 'Ganon',
    },
    {
        question: 'What does each piece of the TriForce stand for?',
        answer: 'Cool, Calm, and Collected',
        answer: 'Water, Fire, and Grass',
        answer: 'Power, Wisdom, and Courage',
        answer: 'Love, Peace, and Tranquility',
        correctAnswer: 'Power, Wisdom, and Courage',
    },
    {
        question: 'Who created the Legend of Zelda?',
        answer: 'Shigeru Miyamoto',
        answer: 'Takashi Tezuke',
        answer: 'Shigeki Morimoto',
        answer: 'Koji Okada',
        correctAnswers: 'Shigeru Miyamoto',
    },
    {
        question: 'What is Zelda\'s alter ego in Ocarina of Time?',
        answer: 'Impa',
        answer: 'Sheik',
        answer: 'Tetra',
        answer: 'Saria',
        correctAnswer: 'Sheik',
    },
    {
        question: 'When was the first Legend of Zelda originally released?',
        answer: '1986',
        answer: '1982',
        answer: '1985',
        answer: '1990',
        correctAnswer: '1986',
    },
    {
        question: 'Which of the games is set in the span of 3 days?',
        answer: 'Wind Waker',
        answer: 'Link\s Awakening',
        answer: 'Majora\'s Mask',
        answer: 'Minish Cap',
        correctAnswer: 'Majora\'s Mask',
    },
    {
        question: 'Which of the games main plot involves time travel?',
        answer: 'Skyward Sword',
        answer: 'Twilight Princess',
        answer: 'The Adventure of Link',
        answer: 'Ocarina of Time',
        correctAnswer:'Ocarina of Time',
    },
    {
        question: 'What is the best selling Legend of Zelda game?',
        answer: 'Ocarina of Time',
        answer: 'Legend of Zelda (the Original)',
        answer: 'Breath of the Wild',
        answer: 'Phantom Hourglass',
        correctAnswer: 'Breath of the Wild',
    }
];

// WHEN all questions are answered or the timer reaches 0 then the game is over. 



