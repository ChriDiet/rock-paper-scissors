/*Create array with "rock","paper","scissor"
Prompt user to input rock,paper or scissors
Computer generate random choice with function getComputerChocie
Print computers choice and users choice
Determine which one is the winner 
Print you won/you lost*/
let answer = prompt("Choose rock, paper or scissors", (" "))
let ran = Math.floor(Math.random()*3);

if (answer.toLowerCase() === "rock" || answer.toLowerCase() === "paper" || answer.toLowerCase() === "scissors") {
      console.log("You chose " + (answer.toLowerCase()));
   } else {
      console.log("You didn't choose rock, paper or scissors. Try again");
   }




function getComputerChoice () {
   console.log("The computer chose " +(ran))
} 

   if (ran === 1) {
      console.log("Paper");
   } else if (ran === 2) {
      console.log("Rock");
   } else if (ran === 0) {
      console.log("Scissors");
   }




