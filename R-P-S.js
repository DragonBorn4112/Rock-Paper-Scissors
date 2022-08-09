let playerScore = 0;
let computerScore = 0;
let choices = ("Rock", "Paper", "Scissors");

function getComputerChoice(){
   return choices = [Math.floor(Math.random()* choices.length)];
}

function playRound(playerSelection, computerSelection){
   if((playerSelection == "rock" && computerSelection == "Scissors") || 
   (playerSelection == "scissors" && computerSelection == "Paper") ||
   (playerSelection == "paper" && computerSelection == "Rock")){
   playerScore += 1; result = ("You win!" + playerSelection + "beats" + computerSelection);}
   return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));