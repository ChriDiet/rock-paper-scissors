let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let humanAnswer;

function getHumanChoice() {
humanAnswer = prompt ("Pick rock, paper or scissors");
humanChoice = humanAnswer?.toLowerCase();
return humanChoice;
}

function getComputerChoice() {
   computerChoice = Math.floor(Math.random() * 3);
   switch (computerChoice) {
      case 0:
         computerChoice = "rock";
         break;
      case 1:
         computerChoice = "paper";
         break;
      case 2:
         computerChoice = "scissors";
      }
      return computerChoice;
   }


function playRound (computerPick, humanPick) {
   humanPick = getHumanChoice();
   computerPick = getComputerChoice();

   if (humanPick === computerPick) {
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Same choice! It's a tie!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (humanPick === "rock" && computerPick === "paper") {
      ++computerScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Paper covers rock! You lose!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (humanPick === "paper" && computerPick === "scissors") {
      ++computerScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Scissors cuts paper! You lose!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (humanPick === "scissors" && computerPick === "rock") {
      ++computerScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Rock smashes scissors! You lose!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (computerPick === "rock" && humanPick === "paper") {
      ++humanScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Paper covers rock! You win!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (computerPick === "paper" && humanPick === "scissors") {
      ++humanScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Scissors cuts paper! You win!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (computerPick === "scissors" && humanPick === "rock") {
      ++humanScore;
      alert ("You chose " + humanPick + "\n" + "The computer chose " + computerPick + 
            "\n" + "Rock smashes scissors! You win!" + "\n" + "Your score: " + humanScore + 
            " | " + "Computer score: " + computerScore);

   } else if (humanPick !== "rock" || humanPick !== "paper" || humanPick !== "scissors") {
      alert("Invalid choice")
   }
}


function playGame() {
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());

if (humanScore < computerScore) {
   alert ("Game over! You lost!" + "\n" + "Finale score is: " + "\n" + "You: " + 
         humanScore + " | " + "Computer: " + computerScore);

} else if (humanScore > computerScore) {
   alert ("Game over! You won!" + "\n" + "Finale score is: " + "\n" + "You: " + 
         humanScore + " | " + "Computer: " + computerScore);

} else if (humanScore == computerScore) {
   alert ("Game over! It's a tie!" + "\n" + "Finale score is: " + "\n" + "You: " + 
         humanScore + " | " + "Computer: " + computerScore);
}
}

playGame();
