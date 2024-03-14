
let timer = document.getElementsByClassName("timer-div")[0];
let streak = document.querySelector(".streak-div");
let quizContainer = document.getElementById("container");
let displayContainer = document.getElementById("display-container");
let userResult = document.getElementById("user-result");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 0;
let countdown;

let quizArray = [];
let correctWords = [
    "Osso",
    "Calendario",
    "Piede",
    "Occhio",
    "Calzini",
    "Scheletro",
    "Gonna",
    "Occhiali",
    "Zia",
    "Cugino/a",
    "Padre",
    "Adolescente"
];
let incorrectWords = [
        "Osso",
        "Calendário",
        "Piede",
        "Occhio",
        "Calzini",
        "Scheletro",
        "Gónna",
        "Occhiali",
        "Zía",
        "Cugíno/a",
        "Padré",
        "Adolescénte"    
];

const generateRandomValue = (array) => 
    array[Math.floor(Math.random() * array.length)];

displayNext = () => {
    questionCount += 1;
    quizCreator();
};

const timerDisplay = () => {
    countdown = setInterval(() => {
        timer.innerHTML = "Tempo: " + count + "s";
        count++;
    }, 1000);
};

const questionGenerator = () => {
    let randomValue = Math.random() >= 0.5 ? 1 : 0;
     
    let arrayChoice = randomValue ? correctWords : incorrectWords;
    let valueChoice = generateRandomValue(arrayChoice);
    if (quizArray.includes(valueChoice)) {
      questionGenerator();
    } else {
      quizArray.push(valueChoice);
    }
  };

  function quizCreator () {

        questionGenerator();
        quizContainer.innerHTML = ``;
        let div = document.createElement("div");
        div.classList.add("container_mid");
    
        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = quizArray[questionCount];
        div.appendChild(question_div);

        div.innerHTML += `<div class="button-container">
        <button class="option-div" onclick="checker(true, this)">
        Sì</button>
        <button class="option-div" onclick="checker(false, this)">
        No</button>
        </div>`;
        quizContainer.appendChild(div);
  }

  function checker(userOption, currentElement) {
    let questionContainer = document.querySelector(".container_mid");
    let options = questionContainer.querySelectorAll(".option-div");
    let question = questionContainer.querySelector(".question").innerText;
    if (userOption) {
        if (correctWords.includes(question)) {
            currentElement.classList.add("correct");
            scoreCount++;
            streak.innerText = `Striscia: ${scoreCount}`;
            setTimeout(displayNext, 2000);
        } else {
            currentElement.classList.add("inCorrect");
            options[1].classList.add("correct");
            setTimeout(displayResults, 2000);
        }
    } else {
            if (incorrectWords.includes(question)) {
                currentElement.classList.add("correct");
                scoreCount++;
                streak.innerText = `Striscia: ${scoreCount}`;
                setTimeout(displayNext, 2000);
            } else {
                currentElement.classList.add("inCorrect");
                options[0].classList.add("correct");
                setTimeout(displayResults, 2000);
            }
        } 
        
        options.forEach((element) => {
            element.disabled = true;
        });
    }
    

const displayResults = () => {
    quizArray.pop();
    displayContainer.classList.add("hide");
    startScreen.classList.remove("hide");
    startButton.innerText = "Nuovo Gioco";

    userResult.innerHTML = `<p>La Tua Striatura: ${scoreCount}</p><p>Tempo Preso: ${count}s</p>`;

    count = 0;
    clearInterval(count);
};

  function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    streak.innerText = "Striscia: 0";
    clearInterval(countdown);
    count = 0;
    timerDisplay();
    quizCreator();
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    quizArray = [];
    initial();
});

window.onload = () => {
    startButton.innerText = "Inizio";
    userResult.innerText = "";
}


  