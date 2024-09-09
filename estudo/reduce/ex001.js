//reduce(): reduz o valor de um array para um unico valor

const prices = [69,12,13,43,11];

const total = prices.reduce(sum);

function sum(accumulator, element) {
  return accumulator + element;
}

console.log(total);
