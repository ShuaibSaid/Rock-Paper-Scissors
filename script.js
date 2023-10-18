function getComputerChoice(){
    let computerPlay = ["Rock","Scissors","Paper"];
    let randomChoice = Math.floor(Math.random()*computerPlay.length);
    let computerChoice = computerPlay[randomChoice];
    return computerChoice;
}

function getPlayerChoice(){
    let playerPlay = prompt("Make your choice: Rock, Scissors, or Paper?");
    if (playerPlay == null || playerPlay.length == 0){
        playerPlay = getComputerChoice();
    }
    return playerPlay;
    
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function playRound(playerSelection,computerSelection){
    let playerMove,computerMove;
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));
    let Result;
    
    if (playerSelection.length == 4){
        playerMove = 1;
    }

    else if (playerSelection.length == 7){
        playerMove= 2;
    }

    else if(playerSelection.length == 5){
        playerMove = 3;
    }

    else {
        console.log("Player has not chosen a proper move");
        return;
    }

    if (computerSelection.length == 4){
        computerMove = 1;
    }

    else if (computerSelection.length == 7){
        computerMove = 2;
    }

    else if(computerSelection.length == 5){
        computerMove = 3;
    }

    if (playerMove == 1 && computerMove == 2 || playerMove == 2 && computerMove == 3|| playerMove == 3 && computerMove == 1){
        Result = ("You won! " + playerSelection + " beats " + computerSelection);
    }

    if (playerMove == 2 && computerMove == 1 || playerMove == 3 && computerMove == 2 || playerMove == 1 && computerMove == 3){
        Result = ("You lost! " + playerSelection + " loses to " + computerSelection);
    }

    if (playerMove == computerMove){
        Result = ("It's a tie! " + playerSelection + " ties with " + computerSelection);
    }

    return(Result);
}



