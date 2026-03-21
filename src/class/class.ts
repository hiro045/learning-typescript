class Person {

    constructor(public name: string, private age: number){}

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }

    incrementAge() {
        this.age += 1;
    }
}
const tom = new Person('Tom', 38);
tom.incrementAge();
tom.greeting();