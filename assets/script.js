// DECLARE our variables
// Start Screen Variables
const startBtnEl = document.getElementById('startBtn');
const startScreenEl = document.getElementById('startScreen');
const viewHighscoresEl = document.getElementById('viewHighscores')

// Question Screen Variables
const questionEl = document.getElementById('question');
const questionContainerEl = document.getElementById('questionContainer');

const answers = Array.from(document.querySelectorAll('.answerBtn'));

const correctEl = document.getElementById('correctSign');
const wrongEl = document.getElementById('wrongSign');
const correctWrongSectionEl = document.getElementById('correctAndWrong');

let randomQuestion;
let questionIndex;
let currentQuestion;

// Game Over Screen Variables
const gameOverEl = document.getElementById('gameOverScreen');
const submitBtnEl = document.getElementById('submitBtn');
const retakeBtnEl = document.getElementById('retakeBtn');

// Leaderboard Screen Variables
const highscoreEl = document.querySelector('#highscores');
const userInputEl = document.querySelector('#userInitials');
const scoresEl = Array.from(document.querySelectorAll('.scores'));
const usernamesEl = Array.from(document.querySelectorAll('.usernames'));
const retakeBtn2El = document.querySelector('#retakeBtn2');

// This is going to grab our highscores for our 'leaderboard' OR it will start an empty string if there aren't any.
const leaderboard =  JSON.parse(localStorage.getItem('leaderboard')) || [];
let usernameIndex = 0;
let highscoreIndex = 0;

// Timer/Score Variables
let timeLeft = 75;
const timerDisplayEL = document.getElementById('timer');
let interval;

// addEventListeners
// This event listener will start the quiz.
startBtnEl.addEventListener('click', startQuiz);

// This event listener will restart the quiz for people that have got to the Game Over Screen.
retakeBtnEl.addEventListener('click', reloadTest);
retakeBtn2El.addEventListener('click', reloadTest);

// This event listener will allow the user to store their score and add their initials.
submitBtnEl.addEventListener('click', submitScore);
viewHighscoresEl.addEventListener('click', () => {
    startScreenEl.classList.add('hide');
    questionContainerEl.classList.add('hide');
    gameOverEl.classList.add('hide');
    highscoreEl.classList.remove('hide');

    usernamesEl.forEach(username => {
        let allUsernames = JSON.parse(localStorage.getItem('leaderboard'));
            allUsernames[usernameIndex++].User.toUpperCase() = usernamesCapitalized
            username.innerText = 
            usernameIndex + 1 + '. ' + usernamesCapitalized;
    })

    scoresEl.forEach(score => {
        let allScores = JSON.parse(localStorage.getItem('leaderboard'));
        score.innerText = allScores[highscoreIndex++].Score;
        })
});


// Functions
function startClock() {
    interval = setInterval(function() {

        // IF the timer hit 0 we want the timer to stop.
        if (timeLeft <= 0){
            // Clear the interval so that we don't get weird countdowns.
            clearInterval(timeLeft = 0);
            // Once the interval is cleared and the timer hits 0 the game is over and user is prompted to the 'gameOverScreen'
            startScreenEl.classList.add('hide');
            questionContainerEl.classList.add('hide');
            gameOverEl.classList.remove('hide');
        };
        // We need to now render the time so that we see it in our display.
        timerDisplayEL.innerHTML = ('Timer/Score: ' + timeLeft);
        // And then set timeLeft to -1 every second.
        timeLeft -= 1;
    }, 1000);
};

function startQuiz() {

    // WHEN the user clicks the START BUTTON we want the start screen to switch with the question screen.
    startScreenEl.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    gameOverEl.classList.add('hide');

    // WHEN the user clicks the START BUTTON we want the timer in the top-left corner to start counting down from 60.
    startClock();

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0;
    randomQuestion = quizQuestions.sort(() => Math.random() - .5);
    
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showNewQuestion(randomQuestion, questionIndex);

    
};

function showNewQuestion(randomQuestion, questionIndex) {

    // IF the user reaches the end of the quiz...
    if (questionIndex >= randomQuestion.length) {
        // THEN we want to stop the timer and 
        clearInterval(interval)
        // Have the END screen show up.
        questionContainerEl.classList.add('hide');
        gameOverEl.classList.remove('hide')
        // Then we want the user to RETURN so the rest of the function does not run.
        return;
    }

    // let correctAnswer = randomQuestion[questionIndex].correctAnswer

    // THEN the user is presented with a question. 
    let currentQuestion = randomQuestion[questionIndex];
    questionEl.innerText = currentQuestion.question

    // AND the answers provided in each button for them that they can choose from.
    answers.forEach(answer => {
        // PULL from the datasets in our HTML and set them to our new const number.
        const number = answer.dataset['number'];
        // APPEND the innerText to what is provided for the currentQuestions answers.
        answer.innerText = number + '. ' + currentQuestion['answer' + number];
    })
};

