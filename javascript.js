//Make the computer chose rock, paper or scissors
function getComputerChoice() {
    let chance = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    if (chance===1){
        choice = "rock";
    }else if (chance===2){
        choice = "paper";
    }else {
        choice = "scissors";
    }
    return choice;
}
console.log(getComputerChoice());
