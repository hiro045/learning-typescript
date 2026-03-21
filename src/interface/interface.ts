interface Nameable {
    name: string;
    nickName?: string;
}
const nameable: Nameable = {
    name: 'Nick'
}

interface Human extends Nameable{
    age: number;
    greeting(message: string): void;
}

class Developer implements Human{
    constructor(public name: string, public age: number, public experience: number){
    }
    greeting(message: string): void {
        console.log(message);
    }
}

