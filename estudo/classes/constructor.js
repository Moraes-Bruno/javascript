//constructor: Um metodo especial de uma classe,aceita argumentos e atribui propriedades

class Student {

    constructor(name, age, gpa) {

        this.name = name;
        this.age = age;
        this.gpa = gpa;

    }

    study() {

        console.log(`${this.name} is Studying`);

    }

}

const student1 = new Student("john doe", 22, 3.5);

student1.study();