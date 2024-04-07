const questions = [
    {
        question: "1) Which type of JavaScript language is ___",
        options: ["Object-Oriented Programming Language", "Object Based Language", "Assembly Language", "High Level language"],
        correctAnswer: 0
    },
    {
        question: "2) Which one of the following also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        correctAnswer: 3
    },
    {
        question: "3) In JavaScript, what is a block of statement?",
        options: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
        correctAnswer: 1
    },
    {
        question: "4) When interpreter encounters an empty statements, what it will do:",
        options: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        correctAnswer: 3
    },
    {
        question: "5) The *function* and *var* are known as:",
        options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const questionNumberElement = document.querySelector('.question-number');
const optionsElement = document.querySelector('.options');
const resultElement = document.querySelector('.result');
const progressBar = document.querySelector('progress');

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionNumberElement.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });
    updateProgress();
}

function selectOption(index) {
    const userAnswer = index;
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    var heading = document.getElementById("pageTitle");
    heading.textContent = "Result";
    questionElement.style.display = 'none';
    questionNumberElement.style.display = 'none';
    optionsElement.style.display = 'none';
    progressBar.style.display = 'none';
    resultElement.textContent = `Your score: ${score}/${questions.length} and your percentage is (${((score / questions.length) * 100).toFixed(2)}%)`;
}

function updateProgress() {
    const progressValue = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.value = progressValue;
}

loadQuestion();