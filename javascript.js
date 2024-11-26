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
if (humanChoice === "rock" && computerChoice === "paper" || 
   humanChoice === "paper" && computerChoice === "scissors" ||
   humanChoice === "scissors" && computerChoice === "rock") {
   console.log("You lose");
} else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
   console.log("You won!");
} else { 
   console.log("Its a tie");
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChocie();

playRound(humanSelection, computerSelection);
