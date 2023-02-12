let counter = [0, 0];
let playerSelection = "";
const board1 = document.querySelector("#result");
const board2 = document.querySelector("#score");
const result = document.createElement("p");
const score = document.createElement("p");

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

function playRound(playerSelection, computerSelection) {
  const i = [0, 0];

  if (playerSelection === computerSelection) {
    result.textContent = "Tie";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    ++i[0];
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    ++i[0];
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    ++i[0];
  } else {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    ++i[1];
  }

  board1.appendChild(result);

  return i;
}

function game() {
  const j = playRound(playerSelection, getComputerChoice());

  counter[0] += j[0];
  counter[1] += j[1];
  score.textContent = `Player: ${counter[0]} Machine: ${counter[1]}`;
  board2.appendChild(score);

  if (counter[0] === 5) {
    result.textContent = "Player Wins!";
    score.textContent = ":)";
    board2.appendChild(score);
    board1.appendChild(result);
    counter = [0, 0];
  } else if (counter[1] === 5) {
    result.textContent = "Machine Wins!";
    score.textContent = ":(";
    board2.appendChild(score);
    board1.appendChild(result);
    counter = [0, 0];
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    game();
  });
});
