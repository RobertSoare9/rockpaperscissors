const rockButton= document.getElementById("rock");
const paperButton= document.getElementById("paper");
const scissorsButton= document.getElementById("scissors");
const result = document.getElementById("result")
const resetButton = document.getElementById("reset");
let playerScore = 0;
let computerScore = 0;
let i = 0;
score.innerHTML = 0 + "-" + 0;
function rock(){
    playerSelection = rockButton.value;
}
function paper(){
    playerSelection = paperButton.value;
}
function scissors(){
    playerSelection = scissorsButton.value;
}
function reset(){
    i=0;
    result.innerHTML = "";
    score.innerHTML = 0 + "-" + 0;
    playerScore = 0;
    computerScore = 0;
}
rockButton.addEventListener("click",function(){
    rock();
    game();
});
paperButton.addEventListener("click",function(){
    paper();
    game();
});
scissorsButton.addEventListener("click",function(){
    scissors();
    game();
});
resetButton.addEventListener("click",function(){
reset();
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
 
}

function playRound(){
 const decision= checkWinner(playerSelection);
 if(decision == "tie"){
    result.innerHTML = "It's a tie";
    score.innerHTML = playerScore + "-" + computerScore;
 }
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
    result.innerHTML = "You lose!";
    score.innerHTML = playerScore + "-" + computerScore;
 }
}

function game(){
    if (i<5){
        playRound();
    }
    else{
        if(playerScore > computerScore){
            result.innerHTML = "Game Over, Player Wins!";
        }
        else if (computerScore > playerScore){
            result.innerHTML = "Game Over, Computer Wins!";
        }
        else{
            result.innerHTML = "Game Over, It's a tie";
        }
    }
    i++;
}



