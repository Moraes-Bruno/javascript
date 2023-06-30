//slice(): Extrai uma seção de uma string e retorna a mesma como uma nova string
//Sem modificar a original

let fullName = "John Doe da Silva";
let firstName,lastName

//firstName = fullName.slice(0,4);
//lastName = fullName.slice(11,17);

firstName = fullName.slice(0,fullName.indexOf(" "))//Começo no indece Zero e vai até o primeiro espaço vazio
lastName = fullName.slice(fullName.indexOf("S"));
console.log(firstName+" "+lastName);    
