// DECLARE our variables
// Start Screen Variables
const startBtnEl = document.getElementById('startBtn');
const startScreenEl = document.getElementById('startScreen');

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
// let correctAnswer = currentQuestion.correctAnswer

// Game Over Screen Variables
const gameOverEl = document.getElementById('gameOverScreen');
const submitBtnEl = document.getElementById('submitBtn');
const retakeBtnEl = document.getElementById('retakeBtn');
const userIdEL = document.getElementById('#userInitials');

// Timer/Score Variables
let timeLeft = 75;
let timePenalty = 5
const timerDisplayEL = document.getElementById('timer');

// addEventListeners
// This event listener will start the quiz.
startBtnEl.addEventListener('click', startQuiz)
// This event listener will restart the quiz for people that have got to the Game Over Screen.
// retakeBtnEl.addEventListener('click', startQuiz)



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
    questionContainerEl.classList.remove('hide');
    gameOverEl.classList.add('hide');

    // WHEN the user clicks the START BUTTON we want the timer in the top-left corner to start counting down from 60.
    timer();

    // WHEN the quiz starts we want the quiz to be in a random array so that it's never the same.
    questionIndex = 0;
    randomQuestion = quizQuestions.sort(() => Math.random() - .5);
    
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showNewQuestion(randomQuestion, questionIndex);

    
};

function showNewQuestion() {

    if (questionIndex >= randomQuestion.length) {
        clearInterval(timeLeft)
        score = timeLeft
        questionContainerEl.classList.remove('hide');
        gameOverEl.classList.remove('hide')
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

    let correctAnswer = currentQuestion.correctAnswer

    handleAnswerClick(correctAnswer)

    // acceptingAnswers = true

};

function handleAnswerClick(correctAnswer) {
// FOR EACH answer if the user clicks on a button we want certain actions to happen.
answers.forEach(answer => {
    answer.addEventListener('click', event => {
        event.preventDefault();
        const selectedAnswer = event.target.dataset.number

    if (selectedAnswer == correctAnswer) {
        correctWrongSectionEl.classList.remove('hide');
        correctEl.classList.remove('hide');

        setTimeout(() => {
            questionIndex++
            correctWrongSectionEl.classList.add('hide');
            correctEl.classList.add('hide');
            showNewQuestion();
            return;
        }, 1000);
    }

    else if (selectedAnswer != correctAnswer) {
        correctWrongSectionEl.classList.remove('hide');
        wrongEl.classList.remove('hide');
        timeLeft -= timePenalty

        setTimeout(() => {
            correctWrongSectionEl.classList.add('hide');
            wrongEl.classList.add('hide');
            return;
        }, 1000);

    }
    console.log('Correct Answer: ' + correctAnswer)
    console.log('Selected answer: ' + selectedAnswer)
    })
    
})
// console.log(handleAnswerClick())
};


function decreaseScore(timer) {
    timer
    timeleft-=5
    return;
}

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.

};

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
        answer2: 'Takashi Tezuke',
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



