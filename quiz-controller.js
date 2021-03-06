function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.hasEnded = function () {
    return this.questionIndex === this.questions.length;
};

Quiz.prototype.guess = function (answer) {
    if (this.getCurrentQuestion() && this.getCurrentQuestion().isAnswerCorrect(answer)) {
        this.score++;
    }
    this.questionIndex++;
};
