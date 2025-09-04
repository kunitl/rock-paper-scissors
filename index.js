// Write the logic to get the computer choice
function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * 3);
  switch (randomComputerChoice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      break;
  }
}

// Write the logic to get the player selection
// Add an event listener to the buttons that call your playRound function
// with the correct playerSelection every time a button is clicked.
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  switch (button.id) {
    case "rock":
      button.addEventListener("click", () =>
        playRound("Rock", getComputerChoice())
      );
      break;
    case "paper":
      button.addEventListener("click", () =>
        playRound("Paper", getComputerChoice())
      );
      break;    
    case "scissors":
      button.addEventListener("click", () =>
        playRound("Scissors", getComputerChoice())
      );
      break;
    default:
      break;
  }
}

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Add a div for displaying results
const div = document.querySelector("div");
const result = document.createElement("p");
const roundScore = document.createElement("p");
const finalScore = document.createElement("p");

// Write the logic to play a single round
function playRound(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
    result.textContent = `It's a tie! ${playerSelection} (You) and ${computerChoice} (Computer)!`;
  } else if (
    (playerSelection === "Rock" && computerChoice === "Scissors") ||
    (playerSelection === "Scissors" && computerChoice === "Paper") ||
    (playerSelection === "Paper" && computerChoice === "Rock")
  ) {
    result.textContent = `You win! ${playerSelection} (You) beats ${computerChoice} (Computer)!`;
    humanScore += 1;
  } else {
    result.textContent = `You lose! ${computerChoice} (Computer) beats ${playerSelection} (You)!`;
    computerScore += 1;
  }
  roundScore.textContent = `Human's Score: ${humanScore}, Computer's Score: ${computerScore}`;
  div.appendChild(result);
  div.appendChild(roundScore);
  // Announce a winner of the game once one player reaches 5 points.
  if (humanScore >= 5 || computerScore >= 5) {
    // Disable all buttons when game is over
    for (const button of buttons) {
      button.disabled = true;
    }
    if (humanScore > computerScore) {
      finalScore.textContent = "You win the game!";
    } else if (computerScore > humanScore) {
      finalScore.textContent = "You lose the game!";
    }
    div.appendChild(finalScore);
    // Create reset button and it's functionality
    const reset = document.createElement("button");
    reset.setAttribute("type", "button");
    reset.textContent = "Reset";
    div.appendChild(reset);
    reset.addEventListener("click", () => {
      div.removeChild(result);
      div.removeChild(roundScore);
      div.removeChild(finalScore);
      humanScore = 0;
      computerScore = 0;
      for (const button of buttons) {
        button.disabled = false;
      }
      div.removeChild(reset);
    });
  }
}