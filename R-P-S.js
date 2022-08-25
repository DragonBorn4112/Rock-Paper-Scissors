const choices = ["rock", "paper", "scissors"]

let winners = [];

//RESTART GAME START

function resetGame(){ //FINISHED!
    winners = [];

    document.querySelector(".playerScore").textContent = "Score: 0";

    document.querySelector(".computerScore").textContent = "Score: 0";

    document.querySelector(".ties").textContent = "Ties: 0";

    document.querySelector(".winner").textContent = "";

    document.querySelector(".playerChoice").textContent = "";

    document.querySelector(".computerChoice").textContent = "";

}

//RESTART GAME END

//START GAME START

function startGame() {

    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener("click", () => {
        if (img.id) {
          playRound(img.id);
        }
      })
    );
  }

//START GAME END

//PLAY ROUND START

function playRound(playerChoice){ //FINISHED!

    let wins = checkWins();

    if(wins >= 5){
        return;
    }

    const computerChoice = computerSelect();

    const winner = roundWinner(playerChoice, computerChoice);

    winners.push(winner);

    tallyWins();

    displayRound(playerChoice, computerChoice, winner);

    if(wins == 5){
        endGame();
    }
}

//PLAY ROUND END

//END GAME START

function endGame(){ //FINISHED!
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector(".winner").textContent = "You Won 5 Times, Congratulations!";
    }

    else {
        document.querySelector(".winner").textContent = "The Computer Won 5 times, Try again";
    }
}

//END GAME START

function displayRound(playerChoice, computerChoice, winner){ //FINISHED!
    document.querySelector(".playerChoice").textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;

    document.querySelector(
        ".computerChoice"
        ).textContent = `The Computer Chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;

    displayRoundWinner(winner);
}

function displayRoundWinner(winner){ //FINISHED!

    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the Round!";
      } else if (winner == "Computer") {
        document.querySelector(".winner").textContent =
          "The Computer won the Round";
      } else {
        document.querySelector(".winner").textContent = "The Round was a tie";
      }
    }

//TALLY WINS START

function tallyWins() {
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWins}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
  }

//TALLY WINS END

//COMPUTER CHOICE START

function computerSelect() {
    
    const choice = choices[Math.floor(Math.random() * choices.length)];
  
    return choice;
  }
//COMPUTER CHOICE END

//ROUND WINNER START

function checkWins(){ //FINISHED!
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    return Math.max(pWins, cWins);
}


function roundWinner(pChoice, cChoice){ //FINISHED!
    if (
    (pChoice == "rock" && cChoice == "scissors") || 
    (pChoice == "scissors" && cChoice == "paper") ||
    (pChoice == "paper" && cChoice == "rock")
    ) {
        return "Player";
    }

    else if (pChoice == cChoice){
        return "Tie";
    } 

    else {return "Computer";}
}

function setWins() {
    const pWins = winners.filter((item) => item == "Player").length;
    const cWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
  }

//ROUND WINNER END

startGame();