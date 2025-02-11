/**
 * Demonstrates various JavaScript concepts including variable declarations, data types, 
 * string methods, array methods, and type coercion.
 * 
 * Variables:
 * - `let` and `const` are used for variable declarations.
 * - `let` allows reassignment, `const` does not.
 * - Variable names must start with a letter, underscore (_), or dollar sign ($).
 * 
 * Data Types:
 * - `typeof` operator is used to determine the type of a variable.
 * - Examples include string, number, boolean, undefined, object, and BigInt.
 * 
 * String Methods:
 * - `split()`: Splits a string into an array of substrings.
 * - `substring()`: Extracts parts of a string and returns the extracted parts in a new string.
 * - `substr()`: Extracts parts of a string, beginning at the specified position.
 * - `trim()`: Removes whitespace from both sides of a string.
 * - `toLowerCase()`: Converts a string to lowercase letters.
 * - `toUpperCase()`: Converts a string to uppercase letters.
 * - `charAt()`: Returns the character at a specified index in a string.
 * - `indexOf()`: Locates a specified value in a string.
 * - `includes()`: Checks if a string contains a specified value.
 * - `concat()`: Joins two or more strings.
 * - `replace()`: Replaces a specified value with another value in a string.
 * - `repeat()`: Repeats a string a specified number of times.
 * - `slice()`: Extracts a part of a string and returns a new string.
 * - `search()`: Searches for a specified value in a string and returns the position of the match.
 * 
 * Array Methods:
 * - `map()`: Creates a new array with the results of calling a provided function on every element in the calling array.
 * - `join()`: Joins all elements of an array into a string.
 * 
 * Type Coercion:
 * - Demonstrates how JavaScript handles type coercion with examples of string and number concatenation.
 * 
 * Examples:
 * - Variable declarations: `let age = 25; const schoolName = "Greenwood High";`
 * - String methods: `"Dickson".split(""); "Dickson".substring(0, 3);`
 * - Array methods: `names.map((name) => name.charAt(0)); firstNames.join(".");`
 * - Type coercion: `console.log(typeof ("5" + 3)); console.log("5" - 3);`
 * 
 * @example
 * // Variable declarations
 * let age = 25;
 * const schoolName = "Greenwood High";
 * 
 * // String methods
 * console.log("Dickson".split("")); // Output: [ 'D', 'i', 'c', 'k', 's', 'o', 'n' ]
 * console.log("Dickson".substring(0, 3)); // Output: Dic
 * 
 * // Array methods
 * let names = ["Dickson", "John", "Koech"];
 * let firstNames = names.map((name) => name.charAt(0));
 * console.log(firstNames); // Output: [ 'D', 'J', 'K' ]
 * console.log(firstNames.join(".")); // Output: D.J.K
 * 
 * // Type coercion
 * console.log(typeof ("5" + 3)); // Output: string
 * console.log("5" - 3); // Output: 2
 */
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

let nam = Number("100");
console.log(Number("100"));

let num2 = parseInt("50");
console.log(typeof parseInt("50"));

console.log(5 + true) // true is treated as 1.

let name = "John";
console.log(name.length); // Output: 4

let school = "Codecademy";
console.log(school.length); // Output: 10

//split() method this method is used to split a string into an array of substrings, and returns the new array
console.log("Dickson". split("")); // Output: [ 'D', 'i', 'c', 'k', 's', 'o', 'n' ]
console.log("Dickson". split("c")); // Output: [ 'Di', 'kson' ]
console.log("Dickson". split("c", 1)); // Output: [ 'Di' ] this will return an array with only one element
console.log("Robin_signh@example.com" .split("@")); // output

//substring() method this method is used to extract parts of a string and returns the extracted parts in a new string
let string = "Dickson";
console.log(string.substring(0, 3)); // Output: Dic this will return the string from the index specified to the index specified
console.log(string.substring(2, 5)); // Output: cks this will return the string from the index specified to the index specified
console.log(string.substring(1)); // Output: ickson this will return the string from the index specified to the end of the string

//substr method this method is used to extract parts of a string, beginning at the character at the specified position, and returns the specified number of characters
let me = "Dickson";
console.log(me.substr(0, 3)); // Output: Dic this will return the string from the index specified to the index specified
console.log(me.substr(2, 5)); // Output: ckson this will return the string from the index specified to the index specified
console.log(me.substr(1)); // Output: ickson this will return the string from the index specified to the end of the string

//trim() method this method is used to remove whitespace from both sides of a string
let fname = "     Dickson is a good man      "; // there is a space before and after the string 
console.log(fname.trim()); // Output: Dickson is a good

//toLowerCase() method this method is used to convert a string to lowercase letters
let institute = "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY";
console.log(institute.toLowerCase()); // Output: dedan kimathi university of technology

//toUpperCase() method
let nschool = "dedan kimathi university of technology"; 
console.log(nschool.toUpperCase()); // Output: DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY

