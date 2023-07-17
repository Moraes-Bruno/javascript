//Anonymous Objects: Objetos que não possuem um nome
//Não são diretamente referenciados

class Card {

    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

}

let cards = [

    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("2", "Hearts"),
    new Card("2", "Diamonds")

];

cards.forEach(card => console.log(card.value+" "+card.suit));

