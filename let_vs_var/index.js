//Escopo da variavel: Aonde a variavel é acessivel

//let: São limitadas ao escopo de bloco {}
//var: São limitadas ao escopo de função(){}
//Global: É declarado fora de uma função
//Se declarado como var,pode alterar as propriedades da window do navegador


function doSomething() {
    for (var i = 1; i <= 3; i++) {
        console.log(i)
    }
}

doSomething();
//console.log(i)