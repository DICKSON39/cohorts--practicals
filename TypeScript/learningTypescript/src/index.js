"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNums = void 0;
let sales = 12345678;
let course = "Typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user1 = [1, 'Mosh', 2];
user1[0];
const small = 1;
const medium = 2;
const large = 3;
//PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example6 = null;
let example7 = undefined;
let isReleased = true;
isReleased = true;
// isReleased = "yes"; is not assignable to type 'boolean'.
// Type 'string' is not assignable to type 'boolean'.
// const logAlbumInfo = (
//   title,
// Parameter 'title' implicitly has an 'any' type.
//   trackCount,
// Parameter 'trackCount' implicitly has an 'any' type.
//   isReleased,
// Parameter 'isReleased' implicitly has an 'any' type.
// ) => {
//   // rest of function body
// };
const logAlbumInfo = (title, trackcount, isReleased) => {
    //The rest of function body
};
// function add(a, b) {
//   Parameter 'b' implicitly has an 'any' type.
//   Parameter 'a' implicitly has an 'any' type.
//     return a + b;
//   }
function add(a, b) {
    return a + b;
}
// let anyVariable: any = "This can be anything!";
// anyVariable(); // no error
// anyVariable.deep.property.access; // no error
// export const add = (a: boolean, b: boolean) => {
//   return a + b;
// Operator '+' cannot be applied to types 'boolean' and 'boolean'.
// };
const addNums = (a, b) => {
    return a + b;
};
exports.addNums = addNums;
const concatTwoStrings = (a, b) => {
    return [a, b].join;
};
// export let example1: string = "Hello World!";
// export let example2: string = 42;
// Type 'number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.
// export let example3: string = true;
// Type 'boolean' is not assignable to type 'string'.
// Type 'boolean' is not assignable to type 'string'.
// export let example4: string = Symbol();
// Type 'symbol' is not assignable to type 'string'.
// Type 'symbol' is not assignable to type 'string'.
// export let example5: string = 123n;
// Type 'bigint' is not assignable to type 'string'.
// Type 'bigint' is not assignable to type 'string'.
let Example1 = "Hello World!";
let Example2 = 42;
let Example3 = true;
let Example4 = Symbol();
//let Example5 : bigint = 123n
console.log(Example1);
console.log(Example2);
console.log(Example3);
console.log(Example4);
function addExamples(Example1, Example2) {
    return Example1 + Example2;
}
console.log(addExamples(Example1, Example2));
// const handleFormData = (e: any) => {
//   e.preventDefault();
//   const data = new FormData(e.terget);
//   const value = Object.fromEntries(data.entries());
//   return value;
// };
function addd(a, b) {
    return a + b;
}
// addd("something", 2) //Argument of type 'string' is not assignable to parameter of type 'number'.
const results = addd(5, 7);
console.log(results);
const concatTwoStrings1 = (a, b) => {
    return [a, b].join(" ");
};
const results1 = concatTwoStrings1("Hello", "World");
console.log(results1);
const concatName = (user) => {
    // Parameter 'user' implicitly has an 'any' type.
    return `${user.first} ${user.last}`;
};
const user = { first: "John", last: "Doe" };
console.log(concatName(user));
