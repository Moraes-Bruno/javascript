let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let estudante = document.getElementById("estudante");

let fullName = "Zhu yuan";
let age = 25;
let isStudent = false;

nome.textContent = (`Nome: ${fullName}`);
idade.textContent = (`Idade: ${age}`);
estudante.textContent = (`Estudante: ${isStudent == true? "Sim": "Não"}`);
