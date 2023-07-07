

document.getElementById("botao").onclick = function () {

    let checkbox = document.getElementById("checkbox");
    const VISA = document.getElementById("visa");
    const MASTERCARD = document.getElementById("mastercard");
    console.log(MASTERCARD);
    const PAYPAL = document.getElementById("paypal");

    if (checkbox.checked) {
        window.alert("Voce clicou na checkbox");
    } else {
        window.alert("Voce não clicou na checkbox");
    }

    if(VISA.checked){
        window.alert("Pagando com visa")
    }
    else if(MASTERCARD.checked){
        window.alert("Pagando com Mastercard")
    }
    else if(PAYPAL.checked){
        window.alert("PAgando com PayPal")
    }
    else{
        window.alert("Selecione um cartão valido")
    }
}