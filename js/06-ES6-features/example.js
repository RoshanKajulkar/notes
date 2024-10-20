// 1. let and const

let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Outputs: 20
}
console.log(x); // Outputs: 10

const y = 30;
// y = 40;  // Uncommenting this will throw an error

// 2. Template Literals

const name = 'Alice';
console.log(`Hello, ${name}!`); // Outputs: "Hello, Alice!"

// 3. Arrow Functions

const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Outputs: 15

// 4. Destructuring

// Array destructuring
const [a, b] = [1, 2];
console.log(a); // Outputs: 1
console.log(b); // Outputs: 2

// Object destructuring
const person = { name: 'Bob', age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName); // Outputs: "Bob"
console.log(personAge); // Outputs: 25

// 5. Default Parameters

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet()); // Outputs: "Hello, Guest!"

// 6. Rest and Spread Operators

// Rest
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6

// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // Outputs: [1, 2, 3, 4, 5]

// 7. Enhanced Object Literals

const dog = {
    name: 'Buddy',
    speak() {
        return `Woof! I am ${this.name}`;
    },
};

console.log(dog.speak()); // Outputs: "Woof! I am Buddy"

// 8. Promises

const fetchData = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Data fetched');
    } else {
        reject('Error fetching data');
    }
});

fetchData
    .then(response => console.log(response)) // Outputs: "Data fetched"
    .catch(error => console.log(error));

// 9. Classes

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const cat = new Animal('Cat');
cat.speak(); // Outputs: "Cat makes a sound."

// 10. Modules (example with comments only, needs modular setup)

// Export example in module.js
// export const name = "Alice";
// export function greet() {
//     return `Hello, ${name}`;
// }

// Import example in main.js
// import { name, greet } from './module.js';
// console.log(greet());  // Outputs: "Hello, Alice"
