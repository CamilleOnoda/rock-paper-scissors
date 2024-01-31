const choice = ['rock', 'scissors', 'paper'];
const score = 5;
let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function computerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    if (player == computer) {
        console.log("It's a tie!");
    } else if (
    (player == "rock" && computer == "scissors" ) ||
    (player == "scissors" && computer == "paper" ) ||
    (player == "paper" && computer == "rock" )
    ) {
        console.log(`You win! ${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}.`);
        return playerScore++;
    } else {
        console.log(`You lose! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}.`);
        return computerScore++;
    }
}

function restartGame() {
    let playAgain = "";
    while (!(playAgain === "yes" && !playAgain === "no")) {
        playAgain = window.prompt("Do you want to play again? (yes or no)");
        playAgain = playAgain.toLowerCase();
        if (playAgain === "yes") {
            playerScore = 0;
            computerScore = 0;
            game();
        } else if (playAgain === "no") {
            alert("Thank you for playing!");
            break;
        }
    };
};

function game() {   
    while (playerScore < score && computerScore < score) {
        let playerSelection = "";
        while (!choice.includes(playerSelection)) {
            playerSelection = window.prompt("Choose between rock, paper or scissors:");
            playerSelection = playerSelection.toLowerCase();
        }
        let computerSelection = computerChoice(choice);

        playRound(playerSelection, computerSelection);

        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    console.log(`Final score: 
    - Player: ${playerScore}
    - Computer: ${computerScore}`);

    restartGame();
};

game();
