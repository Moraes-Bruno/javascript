function generatePasswd(len, lowerCase, upperCase, numbers, symbols) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&()_+-=";

  let allowedChars = "";
  let passwd = "";

  allowedChars += lowerCase ? lowerCaseChars : "";
  allowedChars += upperCase ? uperCaseChars : "";
  allowedChars += numbers ? numberChars : "";
  allowedChars += symbols ? symbolChars : "";

  if (len <= 0) {
    return "A senha deve conter no minimo um caracter";
  }

  if (allowedChars.length === 0) {
    return `Pelo menos um tipo de caracter deve ser selecionado`;
  }

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    passwd += allowedChars[randomIndex];
  }

  return passwd;
}

const passwdLen = 12;
const includeLowercase = true;
const includeUperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const passWd = generatePasswd(
  passwdLen,
  includeLowercase,
  includeUperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Senha Gerada: ${passWd}`);
