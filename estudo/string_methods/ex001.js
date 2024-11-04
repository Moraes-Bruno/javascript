// String methods: Permite manipular e trabalhar com textos (Strings)

let userName = "     John Doe    ";

//trim: Remove os espaçoes em branco antes e depois da string.
console.log(`Antes do trim: ${userName}`);
userName = userName.trim();
console.log(`Depois do trim: ${userName}`);

//charAt: Retorna o caractere na posição especificada
console.log(userName.charAt(0));

//indexOf: Retorna o indice(posição) da primeira ocorrencia do caracter especificado.
console.log(userName.indexOf("o"));

//lastIndexOf: retorna o indice(posição) da ultima ocorrencia do caracter especificado.
console.log(userName.lastIndexOf("o"));

//lenght: Retona o tamanho da String
console.log(userName.length);

//toUppercase: Converte todos os caracteres para letras maiusculas.
console.log(userName.toUpperCase());

//toLowerCase: Converte todos os caracteres para letras minusculas.
console.log(userName.toLowerCase());

//repeat: Repete uma String um numero determinado de vezes
console.log(userName.repeat(69));

//startsWith: Retorna true se a string começa com um caracter especifico.
console.log(userName.startsWith("J"));

//endsWith: Retorna true se a string termina com um caracter especifico.
console.log(userName.endsWith("J"));

//includes: Retorna true se a string possui um caracter especifico.
console.log(userName.includes("h"));