const choiceArray = ['rock', 'scissors', 'paper'];

function getRandomChoice(choices) {
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

let playerSelection = getRandomChoice(choiceArray);
let computerSelection = getRandomChoice(choiceArray);

function playRound(player, computer) {
    if (player == computer) {
        console.log("It's a tie!");
    } else if ((player == "rock" && computer == "scissors" ) ||
    (player == "scissors" && computer == "paper" ) ||
    (player == "paper" && computer == "rock" )) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playRound(playerSelection, computerSelection)
