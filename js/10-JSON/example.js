// 1. Parsing JSON

const jsonString = '{"name": "Alice", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Outputs: Alice
console.log(jsonObject.age); // Outputs: 30

// 2. Stringifying Objects

const obj = { name: 'Alice', age: 30 };
const jsonStringified = JSON.stringify(obj);
console.log(jsonStringified); // Outputs: {"name":"Alice","age":30}

// 3. Fetching JSON Data (example endpoint)

// Uncomment to use with a valid API endpoint
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);  // Process JSON data
//     })
//     .catch(error => console.error('Error:', error));

// 4. Common Issues

// Syntax Error Example
try {
    const invalidJsonString = '{ name: "Alice" }'; // Missing quotes around key
    const invalidJsonObject = JSON.parse(invalidJsonString);
} catch (error) {
    console.error('Error parsing JSON:', error.message); // Outputs: Error parsing JSON: Unexpected token n in JSON at position 2
}

// Type Mismatch Example
const jsonStringWithInvalidType = '{"age": "30"}'; // Age should be a number
const user = JSON.parse(jsonStringWithInvalidType);
console.log(typeof user.age); // Outputs: string
