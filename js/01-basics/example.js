// 1. Variables and Data Types

// var, let, const usage
var x = 10;
let y = 20;
const z = 30;

// Data types
let age = 25; // Number
let name = 'Alice'; // String
let isStudent = true; // Boolean
let car = null; // null
let temp; // undefined

// Type checking
console.log(typeof age); // Outputs: "number"
console.log(typeof name); // Outputs: "string"

// Symbol and BigInt
let sym = Symbol();
let bigNumber = 1234567890123456789012345678901234567890n;

console.log(typeof sym); // Outputs: "symbol"
console.log(typeof bigNumber); // Outputs: "bigint"

// 2. Operators

// Arithmetic operators
let sum = 5 + 10;
let difference = 20 - 5;
let product = 4 * 5;
let quotient = 20 / 4;
let remainder = 7 % 2;

console.log(sum); // Outputs: 15
console.log(remainder); // Outputs: 1

// Comparison operators
let a = 10;
let b = '10';

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)

// Logical operators
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission); // false
console.log(isLoggedIn || hasPermission); // true
console.log(!isLoggedIn); // false

// Assignment operators
let num = 5;
num += 10; // num = num + 10
console.log(num); // Outputs: 15
