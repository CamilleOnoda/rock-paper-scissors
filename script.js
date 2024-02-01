document.addEventListener("DOMContentLoaded", (event) => {
    const choice = ['rock', 'scissors', 'paper'];
    const score = 5;

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
        let playerScore = {score : 0};
        let computerScore = {score : 0};

        const btns = document.querySelectorAll('#rock, #paper, #scissors');

        function handleButtonClick(event) {
            let computerSelection = computerChoice(choice);
            playerSelection = event.target.id;
            playRound(playerSelection, computerSelection, gameMessage, playerScore, computerScore);
            trackScore(playerScore, computerScore);
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
    //                playerScore.score = 0;
    //                computerScore.score = 0;
                    restartGame();
                };
        
                if (computerScore.score == score) {
                    playerPoints.textContent = "";
                    computerPoints.textContent = "";
                    gameMessage.textContent = "The computer wins!";
    //                playerScore.score = 0;
    //                computerScore.score = 0;
                    restartGame();
                };
            };
        };

        function restartGame() {
            removeEventListener();

            let playAgain = document.createElement('p');
            playAgain.textContent = "Play again?";
            document.body.appendChild(playAgain);

            let yesButton = document.createElement('button');
            yesButton.textContent = "Yes";
            yesButton.id = 'yesPlay';
            document.body.appendChild(yesButton);

            let noButton = document.createElement('button');
            noButton.textContent = "No";
            noButton.id = 'noPlay';
            document.body.appendChild(noButton);
                
            yesButton.addEventListener('click', () => {
                const elementToRemove = document.querySelectorAll('p, #yesPlay, #noPlay');
                elementToRemove.forEach(element => element.remove());

                addEventListener();
                game();
            });
            
            noButton.addEventListener('click', () => {
                const elementToRemove = document.querySelectorAll('p, #yesPlay, #noPlay');
                elementToRemove.forEach(element => element.remove());
            });
        };

        addEventListener();

    };

    game();
});