const choiceArray = ['rock', 'scissors', 'paper'];

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = getRandomChoice(choiceArray);
let computerSelection = getRandomChoice(choiceArray);
console.log(playerSelection);
console.log(computerSelection);

function playRound(player, computer) {
    player = capitalizeFirstLetter(player);
    computer = capitalizeFirstLetter(computer);

    if (player == computer) {
        console.log("It's a tie!");
    } else if ((player == "rock" && computer == "scissors" ) ||
    (player == "scissors" && computer == "paper" ) ||
    (player == "paper" && computer == "rock" )) {
        console.log(`You win! ${player} beats ${computer}.`);
    } else {
        console.log(`You lose! ${computer} beats ${player}.`);
    }
}

playRound(playerSelection, computerSelection)
