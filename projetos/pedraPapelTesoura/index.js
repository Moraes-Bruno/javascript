const choices = ["pedra", "papel", "tesoura"];
const playerDisplayer = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Empate";
  } else {
    switch (playerChoice) {
      case "pedra":
        result =
          computerChoice === "tesoura" ? "Você Venceu !!!" : "Você Perdeu";
        break;
      case "papel":
        result = computerChoice === "pedra" ? "Você Venceu !!!" : "Você Perdeu";
        break;
      case "tesoura":
        result = computerChoice === "papel" ? "Você Venceu !!!" : "Você Perdeu";
        break;
      default:
        result = "Escolha uma opção valida !";
    }
  }

  displayResult(playerChoice, computerChoice, result);
  updateScore(result);
}

function displayResult(playerChoice, computerChoice, result) {
  playerDisplayer.textContent = `Jogador: ${playerChoice}`;
  computerDisplay.textContent = `Computador: ${computerChoice}`;
  resultDisplay.textContent = result;
}

function updateScore(result) {
  resultDisplay.classList.remove("win", "lose");

  switch (result) {
    case "Você Venceu !!!":
      resultDisplay.classList.add("win");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "Você Perdeu":
      resultDisplay.classList.add("lose");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
