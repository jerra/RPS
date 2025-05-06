document.addEventListener('DOMContentLoaded', function() {

// Get computer choice
function getComputerChoice(n) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//const computerSelection = getComputerChoice(3);
function getHumanChoice(event) {
    return event.target.textContent.toLowerCase();
}

// create buttons
const btnOne = document.createElement("button");
btnOne.textContent = "Rock";

const btnTwo = document.createElement("button");
btnTwo.textContent = "Paper";

const btnThree = document.createElement("button");
btnThree.textContent = "Scissors";

// create container
const main = document.createElement("main");
document.body.appendChild(main);
main.append(btnOne, btnTwo, btnThree);

// keep score
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// create wrapper
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

    roundsPlayed += 1;
    checkWinner();

}

function checkWinner() {
    if(humanScore >= 3 || computerScore >=3) {
        displayFinalScores();
    }
}

function displayFinalScores() {
    if (humanScore > computerScore) {
        div.textContent = `You Win! Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    } else {
        div.textContent = `You Lose! Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    }
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
}
   
btnOne.addEventListener("click", function(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});    

btnTwo.addEventListener("click", function(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});    

btnThree.addEventListener("click", function(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}); 
    

});



