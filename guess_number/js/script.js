//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("randomNumber: " + randomNumber);
  attempts = 0;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";

  document.getElementById("guessBtn").style.display = "inline";

  //adding focus to textbox
  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();
  playerGuess.value = "";

  let feedback = document.getElementById("feedback");
  feedback.textContent = "";

  document.getElementById("guesses").textContent = "";

  document.getElementById("guessNum").textContent = `Guesses Left: 7`;

  document.getElementById("winLoss").textContent =
    `Win/Loss Record: ${wins}/${losses}`;
}

document.querySelector("#resetBtn").addEventListener("click", initializeGame);

const checkGuess = () => {
  let feedback = document.getElementById("feedback");
  feedback.textContent = "";
  let guess = document.getElementById("playerGuess").value;
  console.log(`Player Guess: ${guess}`);
  if (guess < 1 || guess > 99) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  document.getElementById("guessNum").textContent =
    `Guesses Left: ${7 - attempts}`;
  console.log(`Attempts: ${attempts}`);
  feedback.style.color = "orange";
  if (guess == randomNumber) {
    feedback.textContent = "You guessed it!  You won!";
    feedback.style.color = "darkgreen";
    wins++;
    gameOver();
  } else {
    document.getElementById("guesses").textContent += guess + " ";
    if (attempts == 7) {
      feedback.style.color = "red";
      feedback.textContent = `Sorry, You Lost!  The number was ${randomNumber}`;
      losses++;
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was high";
    } else {
      feedback.textContent = "Guess was low";
    }
  }
};

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);

const gameOver = () => {
  let guessButton = document.getElementById("guessBtn");
  let resetButton = document.getElementById("resetBtn");
  guessButton.style.display = "none";
  resetButton.style.display = "inline";
};
