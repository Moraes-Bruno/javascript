let username;


document.getElementById("submit").onclick = function(){
    username = document.getElementById("nomeCompleto").value;

    document.getElementById("resposta").textContent = `Ola ${username}`
}