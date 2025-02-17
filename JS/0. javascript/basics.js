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


const email = 'dickson@19gmail.comnyeri';

let username = email.slice(0, email.indexOf("."));
let extension =email.slice(0, email.indexOf("n") + 1)

console.log(chalk.blue(username))
console.log(chalk.green(extension))


/*let userName= 'dickson'

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let newLetter = userName.slice(1);
newLetter = newLetter.toLowerCase();
userName = letter + newLetter;
console.log(userName)*/

const myObject = {}
console.log(chalk.green(typeof myObject))

myObject.firstName = 'Dickson'
myObject.secondName = 'Ndumia'
myObject.age = 21
myObject.marks = [123, 45, 67, 78]
myObject.info = {idNum: 222222, country: 'Kenya', city: 'Nyeri'}


console.log(myObject);

const Palmer = {
    fname:'Cole Palmer', // this is a string
    age: 23,   // this is a number
    marks: [23, 45, 'D minus'] , // These are Arrays
    goveInfo: {
        idNumber:123456789,
        location: "United Kingdom"
    },
    meanGrade: function(meanGrade){
        //function
        return meanGrade
    }

}

console.log(Palmer.age)
console.log(Palmer.fname)
console.log(Palmer.fname + Palmer.age)
const {fname} = Palmer
console.log (fname)
const{goveInfo:{idNumber, location}} = Palmer
console.log(idNumber + " " + location)
