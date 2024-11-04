//Array: Uma variavel capaz de armazenar mais de um valor

let oss = ["Linux", "BSD", "Windows", "Mac", "Unix"];

//push: Adiciona um novo valor no foinal da lista
oss.push("Ubuntu");

//pop: Remove o ultimo elemento da lista
oss.pop();

//unshift: Adiciona um valor no começo da lista
oss.unshift("Ubuntu");

//shift: Remove o primeiro valor de um array
oss.shift();

for (let i = 0; i < oss.length; i++) {
  console.log(oss[i]);
}

console.log("------------------------------------");

for (let i = oss.length - 1; i >= 0; i--) {
  console.log(oss[i]);
}
