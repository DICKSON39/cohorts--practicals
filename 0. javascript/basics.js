import chalk from "chalk"
// let age = 25;
// let price  = 10.90;

// let gpa = 20.7;

// let fname = 'John';
// let school = "Nyeri sec"


// console.log(age);
// console.log(price);
// console.log(gpa);
// console.log(fname);
// console.log(school);


// // 
// function add (x, y){

//     return  x + y;
// }

// console.log(add(35, 45))

// function isEven (number){
//     if(number % 2 === 0){
//         return true;

//     }
//     else{
//         return false
//     }
// }

// console.log(isEven(11)) //False
// console.log(isEven(16))// true

// function isValidEmail(email) {
//     return email.includes('@') ? true : false;
// }
// console.log(isValidEmail("Bro@code.com"))//true

//Arrays

// let fruits = ["Banana", "Apple", "Mangoes", "Pineapple"];

// let mixed = ["Hello", 42, true, {key:"value"}]// This has string number boolean and objects

// // fruits.push("Orange") // adds to the last place
// // fruits.pop(); // Removes the last element
// // fruits.unshift("Grapes") // Adds To the first element
// // console.log(fruits.length)//prints the length of the array


// // console.log(fruits) //[ 'Banana', 'Apple', 'Mangoes', 'Pineapple' ]

// // console.log(fruits[0]);// This will print Banana
// // fruits[1] = "Cherry";
// // console.log(fruits) //[ 'Banana', 'Cherry', 'Mangoes', 'Pineapple' ] Replaced the Apple with Cherry

// let moreFruits = [...fruits, "pineapple", "Peach"]
// console.log(moreFruits) /// the ...fruits is used instead of inputting the whole list of arrays you want to target

// let[firstFruit, secondFruit] = fruits;
// console.log(firstFruit, secondFruit); // printed apple and Banana

// let numbers =[1, 2, 3, 4, 5,];
// let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
// let sum = numbers.reduce((total, num) => total + num, 0) // 15

// console.log(evenNumbers, sum)

// //Objects\\

// let person = {
//     name: "John",
//     age: 25,
//     hobbies: ["Reading", "Gaming"],
//     address:{
//         city: "New York",
//         country: "USA"
//     },
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
      
    
// };

// // console.log(person.name) // John
// // console.log(person.age)  // 25
// // person.age = 30; //Modify property

// // person.email = "john@example.com" // Add new property
// // delete person.hobbies; //Removes property

// //Object Destructuring

// // let {name, age} = person;
// // console.log(name, age) // john 30

// let newPerson = {...person, job: "Developer"}/// this is a spread operator
// console.log(newPerson)

// //Template literal
// let a = 10;
// const b = 20;

// let user = "Alice";
// console.log(`Hello, ${user}`);


// // Arrow Functions
// const add = (x, y) => x + y;
// console.log(add(5, 3)) // output is 8

// const userNames = (user  +  "Wanja");
// console.log(userNames)


// // default parameters

// const greet = (name = "Guest") => `Hello, ${name}`;
// console.log(greet()) // Output is Hello, guest

// //Promises 
// // const fetchData = () => {
// //     return new Promise((resolve, reject ) =>){
// //         setTimeout(()=> resolve("Data loaded"), 2000);
// //     }
// // }
// fetchData().then(data => console.log(data));


// let colors = ["red", "blue", "green"]

// colors.push("yellow")
// colors.shift()
// colors[1]= "purple"
// console.log(colors)


// const numbersId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenNumbers1 =numbersId.filter(numbersId => numbersId % 2 ===0)
// console.log(numbersId)
// console.log(evenNumbers1);


// let fruitsNew = ["apple", "banana", "mango"]
// let newFruits = [...fruitsNew, "orange", "grapes"] 
// let  [firstFruit, secondFruit] = fruitsNew


// console.log(newFruits)
// console.log(firstFruit, secondFruit,)


// let persons = {
//     name: "Alice",
//     age:25,
//     city: "Nairobi",
//     hobbies: ["reading", "gaming", "coding"]

// }
// let {name, age} = persons
// persons.email = "alice@example.com"
// delete persons.city;


// console.log(persons)


