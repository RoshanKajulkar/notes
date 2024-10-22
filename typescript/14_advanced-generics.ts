/*
 * TypeScript Advanced Generics
 * ----------------------------
 *
 * Advanced generics in TypeScript provide powerful tools for creating reusable and flexible code. This includes
 * adding constraints to generics, utilizing built-in utility types, and working with conditional types.
 *
 * 1. Generic Constraints
 * ----------------------
 *
 * - Generic constraints allow you to place restrictions on the types that can be used as generic arguments.
 * - You can use the `extends` keyword to constrain a generic type to another type.
 *
 * Example:
 */

function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

console.log(getLength('Hello')); // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3
// console.log(getLength(10));  // Error: Argument of type '10' is not assignable to parameter of type '{ length: number; }'.

/*
 * Explanation:
 * - In this example, the generic type `T` is constrained to types that have a `length` property.
 * - This ensures that only values with a `length` property (e.g., strings, arrays, objects) can be passed as arguments.
 */

/*
 * 2. Generic Utility Types
 * ------------------------
 *
 * - TypeScript provides several built-in generic utility types that make it easier to work with common type transformations.
 *
 * Here are some commonly used utility types:
 *
 * 2.1. `Partial<T>`
 * - Creates a new type where all properties of `T` are optional.
 *
 * Example:
 */

interface Person {
    name: string;
    age: number;
}

const updatePerson = (person: Partial<Person>) => {
    // All properties in Partial<Person> are optional
    console.log(person);
};

updatePerson({ name: 'Alice' }); // OK
updatePerson({ age: 30 }); // OK

/*
 * 2.2. `Pick<T, K>`
 * - Constructs a type by picking specific properties from another type.
 *
 * Example:
 */

type PersonName = Pick<Person, 'name'>;
const personName: PersonName = { name: 'Bob' }; // OK
// const personAge: PersonName = { age: 25 };  // Error: 'age' does not exist in type 'Pick<Person, "name">'.

/*
 * 2.3. `Record<K, T>`
 * - Constructs an object type with keys `K` of type `string | number | symbol` and values of type `T`.
 *
 * Example:
 */

const scores: Record<string, number> = {
    math: 90,
    english: 85,
};

/*
 * 2.4. `Omit<T, K>`
 * - Creates a type by omitting specific properties from another type.
 *
 * Example:
 */

type PersonWithoutAge = Omit<Person, 'age'>;
const personWithoutAge: PersonWithoutAge = { name: 'Charlie' }; // OK

/*
 * 3. Conditional Types
 * --------------------
 *
 * - Conditional types allow you to define types that depend on other types. You can think of them as the type-level equivalent of `if-else` statements.
 * - Conditional types follow this syntax: `T extends U ? X : Y`
 *   - If `T` extends `U`, the result is `X`; otherwise, it's `Y`.
 *
 * Example:
 */

type IsString<T> = T extends string ? "It's a string" : 'Not a string';

type A = IsString<string>; // "It's a string"
type B = IsString<number>; // "Not a string"

/*
 * 3.1. `infer` keyword
 * --------------------
 *
 * - The `infer` keyword is used in conditional types to infer the type of a variable within a conditional type.
 *
 * Example:
 */

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ReturnTypeOfAdd = GetReturnType<(a: number, b: number) => number>; // number
type ReturnTypeOfGreet = GetReturnType<(name: string) => string>; // string

/*
 * 3.2. Distributive Conditional Types
 * -----------------------------------
 *
 * - Conditional types distribute over unions. When a union type is passed to a conditional type, the conditional type is applied to each member of the union.
 *
 * Example:
 */

type ExcludeString<T> = T extends string ? never : T;
type Result = ExcludeString<string | number | boolean>; // Result: number | boolean

/*
 * Conclusion:
 * ----------
 * - Generic constraints let you restrict what types can be passed to a generic type.
 * - Utility types like `Partial`, `Pick`, `Record`, and `Omit` make it easier to transform types in common ways.
 * - Conditional types allow you to create types that adapt based on other types, providing a lot of flexibility in type definitions.
 * - The `infer` keyword and distributive conditional types further enhance the power of TypeScript's type system.
 */
