const rockButton= document.getElementById("rock");
const paperButton= document.getElementById("paper");
const scissorsButton= document.getElementById("scissors");
const result = document.getElementById("result")
let playerScore = 0;
let computerScore = 0;
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
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore++;
        return "win1";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        return "win2";
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore++;
        return "win3";
    }
    else{
        computerScore++;
        return "lose";
    }
        // else if ((playerSelection == "rock" && computerSelection == "scissors")
    //         || (playerSelection == "scissors" && computerSelection == "paper")  
    //         || (playerSelection == "paper" && computerSelection == "rock")
    // ){
    //     playerScore++;
    //     return "win";
    // }
    // else 
    // {
    //     computerScore++;
    //     return "lose";
    // }
}

function playRound(){
 const decision= checkWinner(playerSelection);
 if(decision == "tie"){
    result.innerHTML = "It's a tie";
    score.innerHTML = playerScore + "-" + computerScore;
 }
//  else if (decision == "win"){
//     result.innerHTML = "win";
//     score.innerHTML = playerScore + "-" + computerScore;
//  }
else if (decision == "win1"){
    result.innerHTML = "You win, rock beats scissors";
    score.innerHTML = playerScore + "-" + computerScore;
}
else if (decision == "win2"){
    result.innerHTML = "You win, scissors beats paper";
    score.innerHTML = playerScore + "-" + computerScore;
}
else if (decision == "win3"){
    result.innerHTML = "You win, paper beats rock";
    score.innerHTML = playerScore + "-" + computerScore;
}
 else{
    result.innerHTML = "lose";
    score.innerHTML = playerScore + "-" + computerScore;
 }
}