// const car = {brand: "Toyota", model: "corolla", year: "2022"};
// let {brand, model} = car;
// console.log(chalk.red(brand, model))
// const newCar = {...car, color: "red"}

// console.log(newCar)







// const multiply =(a, b) =>  a  * b 
// console.log(multiply(4, 5))




// function introduce (names, age2){
//     return (`Hello, my name is ${names} and I am ${age2} years old`)

// }

// console.log(introduce("Alice", 25))

// //FOR LOOP METHOD
// let array = [5, 10, 15, 20, 25];

// for (let i=0; i<array.length; i++){
//     console.log(array[i])
// }

// /// FOR IN METHOD

// const array1 = [5, 10, 15, 20, 25];
// for (let val in array1){
//     console.log(array1[val])
// }

// //WHILE LOOP

// let array2 = [5, 10, 15, 20, 25];

// let i = 0;
// while (i <array2.length) {
//     console.log(array2[i])
//     i++;
// }

// //DO WHILE LOOP

// let m = 0;
// do{
//     console.log(m);
//     m++
// }while (m < 6);


// // FOR...OF LOOOP

// const array3 = [5, 10, 15, 20, 25];
// for (let value of array3) {
//     console.log(value);
// }

// /// forEach () method
// const arrray = [5, 10, 15, 20, 25];
// arrray.forEach((value) => {
//     console.log(value)
// })


// ///. map() method

// const ar = [5, 10, 15, 20, 25];
// const newAr = ar.map((value) => {
//     return value
// });

// console.log(newAr)
let string1 = "He is a fullstack developer."
let string = " Dalton ndumia "
console.log(string1)//He is a fullstack developer.
console.log(string)//Dalton ndumia 
console.log(string.length)//15 including spaces
console.log(string.trim())//Dalton ndumia Removed the white spaces
console.log(string.indexOf("n"))//6
console.log(string.indexOf(2))// -1 meaning it was not found
console.log(string.lastIndexOf("n")) // 8
console.log(string.slice(1, 7 )) // Dalton
console.log(string.slice(8, 14)) // ndumia
console.log(string.startsWith(" D")) //True it start with a space
console.log(string.startsWith("M")) /// false there is no M
console.log(string.charAt(4)) //t
console.log(string.charAt(0)) // space
console.log(string.replace("Dalton", "Dickson")) //Dickson ndumia
console.log(string.toLowerCase()) // dalton ndumia
console.log(string.toUpperCase()) // DALTON NDUMIA
console.log(string.concat(string1).concat("He is the best!")) // Dalton ndumia He is a fullstack developer.He is the best!


let array = ['Dickson', 'Ndumia', 'Developer', 'Main']

array.push("Ndegwa") /// Addded Element to the last end
array.pop() // Removed the last element
array.unshift("Mnyeri") // Added Element to the start
array.shift() // Removes the first element
console.log(array.length) // Counts the number of elements in an array
console.log(typeof(array));//object
console.log(array)//[ 'Dickson', 'Ndumia', 'Developer' ]
let moreElements = [...array, "From Nyeri", "Teach 2 Give"]
console.log(moreElements) /// this is the spread operators


let object = {
    name:"dickson",
    age: 23,
    hobbies: ["Reading", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    },
    greet: function(){
    
        console.log(`Hello, my name is ${this.name}`)
    }


}

console.log(typeof(object.name))//String
console.log(typeof(object))//Object
console.log(typeof(object.age))//Number
console.log(typeof(object.hobbies))//Object / Arrays
console.log(typeof(object.address))//object
console.log(typeof(object.greet))//Function
console.log(object.name)
console.log(object["age"])
object.age = 50
object.email = "dicksonndumia19@gmail.com"
console.log(object)

//.Map() method Creates a new array by applying a function to each element of the original array
// Does not modify the original array

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num ) //This maps to the num and then the function to be carried is to take that mapped num and multiply it with the original num
console.log(squared) //[ 1, 4, 9, 16 ]

//.Filter ()method craetes a new array with elements that satisfy/meets a given condition 

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNumbers = numbers1.filter(num => num % 2 === 0) // action is to filter the only numbers that when divided by 2 gives zero
console.log(evenNumbers) //the following met the condition met [ 2, 4, 6, 8 ]

//. reduce() reduces an array tp a single value 

