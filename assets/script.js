// DECLARE our variables
// Start Screen Variables
let startBtnEl = document.getElementById('startBtn');
let startScreenEl = document.getElementById('startScreen');

// Question Screen Variables
let questionEl = document.getElementById('question');
let questionContainerEl = document.getElementById('questionContainer');
let answerBtnAEl = document.getElementById('answer1');
let answerBtnBEl = document.getElementById('answer2');
let answerBtnCEl = document.getElementById('answer3');
let answerBtnDEl = document.getElementById('answer4');
let randomQuestion, questionIndex

// Game Over Screen Variables
let gameOverEl = document.getElementById('gameOverScreen');
let submitBtnEl = document.getElementById('submitBtn');
let retakeBtnEL = document.getElementById('retakeBtn');
let userIdEL = document.getElementById('#userInitials');

// Timer/Score Variables
let timeLeft = 75;
let timerDisplayEL = document.getElementById('timer');

// console.log(answerBtnEl)

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
    let randomQuestion = quizQuestions.sort(() => Math.random() - .5);
    
    // WHEN the question screen appears we want the first question to appear on the HTML provided.
    showQuestion(randomQuestion);
    // console.log(randomQuestion);
};

function showQuestion(randomQuestion) {

    // THEN the user is presented with a question. 
    currentQuestion = randomQuestion[questionIndex];
    questionEl.innerText = currentQuestion.question

    console.log(randomQuestion);
    
    answerBtnAEl.innerText = 'A. ' + currentQuestion.answer1
    answerBtnBEl.innerText = 'B. ' + currentQuestion.answer2
    answerBtnCEl.innerText = 'C. ' + currentQuestion.answer3
    answerBtnDEl.innerText = 'D. ' + currentQuestion.answer4

    answerBtnAEl.value = currentQuestion.answer1
    answerBtnBEl.value = currentQuestion.answer2
    answerBtnCEl.value = currentQuestion.answer3
    answerBtnDEl.value = currentQuestion.answer4

    let correctAnswer = currentQuestion.correctAnswer

    handleAnswerClick(correctAnswer)

};

function handleAnswerClick(correctAnswer) {
    
    answerBtnAEl.addEventListener('click', () => {
        if (answerBtnAEl.value == correctAnswer) {
            rightAnswer()
        }
        else {
            wrongAnswer()
        }
    })
    answerBtnBEl.addEventListener('click', () => {
        if (answerBtnBEl.value == correctAnswer) {
            rightAnswer()
        }
        else {
            wrongAnswer()
        }
    })
    answerBtnCEl.addEventListener('click', () => {
        if (answerBtnCEl.value == correctAnswer) {
            rightAnswer()
        }
        else {
            wrongAnswer()
        }
    })
    answerBtnDEl.addEventListener('click', () => {
        if (answerBtnDEl.value == correctAnswer) {
            rightAnswer()
        }
        else {
            wrongAnswer()
        }
    })
    // if (correctAnswer = )
}

function rightAnswer() {
    // increment question index
    
    // run show question again
}

function wrongAnswer() {
    // decrease the amount of time left.
};

function submitScore() {
// WHEN the game is over then the user can save their name and score and it updates to the leaderboard.

};

// Quiz Question Index
let quizQuestions = [
    {
        question: 'Who do you play in the main games?',
        answer1: 'Zelda',
        answer2: 'Tingle',
        answer3: 'Skull Kid',
        answer4: 'Link',
        correctAnswer: 'Link',
    },
    {
        question: 'What is the TriForce?',
        answer1: 'The power of the Golden Goddesses',
        answer2: 'Tattoo for members of the Yiga Clan',
        answer3: 'The instrument Link plays music with',
        answer4: 'A powerful finishing move',
        correctAnswer: 'The power of the Golden Goddesses',
    },
    {
        question: 'Who is the usual main antagonist?',
        answer1: 'Zant',
        answer2: 'King of Red Lions',
        answer3: 'Majora',
        answer4: 'Ganon',
        correctAnswer: 'Ganon',
    },
    {
        question: 'What does each piece of the TriForce stand for?',
        answer1: 'Cool, Calm, and Collected',
        answer2: 'Water, Fire, and Grass',
        answer3: 'Power, Wisdom, and Courage',
        answer4: 'Love, Peace, and Tranquility',
        correctAnswer: 'Power, Wisdom, and Courage',
    },
    {
        question: 'Who created the Legend of Zelda?',
        answer1: 'Shigeru Miyamoto',
        answer2: 'Takashi Tezuke',
        answer3: 'Shigeki Morimoto',
        answer4: 'Koji Okada',
        correctAnswers: 'Shigeru Miyamoto',
    },
    {
        question: 'What is Zelda\'s alter ego in Ocarina of Time?',
        answer1: 'Impa',
        answer2: 'Sheik',
        answer3: 'Tetra',
        answer4: 'Saria',
        correctAnswer: 'Sheik',
    },
    {
        question: 'When was the first Legend of Zelda originally released?',
        answer1: '1986',
        answer2: '1982',
        answer3: '1985',
        answer4: '1990',
        correctAnswer: '1986',
    },
    {
        question: 'Which of the games is set in the span of 3 days?',
        answer1: 'Wind Waker',
        answer2: 'Link\s Awakening',
        answer3: 'Majora\'s Mask',
        answer4: 'Minish Cap',
        correctAnswer: 'Majora\'s Mask',
    },
    {
        question: 'Which of the games main plot involves time travel?',
        answer1: 'Skyward Sword',
        answer2: 'Twilight Princess',
        answer3: 'The Adventure of Link',
        answer4: 'Ocarina of Time',
        correctAnswer:'Ocarina of Time',
    },
    {
        question: 'What is the best selling Legend of Zelda game?',
        answer1: 'Ocarina of Time',
        answer2: 'Legend of Zelda (the Original)',
        answer3: 'Breath of the Wild',
        answer4: 'Phantom Hourglass',
        correctAnswer: 'Breath of the Wild',
    }
];

// WHEN all questions are answered or the timer reaches 0 then the game is over. 



