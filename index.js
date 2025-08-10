
// Step 2: Write the logic to get the computer choice
// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Test that your function returns what you expect using console.log.
function getComputerChoice() {
  let randomComputerChoice = Math.floor(Math.random() * 3);
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
console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Test what your function returns by using console.log.

// Step 4: Declare the players score variables
// Create two new variables named humanScore and computerScore in the global scope.

// Initialize those variables with the value of 0.


// Step 5: Write the logic to play a single round

// Create a new function named playRound.

// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

// Increment the humanScore or computerScore variable based on the round winner.


// Step 6: Write the logic to play the entire game

// Create a new function named playGame.

// Move your playRound function and score variables so that they’re declared inside of the new playGame function

// Play 5 rounds by calling playRound 5 times.
