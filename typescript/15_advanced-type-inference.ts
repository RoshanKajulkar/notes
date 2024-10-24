/*
 * TypeScript Advanced Type Inference
 * ----------------------------------
 *
 * Type inference is one of TypeScript’s most powerful features, allowing the compiler to automatically infer types in certain contexts.
 * Understanding how TypeScript infers types in complex scenarios will help you write cleaner, more efficient code.
 *
 * 1. Type Inference in Function Parameters and Return Types
 * ---------------------------------------------------------
 *
 * - TypeScript can often infer types for function parameters and return types based on the function’s body and its usage.
 *
 * Example: Type inference in return types
 */

function add(a: number, b: number) {
    return a + b; // TypeScript infers the return type as `number`
}

const sum = add(5, 10); // `sum` is inferred as `number`

/*
 * - TypeScript infers that the return type of the `add` function is `number` based on the return statement.
 * - You don't need to explicitly annotate the return type unless you want to, or if the function body makes the return type ambiguous.
 */

/*
 * Example: Type inference in function parameters
 */

function greet(person: string) {
    return `Hello, ${person}!`; // The parameter `person` is explicitly typed, but return type is inferred as `string`
}

const message = greet('Alice'); // `message` is inferred as `string`

/*
 * - In this example, TypeScript infers the return type based on the return value but relies on an explicit type annotation for the `person` parameter.
 * - You can omit explicit types for parameters in cases where TypeScript can infer them from context, but this is generally less common.
 */

/*
 * 2. Contextual Typing
 * --------------------
 *
 * - Contextual typing is a form of type inference where TypeScript infers types based on the surrounding context in which a variable or function is used.
 * - It’s most commonly seen when working with anonymous functions (e.g., lambda expressions) and event handlers.
 *
 * Example: Contextual typing in arrow functions
 */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num); // `num` is inferred as `number` based on the type of the `numbers` array
});

/*
 * - The type of the `num` parameter is inferred as `number` because the `forEach` method is operating on an array of numbers.
 * - This is an example of contextual typing, where the surrounding context (the array) provides enough information to infer the type of the function's parameter.
 */

/*
 * Example: Contextual typing with event handlers
 */

const button = document.createElement('button');

button.onclick = function (event) {
    console.log(event.target); // `event` is inferred as a `MouseEvent`
};

/*
 * - In this case, TypeScript infers that the `event` parameter is a `MouseEvent` based on the context in which the function is used (as an event handler for `onclick`).
 * - You don’t need to explicitly annotate the type of `event` because TypeScript knows the expected type based on how the function is being used.
 */

/*
 * 3. Best Practices for Type Inference
 * ------------------------------------
 *
 * - While TypeScript’s type inference is powerful, there are times when it’s better to be explicit with types, especially in public-facing APIs and complex logic.
 * - Explicit types improve readability and prevent unexpected behavior, especially in larger codebases.
 *
 * When to use explicit types:
 * - When the inferred type is too complex or unclear
 * - When designing public APIs (e.g., function signatures, class methods)
 * - When you want to prevent implicit `any` types
 */

/*
 * Summary:
 * -------
 * - TypeScript infers types based on usage, which can simplify code by reducing the need for explicit type annotations.
 * - In function parameters and return types, inference works based on how the function is implemented and used.
 * - Contextual typing allows TypeScript to infer types from surrounding context, such as when working with arrow functions and event handlers.
 * - While inference is useful, explicitly specifying types is still important in certain cases to improve code clarity and prevent errors.
 */
