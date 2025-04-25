// Get computer choice
function getComputerChoice(n) {
    let num = Math.floor(Math.random() * n);
    let choice;

    if(num === 0) {
        choice = "rock";
    } else if (num === 1) {
        choice = "paper";
    } else if (num === 2) {
        choice = "scissors";
    }

    return choice;
    //console.log(choice);
}

// Get user choice
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");

    return userInput;
    //console.log(userInput);
}

let humanScore = 0;
let computerScore = 0;

// evaluate choices
function playRound(humanChoice, computerChoice) {

    if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        console.log('Rock beats scissors. You Win!');
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        console.log('Scissors beats rock. You Lose!');
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        console.log('Paper beats rock. You Win!');
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        console.log('Scissors beats paper. You Lose!');
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        console.log('Scissors beats paper. You Win!');
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        console.log('Paper beats rock. You Lose!');
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a tie!");
    }
}
   

function playGame() {

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        let result = playRound(humanSelection, computerSelection);
    }
    
    console.log(`Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();
    



