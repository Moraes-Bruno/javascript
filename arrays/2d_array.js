//2D arrays: Um array feito de arrays

let listaCompras = [
    ["arroz", "feijão", "frango"],
    ["açucar", "cafe", "coador"],
    ["desodorante", "pasta de dente", "escova de dente"]
];

function loop() {

    for (let list of listaCompras) {

        for (let food of list) {
            console.log(food);
        }
        console.log(" ");

    }
}

loop();

listaCompras[1][2] = "coador de cafe";
listaCompras[2][2] = "shampoo";

console.log("---------------------------------");
loop();

