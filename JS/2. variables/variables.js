let age = 25;
const schoolName = "Greenwood High"
let StudentList = []

// const meaning the value can't be changed when set.
// let Is used for variables that can't be changed.
// This is the old way of declaring variables.

// let 1stplace = " John "; is invalid since you can't start a variable with a number.

//Variables only start with an underscore (_) a letter or a dollar sign($)

console.log(typeof "Hello");
//The output is a string.
console.log(typeof 99);
//The output is a number.
console.log(typeof true);
//The output is a boolean
console.log(typeof undefined);
//The output is undefined
//let data = ["kenya", 34, false, {country: "USA"}, null"];
// "Kenya" = string
// 34 = number
// false = boolean
// {country: USA } = object
// null = Null

let totalMoney = 20000000000000n;
console.log(typeof 99999999n);

let person ={
    name:"Bob",
    age: 34,
    city: "nyeri"
};


person.email = "bob@example.com";

console.log(person);

let fruit =[
    "Bananas",
    "Avocados",
    "Strawberry"
];

console.log(fruit [1]);

console.log("5" + 2); // output is "52" (string concatenation)
console.log("5" - 2); // output is "3"(numeric subtraction)

let num = Number("100");
console.log(Number("100"));

let num2 = parseInt("50");
console.log(typeof parseInt("50"));

console.log(5 + true) // true is treated as 1.
