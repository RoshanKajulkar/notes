/*
 * TypeScript Type Aliases
 * -----------------------
 *
 * Type aliases allow you to create a custom name for a type. This can be used to simplify complex type definitions or to reuse them.
 * The `type` keyword is used to define an alias.
 *
 * 1. Defining Types with `type`
 * -----------------------------
 *
 * - You can define a type alias for any type (primitive types, objects, arrays, functions, etc.).
 * - This is useful for creating more readable and reusable code.
 *
 * Syntax:
 * type AliasName = someType;
 *
 * Example:
 */

type StringAlias = string; // Alias for the string type
type NumberAlias = number; // Alias for the number type

let name: StringAlias = 'Alice'; // Equivalent to `let name: string`
let age: NumberAlias = 30; // Equivalent to `let age: number`

/*
 * You can also create type aliases for objects and functions.
 * Example:
 */

type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: 'John',
    age: 40,
};

type Greet = (name: string) => string;

let greet: Greet = (name: string) => `Hello, ${name}!`;

/*
 * 2. Union Types
 * --------------
 *
 * - A union type allows a value to be one of several types.
 * - You can define a union type using the `|` (pipe) symbol between the types.
 *
 * Example:
 */

type ID = string | number; // Union type: ID can be either a string or a number

let userId: ID = 101; // Valid
userId = 'abc123'; // Also valid

/*
 * Union types are useful when a variable can hold values of multiple types.
 * Example:
 */

function printId(id: ID): void {
    if (typeof id === 'string') {
        console.log(`ID is a string: ${id}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

printId(123); // Output: ID is a number: 123
printId('abc123'); // Output: ID is a string: abc123

/*
 * 3. Intersection Types
 * ---------------------
 *
 * - An intersection type combines multiple types into one.
 * - A value of an intersection type must satisfy all types in the intersection.
 * - You can define an intersection type using the `&` (ampersand) symbol.
 *
 * Example:
 */

type Employee = {
    employeeId: number;
    position: string;
};

type PersonWithJob = Person & Employee; // Intersection type: Person + Employee

let worker: PersonWithJob = {
    name: 'Sarah',
    age: 35,
    employeeId: 1234,
    position: 'Manager',
};

/*
 * Intersection types are useful when you need to combine multiple types into one that has properties of all.
 * Example:
 */

type Developer = {
    programmingLanguages: string[];
};

type FullStackDeveloper = Person & Developer;

let dev: FullStackDeveloper = {
    name: 'Mike',
    age: 28,
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python'],
};

/*
 * Conclusion:
 * ----------
 * - Type aliases provide a way to define custom type names for complex types, making code more readable and maintainable.
 * - Union types allow flexibility by letting a value be one of several types.
 * - Intersection types allow combining multiple types, ensuring that values satisfy all conditions.
 */
