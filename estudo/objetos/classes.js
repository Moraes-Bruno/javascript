//Class: Uma maneira mais estruturada e limpa de trabalhar com objetos

class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.productName}`);
    console.log(`Price: R$ ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const prod1 = new Product("PS3", 8000.0);
const prod2 = new Product("Xbox 360", 3000.0);
const prod3 = new Product("Geforce 7900gtx", 1200.0);

prod1.displayProduct();
console.log("---------------------------");
prod2.displayProduct();
console.log("---------------------------");
prod3.displayProduct();

const total = prod1.calculateTotal(salesTax)
console.log(`Total price(with Tax): ${total.toFixed(2)}`);