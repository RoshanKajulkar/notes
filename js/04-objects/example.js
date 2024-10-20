// 1. Creating Objects

const person = {
    name: 'John',
    age: 30,
    isStudent: false,
};

// 2. Accessing Object Properties

console.log(person.name); // Outputs: "John"
console.log(person['age']); // Outputs: 30

// 3. Modifying Object Properties

person.age = 31; // Modify existing property
person.gender = 'male'; // Add new property
delete person.isStudent; // Delete a property

console.log(person); // Outputs: { name: 'John', age: 31, gender: 'male' }

// 4. Methods in Objects

person.greet = function () {
    return 'Hello, ' + this.name + '!';
};

console.log(person.greet()); // Outputs: "Hello, John!"

// 5. `this` Keyword

const car = {
    brand: 'Toyota',
    getBrand: function () {
        return this.brand;
    },
};

console.log(car.getBrand()); // Outputs: "Toyota"

// 6. Nested Objects

const user = {
    name: 'Alice',
    address: {
        city: 'New York',
        zip: 10001,
    },
};

console.log(user.address.city); // Outputs: "New York"

// 7. Looping through Objects

for (let key in person) {
    console.log(key + ': ' + person[key]); // Outputs each property and value
}
