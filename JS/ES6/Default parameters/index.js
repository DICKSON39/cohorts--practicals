function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!

function say(message = 'Hi'){
    console.log(message)

}

say()
say('hello')
//a default parameter is a fallback if a parameter was not provided
function sum(numA, numB = 5){
    console.log(numA + numB)
}

sum(10);//15
sum(5, 15)//20

//providing a parameter value will override a default 
// parameter


//Multiple parameters
function hello(greeting= 'hello', name='world'){
    console.log(`${greeting}, ${name}`)

}
hello()
hello('Hi')
hello('Hi', 'Dan')


//Arrow functions with default parameters
const sayHi = (message = 'HI', name='chelsea')  =>{
    console.log(message, name)
}
sayHi()
sayHi('hello')