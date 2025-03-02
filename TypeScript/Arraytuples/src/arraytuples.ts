console.log("We love you Typescript");

//Arrays you can describe the types of array in Typescriptt

//There are two syntax to do this
//1.1 The square bracket []

let albums: string[] = [
  "Rubber soul",
  "Revolver",
  "Sgt. Pepper's Lonely Hearts Club Band",
];

console.log(albums);

let dates: number[] = [1965, 1966, 1967];

console.log(dates);

//1.2 Is to use the Array type with anglebrackets <Type data>

let albums1: Array<string> = ["Runn", "Jog", "Climb", "Jump the cliff"];

console.log(albums1);

let dates1: Array<number> = [1234, 5678, 91012];

console.log(dates1);

///Array of Objects
type Album = {
  artist: string;
  title: string;
  year: number;
  name: string;
  type: string;
};

let selectedDiscography: Album[] = [
  {
    artist: "The Beatles",
    title: "Rubber Soul",
    year: 1965,
    name: "Classic Album",
    type: "Rock",
  },
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1966,
    name: "Legendary Album",
    type: "Rock",
  },
];

// Corrected push statement with all required fields
selectedDiscography.push({
  artist: "Taylor Swift",
  title: "Karma",
  year: 2022,
  name: "Karma",
  type: "Pop",
});

console.log(selectedDiscography);

//Tuples They let you specify an array with a fixed number of elements where each element has its
// own type

//Creating a tuple is similar to an array's square bracket syntax - except the square brackets
//  contain the types instead of abutting the variable name:


//tuple

let songs1: [string, number] = ["Rubbber", 1965]

//Array

let songs: Array<string> = [
     "Mangoes",
     "Sauti ",
     "Crazy"
]


