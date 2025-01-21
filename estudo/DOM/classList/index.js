const myH1 = document.getElementById("myH1");
const myBtn = document.getElementById("myBtn");



myH1.classList.add("enabled")
myBtn.classList.add("enabled");

myBtn.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});

myBtn.addEventListener("mouseout", (event) => {
  event.target.classList.remove("hover");
});

myBtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "👺";
  } else {
    event.target.classList.add("disabled");
  }
});
