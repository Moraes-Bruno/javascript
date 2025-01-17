//eventLister: "escuta" por eventos especificos para criar paginas web interativas

//eventos: click,mouseover,mouseout

const myBox = document.getElementById("mybox");
const myBtn = document.getElementById("mybtn");

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "DON'T DO ITT 😡";
});

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "O U C H 😵‍💫";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me 😀";
});

myBtn.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "lightblue";
  myBox.textContent = "Easter Egg";
});

myBtn.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click me 😀";
});
