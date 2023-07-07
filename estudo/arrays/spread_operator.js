//Spread Operatpr:Divide um array em elementos individuais

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(...numbers);


let max = Math.max(...numbers);
console.log("O maior numero é "+max);*/

let cars = ["mazda", "nissan", "toyota"];
let germanCars = ["Bmw", "mercedes", "Porsche"];

cars.push(...germanCars);

console.log(...cars);