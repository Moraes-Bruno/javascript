//getElementbyId: retorna UM elemento ou nulo
const header = document.getElementById("header");

header.style.background = "yellow";
header.style.textAlign = "center";

//getElementsByClassName: retorna uma coleção html
const fruits = document.getElementsByClassName("fruits");

//obs: getElementsByClassName não possui metodo forEach()
for (let fruit of fruits) {
  fruit.style.background = "yellow";
}

/* Array.from(fruits).forEach((fruit) => {
    fruit.style.background = "red";
  }); */

//getElementsByTagName: retorna uma coleção html contendo todos os elementos que possuem a mesma tag
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "yellow";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "lightgreen";
}

//querySelector: retorna o primeiro elemento encontrado ou nulo
const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";

const fruitsAgain = document.querySelectorAll(".fruits");
fruitsAgain[2].style.backgroundColor = "pink";
