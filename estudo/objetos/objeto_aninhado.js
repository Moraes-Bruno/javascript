//objeto aninhado = Um objeto dentro de outro objeto

const person = {
  fullName: "John",
  age: 30,
  isStudent: true,
  hobbies: ["gaming", "cars", "tech"],
  address: {
    street: "some street",
    city: "gensokyo",
    country: "Japan",
  },
};

console.log(person.fullName);
console.log(person.hobbies[0]);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property])
}
