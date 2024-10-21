/*
 * TypeScript Generics
 * -------------------
 *
 * Generics allow you to create reusable components that work with a variety of types. Instead of working with any specific type,
 * generics let you specify types at the time of use.
 *
 * 1. Generic Functions
 * --------------------
 *
 * - A generic function works with different types while maintaining type safety.
 * - You define a generic function using angle brackets `<T>` after the function name, where `T` is a placeholder for the type.
 *
 * Example:
 */

function identity<T>(arg: T): T {
    return arg;
}

// The type `T` is inferred from the argument
let output1 = identity<string>('Hello, TypeScript!'); // Explicit type
let output2 = identity(42); // TypeScript infers the type as `number`

console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42

/*
 * Generics in functions can work with multiple types.
 * Example:
 */

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let merged = mergeObjects({ name: 'Alice' }, { age: 25 });
console.log(merged); // Output: { name: 'Alice', age: 25 }

/*
 * 2. Generic Interfaces and Classes
 * ---------------------------------
 *
 * - You can also create generic interfaces and classes. These allow for flexible and reusable structures.
 *
 * Example: Generic Interface
 */

interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = { first: 'Alice', second: 42 };
let numberNumberPair: Pair<number, number> = { first: 10, second: 20 };

console.log(stringNumberPair); // Output: { first: 'Alice', second: 42 }
console.log(numberNumberPair); // Output: { first: 10, second: 20 }

/*
 * Example: Generic Class
 */

class Box<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

let stringBox = new Box<string>('A string inside the box');
console.log(stringBox.getContent()); // Output: A string inside the box

let numberBox = new Box<number>(100);
console.log(numberBox.getContent()); // Output: 100

/*
 * 3. Constraints with Generics
 * ----------------------------
 *
 * - Sometimes, you want to restrict the types that a generic can accept. This is done using constraints with the `extends` keyword.
 * - You can constrain a generic type to ensure that it meets certain conditions (e.g., must be an object with specific properties).
 *
 * Example: Generic with Constraints
 */

function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength('Hello')); // Output: 5 (string has a length property)
console.log(getLength([1, 2, 3])); // Output: 3 (array has a length property)

// Error: Argument of type 'number' is not assignable to parameter of type '{ length: number }'.
// console.log(getLength(42));

/*
 * You can also constrain generics to extend specific interfaces or classes.
 * Example:
 */

interface HasID {
    id: number;
}

function printID<T extends HasID>(obj: T): void {
    console.log(`ID: ${obj.id}`);
}

printID({ id: 123, name: 'Alice' }); // Output: ID: 123
// printID({ name: "Alice" });  // Error: Property 'id' is missing

/*
 * Conclusion:
 * ----------
 * - Generics in TypeScript allow for creating flexible and reusable components by working with any type.
 * - Generic functions, interfaces, and classes maintain type safety while being flexible.
 * - Constraints allow you to restrict generics to specific types, ensuring better type checking and safer code.
 */
