//It looks like you have a simple conditional statement in your JavaScript code. Here are some notes on conditions in JavaScript:
//conditions are basically an if statement that evaluates to true

1. /**If Statement**: Used to execute a block of code if a specified condition is true.
    ```javascript
    if (condition) {
        // code to be executed if condition is true
    }
    ```
    */

2. /**Else If Statement**: Used to specify a new condition to test if the first condition is false.
    ```javascript
    if (condition1) {
        // code to be executed if condition1 is true
    } else if (condition2) {
        // code to be executed if condition1 is false and condition2 is true
    }
    ```
    */

3. /*Else Statement**: Used to execute a block of code if none of the conditions are true.
    ```javascript
    if (condition1) {
        // code to be executed if condition1 is true
    } else if (condition2) {
        // code to be executed if condition1 is false and condition2 is true
    } else {
        // code to be executed if condition1 and condition2 are false
    }
    ```
    */

4. /**Comparison Operators**: Used to compare values.
    - `==` (equal to)
    - `===` (equal value and equal type)
    - `!=` (not equal)
    - `!==` (not equal value or not equal type)
    - `>` (greater than)
    - `<` (less than)
    - `>=` (greater than or equal to)
    - `<=` (less than or equal to)

5. **Logical Operators**: Used to combine multiple conditions.
    - `&&` (logical and)
    - `||` (logical or)
    - `!` (logical not)

Your code is a good example of using these concepts to check if a number is positive, negative, or zero.
*/

//Basic if statement
let showering = false;
if(showering) {
console.log('You are a good boy')
} else{
    console.log('Bad boy innit')
}

//if the condition was not satisfied there is a fallback with an else statement

let heShowered = false
if(heShowered) {
    console.log('You are  a good boy')
}

else{
    console.log('You are a bad boy')
}

let marks = 0
let grade = ''

function myGrade (mark){
    if (mark >100){
        grade='Too High'
    }
    else if(mark > 89){
        grade = 'A'
    }
    else if (mark >70){
        grade = 'B'
    }
    else if(mark > 50){
        grade = 'C+'
    }
    else if (mark >30){
        grade = 'D'
    }
    else {
        grade = 'E'
    }
    return grade

}

// Testing the myGrade function with a sample mark
console.log(`Your grade is: ${myGrade(89)}`)

//Later we will learn ES6 syntax for condition
//let functionName = condition ? executedThis1: (else) excecutedThis2

const myGrade1 = (mark) => {
    return mark >100 ? 'Too High' : //> this is else if this sets a limit 
         mark >=80 ? 'A': //Checks up to a hundred
         mark >=70 ? 'B' ://> this is else if
         mark >=50 ? 'C' ://> this is else if
         mark >30 ? 'D' ://> this is else if
         'invalid input'// This is the else block
}
console.log(myGrade1(80))