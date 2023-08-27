
let questionText = document.querySelector(".question-text")
let options = document.querySelector(".options")
let questionNumber = document.querySelector(".question-number")
let questionBody = document.querySelector(".card-body")
let questions = null;
let quiz = null;

let xml = new XMLHttpRequest();
// xml.open("GET", "/questions");
// xml.open("GET", "/questions?category=sport");
// xml.open("GET", "/questions/10");
// xml.open("POST", "/questions/10");

// xml.open("POST", "/questions/25");
// xml.setRequestHeader("Content-Type", "application/json");

xml.open("POST", "/questions/15");
xml.setRequestHeader("Content-Type", "application/json");

xml.onreadystatechange = function()
{
    if(xml.status === 200 && xml.readyState === 4)
    {
        let data = JSON.parse(xml.responseText);
        questions = data.map((question)=>{
         return new Question(question.text, question.options, question.answer, question.poins, question.answer)
        })
        quiz = new Quiz(Utils.randomize(questions));
        startQuiz();
    }
}
xml.send(JSON.stringify({name: "Jelena"}));

//startQuiz()

function startQuiz() {
    let currentQuestion = quiz.getCurrentQuestion()
    questionText.innerHTML = currentQuestion.text
    questionNumber.innerHTML = `Question ${quiz.currentQuestion + 1}/${quiz.questions.length}`
    options.innerHTML = ""
    Utils.randomize(currentQuestion.options).forEach((option) => {
        let button = document.createElement("button")
        button.className = "btn btn-primary"
        button.innerHTML = option
        button.onclick = checkAnswer
        options.appendChild(button)
    })
}

function checkAnswer() {
    quiz.verify(this.innerHTML)
    if (quiz.isEnd()) {
        displayResult()
    } else {
        startQuiz()
    }
}

function displayResult() {
    questionBody.innerHTML = ""
    let html = `<h2>RESULT</h2>`
    html += `<h4>Your score is: ${quiz.score}</h4>`
    html += "<ul>"
    quiz.correctAnswers.forEach((answer) => {
        html += `<li>${answer.text}</li>`
    })
    html += "</ul>"
    questionBody.innerHTML = html
}







