// 1. Callbacks

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

// 2. Promises

const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Data fetched successfully');
    } else {
        reject('Error fetching data');
    }
});

promise
    .then(result => console.log(result)) // Outputs: "Data fetched successfully"
    .catch(error => console.log(error));

// 3. async and await

async function fetchDataAsync() {
    const response = await new Promise(resolve => {
        setTimeout(() => resolve('Data fetched'), 2000);
    });
    console.log(response); // Outputs: "Data fetched"
}

fetchDataAsync();

// 4. Chaining Promises

const fetchDataChain = new Promise(resolve => {
    setTimeout(() => resolve('Step 1: Data fetched'), 1000);
});

fetchDataChain
    .then(result => {
        console.log(result); // Outputs: "Step 1: Data fetched"
        return new Promise(resolve => {
            setTimeout(() => resolve('Step 2: Data processed'), 1000);
        });
    })
    .then(result => console.log(result)); // Outputs: "Step 2: Data processed"

// 5. Handling Multiple Promises

const promise1 = new Promise(resolve =>
    setTimeout(() => resolve('Promise 1'), 1000)
);
const promise2 = new Promise(resolve =>
    setTimeout(() => resolve('Promise 2'), 2000)
);

Promise.all([promise1, promise2]).then(results => console.log(results)); // Outputs: ["Promise 1", "Promise 2"]

Promise.race([promise1, promise2]).then(result => console.log(result)); // Outputs: "Promise 1"

// 6. Microtasks vs Macrotasks

console.log('Start');

setTimeout(() => console.log('Macrotask'), 0);
Promise.resolve().then(() => console.log('Microtask'));

console.log('End');
// Outputs: Start, End, Microtask, Macrotask
