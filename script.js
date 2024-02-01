const choice = ['rock', 'scissors', 'paper'];
const score = 5;
let playerScore = {score : 0};
let computerScore = {score : 0};

let gameMessage = document.createElement('p');
let results = document.createElement('div');
let playerPoints = document.createElement('p');
let computerPoints = document.createElement('p');

document.body.appendChild(gameMessage);
document.body.appendChild(results);
results.appendChild(playerPoints);
results.appendChild(computerPoints);


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function computerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer, gameMessage, playerScore, computerScore) {
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
        playerScore.score++;

    } else {
        gameMessage.textContent = `You lose! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}.`;
        document.body.appendChild(gameMessage);
        computerScore.score++;
    }
};

function game() {
    const btns = document.querySelectorAll('button');

    function handleButtonClick(event) {
        let computerSelection = computerChoice(choice);
        playerSelection = event.target.id;
        playRound(playerSelection, computerSelection, gameMessage, playerScore, computerScore);
        trackScore(playerScore, computerScore);
    };


    function trackScore(playerScore, computerScore) {
        playerPoints.textContent = `Your score: ${playerScore.score}`;
        results.appendChild(playerPoints);
        computerPoints.textContent = `Computer's score: ${computerScore.score}`;
        results.appendChild(computerPoints);

        document.body.appendChild(results);

        if (playerScore.score == score || computerScore.score == score) {
            if (playerScore.score == score) {
                playerPoints.textContent = "";
                computerPoints.textContent = "";
                gameMessage.textContent = "You win!";
                playerScore.score = 0;
                restartGame(playerScore, computerScore);
            };
    
            if (computerScore.score == score) {
                playerPoints.textContent = "";
                computerPoints.textContent = "";
                gameMessage.textContent = "The computer wins!";
                computerScore.score = 0;
                restartGame(playerScore, computerScore);
            };
        };
    };

    function restartGame(playerScore, computerScore) {
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
            gameMessage.textContent = "";
            playerPoints.textContent = "";
            computerPoints.textContent = "";
            restartButton.textContent = "";
            yesButton.remove();
            noButton.remove();
            results.remove();
            playerScore.score = 0;
            computerScore.score = 0;
            game();
        });
        
        noButton.addEventListener('click', () => {
            restartButton.textContent = "";
            gameMessage.textContent = "";
            yesButton.remove();
            noButton.remove();
            results.remove();
            playerScore.score = 0;
            computerScore.score = 0;
            console.log("Bye!");
        });
    };

    function addEventListener() {
        btns.forEach(btn => {
            btn.addEventListener('click', handleButtonClick);
        });
    }

    function removeEventListener() {
        btns.forEach(btn => {
            btn.removeEventListener('click', handleButtonClick);
        });
    }
    
    removeEventListener();
    addEventListener();

};

game();
