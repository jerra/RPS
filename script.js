document.addEventListener('DOMContentLoaded', function() {
    // Get computer choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Get human choice
    function getHumanChoice(event) {
        return event.target.textContent.toLowerCase();
    }

    // Create buttons
    const btnOne = document.createElement("button");
    btnOne.textContent = "Rock";

    const btnTwo = document.createElement("button");
    btnTwo.textContent = "Paper";

    const btnThree = document.createElement("button");
    btnThree.textContent = "Scissors";

    // Create container
    const main = document.createElement("main");
    document.body.appendChild(main);
    main.append(btnOne, btnTwo, btnThree);

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const div = document.createElement("div");
    main.appendChild(div);

    // Evaluate choices
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            div.textContent = "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            div.textContent = `${humanChoice} beats ${computerChoice}. You Win!`;
            humanScore += 1;
        } else {
            div.textContent = `${computerChoice} beats ${humanChoice}. You Lose!`;
            computerScore += 1;
        }
        roundsPlayed += 1;
        checkWinner();
    }

    // Check if there is a winner
    function checkWinner() {
        if (humanScore >= 3 || computerScore >= 3) {
            displayFinalScores();
        }
    }

    // Display final scores
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

    // Add event listeners to buttons
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
