//Variable initialization//
let uncoverCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let successes = 0;

//pin on html document//
let showMovements = document.getElementById("movements");
let shoeSuccesses = document.getElementById("successes");

//Random numbers generator//
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(() => {return Math.random()-0.5});
console.log(numbers);

//Main Function//
function uncover(id){
    uncoverCards++;

    if(uncoverCards == 1){
        //Show first number//
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;

        //Disabled first buttom//
        card1.disabled = true;

    }else if(uncoverCards == 2){
        //Show second number//
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult;

        //Disabled second button//
        card2.disabled = true;

        //Increase movements//
        movements++;
        showMovements.innerHTML = `Movements: ${movements}`;

        if(firstResult == secondResult){
            //Counter of uncover cards to zero//
            uncoverCards = 0;

            //Increase successes//
            successes++;
            shoeSuccesses.innerHTML = `Successes: ${successes}`;
        }else{
            //Show values, cover-uncover//
            setTimeout(() =>{
                card1.innerHTML = '';
                card2.innerHTML = '';
                card1.disabled = false;
                card2.disabled = false;
                uncoverCards = 0;
            },800);

        }
    }
}