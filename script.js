const choiceArray = ['Rock', 'Scissors', 'Paper'];

function getComputerChoice(choices) {
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

function getUserChoice(choices) {
    console.log(choices[Math.floor(Math.random() * choiceArray.length)]);
}

let playerSelection = getUserChoice(choiceArray);
let computerSelection = getComputerChoice(choiceArray);


