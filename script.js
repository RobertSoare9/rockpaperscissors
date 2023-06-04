const rockButton= document.getElementById("rock");
const paperButton= document.getElementById("paper");
const scissorsButton= document.getElementById("scissors");
const result = document.getElementById("result")
function rock(){
    playerSelection = rockButton.value;
}
function paper(){
    playerSelection = paperButton.value;
}
function scissors(){
    playerSelection = scissorsButton.value;
}
rockButton.addEventListener("click",function(){
    rock();
    playRound();
});
paperButton.addEventListener("click",function(){
    paper();
    playRound();
});
scissorsButton.addEventListener("click",function(){
    scissors();
    playRound();
});

const array =["rock","paper","scissors"]

function getComputerChoice(){
    const choice = array[Math.floor(Math.random()* array.length)];
    return choice;
}
function checkWinner(playerSelection){
    computerSelection=getComputerChoice();
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

function playRound(){
 const decision= checkWinner(playerSelection);
 if(decision == "tie"){
    result.innerHTML = "tie";
 }
 else if (decision == "win"){
    result.innerHTML = "win";
 }
 else{
    result.innerHTML = "lose";
 }
}
// function getPlayerChoice(){
//     let validatedInput = false;
//     while(validatedInput == false)
//     {
//         const choice = prompt("Rock Paper Scissors");
//         if(choice == null){
//             continue;
//         }
//         const choiceInLower= choice.toLowerCase();
//         if (array.includes(choiceInLower)){
//             return choiceInLower;
//         }
//     }
// }
// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     console.log("Welcome")
//     for (let i=0;i<5;i++){
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection));
//         if(checkWinner(playerSelection,computerSelection == "Player"))
//         {
//             scorePlayer++;
//         }
//         else if(checkWinner(playerSelection,computerSelection)=="Computer"){
//             scoreComputer++;
//         }
//         console.log("Game Over");
//         if(scorePlayer > scoreComputer){
//             console.log("Player Won");
//         }
//         if (scoreComputer > scorePlayer){
//             console.log("Computer Won");
//         }
//         else{
//             console.log ("Tie");
//         }
//     }
// }
