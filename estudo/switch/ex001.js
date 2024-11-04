//switch: pode ser uma alternativa eficiente para muitos else if

let day = 3;

switch (day) {
  case 1:
    console.log("É domingo");
    break;
  case 2:
    console.log("É segunda-feira");
    break;
  case 3:
    console.log("É terça-feira");
    break;
  case 4:
    console.log("É quarta-feira");
    break;
  case 5:
    console.log("É quinta-feira");
    break;
  case 6:
    console.log("É sexta-feira");
    break;
  case 7:
    console.log("É Sabado");
    break;
  default:
    console.log(`${day} não é um dia`);
}
