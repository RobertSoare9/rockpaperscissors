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
 if(result == "tie"){
    return "It's a Tie";
 }
 else if (result == "win"){
    return `You win! ${playerSelection} beats ${computerSelection}`;
 }
 else{
    return `You lose ${computerSelection} beats ${playerSelection}`;
 }
}
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false)
    {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower= choice.toLowerCase();
        if (array.includes(choiceInLower)){
            return choiceInLower;
        }
    }
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i=0;i<5;i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(checkWinner(playerSelection,computerSelection == "Player"))
        {
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection)=="Computer"){
            scoreComputer++;
        }
        console.log("Game Over");
        if(scorePlayer > scoreComputer){
            console.log("Player Won");
        }
        if (scoreComputer > scorePlayer){
            console.log("Computer Won");
        }
        else{
            console.log ("Tie");
        }
    }
}
game()