const allChoices = ["rock", "paper", "scissors"];

let playerChoices = [];
let computerChoices = [];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#button-container button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (roundsPlayed < 5) { // Check if less than 5 rounds have been played
                const playerChoice = this.textContent === "✊" ? "rock" : this.textContent === "✋" ? "paper" : "scissors";
                playerChoices.push(playerChoice);
                document.getElementById("player-results").textContent = "Player Choice: " + playerChoice;
                
                const computerChoice = getComputerChoice();
                computerChoices.push(computerChoice);
                document.getElementById("computer-results").textContent = "Computer Choice: " + computerChoice;

                const result = playRound(playerChoice, computerChoice);
                document.getElementById("result-text").textContent = result;

                roundsPlayed++;

                if (roundsPlayed === 5) {
                    declareWinner();
                }
            }
        });
    });
});

function getComputerChoice() {
    const randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Round Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win, " + playerChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "Computer wins, " + computerChoice + " beats " + playerChoice;
    }
}

function declareWinner() {
    if (playerScore > computerScore) {
        document.getElementById("result-text").textContent = "Player wins the game!";
    } else if (playerScore < computerScore) {
        document.getElementById("result-text").textContent = "Computer wins the game!";
    } else {
        document.getElementById("result-text").textContent = "It's a tie!";
    }
}
