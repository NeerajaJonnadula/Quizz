const quiz = [
    {
        question: ' What is the capital of France? ',
        options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
        answer: 'C'
    },
    {
        question: ' Which planet is known as the red planet? ',
        options: ['A. Earth', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
        answer: 'B'
    },
    {
        question: ' What is the largest ocean on Earth? ',
        options: ['A. Atlantic', 'B. Indian', 'C. Arctic', 'D. Pacific'],
        answer: 'D'
    },
    {
        question: ' Which element has the chemical symbol "O"? ',
        options: ['A. Gold','B. Oxygen','C. Osmium','D. Hydrogen'],
        answer: 'B'
    },
    {
        question: 'What is the boiling point of water at sea level in Celsius? ',
        options: ['A. 90°C', 'B. 100°C', 'C. 120°C', 'D. 80°C'],
        answer: 'B'
    },
    {
        question: ' Who painted the Mona Lisa? ',
        options: ['A. Vincent van Gogh', 'B. Pablo Picasso', 'C. Leonardo da Vinci', 'D. Claude Monet'],
        answer: 'C'
    },
    {
        question: '  In which year did the Titanic sink? ',
        options: ['A. 1905','B. 1912','C. 1920','D. 1915'],
        answer: 'B'
    }

];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = '';

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');
    const statusElement = document.getElementById('status');

    const currentQuestion = quiz[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.style.backgroundColor = '';
    });

    statusElement.textContent = `Ques: ${currentQuestionIndex + 1}/${quiz.length}`;
    document.getElementById('next-button').disabled = true;
}

function selectAnswer(answer) {
    selectedAnswer = answer;
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.backgroundColor = option.textContent.startsWith(answer) ?  '#ad4a03': '';
    });
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === quiz[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h2>Quiz Over!</h2><p>Your final score is ${score} out of ${quiz.length}.</p>`;
}

loadQuestion();