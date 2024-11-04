function soma(n1, n2) {
  return n1 + n2;
}

function parImpar(numero){
    if(numero % 2 == 0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}

let resultado = soma(2, 6);

console.log(resultado);

parImpar(3);
