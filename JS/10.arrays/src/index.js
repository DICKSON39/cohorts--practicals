// Introduction to Arrays in JavaScript

// An array is a special variable, which can hold more than one value at a time.
// You can create an array using the following syntax:

//Arrays in js are versatile and widely used to store and manipulate ordered collections
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Adding elements to an array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Finding the length of an array
console.log(fruits.length); // Output: 3

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach to iterate over an array
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// Arrays can hold different types of values
let mixedArray = [1, "Hello", true, null];
console.log(mixedArray);

const name = 'Dickson'
const number = 56
const countryInfo = { name: 'kenya', country: 'Nyeri' }
const info = [name, number, countryInfo]
console.log(info)

//accessing array indices
mark = [13, 45, 56, 78, 90];
//      0   1    2   3   4
//    -5    -4       -3   -2    -1 reverse index

//access modifiers in arrays

console.log(mark[0])//13
//arrayName[indexPosition]

//if we try to reassign the constvalue it will result into an error
//const fname= 'DIckson'
//fname ='Green'

const fullName = ['Dickson', 'Green']
fullName[0] = 'Master'
console.log(fullName[0] + fullName[1])

//Arrays are passed by reference not by value when use assign an array to 
// a new variable both variable points to the same array in
//  memory changes to on variable will affect the other


 
const marks = [23, 45, 67, 89]
let marksAtIndex2 = marks[2]
marksAtIndex2 = 55
console.log(marksAtIndex2)

//.push is a method used to add elements to the end of the array

let dennisInfo = []
dennisInfo.push(23)
console.log(`Dennis info`, dennisInfo)
dennisInfo.push({idNumber: 234567, country: 'Kenya'})
console.log(`Dennis info`, dennisInfo)


// .pop is a method used to remove the last element

console.log( dennisInfo.pop())

//shift() removes  the first element

console.log( dennisInfo.shift())

//indexOf() Used to get the position of a particular value in an arry
const cowInfo = ['Fresian', 'Brown', 150]
// an indexOf( expects you to pass the index)

console.log(cowInfo.indexOf())
console.log(cowInfo.indexOf('Fresian'))
console.log(cowInfo.indexOf(150))

//How to join arrays
//concat = used to combine two arrays

const markMwangi = ['Mark', 234567];
const stanley = ['Stanley', 5467];
const combineArrays = markMwangi.concat(stanley)
console.log(combineArrays)
console.log(markMwangi.concat(stanley))


//joining array element into one string use join()

const months = ['Jan', 'Feb', 'March', 'April']
//join array elements with optional seperators
console.log(months.join())

//adding unspaced
// It will remove the commas
console.log(months.join(''))

//adding space ' on the join
// will add space between the elements

console.log(months.join (' '))

//. reverse() used to reverse the array elements

console.log(['c', 'o', 'w'].reverse())

// this trick to check palindrome
console.log('dad' === 'dad'.split('').reverse().join(''))

// using splice() to remove replace or add elements in an array

const siz = ['Felistus', 'Nelly', 'Perl'];
siz.splice(1, 0, 'Fatma');
console.log(siz); // Outputs: [ 'Felistus', 'Fatma', 'Nelly', 'Perl' ]

siz.splice(1, 2, 'Najma', 'Jane');
console.log(siz); // Outputs: [ 'Felistus', 'Najma', 'Jane', 'Perl' ]

siz.splice(1,  0, 'Dickson',  'Dalton', 'Lucy')
console.log(siz);

console.log(siz.splice(1)); // Outputs: [ 'Najma', 'Jane', 'Perl' ]

//slice - use slice() to create a shallow copy of portion of an array
//slice will return an array from the starting index to the indexProvide minus on (1, 4) => index1 to i2

const broz = ['Mark', 'Alan', 'Ian', 'Stano'];
console.log(broz.slice(1, 3)); // Outputs: [ 'Alan', 'Ian' ]
