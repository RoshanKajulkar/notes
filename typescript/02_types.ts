/*
 * TypeScript Basic Types
 * ----------------------
 *
 * 1. Primitive Types
 * -------------------
 *
 * TypeScript includes basic types that are similar to those in JavaScript but with added type safety.
 * These primitive types are:
 *  - `number`
 *  - `string`
 *  - `boolean`
 *
 * Example:
 */

let age: number = 30;
let username: string = 'Alice';
let isLoggedIn: boolean = true;

/*
 * 2. Arrays and Tuples
 * --------------------
 *
 * Arrays:
 * -------
 * - An array can be defined with a specific type.
 *
 * Syntax: `type[]` or `Array<type>`
 * Example:
 */

let scores: number[] = [85, 90, 92];
let names: Array<string> = ['Alice', 'Bob', 'Charlie'];

/*
 * Tuples:
 * -------
 * - Tuples allow defining an array with fixed number and types of elements.
 *
 * Example:
 */

let user: [string, number];
user = ['Alice', 25]; // Correct
// user = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.

/*
 * 3. Enums
 * --------
 *
 * Enums allow you to define a set of named constants.
 * By default, enums are indexed starting from 0, but they can also be manually set.
 *
 * Example:
 */

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 1

/*
 * 4. `any` vs `unknown` vs `void` vs `never`
 * -------------------------------------------
 *
 * a. `any`:
 * --------
 * - The `any` type allows a variable to hold any type. It disables type checking.
 * - Use cautiously, as it negates the benefits of TypeScript.
 *
 * Example:
 */

let randomValue: any = 10;
randomValue = 'Hello'; // Allowed, no error.
randomValue = true; // Still no error.

/*
 * b. `unknown`:
 * ------------
 * - Similar to `any`, but with a safeguard — you must do some type checking before performing operations on it.
 *
 * Example:
 */

let unknownValue: unknown = 42;
if (typeof unknownValue === 'number') {
    let sum = unknownValue + 10; // Now it's safe to use as number
}

/*
 * c. `void`:
 * ----------
 * - `void` is used to indicate that a function does not return a value.
 *
 * Example:
 */

function logMessage(message: string): void {
    console.log(message);
}

/*
 * d. `never`:
 * -----------
 * - The `never` type represents a value that never occurs.
 * - It’s used in cases like functions that throw an error or run infinite loops.
 *
 * Example:
 */

function throwError(message: string): never {
    throw new Error(message);
}
