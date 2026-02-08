type Person = {
  name: string;
};

const person: Person = {
  name: "Emmanuel",
};

console.log(person.name);



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


