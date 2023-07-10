//Maps: É um objeto que guarda pares de Chave-Valor de qualquer tipo de dado

const store = new Map([

    ["t-shirt", 20],
    ["jeans", 30],
    ["Programming Socks", 69],
    ["underwear", 25]

]);

let shoppingCart = 0;

shoppingCart += store.get("Programming Socks");//Acessa um item do Map
shoppingCart += store.get("t-shirt");
console.log(`Total a Pagar: R$${shoppingCart}`);

store.set("Hks Shirt", 50);//Adicona um item no Map
store.delete("underwear");//Remove um item do Map
console.log("Underwear: " + store.has("underwear"))//Checa se o item existe no Map
console.log(store.size());

store.forEach((value, key) => console.log(`${key}: $${value}`));