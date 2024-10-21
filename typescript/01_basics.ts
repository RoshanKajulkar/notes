/*
 * Introduction to TypeScript
 * --------------------------
 * 
 * 1. What is TypeScript and Why Use it?
 * --------------------------------------
 * 
 * - TypeScript is a superset of JavaScript that introduces static typing.
 * - It was developed by Microsoft to help developers catch errors early and improve the overall development experience.
 * - TypeScript provides features like type annotations, interfaces, classes, and more, which help in writing predictable and maintainable code.
 * 
 * Why use TypeScript:
 * - Static type checking during development.
 * - Modern JavaScript features supported (ES6+).
 * - Better tooling with code editors (like VSCode).
 * - Large-scale application development with confidence.
 * - Provides better refactoring and IDE support.
 *
 * Example:
 */

// JavaScript Example (no type checking)
let message = "Hello, World!";
message = 42; // This will not give an error in JavaScript but is incorrect.

// TypeScript Example (type safety with type annotations)
let typedMessage: string = "Hello, TypeScript!";
// typedMessage = 42; // This will give an error in TypeScript: Type 'number' is not assignable to type 'string'.

/*
 * 2. Setting Up TypeScript
 * -------------------------
 * 
 * To get started with TypeScript, follow these steps:
 * 
 * a. Install Node.js (if you haven’t already).
 * b. Install TypeScript globally using npm:
 * 
 * Command: 
 *      npm install -g typescript
 * 
 * After installation, you can verify the installation by checking the TypeScript version:
 * 
 * Command: 
 *      tsc --version
 * 
 * Now, you can use TypeScript by writing `.ts` files and compiling them into JavaScript.
 */

// Create a new file called `example.ts`:
// example.ts
let username: string = "Alice";
console.log("Hello, " + username);

/*
 * 3. Compilation (tsc) and the tsconfig.json file
 * ------------------------------------------------
 * 
 * a. TypeScript files (with .ts extension) need to be compiled to JavaScript before they can run in the browser or Node.js.
 * b. The TypeScript compiler (`tsc`) is used for this.
 * 
 * Example: 
 *      tsc example.ts 
 * This will generate `example.js`, which can then be executed by Node.js or included in an HTML file.
 * 
 * tsconfig.json:
 * ----------------
 * 
 * - The `tsconfig.json` file is a configuration file that defines how the TypeScript compiler behaves.
 * - It contains compiler options and file paths.
 * - To initialize a `tsconfig.json`, use:
 * 
 * Command: 
 *      tsc --init
 * 
 * Example `tsconfig.json`:
 * {
 *    "compilerOptions": {
 *       "target": "ES6",            // Specify ECMAScript target version
 *       "module": "commonjs",       // Specify module code generation
 *       "strict": true,             // Enable strict type-checking options
 *       "esModuleInterop": true     // Enables interoperation between ES Modules and CommonJS
 *    },
 *    "include": ["src/**/*"],       // Files to include
 *    "exclude": ["node_modules"]    // Files to exclude
 * }
 * 
 * Using `tsc` with `tsconfig.json`:
 * -----------------------------------
 * Once you have a `tsconfig.json`, simply run `tsc` without any file argument:
 * 
 * Command:
 *      tsc
 * 
 * This will compile all TypeScript files according to the configuration in `tsconfig.json`.
 */

// Example:
// src/main.ts
const greeting: string = "Welcome to TypeScript!";
console.log(greeting);

/* After running `tsc`, this will generate the corresponding JavaScript code in the `dist` folder (if configured in tsconfig.json). */

