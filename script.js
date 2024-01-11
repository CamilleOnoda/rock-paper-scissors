const choiceArray = ['Rock', 'Scissors', 'Paper'];

function getComputerChoice(choices) {
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

getComputerChoice(choiceArray);
