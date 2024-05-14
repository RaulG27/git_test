const allChoices = ["rock", "paper", "scissors"];

let playerChoices = [];
let computerChoices = [];
let playerScore = 0;
let computerScore = 0;

function playGame(){
    for(let i=0;i<4;i++){
        playRound();
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log("--------------------------------")
    }
}
playGame();


function getInputFromPlayer() {
    let roundPrompt = prompt("Rock Paper Scissors, type your choice for this round and open your browser's console");
    console.log("User Input: " + roundPrompt);
    playerChoices.push(roundPrompt);
}

function getInputFromComputer() {
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    console.log("Computer Input: " + randomChoice);
    computerChoices.push(randomChoice);
}

function playRound() {
    getInputFromPlayer();
    getInputFromComputer();    
    
    let lastPlayerChoice = playerChoices[playerChoices.length - 1];
    let lastComputerChoice = computerChoices[computerChoices.length - 1];

    if (lastPlayerChoice === lastComputerChoice) {
        console.log("Round Tie");
    } else if (
        (lastPlayerChoice === "rock" && lastComputerChoice === "scissors") ||
        (lastPlayerChoice === "paper" && lastComputerChoice === "rock") ||
        (lastPlayerChoice === "scissors" && lastComputerChoice === "paper")
    ) {
        console.log("You win, " + lastPlayerChoice + " beats " + lastComputerChoice);
        playerScore++;
    }
    else {
        console.log("Computer wins, " + lastComputerChoice + " beats " + lastPlayerChoice);
        computerScore++;
    }
    
}
