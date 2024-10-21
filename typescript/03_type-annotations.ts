/*
 * TypeScript Type Annotations
 * ---------------------------
 *
 * Type annotations in TypeScript allow you to specify the type of a variable, parameter, or function return value.
 * TypeScript also has powerful type inference, where the type is automatically assigned based on the value.
 *
 * 1. Explicit vs Implicit Types
 * -----------------------------
 *
 * a. Explicit Types:
 * -------------------
 * - You explicitly define the type of a variable, parameter, or return value using `: type` syntax.
 * - This gives you full control over what type is allowed.
 *
 * Example:
 */

let firstName: string = 'John'; // Explicit type: string
let age: number = 25; // Explicit type: number
let isActive: boolean = true; // Explicit type: boolean

// Function with explicit types for parameters and return type
function multiply(a: number, b: number): number {
    return a * b;
}

/*
 * b. Implicit Types:
 * -------------------
 * - TypeScript automatically infers the type based on the assigned value.
 * - While the type isn’t explicitly written, it’s still enforced.
 *
 * Example:
 */

let lastName = 'Doe'; // TypeScript infers this is a string
let score = 100; // Inferred as number
let isMember = false; // Inferred as boolean

// Function with implicit return type (inferred as number)
function add(a: number, b: number) {
    return a + b; // The return type is implicitly inferred as number
}

/*
 * 2. Type Inference
 * -----------------
 *
 * - TypeScript can infer types in most situations, even when you don't explicitly declare them.
 * - It looks at the initial values assigned to variables or returned by functions to infer the type.
 * - Once the type is inferred, it is enforced throughout the variable's usage.
 *
 * Examples:
 */

// TypeScript infers that `total` is a number based on the initial value
let total = 100;
// total = "One hundred";  // Error: Type 'string' is not assignable to type 'number'

// Inference works with function return values as well
function getGreeting(name: string) {
    return `Hello, ${name}`; // Inferred return type: string
}

// The return type is inferred as an array of strings
let fruits = ['apple', 'banana', 'cherry'];

/*
 * Type inference limitations:
 * ----------------------------
 * - TypeScript can infer types in many cases, but sometimes it's useful or necessary to use explicit types, especially with complex structures.
 * - It’s also useful to provide explicit types for function parameters and return values for better readability and maintainability.
 *
 * Example:
 * Explicit return types can avoid confusion:
 */
function calculateDiscount(price: number): number {
    if (price > 100) {
        return price * 0.9;
    } else {
        return price * 0.95;
    }
    // TypeScript automatically infers this function returns a number.
    // Explicit return type 'number' makes it more obvious to other developers.
}

/*
 * Conclusion:
 * ----------
 * - Use explicit types when it helps with code readability or in complex scenarios.
 * - Type inference is powerful and reduces the need for redundant type declarations.
 * - TypeScript ensures that even when types are implicit, they are still strictly enforced.
 */
