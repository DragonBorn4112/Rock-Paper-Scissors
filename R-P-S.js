const choices = ["rock", "paper", "scissors"];
const winners =[];
//play the game
//play 5 games

function game(){

   for(let i = 0; i < 5; i++){
      playRound(i);
   }
   
   document.querySelector('button').textContent = "Play New Game";

   logWins();
}

//

function playRound(round){
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   const winner = checkWinner(playerSelection, computerSelection);
   console.log(winner);
   winners.push(winner);
   logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
   let input = prompt("Choose your weapons (Rock, Paper, or Scissors)");

   while(input == null){
      input = prompt("Please select a real weapon");
   }

   input = input.toLowerCase();

   let check = validateInput(input);

   while(check == false){ 
   input = prompt("Choose a real weapon (Rock, Paper, or Scissors)");
   
   while(input == null){
      input = prompt("Please select a real weapon");
   }
input = input.toLowerCase();

check = validateInput(input);

}
return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()* choices.length)]
}

function validateInput(choice){ 
   return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
   if(choiceP === choiceC){ return "Round was a tie";}

   else if((choiceP === "rock" && choiceC === "scissors") || (choiceP === "scissors" && choiceC === "paper") || (choiceP === "paper" && choiceC === "rock")){return "Player wins the round";}

   else {return "Computer wins the round";} 
}

function logWins(){

   let playerWins = winners.filter((item) => item == "Player wins the round").length;

   let computerWins = winners.filter((item) => item == "Computer wins the round").length;

   let ties = winners.filter((item) => item == "Round was a tie").length;

   console.log("Results:");
   console.log("Player wins:", playerWins);
   console.log("Computer wins:", computerWins);
   console.log("Ties:", ties);

}

function logRound(playerChoice, computerChoice, winner, round){
   console.log("Round:", round);
   console.log("Player Chose:", playerChoice);
   console.log("Computer Chose:", computerChoice);
   console.log(winner, "Won the round!");
   console.log("--------------------------------");
}