/*
 * TypeScript with JavaScript Libraries
 * ------------------------------------
 *
 * TypeScript can be used alongside JavaScript libraries that may not have built-in TypeScript support. To ensure TypeScript
 * understands these libraries and provides type safety, you use type declaration files and `@types` packages.
 *
 * 1. Type Declaration Files (.d.ts)
 * ---------------------------------
 *
 * - A type declaration file (`.d.ts`) is a file that describes the types and shapes of a JavaScript library to TypeScript.
 * - Type declaration files allow TypeScript to understand the API of a JavaScript library and offer type checking and IntelliSense.
 *
 * Example:
 *
 * Let's say you have a JavaScript library `mathLib.js`:
 *
 * File: `mathLib.js`
 *
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * function subtract(a, b) {
 *   return a - b;
 * }
 *
 * To use this in a TypeScript project, you would write a type declaration file to describe the functions:
 *
 * File: `mathLib.d.ts`
 */

declare function add(a: number, b: number): number;
declare function subtract(a: number, b: number): number;

/*
 * - Now TypeScript knows about the `add` and `subtract` functions and their types.
 * - You can import and use the JavaScript library in your TypeScript file, with type safety:
 *
 * File: `main.ts`
 */

/// <reference path="./mathLib.d.ts" />

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3

/*
 * 2. Using @types Packages
 * ------------------------
 *
 * - The TypeScript community has provided type declaration files for many popular JavaScript libraries in the form of `@types` packages.
 * - These packages are hosted on DefinitelyTyped and can be installed via npm.
 *
 * Example:
 *
 * If you are using the `lodash` library, you can install its types with:
 *
 * npm install lodash @types/lodash
 *
 * - After installing, TypeScript automatically uses the types from the `@types/lodash` package, so you can benefit from type checking.
 *
 * File: `main.ts`
 */

import _ from 'lodash';

let nums = [1, 2, 3, 4];
let doubled = _.map(nums, n => n * 2);

console.log(doubled); // Output: [2, 4, 6, 8]

/*
 * - TypeScript provides type information for the `map` function from lodash, making your code safer.
 *
 * 3. Working with Third-Party Libraries
 * -------------------------------------
 *
 * - When working with third-party libraries, especially those without type definitions, you can either write your own declaration
 *   files (as shown above) or use the `any` type temporarily to bypass TypeScript's type checking.
 *
 * Example:
 *
 * Suppose you're using a JavaScript library that doesn't have type definitions:
 */

declare let someLibrary: any; // Use 'any' to avoid type checking temporarily

someLibrary.doSomething();

/*
 * - While this approach works, it's less safe since TypeScript won't catch any potential type errors. You should create or find
 *   proper type definitions to improve type safety in the long run.
 *
 * Using the DefinitelyTyped repository:
 * -------------------------------------
 * - If a third-party library doesn't have built-in TypeScript support, you can check the DefinitelyTyped repository
 *   (https://github.com/DefinitelyTyped/DefinitelyTyped) for available type declaration files.
 * - Many libraries have `@types` packages available for easy installation and integration.
 *
 * Summary:
 * -------
 * - Type declaration files (`.d.ts`) describe the structure of JavaScript libraries, allowing TypeScript to offer type safety.
 * - `@types` packages provide type definitions for popular libraries and can be installed via npm.
 * - For libraries without type definitions, you can use `any` temporarily or write your own `.d.ts` files to ensure type safety.
 */
