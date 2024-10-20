// 1. Function Declaration

function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Alice')); // Outputs: "Hello, Alice!"

// 2. Function Expression

const farewell = function (name) {
    return 'Goodbye, ' + name + '!';
};

console.log(farewell('Bob')); // Outputs: "Goodbye, Bob!"

// 3. Arrow Functions

const add = (a, b) => a + b;

console.log(add(5, 10)); // Outputs: 15

const square = x => x * x;

console.log(square(4)); // Outputs: 16

// 4. Parameters, Arguments, and Default Parameters

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5)); // Outputs: 10
console.log(multiply(5, 3)); // Outputs: 15

// 5. Return Statement

function divide(a, b) {
    if (b === 0) {
        return 'Error: division by zero';
    }
    return a / b;
}

console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0)); // Outputs: "Error: division by zero"

// 6. IIFE (Immediately Invoked Function Expression)

(function () {
    console.log('I am an IIFE!');
})();

// 7. Higher-Order Functions

function applyOperation(operation, a, b) {
    return operation(a, b);
}

const subtract = (a, b) => a - b;

console.log(applyOperation(add, 10, 5)); // Outputs: 15 (uses add function)
console.log(applyOperation(subtract, 10, 5)); // Outputs: 5 (uses subtract function)
