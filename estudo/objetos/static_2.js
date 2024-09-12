class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`Total de Usuarios: ${User.userCount}`);
  }

  sayHello() {
    console.log(`Hello,my username is ${this.userName}`);
  }
}

const user1 = new User("Reiumu Hakurei");
const user2 = new User("Marisa Kirisame");
const user3 = new User("Sakuya Izayoi");

user1.sayHello();
user2.sayHello();
console.log("");
User.getUserCount();
