'use strict'

// declare variables

const guessBtn = document.querySelector('.guess')
let score = 0
const secretNumber = Math.floor((Math.random() * 20) + 1);


// game logic here

const displayMessage = (message) =>{
    document.querySelector('.result-comparision').textContent = message
}

guessBtn.addEventListener("click",function(e){
    let yourNumber = Number(document.querySelector('.input-number').value);
    console.log(secretNumber);
    if(yourNumber < secretNumber){
        displayMessage("Your number is low")
    }else if(yourNumber > secretNumber){
        displayMessage("Your number is high")
    }
    else if(yourNumber === secretNumber){
        displayMessage("Correct guess, you won!!!")
        document.querySelector('.guess-number').textContent = secretNumber;
        score++;
        document.querySelector('.update-score').textContent = score;
    }
    e.preventDefault()
})