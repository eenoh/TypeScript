type Username = {
  firstName: string;
  lastName: string;
}

function createUsername(user: Username): string {
  return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`;
}

console.log(createUsername({ firstName: "Emmanuel", lastName: "Enoh"}));


type Email = {
  username: string;
  domain: string;
}

function formatEmail(email: Email): string {
  return `${email.username.toLowerCase()}@${email.domain.toLowerCase()}.com`
}

const email: Email = {username: "Emmanuel", domain: "Gmail"};
console.log(formatEmail(email));



const input: unknown = true;

function processInput(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return "Unsupported Type";
  }
}

console.log(processInput(input));



const payload: unknown = [1, 2, 3, 4, 5];

function handlePayload(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  } 
  else if (typeof value === "number") {
    return value * value;
  } 
  else if (
    Array.isArray(value) &&
    value.every(item => typeof item === "number")
  ) {
    // value is now number[]
    return value.reduce((sum, num) => sum + num, 0);
  }

  return "Unsupported payload";
}

console.log(handlePayload(payload));


type Greeting = {
  language: "en" | "de";
  name?: string;
};

function greetUser(value: Greeting): string {
  const name = value.name ?? "Anonymous";

  if (value.language === "en") {
    return "Hello, " + name;
  } else {
    return "Hallo, " + name;
  }
}

const greeting: Greeting = { language: "de" };
console.log(greetUser(greeting));



function logMessage(message: string): void {
  console.log("LOG:", message);
}

function fail(message: string): never {
  throw new Error(message);
}

function processValue(value: number | string) {
  if (typeof value === "number") {
    logMessage(`Processing number: ${value}`);
  } else if (typeof value === "string") {
    logMessage(`Processing string: ${value}`);
  } else {
    fail("Unexpected value type");
  }
}

processValue(10);
processValue("TypeScript");


function logStatus(status: string): void {
  console.log("The Status is currently set on: " + status);
}

function panic(message: string): never {
  throw new Error(message);
}

function handleStatus(status: "success" | "loading" | "error") {
  if (status === "success") {
    logStatus("Oparation complete");
  } else if (status === "loading") {
    logStatus("Loading...");
  } else if (status === "error") {
    panic("Application Crashed");
  } else {
    panic("Unknown status");
  }
}

handleStatus("loading");

try {
  handleStatus("error");
} catch (err) {
  console.log("Caught error:", (err as Error).message);
}

handleStatus("success");



type Product = {
  readonly id: number;
  name: string;
  price: number;
}

const product: Product = {id: 1, name: "Apple", price: 299}

function applyDiscount(product: Product, percent: number) {
  console.log("Product Id: " + product.id);
  console.log("Product Name: " + product.name);
  console.log("Oginial Price: " + product.price);

  const reduction: number = (product.price * (percent / 100));
  const newPrice = product.price - reduction;
  console.log("Reduced Price: " + newPrice.toFixed(2));
}

applyDiscount(product, 12.5);


type User = {
  readonly id: number;
  name: string;
  email?: string;
};

const user1: User = {id: 1, name: "Emmanuel"};
const user2: User = {id: 2, name: "Bob", email: "bob@gmail.com"};

// This line doesnt work because the Id is being set on readonly
// user1.id = 3;

function printUser(user: User): void {
  if (!user.email) {
    console.log(
      `The user ${user.name} (ID: ${user.id}) does not have an email address.`
    );
  } else {
    console.log(
      `The user ${user.name} (ID: ${user.id}) has the email ${user.email}.`
    );
  }
}

printUser(user1);
printUser(user2);




type PaymentMethod = "card" | "paypal" | "pank";
type PaymentStatus = "Pending" |  "Paid" | "Failed";
type Amount = number | `${number}€`;

function processPayment(amount: Amount, method: PaymentMethod): PaymentStatus {
  // normalize amount
  const amountAsNumber =
    typeof amount === "string"
      ? Number(amount.replace("€", ""))
      : amount;

  // normalize payment method (case-insensitive)
  const normalizedMethod = method.toLowerCase();

  if (amountAsNumber <= 0) {
    return "Failed";
  }

  if (
    normalizedMethod === "card" ||
    normalizedMethod === "paypal" ||
    normalizedMethod === "bank"
  ) {
    return "Paid";
  }

  return "Pending";
}

console.log(processPayment("-24€", "Card" as PaymentMethod));
console.log(processPayment("10€", "pAyPaL" as PaymentMethod));


