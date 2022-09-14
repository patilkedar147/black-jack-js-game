let player = {
    name : "Sammy",
    chips : 147,
    sayHello : function(){
        console.log("hiiii")
    }
}

// let firstCard = 20;
// let secondCard = 1;
// let firstCard = getRandomCard();
// let secondCard = getRandomCard();

// let sum = firstCard + secondCard;


let cards = [];
let sum = 0;

let opinion = document.querySelector("#message-el");
let card = document.querySelector("#card-el");
let total = document.querySelector("#sum-el");


let hasBlackJack = false;
let isAlive = false;

// let palayerName = "sammy";
// let playerChip = 147;


let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $"+ player.chips;
// console.log(isAlive)
// console.logquerySelector


let message = " ";

// function startGame(){
//     startGame = renderGame;
//     // console.log(startGame);
// }
// startGame()   or

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

console.log()

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    Math.random() * 2;
    renderGame()
}

function renderGame() {



    card.textContent = "cards :"

    for (i = 0; i < cards.length; i++) {
        card.textContent += cards[i] + " "
    }

    total.textContent = "Sum :" + "  " + sum;

    if (sum <= 20) {
        opinion.textContent = "do you want top draw a new cards?";
    } else if (sum === 21) {

        hasBlackJack = true
        opinion.textContent = "woho! you've  blackJack!";
    } else {

        isAlive = false;
        opinion.textContent = "you are out of game";
    }

}
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let cart = getRandomCard();
        sum += cart;
        cards.push(cart);
        console.log(cards)
        renderGame();

    }


}








let airbun = {
    roomNumber : [14,24,23],
    status : "available",
    rentPrise : 1212

}
console.log(airbun.rent)
console.log(airbun.status)
console.log(airbun.roomNumber)