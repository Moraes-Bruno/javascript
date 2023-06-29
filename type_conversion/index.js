//Altera o tipo de um valor para outro
//Ex:De String("19") para Number(19)

let idade = window.prompt("Digite a sua idade");//Vem como uma String

idade = Number(idade);//Converte String para Number
idade += 1;

window.alert(idade);

//Outro Exemplo

let x,y,z;


x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);



