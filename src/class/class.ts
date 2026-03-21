abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }
    constructor(public readonly name: string, protected age: number){}

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }

    abstract explainJob(): void;

    incrementAge() {
        this.age += 1;
    }
}

class Teacher extends Person{
    private static instance: Teacher;
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
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    static getInstance(name: string, age: number, subject: string) {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher(name, age, subject);
        return this.instance;
    }
    explainJob() {
        console.log(`I teach ${this.subject}.`);
    }
}
const teacher = Teacher.getInstance('Taka', 40, 'Math');
teacher.subject = 'Music';
teacher.greeting();
const teacher2 = Teacher.getInstance('Hiro', 38, 'Music');
teacher2.greeting();

console.log(Person.species);
console.log(Person.isAdult(18));
console.log(Teacher.species);
console.log(Teacher.isAdult(18));