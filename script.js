var questions = [
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
]

var currentIndex = 0;
var time = 60;
var timeId;
// Document get element by id - goes to the element to the specific id (html)
var questionEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('startbtn');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');



function start() {
    var startScreen = document.getElementById("startscreen");
    // adds the class hidden at the start screen
    startScreen.setAttribute("class", "hidden");
    questionEl.removeAttribute("class");
    timeId = setInterval(clockTick, 1000);
    timerEl.textContent=time;
    getQuestion();

}

function getQuestion() {
    var currentQuestion = questions[currentIndex];
    var titleEl = document.getElementById('questionTitle');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var questionChoice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', questionChoice);

    choiceNode.textContent = i + 1 + '. ' + questionChoice;

    // display on the page
    choicesEl.appendChild(choiceNode);
  }

}

function clockTick() {
    time--;
    timerEl.textContent = time
}


startBtn.onclick = start;