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

const myPerson: Person = { name: "Emmanuel", age: 22};
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


/**
 * Read Only Property
 */
type Car = {
  readonly vin: string;
  brand: string;
  model: string;
  year: number;
};

const car: Car = {
  vin: "1HGCM82633A004352",
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(`The ${car.brand} ${car.model} ${car.year} has a vin number of ${car.vin}`);



/**
 * Intersection Types
 */
type Applicant = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type ApplicantAndEmployee = Applicant & Employee;

const emmanuel: ApplicantAndEmployee = {
  name: "Emmanuel",
  age: 22,
  id: 67,
  title: "Junior Developer"
}

/**
 * Union Types
 */

type Id = string | number;

function formatId(id: Id): string {
  // Type narrowing using typeof
  if (typeof id === "string") {
    return `ID: ${id.toUpperCase()}`;
  }
  // Here, id is a number
  return `ID: ${id.toString().padStart(4, "0")}`;
}

console.log(formatId("ab12")); // ID: AB12
console.log(formatId(7));      // ID: 0007


// Union of string literals (common real-world pattern)
type RequestStatus = "idle" | "loading" | "success" | "error";

function printStatus(status: RequestStatus): void {
  switch (status) {
    case "idle":
      console.log("Status: waiting to start.");
      break;
    case "loading":
      console.log("Status: loading...");
      break;
    case "success":
      console.log("Status: completed successfully.");
      break;
    case "error":
      console.log("Status: something went wrong.");
      break;
  }
}

printStatus("loading");
printStatus("success");

// This would be a TypeScript error (not part of the union)
// printStatus("done");



/**
 * Literal Types
 */

// String literal types
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

move("up");
move("left");


// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(value: DiceRoll): void {
  console.log(`You rolled a ${value}`);
}

rollDice(4);


// Literal types in objects 
type ThemeConfig = {
  mode: "light" | "dark";
};

const theme: ThemeConfig = {
  mode: "dark"
};

console.log(`Your current colour theme is ${theme.mode}!`);


// Literal types with function return values
type HttpStatus = 200 | 400 | 401 | 404 | 500;

function getStatus(success: boolean): HttpStatus {
  return success ? 200 : 500;
}

const status = getStatus(true);
console.log(`HTTP Status Code: ${status}`);


/**
 * Tuple Types
 */

// Basic Tuple
const userTuple: [string, number] = ["Emmanuel", 22];
console.log(`Name: ${userTuple[0]}, Age: ${userTuple[1]}`);


// Tuple used in a function return
function getUserInfo(): [string, number, string] {
  return ["Emmanuel", 22, "Austria"];
}

const userInfo = getUserInfo();
console.log(
  `Name: ${userInfo[0]}, Age: ${userInfo[1]}, Location: ${userInfo[2]}`
);


/**
 * Enums
 */

// Numeric enum
enum MoveDirection {
  Up,
  Down,
  Left,
  Right
}

function movePlayer(direction: MoveDirection): void {
  console.log(`Moving in direction: ${MoveDirection[direction]}`);
}

movePlayer(MoveDirection.Up);


// String Enum
enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}

function checkAccess(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Full acces granted!");
  } else {
    console.log("Limited access granted!");
  }
}

checkAccess(UserRole.Viewer);


// Enum in an Object
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED"
}

type Order = {
  id: number;
  status: OrderStatus;
};

const order: Order = {
  id: 101,
  status: OrderStatus.Delivered
};

console.log(`Order #${order.id} is currently ${order.status}!`);


// Enum used in a switch statement
function handleOrderStatus(status: OrderStatus): void {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Order is being prepared.");
      break;
    case OrderStatus.Shipped:
      console.log("Order is on the way.");
      break;
    case OrderStatus.Delivered:
      console.log("Order has been delivered.");
      break;
  }
}

handleOrderStatus(order.status);


/**
 * Class Property
 */

class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const human = new Human("Emmanuel", 22);
console.log(human.name);

// Access Modifiers

/**
 * Represents an automobile with a brand and model.
 * 
 * @param brand - The manufacturer of the automobile.
 * @param model - The specific model of the automobile.
 */
class Automobile {
  public brand: string;
  public model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Automobile("Toyota", "Coralla");
console.log("Brand: " + car1.brand);
console.log("Model: " + car1.model);

/**
 * Represent a simble Bank Account with a Balance
 * 
 * @param balance - The balance of the account
 */
class BankAccount {
  private balance: number;

  constructor(balance: number){
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance());


class Worker {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Worker {
  getSalary(): number {
    return this.salary;
  }
}

const manager = new Manager(5000);
console.log(manager.getSalary());


// Getter & Setters
class Somenbody {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if(value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const user = new Somenbody(22);
console.log(user.age);

user.age = 23;
console.log(user.age);



// Real World Example
/**
 * Product
 * 
 * This is a class whiche you can define a Product with a
 * price and category attached to it
 * 
 * @param _product - Product Name
 * @param _price - Price
 * @param _category - Product Category
 */
class Product {
  private _product: string;
  private _price: number;
  private _category: string;

  constructor(product: string, price: number, category: string) {
    this._product = product;
    this._price = price;
    this._category = category;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number){
    if(value < 0) {
      throw new Error("The value " + value + " is not allowed. Please set a value above 0");
    }

    this._price = value;
  }

  get product(): string {
    return this._product;
  }
  get category(): string {
    return this._category;
  }
}

const product = new Product("Ice Cream", 3, "Chocolate");
console.log("The " + product.category + " " + product.product + " costs " + product.price + "€"); 


/**
 * Interfaces
 */

interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computer1: Computer = {
  name: "I7",
  ram: 4,
  hdd: 100
}

console.log("Computer Name: " + computer1.name);
console.log("RAM: " + computer1.ram);
console.log("HDD: " + computer1.hdd);



interface MathOperation {
  (x: number, y: number) : number
}

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;
const mul: MathOperation = (a, b) => a * b;
const div: MathOperation = (a, b) => a / b;
console.log(div(2,4));


interface PersonBase {
  name: string;
  age: number;
}

interface Executive extends PersonBase {
  readonly id: number;
  role: string;
}

const executive: Executive = {
  name: "Emmanuel",
  age: 22,
  id: 1,
  role: "Junior Developer"
}

console.log(executive);


interface Welcome {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greetEmployee(person: Welcome) {
  console.log(`Hello ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const emma: Welcome = {
  firstName: "Emma",
  lastName: "Enoh",
  age: 22,
  sayHello() {
    console.log("Welcome to the Team!");
  },
}; 

const bob: Welcome = {
  firstName: "Bob",
  lastName: "Bobby",
  age: 22,
  sayHello() {
    console.log("You are the Man!");
  },
}; 

greetEmployee(emma);
greetEmployee(bob);


// Declaration Merging
interface Userr {
  name: string;
}

interface Userr {
  age: number;
}

interface Userr {
  location: string;
}

const userr: Userr = {
  name: "Emmanuel",
  age: 22,
  location: "Austria",
};

console.log(userr);