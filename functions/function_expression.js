//function expression: Função que nao possui um nome

let count = 0;



document.getElementById("decrease").onclick = function(){

    count --;
    document.getElementById("label").innerHTML = count;

}

document.getElementById("increase").onclick = function(){

    count ++;
    document.getElementById("label").innerHTML = count;

}

