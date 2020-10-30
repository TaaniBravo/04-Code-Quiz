// DECLARE our variables
// Start Screen Variables
let startBtnEL = document.getElementById('startBtn');
let startScreenEL = document.getElementById('startScreen');

// Question Screen Variables
let questionEL = document.getElementsByClassName('question');
let questionContainerEL = document.getElementById('questionContainer');
let answerBtnEL = document.getElementsByClassName('answerBtn');

// Game Over Screen Variables
let gameOverEL = document.getElementById('gameOverScreen');
let submitBtnEL = document.getElementsByClassName('submit');
let userIdEL = document.getElementById('#userInitials');

// Quiz Question Index
let quizQuestions = {

};

// Timer/Score
let timeLeft = 5;
let timerDisplayEL = document.getElementById('timer');

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
// WHEN the user clicks the START BUTTON we want the timer in the top-left corner to start counting down from 60.
    startScreenEL.classList.add('hide');
    questionContainerEL.classList.remove('hide')
    timer();
};

function nextQuestion() {
// THEN the user is presented with a question. 

// IF the user answers a question correctly then they are presented with another question and the user is rewarded a point.

// IF NOT then we don't want the page to change the question, but notify them in a textbox below that they are wrong and 5 seconds are removed off of the timer.


};

// function gameOverScreen() {
// // WHEN the page opens up the site starts with a title and a start button.

// };

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.

};

function wrongAnswer(timer) {

};

startBtnEL.addEventListener('click', startQuiz)

// answerBtnEL.addEventListener('click', () => {
//     console.log('1111')
// })
    











// WHEN all questions are answered or the timer reaches 0 then the game is over. 



