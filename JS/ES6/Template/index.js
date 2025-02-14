// This file demonstrates the use of template literals in ES6

// Basic usage of template literals
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// Multiline strings using template literals
const multilineString = `This is a string
that spans across
multiple lines.`;
console.log(multilineString);

// Expression interpolation
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.

// Tagged templates
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return 'Tagged template result';
}

const taggedResult = tag`Hello, ${name}! You have ${a + b} new messages.`;
console.log(taggedResult); // Output: Tagged template result