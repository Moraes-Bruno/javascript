const elements = document.getElementById("desserts");
const firstChild = elements.firstElementChild;

firstChild.style.backgroundColor = "yellow";

//--------------------------------------------

const ulElemnt = document.querySelectorAll("ul");

ulElemnt.forEach((ulElemnt) => {
  const firstChild = ulElemnt.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

//--------------------------------------------

ulElemnt.forEach((ulElemnt) => {
  const lastChild = ulElemnt.lastElementChild;
  lastChild.style.backgroundColor = "red";
});

//--------------------------------------------

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;

nextSibling.style.backgroundColor = "orange";

//--------------------------------------------

const list = document.getElementById("potato");
const previousSibling = list.previousElementSibling;

previousSibling.style.backgroundColor = "orange";

//--------------------------------------------

const li = document.getElementById("apple");
const parent = li.parentElement;
parent.style.backgroundColor = "purple";


