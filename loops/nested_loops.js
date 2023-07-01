//Um loop dentro de outro

let symbol = window.prompt("Digite um simbolo")
let rows = window.prompt("Digite a quantidade de linhas")
let columns = window.prompt("Digite a quantidade de colunas")

for(let i = 1;i<=rows;i++){
    for(let j = 1;j<=columns;j++){
        document.getElementById("retangulo").innerHTML += symbol
    }
    document.getElementById("retangulo").innerHTML += "<br>"
}