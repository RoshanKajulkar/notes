/*
 * TypeScript Type Compatibility
 * -----------------------------
 *
 * TypeScript uses a structural type system, which means that compatibility between types is determined based on their structure
 * rather than explicit declarations. This leads to concepts like structural typing and duck typing.
 *
 * 1. Structural Typing
 * --------------------
 *
 * - Structural typing means that two types are compatible if they have the same structure (i.e., they have the same properties and methods).
 * - TypeScript checks compatibility by comparing the shapes of types rather than requiring exact matches by name.
 *
 * Example:
 */

interface Person {
    name: string;
    age: number;
}

interface Worker {
    name: string;
    age: number;
    jobTitle: string;
}

let person: Person = { name: 'Alice', age: 25 };
let worker: Worker = { name: 'Bob', age: 30, jobTitle: 'Developer' };

person = worker; // OK: Worker has all properties of Person
// worker = person;  // Error: 'jobTitle' is missing in Person

/*
 * Explanation:
 * - `Worker` type is compatible with `Person` because it has the same structure and additional properties.
 * - However, `Person` is not compatible with `Worker` because it lacks the `jobTitle` property.
 */

/*
 * 2. Duck Typing
 * --------------
 *
 * - Duck typing is a subtype of structural typing: "If it looks like a duck and quacks like a duck, it's a duck."
 * - If an object has the necessary properties and methods to fulfill an interface, it's considered compatible.
 *
 * Example:
 */

function printPerson(person: { name: string; age: number }) {
    console.log(`${person.name} is ${person.age} years old.`);
}

let student = { name: 'Charlie', age: 20, major: 'Physics' };
printPerson(student); // Output: Charlie is 20 years old.

/*
 * Explanation:
 * - The `student` object is compatible with the expected structure in the `printPerson` function, even though it has extra properties.
 */

/*
 * 3. Strict Null Checks
 * ---------------------
 *
 * - TypeScript's `strictNullChecks` option ensures that `null` and `undefined` are not allowed where a value is expected, unless explicitly stated.
 * - When `strictNullChecks` is enabled, you cannot assign `null` or `undefined` to a variable unless its type includes `null` or `undefined`.
 *
 * Example without strict null checks (default behavior):
 */

let myString: string = 'Hello';
// myString = null;  // OK without strictNullChecks

/*
 * Example with strict null checks:
 * To allow null or undefined, you need to explicitly include them in the type:
 */

let myNullableString: string | null = 'Hello';
myNullableString = null; // OK with strictNullChecks

/*
 * You can also use optional chaining (`?.`) and nullish coalescing (`??`) to handle potential `null` or `undefined` values safely.
 *
 * Example:
 */

function greet(name: string | null) {
    console.log(`Hello, ${name ?? 'guest'}`); // If name is null, "guest" is used.
}

greet(null); // Output: Hello, guest

/*
 * Optional chaining (`?.`) allows you to access properties or methods of an object only if it's not `null` or `undefined`.
 *
 * Example:
 */

let employee: { name: string; address?: { city: string } } = { name: 'Alice' };
console.log(employee.address?.city); // Output: undefined (instead of throwing an error)

/*
 * Conclusion:
 * ----------
 * - TypeScript uses a structural type system, meaning that two types are compatible if they have the same shape, regardless of explicit declarations.
 * - Duck typing extends this idea by allowing any object with the necessary properties to be used where a specific type is expected.
 * - Strict null checks enforce that `null` and `undefined` are handled explicitly, improving type safety.
 */
