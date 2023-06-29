/* 
Criada em Duas Etapas

1.Declaração(var,let,const)
2.Atribuição (variavle = valor)
*/

//É uma boa pratica utilizar let ao inves de var

let age = 19;//Number

let firstName = "Bruno";//String

let student = true;//Booleano

console.log("Ola ",firstName);
console.log("Idade: "+age);
console.log("Estudante: "+student);

//Alterando o conteudo interno da tag que possui o id correspondente
document.getElementById("p1").innerHTML =  "Ola "+firstName;
document.getElementById("p2").innerHTML =  "idade: "+age+" anos";
document.getElementById("p3").innerHTML =  "Estudante "+student;