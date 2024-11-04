//ES6 module: Um arquivo externo que contem codigo reutilizavel
//que pode ser importado em outros arquivos javascript
//escreva codigo reutilizavel em varias aplicaçoes
//pode conter variaveis,classes,funçoes .....
//introduzido como parte do ECMAScript em 2015

import { PI, getCincumference, getArea, getVolume } from "./mathUtils.js";

console.log(PI);

const cincumference = getCincumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`A circunferencia é ${cincumference.toFixed(2)}cm `);
console.log(`A area é ${area.toFixed(2)}cm² `);
console.log(`O vulume é ${volume.toFixed(2)}cm³ `);
