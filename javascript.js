/*Create array with "rock","paper","scissor"
Prompt user to input rock,paper or scissors
Computer generate random choice with function getComputerChocie
Print computers choice and users choice
Determine which one is the winner 
Print you won/you lost*/

function getComputerChocie() {
   let random = (Math.floor(Math.random () * 3));
   switch (random) {
      case 0:
         random = "rock";
         break;
      case 1:
         random = "paper";
         break;
      case 2:
         random = "scissors"; }
   return(random);
   console.log("Computer chose " + random);
}

function getHumanChoice () {
let answer = prompt ("Pick rock, paper or scissors!", " ");
   switch (answer?.toLowerCase()) {
      case "rock":
      case "paper":
      case "scissors":
         return(answer?.toLowerCase());
      break;
      default:
         alert("You didn't pick one");
   }
}  

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
if (humanChoice === "rock" && computerChoice === "paper") {
   console.log("Paper beats rock! You lose!");
} else if (humanChoice === "paper" && computerChoice === "scissors") {
   console.log("Scissors beats paper! You lose!");
} else if (humanChoice === "scissors" && computerChoice === "rock") {
   console.log("Rock beats scissors! You lose!");
} else if (humanChoice === "paper" && computerChoice === "rock") {
   consle.log("Paper beats rock! You win!");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
   console.log("Rock beats scissors! You win!");
} else if (humanChoice === "scissors" && computerChoice === "paper") {
   console.log("Scissors beats paper! You win!");
} else {
   console.log("It's a tie!");
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChocie();
console.log("You chose " + humanSelection);
console.log("Computer chose " + computerSelection);

playRound(humanSelection, computerSelection);
