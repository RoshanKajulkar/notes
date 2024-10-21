/*
 * TypeScript Modules and Namespaces
 * ---------------------------------
 *
 * TypeScript uses modules and namespaces to organize code. Modules are based on the ES6 module system, whereas namespaces are
 * a TypeScript-specific way to organize code.
 *
 * 1. Importing and Exporting Modules
 * ----------------------------------
 *
 * - Modules allow you to split code into multiple files. Each module can export and import functionalities (classes, functions, variables).
 * - You use the `import` and `export` keywords to work with modules.
 *
 * Example: Exporting from a module
 * File: `mathUtils.ts`
 */

export function add(a: number, b: number): number {
    return a + b;
}

export const PI = 3.14;

/*
 * Example: Importing a module
 * File: `main.ts`
 */

import { add, PI } from './mathUtils';

console.log(add(2, 3)); // Output: 5
console.log(PI); // Output: 3.14

/*
 * 2. Default vs Named Exports
 * ---------------------------
 *
 * - Default exports allow you to export a single value from a module. Named exports allow you to export multiple values.
 * - With default exports, you don't use curly braces when importing.
 *
 * Example: Default export
 * File: `mathUtils.ts`
 */

export default function subtract(a: number, b: number): number {
    return a - b;
}

/*
 * Importing a default export:
 * File: `main.ts`
 */

import subtract from './mathUtils'; // No curly braces for default exports

console.log(subtract(5, 3)); // Output: 2

/*
 * You can combine default and named exports in a single module:
 * File: `mathUtils.ts`
 */

export default function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    return a / b;
}

/*
 * Importing both default and named exports:
 * File: `main.ts`
 */

import multiply, { divide } from './mathUtils';

console.log(multiply(4, 5)); // Output: 20
console.log(divide(10, 2)); // Output: 5

/*
 * 3. Namespaces
 * -------------
 *
 * - Namespaces are used to group related functionalities together. Unlike modules, they are not scoped to files and don't need importing.
 * - You use the `namespace` keyword to define a namespace, and `export` inside it to make items accessible outside the namespace.
 *
 * Example:
 */

namespace Geometry {
    export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function calculateCircumference(radius: number): number {
        return 2 * Math.PI * radius;
    }
}

console.log(Geometry.calculateArea(5)); // Output: 78.5398
console.log(Geometry.calculateCircumference(5)); // Output: 31.4159

/*
 * 4. Module Augmentation
 * ----------------------
 *
 * - Module augmentation allows you to extend or modify existing modules, even if they are from a third-party library.
 * - You use the `declare module` syntax to augment a module.
 *
 * Example: Augmenting a module
 * File: `mathUtils.ts`
 */

export function square(a: number): number {
    return a * a;
}

/*
 * Augmenting the `mathUtils` module:
 * File: `augmentMathUtils.ts`
 */

declare module './mathUtils' {
    export function cube(a: number): number;
}

/*
 * Implementation of the augmented module:
 * File: `main.ts`
 */

import { square } from './mathUtils';

console.log(square(3)); // Output: 9

// Augmenting function (can be defined in a separate file)
export function cube(a: number): number {
    return a * a * a;
}

console.log(cube(3)); // Output: 27

/*
 * Conclusion:
 * ----------
 * - Modules in TypeScript follow ES6 module standards with `import` and `export`. You can use default or named exports.
 * - Namespaces provide a TypeScript-specific way to organize code within a single file or across files.
 * - Module augmentation allows you to extend or modify existing modules without altering the original module's source code.
 */
