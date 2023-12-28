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
 * Objects
 */

const Person: { firstname: string, age: 23, height: string } = {
    firstname: "Joshua",
    age: 23,
    height: "163cm"
}

console.log(Person.firstname);