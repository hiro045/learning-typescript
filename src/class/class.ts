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
    get subject(): string {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
const teacher = new Teacher('Taka', 40, 'Math');
teacher.subject = 'Music';
teacher.greeting();