const sum = numbers1.reduce((acc, num) => acc + num, 0)
console.log (sum)


const fruits = ['apples', 'mangoes', 'peaches', 'apples', 'mangoes', 'bananas', 'apples']
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit]  || 0) + 1
    return acc
}, {})

console.log(count)


const products = [
    {name: "laptop", price: 1200},
    {name: "mouse", price: 25},
    {name: "keyboard", price: 45},
    {name: "monitor", price: 300},
    {name: "usb cable", price: 10}
];

// Step 1 Filter products that cost 50 or less
const affordableProducts = products.filter( product => product.price <= 50);

//step 2 Map to get the prices of the filterd products.
const prices = affordableProducts.map(product => product.price);

//step 3  Reduce to get the total cost of the filterd products
const totalcost = prices.reduce((acc, price) => acc + price, 0);

console.log(affordableProducts);/*{ name: 'mouse', price: 25 },
{ name: 'keyboard', price: 45 },
{ name: 'usb cable', price: 10 }* */
console.log(prices);//[ 25, 45, 10 ]
console.log(totalcost); // 80


// THE SHORTER METHOD
const total = products
.filter(products => products.price <=50)//keep only affordable prices
.map(products => products.price) /// get their prices
.reduce((acc, price) => acc + price) //sum them up

console.log(total)


//let -- Mutable value (can be changed or be reassigned)

let age = 30;
age = 27;  //Reassigning is allowed
console.log(age)


// Const --- Immutable values (cannot change or be rassigned)

const pi = 3.142;
//pi = 3.145 // error assignment to constant variable
console.log(pi) 


// this is a an example of block scope
{
    let y = 10;
    const x = 21;
    console.log(y)
    console.log(x)
}

// console.log(y)// Error cannot be defined
// console.log(x)// Error cannot be defined


//FUNCTIONS => it is declared using the function keyword
function greet (name){
    return `Hello ${name}`
    
}
console.log(greet("Alice")) // Hello Alice

// Arrow functions (=>)
 const greet1= (name) => `Hi, ${name}`;

 console.log(greet1("Charlie"));

 (function(){
    console.log("I am an IIFE")
 })();

 // Higher Order Functions => take another function as an argument or return a function
 function operate(a, b, callback){
    return callback(a, b);
 }
 const sum1 = (x, y) => x + y;

 console.log(operate(5, 3, sum1))


 // A Callback function that is passed  as an argument to another function

// //  function fetchData(callback){
// //     setTimeout(() => {
// //         callback("Data received");

// //     }, 2000);
// //  }

//  fetchData((message) =>console.log(message)); // data received after two seconds

 // A Recursive function Is a function that calls itself:

 function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
 }

 console.log(factorial(5))

 //Default Parameters
 // assigning dafault values to function parameters
 function greet2 (name = 'Guest'){
    return `Hello, ${name}`;
 }

 console.log(greet2());// Hello, guest
 console.log(greet2("Dickson"));

 //REST parameters(...args) Allows function to take multiple arguments as arrays

 function sum3 (...numbers){
    return numbers.reduce((total, num) => total + num, 0);
 }
 console.log(sum3(1, 2, 3, 4))//10

 let course = 'java script is sooo cool';

 console.log(course.length);
 console.log(course.length -1);
 console.log(course.length +1)

let courses = "    helllo namaste javascript  ";

console.log(courses.trim());
console.log(courses.trimStart())
console.log(courses.trimEnd());

let reduceEx = [29, 38, 475, 45].reduce((prev, curr) =>{
    return prev + curr;
})
console.log(reduceEx)

let multi = [2, 4, 5].reduce((first, second)=>{
    return first * second;

})
console.log(multi);

const food = [
    {id:'QEE1F123', name: 'Burger', price: 200},
    {id:'QEE1F124', name: 'Pizza', price: 700},
    {id:'QEE1F125', name: 'Hamburger', price: 400},
    {id:'QEE1F126', name: 'sandwich', price: 500},
    {id: 'QEE1F127', name: 'Ugali', price: 600}
];
console.log(food);

let newPrices = food.map((food)=> {
    let newPrices=food.price + 120;
    return `${food.name} new prices has increased to ${newPrices}`
})
console.log(`The new prices are:`)
newPrices.forEach(price => console.log(price));