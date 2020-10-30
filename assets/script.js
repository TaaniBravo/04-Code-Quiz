// DECLARE our variables
// Start Screen Variables
let startBtnEL = document.getElementById('startBtn');
let startScreenEL = document.getElementById('startScreen');

// Question Screen Variables
let questionEL = document.getElementsByClassName('question');
let questionContainerEL = document.getElementById('questionContainer');
let answerBtnEL = document.getElementById('answerBtn');
let randomQuestion, questionIndex

// Game Over Screen Variables
let gameOverEL = document.getElementById('gameOverScreen');
let submitBtnEL = document.getElementById('submitBtn');
let retakeBtnEL = document.getElementById('retakeBtn');
let userIdEL = document.getElementById('#userInitials');

// Timer/Score Variables
let timeLeft = 75;
let timerDisplayEL = document.getElementById('timer');

// addEventListeners
startBtnEL.addEventListener('click', startQuiz)
answerBtnEL.addEventListener('click', startQuiz)

// Functions
function timer() {
    setInterval(function() {

        // IF the timer hit 0 we want the timer to stop.
        if (timeLeft <= 0){
            // Clear the interval so that we don't get weird countdowns.
            clearInterval(timeLeft = 0);
            // Once the interval is cleared and the timer hits 0 the game is over and user is prompted to the 'gameOverScreen'
            startScreenEL.classList.add('hide');
            questionContainerEL.classList.add('hide')
            gameOverEL.classList.remove('hide')
        };
        // We need to now render the time so that we see it in our display.
        timerDisplayEL.innerHTML = ('Timer/Score: ' + timeLeft)
        // And then set timeLeft to -1 every second.
        timeLeft -= 1
    }, 1000)     
};

function startQuiz() {
    // WHEN the user clicks the START BUTTON we want the start screen to switch with the question screen.
    startScreenEL.classList.add('hide');
    questionContainerEL.classList.remove('hide')

    // WHEN the user clicks the START BUTTON we want the timer in the top-left corner to start counting down from 60.
    timer();

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0;
    randomQuestion = quizQuestions.sort(() => Math.random() - .5)
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showQuestion();
    console.log(randomQuestion);
};

function showQuestion() {
    // THEN the user is presented with a question. 
    questionEL.textContent = randomQuestion[questionIndex]
    // IF the user answers a question correctly then they are presented with another question and the user is rewarded a point.

    // IF NOT then we don't want the page to change the question, but notify them in a textbox below that they are wrong and 5 seconds are removed off of the timer.


};

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.

};

function wrongAnswer(timer) {

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
    }
];










// WHEN all questions are answered or the timer reaches 0 then the game is over. 



