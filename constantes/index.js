//Const: Uma variavel que não pode ser alterada

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("botao").onclick = function(){

    radius = Number(document.getElementById("radius").value);
    
    circumference = 2 * PI * radius;
    
    console.log(circumference);

}



