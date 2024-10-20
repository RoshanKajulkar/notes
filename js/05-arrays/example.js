// 1. Creating Arrays

const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'apple', true, null];

// 2. Accessing and Modifying Elements

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Outputs: "apple"
fruits[1] = 'blueberry'; // Modify the second element
console.log(fruits[1]); // Outputs: "blueberry"

// 3. Common Array Methods

// push and pop
numbers.push(6);
console.log(numbers); // Outputs: [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]

// shift and unshift
numbers.shift();
console.log(numbers); // Outputs: [2, 3, 4, 5]

numbers.unshift(0);
console.log(numbers); // Outputs: [0, 2, 3, 4, 5]

// 4. Array Length

console.log(fruits.length); // Outputs: 3

// 5. Looping through Arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Outputs: "apple", "blueberry", "cherry"
}

// for...of loop
for (let fruit of fruits) {
    console.log(fruit); // Outputs: "apple", "blueberry", "cherry"
}

// 6. Array Methods (map, filter, reduce)

// map
const squares = numbers.map(num => num * num);
console.log(squares); // Outputs: [0, 4, 9, 16, 25]

// filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Outputs: [0, 2, 4]

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs: 14

// 7. Multidimensional Arrays

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[1][2]); // Outputs: 6
