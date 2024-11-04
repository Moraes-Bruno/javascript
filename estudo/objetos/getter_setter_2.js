class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.log("firstName deve ser uma string com pelo menos um caracter");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log("lastName deve ser uma string com pelo menos um caracter");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("age deve ser um numero maior que 0");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get userInfo() {
    return `${this._firstName} ${this._lastName},${this._age} anos`;
  }
}

const person = new Person("John", "Doe", 22);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.userInfo);
