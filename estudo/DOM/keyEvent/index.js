const myBox = document.getElementById("mybox");

document.addEventListener("keydown", (event) => {
  myBox.textContent = "🫥";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
    myBox.textContent = "😶‍🌫️";
    myBox.style.backgroundColor = "lightblue";
});
