// what the player chooses
// will start at null because user hasn't chosen anything yet
let player = {};
let playersChoice = null;

// this will keep track of the computer's choice
let computer = {};
let computersChoice = null;

const form = document.getElementById("form");
const input = document.querySelector(".pchoice");
const log = document.getElementById("log");

// Create an array for the game options

let choices = ["Lapis", "Papyrus", "Scalpellus"];

// declare a constant of name randomIndex and set it equal to a random integer 0, 1 or 2
function computerChooses() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.computersChoice = choices[randomIndex];
}

// set the computer's choice to that element of the array based on the index number

computerChooses();

function compareChoices() {
  if (player.playersChoice === computer.computersChoice) {
    return `There was a tie.  Both players chose ${player.playersChoice}.`;
  } else if (
    computer.computersChoice === choices[0] &&
    player.playersChoice === choices[1]
  ) {
    return `The player wins! The computer chose ${computer.computersChoice} and the player chose ${player.playersChoice}.`;
  } else if (
    computer.computersChoice === choices[1] &&
    player.playersChoice === choices[2]
  ) {
    return `The player wins! The computer chose ${computer.computersChoice} and the player chose ${player.playersChoice}.`;
  } else if (
    computer.computersChoice === choices[2] &&
    player.playersChoice === choices[0]
  ) {
    return `The player wins! The computer chose ${computer.computersChoice} and the player chose ${player.playersChoice}.`;
  } else {
    return "You lose, try again";
  }
}

function logSubmit(event) {
  // make the playersChoice key of player object equal to what the user put in
  player.playersChoice = input.value;
  // make the html text content of the log element whatever is returned out of compareChoices() function
  log.textContent = compareChoices();
  // prevent the page from refreshing on submit and losing text in the log element
  event.preventDefault();
}

function resetPage() {
  location.reload();
}
// event listener on the form itself. on submit, fun the logSubmit function
form.addEventListener("submit", logSubmit);
form.addEventListener("reset", resetPage);
