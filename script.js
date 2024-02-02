document.addEventListener("DOMContentLoaded", (_event) => {

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
        const choice = ['rock', 'scissors', 'paper'];
        const score = 5;
        let playerScore = {score : 0};
        let computerScore = {score : 0};
    
        let gameMessage = document.createElement('p');
        let results = document.createElement('div');
        let playerPoints = document.createElement('p');
        let computerPoints = document.createElement('p');

        
        function handleButtonClick(event) {
            let computerSelection = computerChoice(choice);
            playerSelection = event.target.id;
            playRound(playerSelection, computerSelection, gameMessage, playerScore, computerScore);
            trackScore(playerScore, computerScore);
        };


        function addEventListener() {
            const btns = document.querySelectorAll('#rock, #paper, #scissors');
            btns.forEach(btn => {
                btn.addEventListener('click', handleButtonClick);
            });
        }


        function removeEventListener() {
            const btns = document.querySelectorAll('#rock, #paper, #scissors');
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
                    gameMessage.textContent = "You win!";
                    results.remove();
                    restartGame();
                };
        
                if (computerScore.score == score) {
                    gameMessage.textContent = "The computer wins!";
                    results.remove();
                    restartGame();
                };
            };
        };


        function restartGame() {
            removeEventListener();

            let restartMessage = document.createElement('div');
                        
            let playAgain = document.createElement('p');
            playAgain.textContent = "Play again?";
            restartMessage.appendChild(playAgain);

            let yesButton = document.createElement('button');
            yesButton.textContent = "Yes";
            yesButton.id = 'yesPlay';
            restartMessage.appendChild(yesButton);

            let noButton = document.createElement('button');
            noButton.textContent = "No";
            noButton.id = 'noPlay';
            restartMessage.appendChild(noButton);

            let reloadPage = document.createElement('p');
            reloadPage.textContent = "Click here if you want to restart the game."

            let reloadPageButton = document.createElement('button');
            reloadPageButton.textContent = "Reload the page."

            document.body.append(restartMessage);
                
            yesButton.addEventListener('click', () => {
                restartMessage.remove();
                gameMessage.remove();
                game();
            });
            
            noButton.addEventListener('click', () => {
                document.body.appendChild(reloadPage);
                document.body.appendChild(reloadPageButton);
                restartMessage.remove();
                gameMessage.remove();
            });

            reloadPageButton.addEventListener('click', () => {
                location.reload();
            })
        };


        addEventListener();


    };

    game();

});