const quizData = [{
        question: "What we do when we have stress?",
        a: "namaz",
        b: "quran",
        c: "rest",
        d: "all of these",
        correct: "d",
    },
    {
        question: "What is the capital city of France?",
        a: "London",
        b: "Madrid",
        c: "Paris",
        d: "Berlin",
        correct: "b",
    },

    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        correct: "a",
    },
    {
        question: "What year was mutahir date of birth?",
        a: "2003",
        b: "1999",
        c: "2002",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "CHOOSE THE CORRECT OPTION",
        a: "love",
        b: "looove",
        c: "lve",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "which one reflects babarazam ?",
        a: "Pure class",
        b: "cover drive",
        c: "One man Army",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "What was pakistan best victory against india in t20 ",
        a: "152-0",
        b: "win by 8 wickets",
        c: "win by 48 runs",
        d: "none of the above",
        correct: "a",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

// Define an event listener for the click event on the 'submitBtn' element.
submitBtn.addEventListener('click', () => {

    // Call the 'getSelected' function to retrieve the user's selected answer.
    const answer = getSelected();

    // Check if the 'answer' variable contains a selected answer.
    if (answer) {

        // Check if the selected 'answer' matches the correct answer for the current question in the 'quizData' array.
        if (answer === quizData[currentQuiz].correct) {

            // If the answer is correct, increment the 'score' variable by 1.
            score++;
        }

        // Move to the next question by incrementing the 'currentQuiz' variable.
        currentQuiz++;

        // Check if there are more questions in the 'quizData' array.
        if (currentQuiz < quizData.length) {

            // If there are more questions, load the next question using the 'loadQuiz' function.
            loadQuiz();
        } else {

            // If all questions have been answered, update the 'quiz' element with the final result and a reload button.
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});