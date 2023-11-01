function getComputerChoice(){
    let computerPlay = ["Rock","Scissors","Paper"];
    let randomChoice = Math.floor(Math.random()*computerPlay.length);
    let computerChoice = computerPlay[randomChoice];
    return computerChoice;
}

function getPlayerChoice(){
    let playerPlay = prompt("Make your choice: Rock, Scissors, or Paper?");
    if (playerPlay == null){
        throw ("Game exited");
    }
    
    else if (playerPlay.length == 0){
        playerPlay = getComputerChoice();
    }


    return playerPlay;
    
}

let computerSelection = getComputerChoice();
let playerSelection;
let Result;
let playerScore = 0, computerScore = 0;

function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    let playerMove,computerMove;
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));
    
    if (playerSelection.length == 4){
        playerMove = 1;
    }

    else if (playerSelection.length == 8){
        playerMove= 2;
    }

    else if(playerSelection.length == 5){
        playerMove = 3;
    }

    if (computerSelection.length == 4){
        computerMove = 1;
    }

    else if (computerSelection.length == 8){
        computerMove = 2;
    }

    else if(computerSelection.length == 5){
        computerMove = 3;
    }

    if (playerMove == 1 && computerMove == 2 || playerMove == 2 && computerMove == 3|| playerMove == 3 && computerMove == 1){
        Result = 1;
    }

    else if (playerMove == 2 && computerMove == 1 || playerMove == 3 && computerMove == 2 || playerMove == 1 && computerMove == 3){
        Result = 2;
    }

    else if (playerMove == computerMove){
        Result = 3;
    }

    switch(Result){
        case 1:
            playerScore += 1
            results.textContent = ("You won! " + playerSelection + " beats " + computerSelection);
            score.textContent = ("Score is: " + playerScore + " - " + computerScore)
            break;
        
        case 2:
            computerScore += 1
            results.textContent = ("You lost! " + playerSelection + " loses to " + computerSelection)
            score.textContent = ("Score is: " + playerScore + " - " + computerScore);
            break;

        case 3:
            results.textContent = ("It's a tie! " + playerSelection + " ties with " + computerSelection)
            score.textContent = ("Score is: " + playerScore + " - " + computerScore);
            break;
    }
    scoreBoard();

}


function scoreBoard(){
    if (playerScore == 5){
        results.textContent = "You won! GG!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore ==5){
        results.textContent = "You lost! boo!"
        playerScore = 0;
        computerScore = 0;
    }
}


const rockBtn = document.getElementById("rockBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const paperBtn = document.getElementById("paperBtn");

rockBtn.addEventListener("click", () => playRound("Rock", computerSelection));
scissorsBtn.addEventListener("click", () => playRound("Scissors", computerSelection));
paperBtn.addEventListener("click", () => playRound("Paper", computerSelection));

const results = document.getElementById("results");
const score = document.getElementById("score");


