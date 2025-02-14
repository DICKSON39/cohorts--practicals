// Example of for...in loop
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log('Using for...in loop:');
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Example of for...of loop
const numbers = [1, 2, 3, 4, 5];

console.log('Using for...of loop:');
for (let number of numbers) {
    console.log(number);
}