//Return: Retorna o valor ao local aonde a função foi chamada

let area,width,height

width = Number(window.prompt("Digite a largura"));
height = Number(window.prompt("Digite a altura"));


function getArea(width,height){

    let res = width*height

    return res;

}

area = getArea(width,height)//Esta variavel ira receber o valor do return pressente na função acima

console.log(area)