class Person {

    constructor(public readonly name: string, protected age: number){}

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }

    incrementAge() {
        this.age += 1;
    }
}

class Teacher extends Person{
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
const teacher = new Teacher("Taka", 40, "Math");
teacher.greeting();