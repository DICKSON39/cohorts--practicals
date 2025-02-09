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
