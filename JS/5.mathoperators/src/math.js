
//The Math namespace object contains static 
//  and methods for mathematical 
/*import { v4 } from 'uuid';
console.log(v4())*/
// constants and functions.

//Post increment
let salary = 90000
console.log(salary++)
console.log(salary)

//pre increment
let salary1 = 90000
console.timeLog(++salary1)
console.log(salary1)

const marks = [23, 45, 87, 67]


for (let index = 0; index < marks.length; index++) {
    console.log(` ${marks.indexOf(marks[index])}:  ${marks[index]}`)
    if (index === marks.indexOf(marks[index])) {
        console.log(true)
    } else {
        console.log(`I have stopped`)
    }

}

//pre decrement
let num3 = 9
console.log(--num3)

//post decrement

let num4 = 9
console.log(num4--)
console.log(num4)

//greater than or less than
console.log(10 < 11)
console.log(10 <= 11)
console.log(10 > 11)
console.log(11 >= 10)

//Math objexts
console.log(typeof Math) //object
//Math is an object in javascript
// Ratio of a circle circumference to its daimeter;approximately
//  3.142 
let radius = 7
console.log(Math.PI * radius ** 2)
console.log(Math.sqrt(16))

let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log('max number  is ', Math.max(...numbers))
console.log('min number is', Math.min(...numbers))

//Math.random => returns a psuedo-random number between 0 and 1.
const invoiceNumber = Math.random()
console.log(`BSNRTY${Math.floor(invoiceNumber)}`)

//we want to remove the decimal places

//returns the largest interger less than or equal to the input
console.log(Math.floor(5.5))
console.log(Math.floor(4.9))

//round static method that returns the vlaue of number rounded to the nearest number 
// to the nearest interger);
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1









