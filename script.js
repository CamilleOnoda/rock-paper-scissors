const choiceArray = ['rock', 'scissors', 'paper'];
const score = 5;
let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    if (player == computer) {
        console.log("It's a tie!");
    } else if ((player == "rock" && computer == "scissors" ) ||
    (player == "scissors" && computer == "paper" ) ||
    (player == "paper" && computer == "rock" )) {
        console.log(`You win! ${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}.`);
        return playerScore++;
    } else {
        console.log(`You lose! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}.`);
        return computerScore++;
    }
}

function game() {
    while (playerScore < score && computerScore < score) {
        let playerSelection = getRandomChoice(choiceArray);
        let computerSelection = getRandomChoice(choiceArray);

        playRound(playerSelection, computerSelection);

        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

game();
