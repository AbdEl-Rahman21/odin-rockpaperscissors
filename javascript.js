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
  playerSelection = prompt("Enter your choice: ");
  computerSelection = getComputerChoice();
  let quote = "";

  //make player choice case insensitive
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.replace(
    playerSelection[0],
    playerSelection[0].toUpperCase()
  );

  //tie and winning
  if (playerSelection === computerSelection) {
    quote = "Tie";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    quote = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    quote = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    quote = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    quote = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  console.log(quote);
  return quote;
}

//play a 5 round game and count points
function game() {
  let playerCount = 0;
  let computerCount = 0;
  let win = "";

  for (let i = 0; i < 5; ++i) {
    let result = playRound();

    if (result.slice(4, 7) === "Win") {
      ++playerCount;
    } else if (result.slice(4, 8) === "Lose") {
      ++computerCount;
    }
  }

  if (playerCount > computerCount) {
    win = "You Win!";
  } else if (computerCount > playerCount) {
    win = "You Lose!";
  } else {
    win = "Tie";
  }

  return win;
}

console.log(game());