/*
 * TypeScript Interfaces
 * ---------------------
 *
 * An interface in TypeScript defines the structure of an object, meaning it specifies what properties and types an object can have.
 *
 * 1. Defining and Using Interfaces
 * --------------------------------
 *
 * Syntax:
 * - You define an interface using the `interface` keyword, followed by property names and their types.
 *
 * Example:
 */

interface Person {
    name: string;
    age: number;
    greet(): string; // Method signature
}

// Creating an object that follows the Person interface
let person: Person = {
    name: 'Alice',
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.name}`;
    },
};

console.log(person.greet()); // Output: Hello, my name is Alice

/*
 * Interfaces can also be used to define function types.
 * Example:
 */

interface Add {
    (a: number, b: number): number; // Function signature
}

let add: Add = (a: number, b: number): number => a + b;

console.log(add(5, 10)); // Output: 15

/*
 * 2. Optional Properties
 * ----------------------
 *
 * - Optional properties allow flexibility by making certain properties optional in the interface.
 * - You define an optional property by appending `?` after the property name.
 *
 * Example:
 */

interface Car {
    model: string;
    make: string;
    year?: number; // Optional property
}

let myCar: Car = {
    model: 'Mustang',
    make: 'Ford',
};

console.log(myCar); // Output: { model: 'Mustang', make: 'Ford' }

myCar.year = 1967; // Optional property can be added later
console.log(myCar); // Output: { model: 'Mustang', make: 'Ford', year: 1967 }

/*
 * 3. Readonly Properties
 * ----------------------
 *
 * - `readonly` properties cannot be modified after they are initialized.
 * - They ensure that once a value is set, it cannot be reassigned.
 *
 * Example:
 */

interface Book {
    title: string;
    readonly author: string;
}

let myBook: Book = {
    title: 'TypeScript Handbook',
    author: 'John Doe',
};

myBook.title = 'Advanced TypeScript'; // This is allowed
// myBook.author = "Jane Doe";  // Error: Cannot assign to 'author' because it is a read-only property.

/*
 * 4. Extending Interfaces
 * -----------------------
 *
 * - Interfaces can be extended, meaning one interface can inherit properties from another interface.
 * - This helps in reusing and organizing your types.
 *
 * Syntax:
 * interface NewInterface extends ExistingInterface { ... }
 *
 * Example:
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: 'Buddy',
    age: 5,
    breed: 'Golden Retriever',
};

console.log(myDog); // Output: { name: 'Buddy', age: 5, breed: 'Golden Retriever' }

/*
 * You can also extend multiple interfaces.
 * Example:
 */

interface Engine {
    horsepower: number;
}

interface Transmission {
    type: string;
}

interface Vehicle extends Engine, Transmission {
    model: string;
    make: string;
}

let myVehicle: Vehicle = {
    model: 'F-150',
    make: 'Ford',
    horsepower: 400,
    type: 'Automatic',
};

console.log(myVehicle); // Output: { model: 'F-150', make: 'Ford', horsepower: 400, type: 'Automatic' }

/*
 * Conclusion:
 * ----------
 * - Interfaces define the structure of an object and can include methods and properties.
 * - Optional and readonly properties provide flexibility and immutability where needed.
 * - Interfaces can be extended to create new, reusable structures, allowing inheritance and code organization.
 */
