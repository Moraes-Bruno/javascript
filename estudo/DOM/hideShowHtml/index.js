const myImg = document.getElementById("myImg");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    btn.textContent = "hide";
  } else {
    btn.textContent = "show";
    myImg.style.visibility = "hidden";
  }
});
