class Quiz {
    questions = []
    score = 0
    correctAnswers = []
    wrongAnswers = []
    currentQuestion = 0

    constructor(questions) {
        this.questions = questions
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestion]
    }

    verify(answer) {
        let currentQuestion = this.getCurrentQuestion()
        if (answer === currentQuestion.answer) {
            this.score += currentQuestion.points
            this.correctAnswers.push(currentQuestion)
        } else {
            this.wrongAnswers.push(currentQuestion)
        }
        this.currentQuestion++
    }

    isEnd() {
        return this.questions.length === this.currentQuestion
    }

}

