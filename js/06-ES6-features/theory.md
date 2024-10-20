# ES6 Features in JavaScript

ES6 introduced several important features that make JavaScript more powerful and easier to write.

---

## 1. `let` and `const`

### `let`

The `let` keyword allows you to declare block-scoped variables.

```js
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Outputs: 20 (inside block)
}
console.log(x); // Outputs: 10 (outside block)
```
