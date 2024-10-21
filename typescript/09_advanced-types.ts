/*
 * TypeScript Advanced Types
 * -------------------------
 *
 * Advanced types provide more flexibility and control over type checking and handling.
 * They include powerful features like union types, type guards, and more.
 *
 * 1. Union Types
 * --------------
 *
 * - A union type allows a value to be one of several types. It is declared using the `|` (pipe) operator.
 * Example:
 */

type ID = string | number;
let userId: ID = 101;
userId = 'abc123'; // Both are valid

/*
 * 2. Intersection Types
 * ---------------------
 *
 * - Intersection types combine multiple types into one. A value must satisfy all the types in the intersection.
 * Example:
 */

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    position: string;
};

type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = {
    name: 'Alice',
    age: 30,
    employeeId: 1234,
    position: 'Developer',
};

/*
 * 3. Type Guards
 * --------------
 *
 * - Type guards help narrow down the type within conditional blocks. They are commonly used with `typeof`, `instanceof`, and custom type guard functions.
 *
 * Example: `typeof`
 */

function printID(id: string | number): void {
    if (typeof id === 'string') {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

printID('abc123');
printID(101);

/*
 * Example: `instanceof`
 */

class Car {
    drive() {
        console.log('Driving a car...');
    }
}

class Bike {
    ride() {
        console.log('Riding a bike...');
    }
}

function operateVehicle(vehicle: Car | Bike): void {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

let myCar = new Car();
let myBike = new Bike();

operateVehicle(myCar); // Output: Driving a car...
operateVehicle(myBike); // Output: Riding a bike...

/*
 * 4. Type Assertions (Casting)
 * ----------------------------
 *
 * - Type assertions tell TypeScript to treat a value as a specific type. It's similar to casting in other languages.
 * - You can use `as` or angle-bracket syntax for assertions.
 *
 * Example:
 */

let someValue: unknown = 'This is a string';
let stringLength: number = (someValue as string).length;

console.log(stringLength); // Output: 16

/*
 * 5. Discriminated Unions
 * -----------------------
 *
 * - Discriminated unions are a pattern used in TypeScript to handle union types more safely.
 * - It relies on having a common property (the "discriminator") to distinguish between the union types.
 *
 * Example:
 */

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape): number {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    } else {
        return shape.width * shape.height;
    }
}

console.log(calculateArea({ kind: 'square', size: 5 })); // Output: 25
console.log(calculateArea({ kind: 'rectangle', width: 10, height: 5 })); // Output: 50

/*
 * 6. Literal Types
 * ----------------
 *
 * - Literal types allow you to define exact values that a type can have.
 * - This is commonly used with union types to enforce specific, limited values.
 *
 * Example:
 */

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move('up'); // Valid
move('down'); // Valid
// move("forward");  // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'

/*
 * 7. Mapped Types
 * ---------------
 *
 * - Mapped types allow you to create new types by transforming properties of an existing type.
 * - This is useful for creating variations of an existing type.
 *
 * Example: Make all properties of a type optional
 */

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type PersonWithOptionalDetails = Optional<Person>;

let optionalPerson: PersonWithOptionalDetails = {
    name: 'Alice',
};

/*
 * 8. Type Narrowing
 * -----------------
 *
 * - Type narrowing is the process of refining a type to a more specific type within a block of code.
 * - TypeScript uses type guards to automatically narrow types in `if` blocks, `typeof`, `instanceof`, and more.
 *
 * Example:
 */

function printDetails(value: string | number | boolean): void {
    if (typeof value === 'string') {
        console.log(`It's a string: ${value}`);
    } else if (typeof value === 'number') {
        console.log(`It's a number: ${value}`);
    } else {
        console.log(`It's a boolean: ${value}`);
    }
}

printDetails('hello');
printDetails(42);
printDetails(true);

/*
 * Conclusion:
 * ----------
 * - Advanced types in TypeScript, such as union types, intersection types, type guards, and type assertions, allow for flexible and type-safe code.
 * - Discriminated unions and literal types enforce more precise type handling, and mapped types provide powerful transformations of existing types.
 */
