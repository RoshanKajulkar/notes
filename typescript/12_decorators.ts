/*
 * TypeScript Decorators
 * ---------------------
 *
 * Decorators are a special kind of declaration that can be attached to a class, method, property, or parameter. They allow you to
 * modify or extend the behavior of the target they are applied to.
 *
 * Decorators are essentially functions that are called with the target, name, and descriptor of the element being decorated.
 *
 * **Note**: To use decorators in TypeScript, the `experimentalDecorators` option must be enabled in `tsconfig.json`.
 *
 * Example:
 *
 * {
 *   "compilerOptions": {
 *     "experimentalDecorators": true
 *   }
 * }
 */

/*
 * 1. Method Decorators
 * --------------------
 *
 * - A method decorator is applied to a class method. It can be used to modify the behavior of the method or log information.
 * - It receives three arguments: the target (class prototype), the method name, and the method descriptor.
 *
 * Example:
 */

function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(
            `Method ${propertyKey} called with arguments: ${args.join(', ')}`
        );
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3); // Output: Method add called with arguments: 2, 3

/*
 * 2. Class Decorators
 * -------------------
 *
 * - A class decorator is applied to a class and can be used to modify or replace the class constructor.
 * - It receives a single argument: the constructor of the class being decorated.
 *
 * Example:
 */

function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@Sealed
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('John');
// Object is sealed, meaning properties can't be added or removed from the class or its prototype.

/*
 * 3. Parameter Decorators
 * -----------------------
 *
 * - A parameter decorator is applied to a parameter of a method. It can be used to add metadata or modify how parameters are handled.
 * - It receives three arguments: the target, the method name, and the index of the parameter in the method's signature.
 *
 * Example:
 */

function LogParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(
        `Parameter in method ${propertyKey} at index ${parameterIndex} is being decorated.`
    );
}

class User {
    greet(@LogParameter message: string): void {
        console.log(message);
    }
}

const user = new User();
user.greet('Hello!'); // Output: Parameter in method greet at index 0 is being decorated.

/*
 * 4. Property Decorators
 * ----------------------
 *
 * - A property decorator is applied to a class property. It allows you to add metadata to the property or modify its behavior.
 * - It receives two arguments: the target (class prototype) and the property name.
 *
 * Example:
 */

function ReadOnly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Book {
    @ReadOnly
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const book = new Book('TypeScript Handbook');
// book.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property

/*
 * Conclusion:
 * ----------
 * - Decorators in TypeScript can be applied to methods, classes, parameters, and properties to extend or modify their behavior.
 * - Method decorators allow modification of class methods, class decorators affect the class itself, parameter decorators work with method parameters,
 *   and property decorators modify or restrict class properties.
 * - Remember that decorators are an experimental feature, and you must enable `experimentalDecorators` in your TypeScript configuration to use them.
 */
