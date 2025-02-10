/**
 * Demonstrates various types of loops in JavaScript.
 * 
 * For loop:
 * A loop that repeats a block of code a specified number of times.
 * 
 * While loop:
 * A loop that continues to execute as long as the specified condition is true.
 * 
 * Do-while loop:
 * A loop that executes the block of code once before checking the condition, and then continues to execute as long as the condition is true.
 * 
 * For-of loop:
 * A loop that iterates over the values of an iterable object (like an array).
 * 
 * For-in loop:
 * A loop that iterates over the enumerable properties of an object.
 */
//loops in Javascripts
// While loop 
//while the condition is true, execute
let j = 0;
while (j < 5) {
    console.log('While loop iteration:', j);
    j++;
}
// Output:
// While loop iteration: 0
// While loop iteration: 1
// While loop iteration: 2
// While loop iteration: 3
// While loop iteration: 4
//do..while loop.
//for loop
//for .. of loop
//for ...in loop

// For loop 

for (let i = 0; i < 5; i++) {
    console.log('For loop iteration:', i);
}
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }
  
// While loop 
//while the condition is true,excute
let m = 0;
while (j < 5) {
    console.log('While loop iteration:', j);
    j++;
}

// Do-while loop guarantees the execution of code before it is tested
let k = 0;
do {
    
    console.log('Do-while loop iteration:', k);
    k++;
} while (k < 5);

// For-of loop (used for iterating over iterable objects like arrays)
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log('For-of loop value:', value);
}
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

// For-in loop (used for iterating over the properties of an object)
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log('For-in loop key:', key, 'value:', object[key]);
    }
}

/*do..while loop example
let actualPassword = 'pa$$word';
let myInputPassword;
do {
    let passwordInputValue = prompt('enter a password');
    myInputPassword = passwordInputValue;

} while (myInputPassword   !==actualPassword);

alert('correct password');
the user will be prompted to enter the  password
*/
const myInfo = {
    name: 'Alamin',
    age: 45,
    bankBalance: "12 bob", 
    //function
    info: () => {
        const info = {
            idNumber: 222333444,
            country: "Kenya"
        }
        return `IdNumber: ${info.idNumber}  country: ${info.country}`
    }
}

for (const key in myInfo) {
   console.log(`${key}: ${myInfo[key]}`)
}