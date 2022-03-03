function game() {
    const games = 5;
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < games; i++) {
        //get player answer
        let playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
        //get computer generated answer
        function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
        let computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection);
        if (round === 'wins') {
            playerScore++;
            console.log("You Win!!")
        } else if (round === 'loses') {
            computerScore++;
            console.log("You Lose!");
        } else if (round === 'ties') {
            console.log("Tie")
        }

        if (playerScore > computerScore) {
            console.log("");
            console.log("Congradutalions! You beat the computer " + playerScore + " to " + computerScore)
        } else {
            console.log("Sorry! You lost to the computer " + computerScore + " to " + playerScore)
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
          return 'wins';
        } else if (computerSelection == 'paper') {
          return 'loses';
        } else {
          return 'ties';
        } 
      }
      if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
          return 'wins';
        } else if (computerSelection == 'scissors') {
          return 'loses';
        } else {
          return 'ties';
        } 
      }
      if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
          return 'loses';
        } else if (computerSelection == 'paper') {
          return 'wins';
        } else {
          return 'ties';
        } 
      }
}

game();