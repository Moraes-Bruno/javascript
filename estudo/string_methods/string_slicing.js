//String slicing: Criar uma substring que contem uma parte de outra string

const fullname = "Johnatan Does";
let firstName = fullname.slice(0,fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" "));

console.log(firstName);
console.log(lastName);

const email = "john@email.com";

let username = email.slice(0,email.indexOf("@"));
console.log(username);

let extension = email.slice(email.indexOf("@")+1);
console.log(extension);