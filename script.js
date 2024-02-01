const choice = ['rock', 'scissors', 'paper'];
const score = 5;
let playerScore = 0;
let computerScore = 0;
let gameMessage = document.createElement('p');


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function computerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    if (player == computer) {
        gameMessage.textContent = "It's a tie!";
        document.body.appendChild(gameMessage);

    } else if (
    (player == "rock" && computer == "scissors" ) ||
    (player == "scissors" && computer == "paper" ) ||
    (player == "paper" && computer == "rock" )
    ) {
        gameMessage.textContent = `You win! ${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}.`;
        document.body.appendChild(gameMessage);
        return playerScore++;

    } else {
        gameMessage.textContent = `You lose! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}.`;
        document.body.appendChild(gameMessage);
        return computerScore++;
    }
};

function game() {
    const btns = document.querySelectorAll('button');
    let results = document.createElement('div');
    let playerPoints = document.createElement('p');
    let computerPoints = document.createElement('p');

    function handleButtonClick() {
        let computerSelection = computerChoice(choice);
        playerSelection = this.id;

        playRound(playerSelection, computerSelection);

        playerPoints.textContent = `Your score: ${playerScore}`;
        results.appendChild(playerPoints);
        computerPoints.textContent = `Computer's score: ${computerScore}`;
        results.appendChild(computerPoints);

        document.body.appendChild(results);

        if (playerScore == score || computerScore == score) {
            let restartButton = document.createElement('p');
            restartButton.textContent = "Play again?";
            document.body.appendChild(restartButton);

            let yesButton = document.createElement('button');
            yesButton.textContent = "Yes";
            document.body.appendChild(yesButton);

            let noButton = document.createElement('button');
            noButton.textContent = "No";
            document.body.appendChild(noButton);
            
            yesButton.addEventListener('click', () => {
                playerScore = 0;
                computerScore = 0;
                gameMessage.textContent = "";
                playerPoints.textContent = "";
                computerPoints.textContent = "";
                restartButton.textContent = "";
                yesButton.remove();
                noButton.remove();
                game();
            });
            noButton.addEventListener('click', () => {
                console.log("Bye!");
            });
        };
    };

    btns.forEach(btn => {
        btn.addEventListener('click', handleButtonClick)
    });

};

game();
