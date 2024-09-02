let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let n6 = 6;

function somar(...numbers) {
  let soma = 0;
  for (let number of numbers) {
    soma += number;
  }
  console.log(`O total da soma é: ${soma}`);
}

somar(n1, n2, n3, n4, n5, n6);

console.log("----------------------------------");

function getAvg(...numbers) {
  let soma = 0;
  for (let number of numbers) {
    soma += number;
  }
  return soma / numbers.length;
}

console.log(getAvg(n1, n2, n3, n4, n5, n6));

console.log("----------------------------------");

function combineStrings(...strings) {
  console.log(strings.join(" "));
}

combineStrings("Ms.", "Reimu", "Hakurei");
