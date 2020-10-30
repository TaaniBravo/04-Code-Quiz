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

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0;
    randomQuestion = quizQuestions.sort(() => Math.random() - .5);
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showQuestion();
    console.log(randomQuestion);
};

function showQuestion() {

    // THEN the user is presented with a question. 
    questionEl.innerText = randomQuestion[questionIndex].question;
    answerBtnAEl.innerText = 'A. ' + randomQuestion[questionIndex].answers[0].text;
    answerBtnBEl.innerText = 'B. ' + randomQuestion[questionIndex].answers[1].text;
    answerBtnCEl.innerText = 'C. ' + randomQuestion[questionIndex].answers[2].text;
    answerBtnDEl.innerText = 'D. ' + randomQuestion[questionIndex].answers[3].text;

    answerBtnAEl.addEventListener('click', nextQuestion)
    answerBtnBEl.addEventListener('click', nextQuestion)
    answerBtnCEl.addEventListener('click', nextQuestion)
    answerBtnDEl.addEventListener('click', nextQuestion)

};

function nextQuestion() {
    // IF the user answers a question correctly then they are presented with another question and the user is rewarded a point.
    if (quizQuestions.answers.correct: true) {
        questionIndex++;
        questionEl.innerText = randomQuestion[questionIndex].question;
    answerBtnAEl.innerText = 'A. ' + randomQuestion[questionIndex].answers[0].text;
    answerBtnBEl.innerText = 'B. ' + randomQuestion[questionIndex].answers[1].text;
    answerBtnCEl.innerText = 'C. ' + randomQuestion[questionIndex].answers[2].text;
    answerBtnDEl.innerText = 'D. ' + randomQuestion[questionIndex].answers[3].text;

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
        buttonA: 'Zelda',
        buttonB: 'Tingle',
        buttonC: 'Skull Kid',
        buttonD: 'Link',
        answer: 'Link',
    },
    {
        question: 'What is the TriForce?',
        buttonA: 'The power of the Golden Goddesses',
        buttonB: 'Tattoo for members of the Yiga Clan',
        buttonC: 'The instrument Link plays music with',
        buttonD: 'A powerful finishing move',
        answer: 'The power of the Golden Goddesses',
    },
    {
        question: 'Who is the usual main antagonist?',
        buttonA: 'Zant',
        buttonB: 'King of Red Lions',
        buttonC: 'Majora',
        buttonD: 'Ganon',
        answer: 'Ganon',
    },
    {
        question: 'What does each piece of the TriForce stand for?',
        buttonA: 'Cool, Calm, and Collected',
        buttonB: 'Water, Fire, and Grass',
        buttonC: 'Power, Wisdom, and Courage', correct: true,
        buttonD: 'Love, Peace, and Tranquility',
        answer: 'Power, Wisdom, and Courage',
    },
    {
        question: 'Who created the Legend of Zelda?',
        buttonA: 'Shigeru Miyamoto',
        buttonB: 'Takashi Tezuke',
        buttonC: 'Shigeki Morimoto',
        buttonD: 'Koji Okada',
        answers: 'Shigeru Miyamoto', 'Takashi Tezuke'
    },
    {
        question: 'What is Zelda\'s alter ego in Ocarina of Time?',
        buttonA: 'Impa',
        buttonB: 'Sheik',
        buttonC: 'Tetra',
        buttonD: 'Saria',
        answer: 'Sheik',
    },
    {
        question: 'When was the first Legend of Zelda originally released?',
        buttonA: '1986',
        buttonB: '1982',
        buttonC: '1985',
        buttonD: '1990',
        answer: '1986',
    },
    {
        question: 'Which of the games is set in the span of 3 days?',
        buttonA: 'Wind Waker',
        buttonB: 'Link\s Awakening',
        buttonC: 'Majora\'s Mask',
        buttonD: 'Minish Cap',
        answer: 'Majora\'s Mask',
    },
    {
        question: 'Which of the games main plot involves time travel?',
        buttonA: 'Skyward Sword',
        button: 'Twilight Princess',
        button: 'The Adventure of Link',
        button: 'Ocarina of Time',
        answer:'Ocarina of Time',
    },
    {
        question: 'What is the best selling Legend of Zelda game?',
        buttonA: 'Ocarina of Time',
        buttonB: 'Legend of Zelda (the Original)',
        buttonC: 'Breath of the Wild',
        buttonD: 'Phantom Hourglass',
        answer: 'Breath of the Wild',
        ]
    }
];

// WHEN all questions are answered or the timer reaches 0 then the game is over. 



