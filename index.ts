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
color();
color.toUpperCase();
console.log(color);

