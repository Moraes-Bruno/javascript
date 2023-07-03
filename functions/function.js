//Função:Um bloco de codigo que pode ser usado em multiplas partes do codigo


function startProgram(){

    let nome = "John";
    let idade = 19;

    hello(nome,idade);

}


function hello(nome,idade){

    console.log("Olá "+nome);
    console.log("Idade: "+idade);

}


startProgram();