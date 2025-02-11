import chalk from 'chalk';

console.log('Hello World!');
console.log(chalk.blue('My first program'));
console.log(chalk.green('My second program'));
console.log(chalk.red('My third program'));
console.log(chalk.yellow('My fourth program'));
// Variables
let name = 'John';
const age = 30;

// Data Types
let isStudent = true; // Boolean
let score = 95.5; // Number
let greeting = 'Hello'; // String
let colors = ['red', 'green', 'blue']; // Array
let person = { firstName: 'John', lastName: 'Doe' }; // Object

// Functions
function add(a, b) {
    return a + b;
}

// Conditionals
if (age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Arrow Functions
const multiply = (a, b) => a * b;

// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
};

fetchData().then(data => console.log(data));












