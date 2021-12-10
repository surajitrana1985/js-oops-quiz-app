var questions = [
    new Question(
        "Which one is not an Object Oriented Programming (OOP) language?",
        ["Java", "C#", "C++", "C"],
        "C"
    ),
    new Question(
        "Which language is used for styling web pages?",
        ["HTML", "JQuery", "CSS", "XML"],
        "CSS"
    ),
    new Question(
        "There are __________ main components of Object Oriented Programming?",
        ["4", "6", "2", "1"],
        "4"
    ),
    new Question(
        "Which language is used for building web applications?",
        ["PHP", "Javascript", "Python", "All"],
        "All"
    ),
    new Question(
        "MVC is a __________",
        ["Language", "Framework", "Library", "All"],
        "Framework"
    ),
];

var quiz = new Quiz(questions);

function showScore() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'>Your score is : " + quiz.score + "</h2>";
    var quizElement = document.getElementById("quiz");
    if (quizElement) {
        quizElement.innerHTML = gameOverHTML;
    }
}

function guessAnswer(btnId, choice) {
    var btnElement = document.getElementById(btnId);
    if (btnElement) {
        btnElement.onclick = function () {
            quiz.guess(choice);
            populateQuiz();
        };
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var progressElement = document.getElementById("progress");
    if (progressElement) {
        progressElement.innerHTML =
            "Question " +
            currentQuestionNumber +
            " of " +
            quiz.questions.length;
    }
}

function populateQuiz() {
    if (quiz.hasEnded()) {
        showScore();
    } else {
        // show question
        var questionElement = document.getElementById("question");
        if (questionElement) {
            questionElement.innerHTML = quiz.getCurrentQuestion().text;
        }
        // show choices
        var choices = quiz.getCurrentQuestion().choices;
        for (var i = 0; i < choices.length; i++) {
            var answerElement = document.getElementById("choice" + i);
            if (answerElement) {
                answerElement.innerHTML = choices[i];
                // validate answer
                guessAnswer("btn" + i, choices[i]);
            }
        }
        showProgress();
    }
}

populateQuiz();
