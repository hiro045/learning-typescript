/**
 * 型
 */

// 基本
let hello: string = 'hello';
console.log(hello);

// オブジェクト
const person = {
    name: {
        first: "John",
        last: "Smith"
    },
    age: 30
}
console.log(person)

// 配列
const fruits = ['Apple', 'Banana', 'Orange']

// タプル
const book: [string, number, boolean] = ['business', 2000, true]

//　Enum
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
// enum CoffeeSize {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI'
// }
const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
}

coffee.size = CoffeeSize.VENTI;

// any型 → 基本的には使わない
let anything: any = true;
anything = 'hello';
anything = ['hello', 10, true];
anything.aaa = 'aaa';
let apple = 'apple';
apple = anything;

// union
let unionType: string | number = 10;
unionType = 'hello';
unionType.toUpperCase();
// union array
let unionTypes: (string | number)[] = ['hello', 10];

// literal
const pineapple: 'pineapple' = 'pineapple';
const clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'wihte',
    size: clothSize
}

// typeエイリアス
type DrinkSize = 'small' | 'medium' | 'large' | 'x-large';
let drinkSize: DrinkSize = 'x-large';
const drink: {
    kind: string,
    size: DrinkSize
} = {
    kind: 'cole',
    size: drinkSize
}

// 関数の型(関数宣言の型)
// 戻り値は型推論が効くが,引数には効かない
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// 関数の戻り値void型
function sayHello(): void {
    console.log('Hello!');
}

// undefined型とnull型
let tmpUndefined: undefined = undefined;
let tmpNull: null = null;

// 関数型
const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
    return num1 + num2
};
const doubleNumber: (num: number) => number = num => num * 2;

//callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(22, doubleNum => {
    return doubleNum
});


// unknown型
// 柔軟でanyよりも厳しい型定義
let unknownValue: unknown;
let anyValue: any;
let text: string;
unknownValue = 'hello';
unknownValue = 21;
unknownValue = true;
//Type 'unknown' is not assignable to type 'string'.
// text = unknownValue;
text = anyValue;
if (typeof unknownValue === 'string') {
    text = unknownValue;
}

// satisfies演算子 → 型チェック
const age = 28 satisfies number;

// never型　→ 起こり得ない型を使用する
function error(message: string): never {
    throw new Error(message)
}
console.log('error occurred')

function getSizeName(size: 'S' | 'M' | 'L') {
    switch(size) {
        case 'S': return 'Small'
        case 'M': return 'Medium'
        case 'L': return 'Large'
        default: return size satisfies never
    }
}