const idade = document.getElementById("idade");
const submit = document.getElementById("submit");
const resposta = document.getElementById("resposta");
let age;

submit.onclick = msg;

function msg (){
    age = Number(idade.value);
    if(age >= 18){
        resposta.textContent = "Voce pode dirigir legalmente";
    }else if(age >= 15 && age <= 17){
        resposta.textContent = "Voce não pode dirigir legalmente";
    }else{
        resposta.textContent = "Voce é muito novo para aprender a dirigir";
    }
}