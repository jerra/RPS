document.addEventListener('DOMContentLoaded', function() {


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
}

//const computerSelection = getComputerChoice(3);

function getHumanChoice() {

    btnOne.addEventListener("click", function(e) {
        //playRound(btnOne.textContent, computerSelection);
        //getHumanChoice(btnOne.textContent);
        return btnOne.textContent;
    });    

    btnTwo.addEventListener("click", function(e) {
        //playRound(btnTwo.textContent, computerSelection);
        //getHumanChoice(btnTwo.textContent);
        return btnTwo.textContent;
    });    

    btnThree.addEventListener("click", function(e) {
        //playRound(btnThree.textContent, computerSelection);
        //getHumanChoice(btnTwo.textContent);
        return btnThree.textContent;
    });  
}

// create btn 1
const btnOne = document.createElement("button");
btnOne.textContent = "Rock";

// create btn 2
const btnTwo = document.createElement("button");
btnTwo.textContent = "Paper";

// create btn 3
const btnThree = document.createElement("button");
btnThree.textContent = "Scissors";

// create container
const main = document.createElement("main");
document.body.appendChild(main);
main.append(btnOne, btnTwo, btnThree);


let humanScore = 0;
let computerScore = 0;

const div = document.createElement("div");
main.appendChild(div);

// evaluate choices
function playRound(humanChoice, computerChoice) {

    if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        div.textContent = 'Rock beats scissors. You Win!';
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        div.textContent = 'Scissors beats rock. You Lose!';
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        div.textContent = 'Paper beats rock. You Win!';
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        div.textContent = 'Scissors beats paper. You Lose!';
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        div.textContent = 'Scissors beats paper. You Win!';
        return humanScore += 1;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        div.textContent = 'Paper beats rock. You Lose!';
        return computerScore += 1;
    } else if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        div.textContent = "It's a tie!";
    }
}
   
function playGame() {

    for (i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }

    div.textContent = `Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    
}

playGame();
    

});

