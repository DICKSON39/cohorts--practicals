"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const syntaxObjParam = (info) => {
};
const talkToAnimal = (animal) => {
    //rest of function body
    console.log(animal.name, animal.age, animal.type);
};
const cow = {
    name: "Cow", type: "Mamal", age: 23
};
talkToAnimal(cow);
//Lets make it optional
const talkToAnimal1 = (animal) => {
    //rest of function body
    console.log(animal.name, animal.age, animal.type);
};
const cow1 = {
    name: "cow", type: "Mamal"
};
talkToAnimal1(cow1);
let person = {
    name: "Alice",
    age: 25
};
console.log(person.name); // Alice
console.log(person.age); // 25
let person1 = (people) => {
    console.log(people.name, people.age);
};
const pupil = {
    name: "Alice", age: 33,
};
const pupil2 = {
    name2: "John", age2: 23
};
person1(pupil);
let SelectSyntax = [
    {
        syn1: "This is a string",
        syn2: "This is also a string",
        syn3: 123456,
    },
    {
        syn1: "This is a second string",
        syn2: "This is also a second string",
        syn3: 12837474,
    }
];
console.log(SelectSyntax);
