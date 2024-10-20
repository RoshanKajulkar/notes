# Asynchronous JavaScript

JavaScript is single-threaded, meaning it can only do one thing at a time. However, it handles asynchronous operations (like API calls or reading files) using mechanisms like callbacks, promises, and `async/await`. These allow non-blocking code execution.

---

## 1. Callbacks

A **callback** is a function passed into another function as an argument and is executed after the completion of the outer function.

```js
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data');
}

fetchData(processData);
```