// FOR EACH answer button 
answers.forEach(answer => {
    // If the user CLICKS on a button we want certain actions to happen.
    answer.addEventListener('click', event => {
        event.preventDefault();
        const selectedAnswer = event.target.dataset.number

    // IF the button they click on is the right answer
    if (selectedAnswer == quizQuestions[questionIndex].correctAnswer) {

        // The user is NOTIFIED that they are CORRECT
        correctWrongSectionEl.classList.remove('hide');
        correctEl.classList.remove('hide');

        // THEN AFTER 1 second, we want the correct sign to disappear.
        setTimeout(() => {
            correctWrongSectionEl.classList.add('hide');
            correctEl.classList.add('hide');
        }, 1000);

        questionIndex++;
        showNewQuestion(randomQuestion, questionIndex);
    }

    // ELSE IF the user clicks the wrong answer...
    else if (selectedAnswer != quizQuestions[questionIndex].correctAnswer) {
        // The user is NOTIFIED that they are WRONG
        correctWrongSectionEl.classList.remove('hide');
        wrongEl.classList.remove('hide');

        // AND there is 5 seconds subtracted from the total amount of timeLeft.
        timeLeft-=5;

        // THEN AFTER 1 second, we want the wrong sign to disappear.
        setTimeout(() => {
            correctWrongSectionEl.classList.add('hide');
            wrongEl.classList.add('hide');
        }, 1000);

    }
    })
    
})

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.
    
    // IF the user INPUTS nothing for the username then they are RETURNED out of this function from storing.
    if (userInputEl.value < 1) return;

    // ELSE the user is brought to the Leaderboard screen with their new updated score.
    else {
        let score = timeLeft
        // The user's initials and their score are stored in this object.
        let userScore = {
            User: userInputEl.value, 
            // The Score is our score + 1 so that the score the user sees is consistent to the timeLeft on the timer.
            Score: score + 1}

        leaderboard.push(userScore)

        // IF the 'b' score is higher than the 'a' score then put 'b' higher than 'a'.
        leaderboard.sort( (a,b) => b.Score - a.Score);
        
        // THEN if the user score is high enough to make the 'leaderboard' the lowest score will be taken off.
        leaderboard.splice(10)

        // WE WANT TO then set our scores in place for the leaderboard.
        // We then need to STRINGIFY the object so that we can STORE it in LOCALSTORAGE.
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        

        highscoreEl.classList.remove('hide')
        gameOverEl.classList.add('hide')

        usernamesEl.forEach(username => {
            let allUsernames = JSON.parse(localStorage.getItem('leaderboard'));
            allUsernames[usernameIndex++].User.toUpperCase() = usernamesCapitalized
            username.innerText = 
            usernameIndex + 1 + '. ' + usernamesCapitalized;
        });
    
        scoresEl.forEach(score => {
            let allScores = JSON.parse(localStorage.getItem('leaderboard'));
            score.innerText = allScores[highscoreIndex++].Score;
            });
    }

};

function reloadTest() {
    location.reload();
    return;
}

// Quiz Question Index
const quizQuestions = [
    {
        question: 'Who do you play in the main games?',
        answer1: 'Zelda',
        answer2: 'Tingle',
        answer3: 'Skull Kid',
        answer4: 'Link',
        correctAnswer: 4,
    },
    {
        question: 'What is the TriForce?',
        answer1: 'The power of the Golden Goddesses',
        answer2: 'Tattoo for members of the Yiga Clan',
        answer3: 'The instrument Link plays music with',
        answer4: 'A powerful finishing move',
        correctAnswer: 1,
    },
    {
        question: 'Who is the usual main antagonist?',
        answer1: 'Zant',
        answer2: 'King of Red Lions',
        answer3: 'Majora',
        answer4: 'Ganon',
        correctAnswer: 4,
    },
    {
        question: 'What does each piece of the TriForce stand for?',
        answer1: 'Cool, Calm, and Collected',
        answer2: 'Water, Fire, and Grass',
        answer3: 'Power, Wisdom, and Courage',
        answer4: 'Love, Peace, and Tranquility',
        correctAnswer: 3,
    },
    {
        question: 'Who created the Legend of Zelda?',
        answer1: 'Shigeru Miyamoto',
        answer2: 'Chuck Norris',
        answer3: 'Shigeki Morimoto',
        answer4: 'Koji Okada',
        correctAnswer: 1,
    },
    {
        question: 'What is Zelda\'s alter ego in Ocarina of Time?',
        answer1: 'Impa',
        answer2: 'Sheik',
        answer3: 'Tetra',
        answer4: 'Saria',
        correctAnswer: 2,
    },
    {
        question: 'When was the first Legend of Zelda originally released?',
        answer1: '1986',
        answer2: '1982',
        answer3: '1985',
        answer4: '1990',
        correctAnswer: 1,
    },
    {
        question: 'Which of the games is set in the span of 3 days?',
        answer1: 'Wind Waker',
        answer2: 'Link\s Awakening',
        answer3: 'Majora\'s Mask',
        answer4: 'Minish Cap',
        correctAnswer: 3,
    },
    {
        question: 'Which of the games main plot involves time travel?',
        answer1: 'Skyward Sword',
        answer2: 'Twilight Princess',
        answer3: 'The Adventure of Link',
        answer4: 'Ocarina of Time',
        correctAnswer:4,
    },
    {
        question: 'What is the best selling Legend of Zelda game?',
        answer1: 'Ocarina of Time',
        answer2: 'Legend of Zelda (the Original)',
        answer3: 'Breath of the Wild',
        answer4: 'Phantom Hourglass',
        correctAnswer: 3,
    }
];

// WHEN all questions are answered or the timer reaches 0 then the game is over. 



