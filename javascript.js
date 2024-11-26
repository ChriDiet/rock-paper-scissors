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



