// Using array literal
let arr1 = []; 

// Using the Array() constructor
let arr2 = new Array(); 

console.log(arr1, arr2); // Both will print []

let arr = [1, 2, 3];
arr.push(4);  
console.log(arr); // [1, 2, 3, 4]


let arr3 = [1, 2, 3];
arr3.unshift(0);  
console.log(arr3); // [0, 1, 2, 3]

let arr4 = [1, 2, 4];
arr4.splice(2, 0, 3); // Insert '3' at index 2
console.log(arr4); // [1, 2, 3, 4]


let arr5 = [1, 2, 3];
arr5.pop();  
console.log(arr5); // [1, 2]


let arr6 = [1, 2, 3];
arr6.shift();  
console.log(arr6); // [2, 3]


//Removing elements in an array
let arr7 = [1, 2, 3, 4];
arr7.splice(2, 1); // Remove 1 element at index 2
console.log(arr7); // [1, 2, 4]

let arr8 = [1, 2, 3];
console.log(arr8.indexOf(2)); // 1 (found at index 1)
console.log(arr8.indexOf(4)); // -1 (not found)


/*
  Method	Purpose
push()	Add to the end
unshift()	Add to the beginning
splice(index, 0, value)	Add at a specific index
pop()	Remove from the end
shift()	Remove from the beginning
splice(index, count)	Remove from a specific index
concat()	Combine two arrays
indexOf()	Find the index of an element
find()	Get an object based on a condition
 */

//Flattenning a nested array
const numbers =[1, 2, [3, 4],[5,[6,7]]];
const flattenedNumbers = numbers.flat(2);
console.log(flattenedNumbers)

//array sorting
const fruits =['banana', 'apple', 'mango', 'orange']
fruits.sort();
console.log(fruits)

//Filter and find

const fruits2 = ['banana', 'apple', 'mango', 'orange'];

// Using filter
//filter returns a new array with alll elements that pass a certain test provided by a callback function
const filteredFruits = fruits2.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // Output: ['banana', 'orange']

// Using find
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

const foundFruit = fruits2.find(fruit => fruit.length > 5);
console.log(foundFruit); // Output: 'banana'

//find returns the value of the first element in the array that passes a certain test provided 
//by the callback function
const numbers4 = [1, 2, 3, 4, 5]
let firstNumbers = numbers4.slice(0, 3)
console.log(firstNumbers)