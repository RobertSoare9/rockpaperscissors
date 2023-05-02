console.log("Hi");
const array =["rock","paper","scissors"]

function getComputerChoice(){
    const choice = array[Math.floor(Math.random()* array.length)];
    return choice;
}
function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "scissors" && computerSelection == "paper")  
            || (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "win";
    }
    else 
    {
        return "lose";
    }
}

function playRound(playerSelection, computerSelection){
 const result= checkWinner(playerSelection, computerSelection)
 if(result == " tie"){
    return "It's a Tie";
 }
 else if (result == "win"){
    return `You win! ${playerSelection} beats ${computerSelection}`;
 }
 else{
    return `You lose ${computerSelection} beats ${playerSelection}`;
 }
}
const playerSelection = "rock";

const computerSelection=getComputerChoice();
console.log(playRound(playerSelection,computerSelection));