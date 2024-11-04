const len = document.getElementById("tamanho");
const includeLowercase = document.getElementById("lowerChar");
const includeUperCase = document.getElementById("upperchar");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const result = document.getElementById("result");

function gerarSenha() {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&()_+-=";

  let allowedChars = "";
  let passwd = "";

  allowedChars += includeLowercase.checked ? lowerCaseChars : "";
  allowedChars += includeUperCase.checked ? uperCaseChars : "";
  allowedChars += includeNumbers.checked ? numberChars : "";
  allowedChars += includeSymbols.checked ? symbolChars : "";

  if (len.value == 0) {
    window.alert("A senha deve conter no minimo um caracter");
  }

  if (allowedChars.length === 0) {
    window.alert(`Pelo menos um tipo de caracter deve ser selecionado`);
  }

  for (let i = 0; i < len.value; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    passwd += allowedChars[randomIndex];
  }

  result.value = passwd;
  
}
