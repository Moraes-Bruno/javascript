/*
nodeList: coleção estatica de elementos html (id,class,element)
pode ser criado utilizando querySelectorAll()
similar a um array mas não possui map,filter,reduce
nodeLists não se atualizam automaticamente
*/

let buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach((button) => {
  button.style.backgroundColor = "lightgreen";
  button.textContent += " 😀";
});

//-----------------------Click------------------------

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

//-----------------------MouseOver------------------------

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightgoldenrodyellow";
  });
});

//-----------------------MouseOut------------------------

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightblue";
  });
});

//-----------------------Add new Element------------------------

const newBtn = document.createElement("button");

newBtn.textContent = "Button 5";
newBtn.classList = "btn";

document.body.appendChild(newBtn);

buttons = document.querySelectorAll(".btn");