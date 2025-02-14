// Rest Operator
// The rest operator (...) allows us to represent an 
// indefinite number 
// of arguments as an array.

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Spread Operator
// The spread operator (...) allows an iterable 
// such as an array to be expanded in places
//  where zero or more arguments or elements are expected.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator can also be used to spread an object into another object.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

function names(...args){
    ///...args are indifinite arguments passed as an array
}

function say(a, b, c, d, ...chars){
    //...chars is an array holding all the remaining arguments
    //after the first four arguments
}