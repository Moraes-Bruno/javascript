const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"

const orange = document.getElementById("orange")

document.getElementById("fruits").insertBefore(newListItem, orange);

//document.getElementById("fruits").append(newListItem);
