"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
let user = { name: "John", age: 30 };
console.log(user);
let selectedDiscography = [
    {
        artist: "Black Beatles",
        title: "John Doe",
        year: 1933,
    },
    {
        artist: "Pop Smoke",
        title: "Dior",
        year: 2019,
    },
    {
        artist: "Migos",
        title: "Cocoon",
        year: 2023,
    },
];
//selectedDiscography.push({name:"Karma", type:"Cat"}) This will lead to an error
selectedDiscography.push({ artist: "Jack Harlow", title: "Johnn", year: 1900 });
console.log(selectedDiscography);
//Tuples
let albumWithPlayCount = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1957,
    },
    100000
];
console.log(albumWithPlayCount);
let albumWithPlayCount1 = [
    {
        artist: "Tekashi",
        title: "Gooba",
        year: 2020,
    },
    1000000
];
albumWithPlayCount1.push({
    artist: "Cardi B",
    title: "Up",
    year: 2021,
}, 100000);
console.log(albumWithPlayCount1);
const ProcessCart = (cart) => {
    //Do something with the cart in here
};
ProcessCart({
    userId: "User123",
    items: ["item1", "item2", "item3"],
    age: 25
});
let ProcessRecipe = ({
    title: "Chocolate Chip Cookie",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: ".....",
});
console.log(ProcessRecipe);
let bookInfo = ({
    title: "Blossoms of the Savannah",
    description: [
        { year: 1900, genre: "Family and Violence" }
    ],
    author: "Lelei leispei",
});
const mapOverItems = (items, map) => {
    return items.map(map);
};
const arrayOfItems = mapOverItems(["1", "2", "3"], (item) => {
    return Number(item);
});
console.log(arrayOfItems);
const mapOverStr = (items, map) => {
    return items.map(map);
};
const mappingStr = mapOverStr(["John", "Kevin", "John"], (item) => {
    return (item);
});
console.log(mappingStr);
const loggedInfo = (user) => {
    return 1223;
};
const userName1 = {
    username: "John",
    password: "12345"
};
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`www.todo.com/api`);
    const jsonData = yield response.json();
    return jsonData;
});
