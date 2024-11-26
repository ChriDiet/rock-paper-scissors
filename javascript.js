/*Create array with "rock","paper","scissor"
Prompt user to input rock,paper or scissors
Computer generate random choice with function getComputerChocie
Print computers choice and users choice
Determine which one is the winner 
Print you won/you lost*/
let answer = prompt("Choose rock, paper or scissors", (" "))
let ran = Math.floor(Math.random()*3);

function getUserChoice () {
   if (answer?.toLowerCase() === "rock" || answer?.toLowerCase() === "paper" || answer?.toLowerCase() === "scissors") {
      console.log("You chose " + `\"${(answer.toLowerCase())}\"`);
   } else {
      alert("You didn't choose rock, paper or scissors. Try again");
   }
}

getUserChoice();

function getComputerChoice () {
   let compchoice = Math.floor(Math.random() *3 );
if (compchoice === 0) {
   console.log('The computer chose "paper"');
} else if (compchoice === 1) {
   console.log('The computer chose "rock"');
} else if (compchoice === 2) {
   console.log('The computer chose "scissors"');
}

}

getComputerChoice();

console.log("And the winner is......");


