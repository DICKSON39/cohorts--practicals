// Destructuring Assignment in ES6

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
const person = {
    name: 'John Doe',
    age: 30,
    job: 'Developer'
};
const { name, age, job } = person;
console.log(name); // John Doe
console.log(age); // 30
console.log(job); // Developer

// Nested Object Destructuring
const user = {
    id: 1,
    info: {
        username: 'johndoe',
        email: 'johndoe@example.com'
    }
};
const { info: { username, email } } = user;
console.log(username); // johndoe
console.log(email); // johndoe@example.com

// Default Values
const { a = 10, b = 5 } = { a: 3 };
console.log(a); // 3
console.log(b); // 5

// Function Parameter Destructuring
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
const user2 = { name: 'Jane Doe', age: 25 };
greet(user2); // Hello, my name is Jane Doe and I am 25 years old.