/*
 * TypeScript Type Manipulation
 * ----------------------------
 *
 * TypeScript provides powerful features for manipulating types. You can extract properties from types, create new types from
 * existing ones, and even define recursive types. Let’s explore some key type manipulation techniques.
 *
 * 1. Keyof Type Operator
 * ----------------------
 *
 * - The `keyof` operator returns a union of all the keys in an object type. It allows you to create types based on the keys
 *   of another type.
 *
 * Example:
 */

interface Person {
    name: string;
    age: number;
    city: string;
}

type PersonKeys = keyof Person; // 'name' | 'age' | 'city'

let key: PersonKeys = 'name'; // OK
// key = "unknownKey";  // Error: Type '"unknownKey"' is not assignable to type 'PersonKeys'.

/*
 * - The `keyof` operator is useful for building utilities like mapping keys from one type to another.
 */

/*
 * 2. Indexed Access Types
 * -----------------------
 *
 * - Indexed access types allow you to retrieve the type of a specific property from another type using `T[K]`, where `T` is
 *   the type and `K` is a key.
 *
 * Example:
 */

type NameType = Person['name']; // string

/*
 * - In this case, `Person["name"]` retrieves the type of the `name` property from the `Person` type, which is `string`.
 *
 * - You can also use unions with indexed access types:
 */

type PersonProperties = Person['name' | 'age']; // string | number

/*
 * - This extracts the types of both the `name` and `age` properties from `Person` and creates a new union type.
 */

/*
 * 3. Recursive Types
 * ------------------
 *
 * - Recursive types allow types to refer to themselves. This is useful for defining types like trees, linked lists, or deeply
 *   nested structures.
 *
 * Example: Recursive type for a tree structure
 */

type Tree<T> = {
    value: T;
    children?: Tree<T>[];
};

const tree: Tree<string> = {
    value: 'root',
    children: [
        { value: 'child1' },
        {
            value: 'child2',
            children: [{ value: 'grandchild' }],
        },
    ],
};

/*
 * - The `Tree` type recursively refers to itself, allowing for nested tree-like structures.
 */

/*
 * 4. Utility Types
 * ----------------
 *
 * - TypeScript provides several utility types that simplify common type transformations. Let’s look at a few important ones:
 *
 * 4.1. `Omit<T, K>`
 * -----------------
 * - `Omit<T, K>` creates a new type by omitting the specified keys `K` from type `T`.
 *
 * Example:
 */

type PersonWithoutAge = Omit<Person, 'age'>;

const personWithoutAge: PersonWithoutAge = {
    name: 'Alice',
    city: 'New York',
}; // OK
// personWithoutAge.age = 30;  // Error: Property 'age' does not exist on type 'PersonWithoutAge'.

/*
 * 4.2. `Readonly<T>`
 * ------------------
 * - `Readonly<T>` creates a new type where all properties of `T` are readonly, meaning they can’t be reassigned after initialization.
 *
 * Example:
 */

const person: Readonly<Person> = {
    name: 'Bob',
    age: 25,
    city: 'Los Angeles',
};

// person.age = 30;  // Error: Cannot assign to 'age' because it is a read-only property.

/*
 * - This makes all properties of the `Person` object immutable.
 */

/*
 * 4.3. `Required<T>`
 * ------------------
 * - `Required<T>` creates a new type where all optional properties of `T` are now required.
 *
 * Example:
 */

interface PartialPerson {
    name?: string;
    age?: number;
}

type FullPerson = Required<PartialPerson>;

const personFull: FullPerson = {
    name: 'Charlie',
    age: 35,
}; // OK
// const incompletePerson: FullPerson = { name: "Charlie" };  // Error: Property 'age' is missing in type '{ name: string; }'.

/*
 * - `Required<T>` ensures that all properties must be present, even if they were originally optional.
 */

/*
 * 4.4. `Pick<T, K>`
 * -----------------
 * - `Pick<T, K>` creates a new type by picking the specified keys `K` from type `T`.
 *
 * Example:
 */

type PersonName = Pick<Person, 'name'>;

const personNameOnly: PersonName = { name: 'David' }; // OK
// const personWithAge: PersonName = { name: "David", age: 40 };  // Error: 'age' does not exist in type 'Pick<Person, "name">'.

/*
 * Summary:
 * -------
 * - The `keyof` operator extracts the keys of an object as a union type.
 * - Indexed access types allow you to retrieve the type of a specific property.
 * - Recursive types enable complex, nested structures that reference themselves.
 * - Utility types such as `Omit`, `Readonly`, `Required`, and `Pick` simplify common type transformations and manipulations.
 */
