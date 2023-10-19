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

let computerSelection;
let playerSelection;
let Result;

function playRound(playerSelection,computerSelection){
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

    else {
        console.log("Player has not chosen a proper move");
        return;
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
            console.log("You won! " + playerSelection + " beats " + computerSelection);
            break;
        
        case 2:
            console.log("You lost! " + playerSelection + " loses to " + computerSelection);
            break;

        case 3:
            console.log("It's a tie! " + playerSelection + " ties with " + computerSelection);
            break;
    }

    return(Result);
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    for (i = 1; i <= 5; i++) {
        console.log("Round " + i + " out of 5");
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        roundResult = playRound(playerSelection,computerSelection);
        
        switch(roundResult){
            case 1:
                playerScore += 1;
                break;
          
            case 2:
                computerScore += 1;
                break;

            case 3:
                while (roundResult == 3){
                    console.log("Let's try again!");
                    let computerSelection = getComputerChoice();
                    let playerSelection = getPlayerChoice();
                    roundResult = playRound(playerSelection,computerSelection);
                    if (roundResult == 1){
                        playerScore += 1;
                        break;
                    }

                    else if (roundResult == 2){
                        computerScore += 1;
                        break;
                    }
                }
                break;

        }

        console.log("The score is now: " + playerScore + " - " + computerScore);
        if (playerScore == 3 || computerScore ==3){
            break;
        }

        
    }

    if (playerScore > computerScore){
        console.log("Congratulations you have won!")
    }

    else if (computerScore > playerScore){
        console.log("You lost! Better luck next time!")
    }


}


