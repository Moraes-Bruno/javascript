let nota = 100;
let letraEquivalente;

switch (true) {
  case nota >= 100:
    letraEquivalente = "Smokin' Sexy Style!!";
    break;
  case nota >= 90:
    letraEquivalente = "A";
    break;
  case nota >= 80:
    letraEquivalente = "B";
    break;
  case nota >= 70:
    letraEquivalente = "C";
    break;
  case nota >= 60:
    letraEquivalente = "D";
    break;
  case nota >= 50:
    letraEquivalente = "E";
    break;
  case nota <= 49:
    console.log("Repovado");
  default:
    console.log("Nota nao encontrada");
}

console.log(letraEquivalente);