//charAt() method this method is used to return the character at a specified index in a string
let str = "Dickson";
console.log(str.charAt(0)); // Output: D
console.log(str.charAt(3)); // Output: k
console.log(str.charAt(5)); // Output: o

//indexOf() method this method is used to locate a specified value in a string
let stre = "Dickson";
console.log(stre.indexOf("D")); // Output: 0
console.log(stre.indexOf("k")); // Output: 3

let his = "John keiyo kipkoech";
console.log(his.indexOf("k")); // Output: 5
// how to locate the second k
let first = his.indexOf("k");
console.log(his.indexOf("k", first + 1)); // Output: 11

//includes() method this method is used to check if a string contains a specified value
let strin = "Dickson";
console.log(strin.includes("D")); // Output: true
console.log(strin.includes("k")); // Output: true
console.log(strin.includes("z")); // Output: false

//concat() method   this method is used to join two or more strings
let firstName = "Dickson";
let lastName = "Koech";
console.log(firstName.concat("", lastName)); // Output: Dickson Koech
console.log(firstName.concat(" ", lastName, " is a good man")); // Output: Dickson Koech is a good man
console.log(firstName.concat(" " + "malik  is a good developer")); // Output: Dickson Koech is a good developer


//.map() method this method is used to create a new array with the results of calling a provided function on every element in the calling array
let names = ["Dickson", "John", "Koech"];
let firstNames = names.map((name) => name.charAt(0));
console.log(firstNames); // Output: [ 'D', 'J', 'K' ]

//.join() method this method is used to join all elements of an array into a string
let fullName = firstNames.join(".");
console.log(fullName); // Output: D.J.K

//.replace() method this method is used to replace a specified value with another value in a string
let stri = "Dickson is a developer";
console.log(stri.replace("developer", "programmer")); // Output: Dickson is a programmer

//.repeat() method this method is used to repeat a string a specified number of times
let repo = "Dickson";
console.log(repo.repeat(3)); // Output: DicksonDicksonDickson

//.slice() method this method is used to extract a part of a string and returns a new string
let slice = "Messi";
console.log(slice.slice(0, 3)); // Output: Mes
console.log(slice.slice(2, 4)); // Output: ss

//.search() method this method is used to search for a specified value in a string and returns the position of the match
let search = "Dickson";
console.log(search.search("D")); // Output: 0
console.log(search.search("k")); // Output: 3
console.log(search.search)
("i"); // Output: 2

// Function to capitalize the first letter in a sentence
// how to declare a variable
let empty = ""
var students = [];
const marks = {};


// naming convections 
//1: use cameLCase
let isLoggedIn = true

//2:Start with a letter, underscore, or dollar sign.
//const #dollars = 234 // this will lead into an error
let $dollars = 234
let _dollars = 234
let dollars = 234
let $dollarsInUsa = 700

//be descriptive - dont be verbose , be concise 
let myMumIsAGoodChefWhoCooksWell = "" // this is too verbose 
let mumsDish = "" // this is concise 

// Avoid names like these
let x = "John";
let y = new Date();
let z = true;


//Types of data structures for variables names  
//numbers, strings, booleans, nulls, undefined, objects, arrays, BigInts

//Numbers - integers, doubles, Big ints, 
console.log("I  am an integer", 4)
console.log("I  am an double", 4.23)
console.log(typeof 45)
//Big ints are for number greater than 2 power 53-1
//add an n after the big number
const elonsWealth = 150000000000000000000000n


//Strings - texts inside quotes '' or  ""
console.log('my name is Ali')
console.log('45')
console.log(typeof '45')

///Booleans - true or false  
const isAuthenticated = true
const isAdmin = false

// isAuthenticated ? <ShowProfile/> : <ShowAuthPage />

//undefined  - have not defined the variable 
let student;
console.log(student)


//data is empty, returns null - Nullable 
const noData = { number: null }
console.log(noData.number)


//object 
// {} - empty object 
let myData= {}
console.log(myData)
//to add data to object you use . notation 
myData.name = "Alamin Juma"
myData.university = "Sultan Qaboos"
console.log(myData)
console.log("myData is an ", typeof myData)


//Arrays 
// []
let isMarriend = false
const info = ["Pauline Wangui", 22, "DEKUT", {IdNumber: 3456453, nationality: "Kenyan"}, isMarriend]
console.log(info)
console.log("info is an ", typeof info)

//type coacion 
// Type coercion
//string concatinated to a number it becomes a string
console.log(typeof ("5" + 3)); // "53" (string concatenation)
console.log( "5" + 3); // "53" (string concatenation)


console.log( (5 + "3")); // "53" (string concatenation)
console.log(typeof (5 + "3")); // "53" (string concatenation)


console.log("5" - 3); // 2 (numeric subtraction)


//change string to number
console.log( Number('56'))
console.log(typeof Number('56'))

console.log(parseInt('56'))
console.log(typeof parseInt('56'))

//number to string
let  num = 56
console.log(num.toString())
console.log(typeof  num.toString())


