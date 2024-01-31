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
    const btns = document.querySelectorAll('button');

    function handleButtonClick() {
        let computerSelection = computerChoice(choice);
        playerSelection = this.id;
        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);

        if (playerScore == score || computerScore == score) {
            console.log(`Final score: 
            - Player: ${playerScore}
            - Computer: ${computerScore}`);
            restartGame();
            };
        }

    btns.forEach(btn => {
        btn.addEventListener('click', handleButtonClick)
    });

};

game();
