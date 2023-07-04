//Array: Uma variavel que é capaz de armazenar mais de um dado por vez
//Obs:Computadores sempre começam do zero

let fruits = ["apple","orange","banana"];

fruits[2] = "strawberry"//Indice 2 do array recebe este dado

fruits.unshift("mango")//Adiciona um dado ao começo do array
fruits.push("lemon");//push():Adiciona um novo dado no final do array

for(let i = 0;i < fruits.length;i++ ){
    console.log(fruits[i]);
}

console.log(" ");

fruits.shift();//shift():Remove o primeiro dado do array
fruits.pop();//pop():remove o ultimo dado do array

for(let i = 0;i < fruits.length;i++ ){
    console.log(fruits[i]);
}