
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
        "Hueso",
        "Calendario",
        "Pie",
        "Globo ocular",
        "Calcetines",
        "Esqueleto",
        "Falda",
        "Gafas",
        "Tía",
        "Primo/a",
        "Padre",
        "Adolescente"
];
let incorrectWords = [
        "Huezo",
        "Calendário",
        "Píe",
        "Glovo ocular",
        "Calsetines",
        "Esqueleto",
        "Fálida",
        "Gáfaz",
        "Tíaa",
        "Prímo/a",
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
        timer.innerHTML = "Tiempo: " + count + "s";
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
        Si</button>
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
            streak.innerText = `Racha: ${scoreCount}`;
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
                streak.innerText = `Racha: ${scoreCount}`;
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
    startButton.innerText = "Nuevo Juego";

    userResult.innerHTML = `<p>Tu Racha: ${scoreCount}</p><p>Tiempo Tomado: ${count}s</p>`;

    count = 0;
    clearInterval(count);
};

  function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    streak.innerText = "Racha: 0";
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
    startButton.innerText = "Inicio";
    userResult.innerText = "";
}


  