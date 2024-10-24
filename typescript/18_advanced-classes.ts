/*
 * TypeScript Advanced Class Features
 * ----------------------------------
 *
 * In this section, we explore advanced features of TypeScript classes, including abstract classes, class member visibility,
 * static properties and methods, and getters and setters.
 */

/*
 * 1. Abstract Classes
 * -------------------
 *
 * - Abstract classes are base classes that cannot be instantiated directly. They are used as blueprints for derived classes.
 * - You define abstract methods in an abstract class, which must be implemented by subclasses.
 */

abstract class Animal {
    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;

    // Regular method
    move(): void {
        console.log('The animal moves.');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Bark!');
    }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Bark!
myDog.move(); // Output: The animal moves.

/*
 * - The `Animal` class is abstract and defines an abstract method `makeSound`. The `Dog` class must implement `makeSound`.
 * - Abstract classes can have regular methods that can be inherited by subclasses.
 */

/*
 * 2. Class Members Visibility: public, private, and protected
 * -----------------------------------------------------------
 *
 * - TypeScript provides visibility modifiers for class members (properties and methods):
 *   - `public`: The default, accessible from anywhere.
 *   - `private`: Only accessible within the class itself.
 *   - `protected`: Accessible within the class and its subclasses.
 */

class Vehicle {
    public make: string;
    protected speed: number;
    private engine: string;

    constructor(make: string, speed: number, engine: string) {
        this.make = make;
        this.speed = speed;
        this.engine = engine;
    }

    public accelerate(): void {
        console.log(`${this.make} is accelerating.`);
    }

    protected honk(): void {
        console.log('Honking...');
    }

    private startEngine(): void {
        console.log('Starting engine...');
    }

    public test(): void {
        this.startEngine(); // OK, can access private method within the class
    }
}

class Car extends Vehicle {
    public drift(): void {
        console.log(`${this.make} is drifting at ${this.speed} km/h.`);
        // this.startEngine();  // Error: 'startEngine' is private and only accessible within the 'Vehicle' class.
        this.honk(); // OK, protected method is accessible in the subclass
    }
}

const myCar = new Car('Toyota', 120, 'V8');
myCar.accelerate(); // OK
myCar.drift(); // OK
// myCar.honk();  // Error: 'honk' is protected and not accessible outside the class.
// myCar.startEngine();  // Error: 'startEngine' is private.

/*
 * - `public` members (like `make`) are accessible from anywhere.
 * - `protected` members (like `speed` and `honk`) can be accessed within the class and its subclasses, but not outside.
 * - `private` members (like `engine` and `startEngine`) are only accessible within the class itself.
 */

/*
 * 3. Static Properties and Methods
 * --------------------------------
 *
 * - Static members belong to the class itself, not to instances of the class. They can be accessed directly using the class name.
 */

class MathUtil {
    static pi: number = 3.1416;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtil.pi * radius;
    }
}

console.log(MathUtil.pi); // Output: 3.1416
console.log(MathUtil.calculateCircumference(5)); // Output: 31.416

/*
 * - `pi` and `calculateCircumference` are static members. They are accessed directly using `MathUtil` without creating an instance.
 */

/*
 * 4. Getters and Setters
 * ----------------------
 *
 * - Getters and setters provide a way to define computed properties or validate data before setting a property.
 */

class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter
    get age(): number {
        return this._age;
    }

    // Setter
    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log('Invalid age. Age must be a non-negative number.');
        }
    }
}

const person = new Person(25);
console.log(person.age); // Output: 25

person.age = 30; // Sets age to 30
console.log(person.age); // Output: 30

person.age = -5; // Output: Invalid age. Age must be a non-negative number.

/*
 * - The getter method `age` allows us to access the `_age` property like a regular property (`person.age`).
 * - The setter method `age` allows us to validate the value before setting it. If the value is invalid (negative), it doesn't update the property.
 */

/*
 * Summary:
 * -------
 * - Abstract classes serve as blueprints for subclasses, containing abstract methods that must be implemented by derived classes.
 * - Visibility modifiers (`public`, `private`, `protected`) control access to class members from outside the class or within subclasses.
 * - Static properties and methods are class-level members that can be accessed without creating an instance.
 * - Getters and setters provide controlled access to class properties, enabling validation or computation.
 */
