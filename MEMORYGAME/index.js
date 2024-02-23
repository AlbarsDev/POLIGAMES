//Variable initialization//
let uncoverCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
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

        //Disabled second buttom//
        card2.disabled = true;
    }
}