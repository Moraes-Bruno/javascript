let username = " John Doe ";
let phoneNumber = "123-156-189";

console.log(username.length);//Usado para saber o tamanho de uma string incluindo os espaços em branco
console.log(username.charAt(2));//Retorna o caracter na posição especificada
console.log(username.indexOf("d"));//Retorna o indice(posição) da letra que foi passada na função
console.log(username.lastIndexOf("o"));//Retorna a ultima posição que possua a letra especificada

username = username.trim();//Retira espaços do começo e do fim de uma string
console.log(username);

username = username.toUpperCase();//Transforma todas as letras de uma String em maisculas
console.log(username);

username = username.toLowerCase();//Transforma todas as letras de uma String em Minusculas
console.log(username);

pn = phoneNumber.replace(/-/g, ".");
console.log(pn);