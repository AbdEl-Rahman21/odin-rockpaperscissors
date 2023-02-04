//Make the computer chose rock, paper or scissors
function getComputerChoice() {
  let chance = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (chance === 1) {
    choice = "Rock";
  } else if (chance === 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}

//Play a round of the game
function playRound(playerSelection, computerSelection) {
  //make player choice case insensitive
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.replace(
    playerSelection[0],
    playerSelection[0].toUpperCase()
  );
  let result = "";
  //tie and winning
  if (playerSelection === computerSelection) {
    result = "Tie";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
