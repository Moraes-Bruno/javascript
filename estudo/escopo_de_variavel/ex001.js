// Escope de Variavel: Aonde a variavel é acessivel.
//Variavel Global: Qualquer variavel declarada fora de uma função
//Variavel Local: Presente dentro de uma função,é acessivel apenas dentro da função.
//precedencia: Local -> Global.

//Variavel Global
let x = 22;

function f1() {
  console.log(x);
}

function f2() {
  //Variavel Local
  let x = 2;
  console.log(x);
}

f1();
f2();
