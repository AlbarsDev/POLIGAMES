const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
const container = document.querySelector(".container");
const wordDisplay = document.querySelector(".word-display");
const inputContainer = document.querySelector(".input-container");
const validWords = document.querySelector(".valid-words");
const submitButton = document.querySelector("#submit-button");
const errMessage = document.getElementById("err-message");


let wordsObj = {
    BARCO: ["BAR", "CAR", "ROCA", "COR", "BOCA", "BACO"],
    FLOR: ["ROL", "ROFL", "FORO", "FLO", "ROLLO", "FOLLO"],
    PIRATA: ["RATA", "PARA", "TIRA", "PITA", "TRIPA", "RAPA"],
    JARDÍN: ["DAR", "RíO", "DINAR", "RADÓN", "ANDAR", "RANI"],
    ATARDECER: ["TARDE", "CARTE", "TREN", "CERA", "TE", "CARTON"],
};

let randomWord = "",
    currentWord = "",
    inputWord = "";
let foundWords = [];
let count = 0;

const randomValue = (arr, obj = false) => {
    if (obj) {
      let keysArr = Object.keys(arr);
      return keysArr[Math.floor(Math.random() * keysArr.length)];
    } else {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };
  
  submitButton.addEventListener("click", async () => {
    errMessage.innerText = "";
    inputContainer.innerText = "";

let expectedOutputs = wordsObj[currentWord];


let expectedSection = document.querySelectorAll(".expected-section");

if (expectedOutputs.includes(inputWord) && !foundWords.includes(inputWord)) {
    
    count += 1;
    foundWords.push(inputWord);

    let index = expectedOutputs.indexOf(inputWord);
    expectedSection[index].innerHTML = inputWord;
} else {
    if (foundWords.includes(inputWord)) {
        errMessage.innerText = "Palabra ya ingresada";
    } else {
        errMessage.innerText = "Palabra inválida";
    }
}

if (count == expectedOutputs.length) {
    coverScreen.classList.remove("hide");
    container.classList.add("hide");
    result.classList.remove("hide");
    startButton.innerText = "Nuevo Juego";
    submitButton.disabled = true;
}

let letters = document.querySelectorAll(".letters");
letters.forEach((button) => {
    button.classList.remove("active");
    button.disabled = false;
});

inputWord = "";

});

const selectLetter = (e) => {
    errMessage.innerText = "";
    inputWord += e.target.innerText;
    e.target.classList.add("active");
    e.target.disabled = true;
    inputContainer.innerText += e.target.innerText;
};

const displayDashes = () => {
    let expectedOutputs = wordsObj[currentWord];

    expectedOutputs.forEach((element) => {
        let displayItem = element.replace(/./g, `<span class="dashes">_</span>`);
        validWords.innerHTML += `<div class="expected-section">${displayItem}</div>`;
    });
};


  startButton.addEventListener("click", () => {
    
    container.classList.remove("hide");
    coverScreen.classList.add("hide");
    errMessage.innerText = "";
    inputContainer.innerText = "";
    wordDisplay.innerHTML = "";
    inputWord = "";
    count = 0;
    submitButton.disabled = false;
    validWords.innerHTML = "";
 
 currentWord = randomValue(wordsObj, true);


 randomWord = currentWord.split("").sort(() => 0.5 - Math.random());
   
    displayDashes();

    randomWord.forEach((letter) => {
        wordDisplay.innerHTML += `<button class="letters" onClick="selectLetter(event)">${letter}</button>`;
    });
});

window.onload = () => {
    coverScreen.classList.remove("hide");
    container.classList.add("hide");
    result.classList.add("hide");
};

