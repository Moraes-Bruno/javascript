//array.reduce(): reduz um array a um unico valor

let prices = [5,10,15,20,25,30];
let total = prices.reduce(checkOut);

console.log(`O total é ${total}`);


function checkOut(total,element){
    return total + element;
}