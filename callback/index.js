//Callback: é uma função que é passada como argumento para outro função

sum(2,6,displayConsole,displayDom);

function sum(x,y,callback,c2){
    let res = x+y
    callback(res)
    c2(res)
}

function displayConsole(output) {
    console.log(output)
}

function displayDom(output) {
    document.getElementById("p1").innerHTML = output
}