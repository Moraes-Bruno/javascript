//Duas maneiras

//Window Prompt

//let username = window.prompt("Digite o seu nome");
//window.alert("Olá "+username);

//Via html

let username;
let age;

//Ao clicar no botão presente na pagina html,essa função sera ativada
document.getElementById("botao").onclick = function(){

    username = document.getElementById("nome").value;
    age = Number(document.getElementById("idade").value);

    document.getElementById("p1").innerHTML = "Olá "+username;
    document.getElementById("p2").innerHTML = "Idade: "+age+" anos"
    document.getElementById("p3").innerHTML = "Idade daqui 5 anos: "+(age+5)+" anos"
    console.log(age,typeof age);

}
