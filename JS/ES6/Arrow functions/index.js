

// Arrow functions in ES6

// Basic syntax
const add = (a, b) => a + b;

// Arrow function with no parameters
const greet = () => 'Hello, World!';

// Arrow function with a single parameter (no parentheses needed)
const square = x => x * x;

// Arrow function with multiple lines of code (use curly braces and return statement)
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Arrow functions do not have their own 'this' context
const person = {
    name: 'John',
    sayName: function() {
        setTimeout(() => {
            console.log((this.name)); // 'this' refers to the person object
        }, 1000);
    }
};

person.sayName();

let myVar = 0;function myFunction(myVar){
    this.myVar =2
    setTimeout(() =>  {
        this.myVar++
        console.log(this.myVar)
    }, 0)
}

myFunction()