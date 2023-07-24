//Error: São objetos com uma descrição do que aconteceu de errado 

try {

    let x;

    document.getElementById("botao").onclick = function () {

        x = document.getElementById("numero").value;

        document.getElementById("p1").innerText = x;

    }

} catch (error) {

    console.log(error);

}finally{

    console.log("This always executes");

}