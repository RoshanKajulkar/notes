/*
 * TypeScript Functions
 * --------------------
 *
 * Functions in TypeScript can have parameter types, return types, and can also handle optional, default, and rest parameters.
 * Let's explore these in detail.
 *
 * 1. Function Types
 * -----------------
 *
 * In TypeScript, you can explicitly define the types of the function's parameters and the return type.
 *
 * Syntax:
 * (parameter1: type, parameter2: type): returnType => { function body }
 *
 * Example:
 */

function addNumbers(a: number, b: number): number {
    return a + b; // This function takes two numbers and returns a number.
}

// You can assign a function to a variable with a specific type signature:
let multiplyNumbers: (x: number, y: number) => number;

multiplyNumbers = function (x, y) {
    return x * y;
};

/*
 * 2. Optional Parameters
 * ----------------------
 *
 * - You can define optional parameters by appending a `?` after the parameter name.
 * - Optional parameters must be placed after required ones.
 *
 * Example:
 */

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet('Alice', 'Hi')); // Output: Hi, Alice!

/*
 * 3. Default Parameters
 * ---------------------
 *
 * - You can set default values for parameters in case no argument is provided.
 *
 * Example:
 */

function applyDiscount(price: number, discount: number = 0.1): number {
    return price - price * discount;
}

console.log(applyDiscount(100)); // Output: 90 (default 10% discount applied)
console.log(applyDiscount(100, 0.2)); // Output: 80 (20% discount applied)

/*
 * 4. Rest Parameters
 * ------------------
 *
 * - Rest parameters allow a function to accept an indefinite number of arguments as an array.
 * - This is useful when you don’t know how many arguments will be passed to the function.
 *
 * Example:
 */

function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

/*
 * 5. Return Types
 * ---------------
 *
 * - The return type of a function can be explicitly declared using `: type` after the parameter list.
 * - If a function does not return a value, its return type should be `void`.
 *
 * Example:
 */

function logMessage(message: string): void {
    console.log(message);
}

// Example with explicit return type:
function calculateSquare(num: number): number {
    return num * num;
}

/*
 * Inference of Return Types:
 * ---------------------------
 * - If the return type is not specified, TypeScript will infer it from the function's return statements.
 *
 * Example:
 */
function subtractNumbers(a: number, b: number) {
    return a - b; // TypeScript infers that the return type is `number`
}

/*
 * Conclusion:
 * ----------
 * - TypeScript provides rich function support with parameter and return type annotations.
 * - Optional, default, and rest parameters enhance flexibility and readability in function definitions.
 */
