# Error Handling in JavaScript

Error handling is crucial in programming to manage errors gracefully without crashing the application. JavaScript provides several mechanisms for catching and handling errors.

---

## 1. Types of Errors

JavaScript has various error types:

-   **SyntaxError**: Occurs when the code is syntactically incorrect.
-   **ReferenceError**: Occurs when a non-existent variable is referenced.
-   **TypeError**: Occurs when an operation is performed on an incompatible type.
-   **RangeError**: Occurs when a number is outside a valid range.
-   **EvalError**: Related to the `eval()` function.

---

## 2. Using `try...catch`

The `try...catch` statement allows you to test a block of code for errors. If an error occurs, control is passed to the `catch` block.

```js
try {
    // Code that may throw an error
    let result = riskyOperation();
} catch (error) {
    // Handling the error
    console.error('An error occurred:', error.message);
}
```
