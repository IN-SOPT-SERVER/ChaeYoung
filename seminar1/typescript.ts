const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`)

const str: string = 'hellooo!!'
console.log(`${typeof str}, ${str}`)

let num: number = 31
console.log(`${typeof num}, ${num}`)

//const sum: number = 'sum number'

let numbers : number[] = [1, 2, 3];

const strings: Array<String> = ['hi', 'hello'];

const objArray1: Object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]

const objArray2: object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]

const foo1 = (something: object) : void => {
    console.log(something)
}

const foo2 = (something: Object) : void => {
    console.log(something)
}

foo1('boom')
foo2('boom')

const fun = (name: string): void => console.log(`hello, ${name}!`)

const sum1 = (a: number, b: number): number => a + b;

const sum2 = (a: number, b: number): number =>{
    return a+b;
}

const a: null = null;

let oops: null = 2;

let b: undefined = undefined;

let c: undefined = null;

let str1: any = "임채영";
let str1Length: number = (<string>str1).length;
console.log(`${typeof str1Length}, ${str1Length}`);

let str2: any = "차윤주";
let str2Length: number = (str2 as string).length;
console.log(`${typeof str2Length}, ${str2Length}`);

const hmm: any={
    name: "임채영",
    age: 21,
    isSOPT: true,
};

interface SOPT{
    name: string;
    age: number;
    isSOPT: boolean;
}

const info : SOPT = {
    name: "임채영",
    age: 21,
    isSOPT: true,
};

interface SOPT1{
    name: string;
    age: number;
    isSOPT?: boolean;
}

const info: SOPT1 = {
    name: "임채영",
    age: 21,
}