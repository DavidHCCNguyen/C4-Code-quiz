var questions = [
    {
        title: "Question two: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question Ahhg: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question twodwda: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question beano: What are HTML tags?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "Question Godo: What are HTML tags?",
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
    // removes the class which also removes hidden
    questionEl.removeAttribute("class");
    // Starts the timer, 60 seconds and going down
    timeId = setInterval(clockTick, 1000);
    timerEl.textContent=time;
    getQuestion();

}

function getQuestion() {
    // grabs first question and creates the choices
    var currentQuestion = questions[currentIndex];
    var titleEl = document.getElementById('questionTitle');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    // loop over choices and create a button for each one
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var questionChoice = currentQuestion.choices[i];
    // creates the choice buttons
    var choiceNode = document.createElement('button');
    // giving the choices their attributes
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', questionChoice);

    // giving the choices the text
    choiceNode.textContent = i + 1 + '. ' + questionChoice;

    // display on the page
    choicesEl.appendChild(choiceNode);
  }
}

  function nextQuestion(event) {
    console.log("Hello")
    var buttonChoice = event.target;
    // If whatever isnt a choice button do nothing
    if (!buttonChoice.matches(".choice")){
        return;
    }
    if (buttonChoice.value !==questions[currentIndex].answer) {
        time -= 15;

        if (time < 0) {time = 0}
        timerEl.textContext = time;

    }

    currentIndex++;
    // tracking currentIndex and adding 1 until question doesnt exist
    if (time <= 0 || currentIndex===questions.length) {
        endQuiz();
    }

    else{
        // goes to getQuestion
        getQuestion()
    }

    }

  function endQuiz() {
    clearInterval(timeId);
    var endScreen = document.getElementById("endscreen");
    endScreen.removeAttribute("class");
    var finalScore = document.getElementById("finalscore");
    finalScore.textContent = time;
    questionEl.setAttribute("class", "hidden")
  }

function clockTick() {
    time--;
    timerEl.textContent = time
}

function saveHighScore() {
    var initials = initialsEl.value.trim()
    if (initials !== "") {
        var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        // creating the score object for the player
        var newHighScore = {
            score: time,
            initials: initials,
        };
        highScores.push(newHighScore);
        window.localStorage.setItem("highscores", JSON.stringify(highScores));
        window.location.href = "highscores.html";
    }
}

function keyPress(event) {
    if (event.key === "Enter"){
        saveHighScore();
    }
}


startBtn.onclick = start;
choicesEl.onclick = nextQuestion;
submitBtn.onclick = saveHighScore;
initialsEl.onkeyup = keyPress;