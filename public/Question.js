class Question {
    text = "";
    options = [];
    answer = "";
    points = null;
    category = ""

    constructor(text, options, answer, points, category) {
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.points = points
        this.category = category
    }
}

