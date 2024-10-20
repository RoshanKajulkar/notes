// 1. Conditional Statements

let age = 20;

// if, else if, else
if (age < 18) {
    console.log('You are a minor.');
} else if (age >= 18 && age <= 65) {
    console.log('You are an adult.');
} else {
    console.log('You are a senior citizen.');
}

// switch statement
let fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log("It's a banana!");
        break;
    case 'apple':
        console.log("It's an apple!");
        break;
    default:
        console.log('Unknown fruit');
}

// 2. Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// while loop
let count = 0;

while (count < 5) {
    console.log(count); // Outputs: 0, 1, 2, 3, 4
    count++;
}

// do...while loop
let num = 0;

do {
    console.log(num); // Outputs: 0, 1, 2, 3, 4
    num++;
} while (num < 5);

// 3. for...of and for...in loops

// for...of loop (for arrays)
let arr = [1, 2, 3, 4, 5];

for (let num of arr) {
    console.log(num); // Outputs: 1, 2, 3, 4, 5
}

// for...in loop (for objects)
let person = {
    name: 'John',
    age: 30,
};

for (let key in person) {
    console.log(key + ': ' + person[key]); // Outputs: name: John, age: 30
}

// 4. Break and Continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // Outputs: 0, 1, 2
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // Outputs: 0, 1, 2, 4
}
