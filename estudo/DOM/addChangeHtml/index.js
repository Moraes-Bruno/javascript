//-------Criando Elemento-------//

const newH1 = document.createElement("h1");

//-------Adicionando atributos/propriedades-------//

newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//-------Append no elemento-------//

//document.body.append(newH1);
//document.body.prepend(newH1);

document.getElementById("box1").prepend(newH1)

//const box2 = document.getElementById("box2");

//insere o elemento antes do box 2
//document.body.insertBefore(newH1, box2);

//-------Removendo elemento-------//

document.getElementById("box1").removeChild(newH1);
