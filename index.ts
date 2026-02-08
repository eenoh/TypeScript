type Individual = {
  name: string;
};

const individual: Individual = {
  name: "Emmanuel",
};

console.log(individual.name);



/**
 * Annotations
 * Syntax: let myVar: type = value
 */

// String
let myName: string = "Emmanuel Enoh";
myName = "Besong Enoh";
console.log(myName);

// Number
let age: number = 22;
age += 2;
console.log(age);

// Boolean
let tsEasy: boolean = false;
console.log(tsEasy); 


/**
 * Type Inference
 */
let tech = "TypeScript";
let number = 8;
let tsHard = true;

console.log(typeof tech, typeof number, typeof tsHard);
console.log(tech, number, tsHard);

/**
 * Any Type
 */
let color: any = "black";
color = 20;
color = true;

// color is not a function. In development the error might not appear but at runtime
// color();
// color.toUpperCase();
console.log(color);


/**
 * Function Parameters Annotations
 */
// Regular Function
function addOne(num: number) {
  return num + 1;
}

const res1 = addOne(3);
console.log(res1);

// Arrow Func Annotations
const double = (x: number, y: number) => x * y;
const res2 = double(2, 10);
console.log(res2);

// Default Params Value
function greet(person: string = "Anonymous") {
  return `Hello ${person}!`;
}

const res3 = greet();
console.log(res3);

// Return Annotations
// Regular Function
function double1(x: number): number {
  return x * x;
}

const res4 = double1(22);
console.log(res4);


// Arrow Function
const double2 = (x: number): number => x * x;
const res5 = double2(2);
console.log(res5);

/**
 * Void Functions
 */
function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
}

printMessage("Hello, how are you?");


/**
 * Never
 */
// Function that always throws an Error
function throwError(msg: string): never {
  throw new Error(msg); 
}

// Function that has an infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// A variable that can never have a value
let x: never;

function neverReturns(): never {
  while (true) {}
}
// This line will cause a compile-time error bacause the function never returns
// x = neverReturns();


/**
 * Arrays
 */
// Bracket Noation
const numbers: number[] = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

// Array<type> Notation
const names: Array<string> = ["Emmanuel", "Bedran", "Cheikh"];
console.log(names);

// Multi Dimensional Array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

console.log(matrix);


/**
 * Objects
 */
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Emmanuel",
  lastName: "Enoh",
  age: 22
}

console.log(`${person.firstName} ${person.lastName} is ${person.age} years old!`);

function printUser() : { name: string; age: number; location: string} {
  return {
    name: "Emmanuel",
    age: 22,
    location: "Austria"
  }
}

const res6 = printUser();
console.log(res6);


/**
 * Type Aliases
 */
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "Emmanuel", age: 25};
printPerson(myPerson);


type User = {
  name: string;
  age: number;
  location: string;
}

function printUserInfo(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

const res7 = printUserInfo({ name: "Emmanuel", age: 22, location: "Austria" });
console.log(res7);


/**
 * Optional Properties
 */
type Animal = {
  name: string;
  age?: number;
  type: string;
}

const animal1: Animal = {
  name: "Leo",
  type: "Lion",
  age: 29
};

if (animal1.age == undefined) {
  console.log(`This is ${animal1.name} the ${animal1.type}!`);
} else {
  console.log(`This is ${animal1.name} the ${animal1.type} who is ${animal1.age} old!`);
}