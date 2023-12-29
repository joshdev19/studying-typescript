// Strings
let myName: string = "Joshu1a"; 
console.log(myName);

// Number
let number: number = 1;
console.log(number);

// Boolean
let isHand: boolean = false;
isHand = true;
console.log(isHand);

// Any Type
let mix: any = "This is the any type annotion";
mix = 123;
mix = true;


/**
 * Inferring Types
 * Like if you forgot to put a type to a variable then the typescript will infere it to its respective type.
 */
let tech = "Hello";
// tech = 123; // cannot assign number to a declared string

/**
 * Function parameters annotations
 */
function add ( value: number) {

    return value;

}

const result = add(5);
 
console.log(result);

// Arrow Func
const double = (x: number, y: number) => x * y;
const doubleRes = double(5, 5);
console.log(doubleRes);


/**
 * Default Params Value
 */
function greet ( value: string = 'Anonnymous') {

    return `Hello ${value} `;

}

const greeting = greet();
console.log(greeting);

// Return Annotation ( Regular || Arrow Func )
const multiply = (x: number): number => x * x;
const multiplied = multiply(2);
console.log(multiplied);

/**
 * Void in TypeScript
 */
const printMessage = ( message: string ): void => console.log(message)
printMessage("Hello World");


/**
 * Never
 */
 function throwError ( err: string ): never {

    throw new Error(err);

 }
// const err = throwError("Error boy");
// console.log(err);

/**
 * Arrays Types
 */
//  bracket notation
const nums: number[] = [1,2,3,4,5];
let numss: number[];
numss = [1,2,3,4]
console.log(numss)
// Other notation
const names: Array<string> = ["Joshua", "John Doe"];


/**
 * Multi Dimenstional Array
 */
const numbers: number[][] = [
    [
        1,2,3
    ],
    [
        4,5,6
    ]
];

console.log(numbers);

/**
 * Union Types
 * 
 */
let stringOrNumber: ( string | number )[];
stringOrNumber = [ 1, 2, "Joshua, weiht"]
console.log(stringOrNumber)


/**
 * Objects
 */

const Person: { firstname: string, age: 23, height: string } = {
    firstname: "Joshua",
    age: 23,
    height: "163cm"
}
console.log(Person.firstname);

//
let Person2 : {
    firstname: string;
    lastname: string;
}

Person2 = {
    firstname: "Joshua",
    lastname: "Unilongo"
};

// Conditional with phone property
let Person3: {
    firstname: string;
    lastname: string;
    phone?: number | string;
}

// #1 without the phone property
Person3 = {
    firstname: "Joshua",
    lastname: "unilongo"
}
// #2 with the phone property
Person3 = {
    firstname: "Joshua",
    lastname: "unilongo",
    phone: 9124121
}

/**
 * Type Aliases
 */

type UserType = {
    firstname: string;
    lastname: string;
    number: number | string
}

let betterFunction = ( user: UserType ) => {

    console.log( user.firstname );

}

type myFunction = ( a:number, b:string ) => void
let write : myFunction = ( num, str ) => console.log( num, str );
write(1, "hello");

type UserType2 = {
    firstname: string;
    lastname: string;
    number?: number | string;
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    firstname: "Joshua",
    lastname: "Unilongo",
    number: 2131,
    theme: "dark"
    // theme: "pink" cannot use other than dark | light
}

/**
 * INTERFACES
 */
interface IUser {
    firstname: string;
    lastname: string;
    number?: number | string;
    theme: "dark" | "light"
}

interface IEmployee extends IUser {
    employeeId : number
}

const emp : IEmployee = {
    firstname: "Joshua",
    lastname: "Unilongo",
    number: 123,
    theme: "light",
    employeeId: 123
}
console.log( emp );

const client : IUser = {
    firstname: "Joshua",
    lastname: "Unilongo",
    number: 123,
    theme: "light"
}
console.log( client );

/**
 * GENERICS
 */
interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[]; 
}

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: "test",
    desc: "123",
    extra: [ "Joshua", "testing" ]
}

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
}

const testMe2: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "test",
    desc: "123",
    extra: [ { id: 12, title: "123" } ]
}

console.log(testMe);