const credito = document.getElementById("credito");
const debito = document.getElementById("debito");
const pix = document.getElementById("pix");
const submit = document.getElementById("submit");
const resposta = document.getElementById("resposta");

submit.onclick = pagamento;

function pagamento (){
    if (credito.checked){
        resposta.textContent = "Pagando com cartao voce recebe 5% de desconto";
    }else if (debito.checked){
        resposta.textContent = "Pagando no debito voce recebe 10% de desconto"
    }else if(pix.checked){
        resposta.textContent = "pagando no pix voce recebe 15% de desconto";
    }else{
        resposta.textContent = "selecione um metodo de pagamento";
    }
}