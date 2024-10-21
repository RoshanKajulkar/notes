/*
 * TypeScript Classes
 * ------------------
 *
 * TypeScript classes are similar to classes in other object-oriented languages like Java or C#.
 * They encapsulate data (properties) and behaviors (methods).
 *
 * 1. Defining Classes and Constructors
 * ------------------------------------
 *
 * - A class is defined using the `class` keyword.
 * - The constructor method is used to initialize the object.
 *
 * Example:
 */

class Person {
    name: string;
    age: number;

    // Constructor to initialize properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): string {
        return `Hello, my name is ${this.name}.`;
    }
}

let john = new Person('John', 25);
console.log(john.greet()); // Output: Hello, my name is John

/*
 * 2. Public, Private, and Protected Access Modifiers
 * --------------------------------------------------
 *
 * - TypeScript provides three access modifiers to control visibility:
 *    a. `public`: Default, accessible from anywhere.
 *    b. `private`: Only accessible within the class it is defined.
 *    c. `protected`: Accessible within the class and its subclasses (derived classes).
 *
 * Example:
 */

class Employee {
    public name: string; // Accessible everywhere
    private salary: number; // Accessible only within this class
    protected department: string; // Accessible within this class and its subclasses

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Method to access private property
    public getSalary(): number {
        return this.salary;
    }
}

let employee = new Employee('Alice', 50000, 'Engineering');
console.log(employee.name); // Output: Alice
// console.log(employee.salary);  // Error: 'salary' is private and not accessible
console.log(employee.getSalary()); // Output: 50000

/*
 * 3. Readonly Properties
 * ----------------------
 *
 * - `readonly` properties can be initialized only once and cannot be modified afterward.
 * - They provide immutability for class properties.
 *
 * Example:
 */

class Vehicle {
    public readonly model: string;

    constructor(model: string) {
        this.model = model;
    }

    describe(): string {
        return `This vehicle is a ${this.model}.`;
    }
}

let car = new Vehicle('Tesla Model S');
console.log(car.model); // Output: Tesla Model S
// car.model = "Tesla Model X";  // Error: Cannot assign to 'model' because it is a read-only property.

/*
 * 4. Inheritance and Extending Classes
 * ------------------------------------
 *
 * - Classes in TypeScript can extend other classes, inheriting their properties and methods.
 * - The `extends` keyword is used to define a subclass that inherits from a parent class.
 * - The `super` keyword is used to call the constructor and methods of the parent class.
 *
 * Example:
 */

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

// Dog is a subclass of Animal
class Dog extends Animal {
    public breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call parent class constructor
        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name}, the ${this.breed}, is barking.`);
    }
}

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.move(); // Output: Buddy is moving.
myDog.bark(); // Output: Buddy, the Golden Retriever, is barking.

/*
 * Conclusion:
 * ----------
 * - Classes in TypeScript allow object-oriented programming with access modifiers (`public`, `private`, `protected`), constructors, and methods.
 * - `readonly` properties ensure immutability.
 * - Inheritance enables code reuse and specialization of classes by extending existing ones.
 */
