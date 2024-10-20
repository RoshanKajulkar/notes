// 1. Using try...catch

function riskyOperation() {
    throw new Error('Something went wrong!');
}

try {
    riskyOperation();
} catch (error) {
    console.error('An error occurred:', error.message);
}

// 2. Finally Block

try {
    throw new Error('An error occurred!');
} catch (error) {
    console.error('Caught an error:', error.message);
} finally {
    console.log('This will always run.');
}

// 3. Throwing Errors

function checkAge(age) {
    if (age < 18) {
        throw new Error('You must be at least 18 years old.');
    }
}

try {
    checkAge(15);
} catch (error) {
    console.error(error.message); // Outputs: You must be at least 18 years old.
}

// 4. Creating Custom Error Types

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    console.error(`${error.name}: ${error.message}`); // Outputs: CustomError: This is a custom error
}

// 5. Asynchronous Error Handling

fetch('https://api.example.com/data') // Use a valid API endpoint to test
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Using async/await for error handling

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Use a valid API endpoint to test
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call fetchData to execute
fetchData();
