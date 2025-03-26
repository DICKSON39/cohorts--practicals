//console.log('Hello world');
//console.log('i like pizza');

//window.alert('This is an alert')
//window.alert('I like pizza')

//This is a comment

/*
  This
   is
   a
   Comment
   */

// document.getElementById('myH1').textContent= 'Hello';
//document.getElementById('myP').textContent='Welcome';

//Variables This is a container that stores a value.
/// behaves as if it were the value it contains.

//1. Declaration let x ='John'
//2. Assigning x = 100:

//let x;
//variables can't have a value
//x = 100
//console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof age);
// console.log(price);
// console.log(`the gpa is: ${gpa}`)//used to  tag a variable while printing results{$}

//strings
//series of characters(''  "")

//let firstName = "Dickson";
//let favouriteFood = 'pizza';
//let email = 'dickson@123';

//console.log(typeof firstName);
//console.log(`hello your name is ${firstName}`);
//console.log(`You like ${favouriteFood}`);
//console.log(`your email is ${email}`);

//To tag a string use`` as quotatiions.

//Boolean

// let online = false;

// console.log(typeof online);
// console.log(`Dickson is online ${online}`);

//let forSale = true;

//console.log(`Is this car for sale: ${forSale}`)


//let fullName = 'DICKSON NDUMIA';
//let age = 22;
//let isStudent = true;

//document.getElementById("p1").textContent= `your name is ${fullName}`;
//document.getElementById('p2').textContent = `your age is ${age} years age`;
//document.getElementById ('p3').textContent = `Enrolled at a school: ${isStudent}`;

/// arithmetic operators = operands(values, variables etc)
//  operators (+ - * /)
// ex. 11= x + 5;
//let students = 20;

//students= students + 1;
//console.log(students);

//let student = 10;
//car = car * 10; output 100
//car = car - 9; output 1
//car = car + 1;  output 11
//car = car / 2; output 5
// car = car **2; 900
//student = student % 2; //output 0
//let extrastudent = student % 3; //output =1
//console.log(extraStudent)


//   Shortcuts calculations
//student += 2;
//student -= 2;
//student *= 3;
//student /= 2;
//student **= 2
//console.log(student)

/*
operator precedence
1. Parentheses ()
2. exponents
3. multiplacation & division & modulo
4. addition and subtraction
*/

//let result = 1 + 2 * 3 + 4**2;

//console.log(result)

/*
How  to accept user's input

1. Easy way = window prompt
2. Proffesional way = HTML textbox


//let username;

//username = window.prompt('What is your username?');

//console.log(username)
let username;

document.getElementById('myname').onclick = function(){
    username =document.getElementById('mytext').value;
    document.getElementById('myh1').textContent = `hello ${username}`
    window.alert(`hello ${username}`)
}
    */


// type conversion = change the datatype of a value to another
//               (strings to numbers to booleans)

//let age = window.prompt("how old are you?");
//age = Number(age);

//age+=1;

//console.log (age, typeof age);
//type of is used to check what type of value.

//let x = '0';
//let y = '0';
//let z = '0';

//x = Number(x);
//y = String(y);
//z = Boolean (z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

// const  are variables that can't be changed

//const PI = 3.14159;
//let radius;
//let circumference;


//radius = Number(radius);



/*document.getElementById('mysubmit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myh3').textContent= circumference + "cm";
    
}
    
//counter progrmam

const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');

const countlabel = document.getElementById('countlabel');

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent= count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent= count;
}
resetbtn.onclick = function(){
    count*=0;
    countlabel.textContent= count;
}
    

// math = built-in object that provides a collection of properties and methods.

let x= 81;
let y =2;
let z;

//z = Math.round(x);
//z = Math.floor(x)
//z = Math.ceil(x);
//z= Math.pow(x, y);
//z=Math.sqrt(x)
//z = Math.cos(x);
//z= Math.tan(x);
//z = Math.abs(x)
console.log(z);


//Random Number generator

const min = 50;
const max = 100;
let ran_number =Math.floor( Math.random() *(max -min)) + min;

console.log(ran_number);



const mybutton = document.getElementById('mybutton');
const mylabel1 = document.getElementById('mylabell');
const mylabel2 = document.getElementById('mylabel2');
const mylabel3 = document.getElementById('mylabel3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function(){
    randomNum1 = Math.floor(Math.random() *max) + min;
    randomNum2 = Math.floor(Math.random() *max) + min;
    randomNum3 = Math.floor(Math.random() *max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}


//IF statements if a condition is true execute some code
// if not, do something else

let age = 25;

if(age>=18){
    console.log("You are old enough");
}

else{
    console.log ('you must be 18+')
}


let time = 9;
if(time< 12) {
    console.log ('Good morning');

}
else{
    console.log('Good afternoon')
}
    

//they can also be used in booleans:

let isStudent = true;

if(isStudent){
    console.log('You are a student');
}

else{
    console.log('You are not a student')
}


let age = 25;
let hasLicense = false;

if(age>= 18) {
    console.log('You are old enough to drive');

    if(hasLicense){
        console.log('You have your license'); // these are if sentnces nested in 
        another if statements.
    }
    else{
        console.log("you don't have your license yet");
    }
}

else{
    console.log('You must be 18+ to have a license')
}
    





*/

const mytext = document.getElementById('mytext');
const mysubmit = document.getElementById('mybutton');
const result = document.getElementById('result');
let age;

mysubmit.onclick = function() {

    age=mytext.value;
    age= Number(age);

    if(age >= 90){
    result.textContent = "You are TOO OLD to enter this site";
    }
    else if(age == 0){
        result.textContent = "You are TOO young to enter this site";
    }
    else if(age >= 18){
        result.textContent = "You are allowed to enter this site";
    }
    
    else if (age < 0){
        result.textContent = "You are not allowed to enter this site";
    }
    
    else {
        result.textContent = "You must be 18+ to enter this site";
    }
        
    

}
