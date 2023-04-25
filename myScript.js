var array = [ "rock", "paper", "scissors"];
let index = Math.floor(Math.random() * array.length);
let getComputerChoice = array[index];
console.log(getComputerChoice)

function playRound(playerSelection, computerSelection){
    if (playerSelection=="rock" && computerSelection=="rock"){
        return "tie";
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){
        return "you lose";
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "you win";
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        return "you win";
    }
    else if (playerSelection=="paper" && computerSelection=="paper"){
        return "you win";
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        return "you lose";
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        return "you lose";
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        return "you win";
    }
    else if (playerSelection=="scissors" && computerSelection=="scissors"){
        return "tie";
    }
}
const playerSelection = "rock";
const computerSelection=getComputerChoice;
console.log(playRound(playerSelection, computerSelection));