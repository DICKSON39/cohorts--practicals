function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 6));

interface Person {
  name: string;
  age: number;
}

let user: Person = { name: "John", age: 30 };
console.log(user);

type Album = {
  artist: string;
  title: string;
  year: number;
};

let selectedDiscography: Array<Album> = [
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

let albumWithPlayCount: [Album, number] = [
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1957,
  },
  100000,
];
console.log(albumWithPlayCount);

type MyTuple = [album: Album, playcount: number];

let albumWithPlayCount1: MyTuple = [
  {
    artist: "Tekashi",
    title: "Gooba",
    year: 2020,
  },
  1000000,
];
albumWithPlayCount1.push(
  {
    artist: "Cardi B",
    title: "Up",
    year: 2021,
  },
  100000
);

console.log(albumWithPlayCount1);

type ShoppingCart = {
  userId: string;
  //Adding items as array
  items: Array<string>;
  //Adding age as number
  age: number;
};

const ProcessCart = (cart: ShoppingCart) => {
  //Do something with the cart in here
};

ProcessCart({
  userId: "User123",
  items: ["item1", "item2", "item3"],
  age: 25,
});

type ingredientsType = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  instructions: string;
  ingredients: ingredientsType[];
};

let ProcessRecipe: Recipe = {
  title: "Chocolate Chip Cookie",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: ".....",
};
console.log(ProcessRecipe);

type MoreBookInfo = {
  year: number;
  genre: string;
};

type Books = {
  title: string;
  author: string;
  //You  can use description: MoreBookInfo[]
  //all you could do this description: Array<MoreBookInfo>
  description: Array<{ genre: string; year: number }>;
};

let bookInfo: Books = {
  title: "Blossoms of the Savannah",
  description: [{ year: 1900, genre: "Family and Violence" }],
  author: "Lelei leispei",
};

export type UserName = {
  firstname: string;
  secondname: string;
  age: number;
  location?: string;
  email: string;
  isStudent: boolean;
  description: Array<{ height: string; sanity: number }>;
};

export interface InfoType {
  name: string[];
  age: Array<number>;
  areChamps: boolean;
}

//Passing functions in typescript

// This is the syntax type functionName = (args: typeOfArrays) => ReturnType

type Mapper = (item: string) => number;

const mapOverItems = (items: string[], map: Mapper) => {
  return items.map(map);
};

const arrayOfItems = mapOverItems(["1", "2", "3"], (item) => {
  return Number(item);
});

console.log(arrayOfItems);

type mapString = (item: string) => string;

const mapOverStr = (items: string[], map: mapString) => {
  return items.map(map);
};

const mappingStr = mapOverStr(["John", "Kevin", "John"], (item) => {
  return item;
});

console.log(mappingStr);

//Syntaxconst functionName1 = ():returntype => {}

type User = {
  title: string;
  password: string;
};

const loggedInfo = (user: User): number => {
  return 1223;
};

//Async functions

type user1 = {
  username: string;
  password: string;
};

const userName1: user1 = {
  username: "John",
  password: "12345",
};

const getUser = async (id: string): Promise<user1> => {
  const response: Response = await fetch(`www.todo.com/api`);
  const jsonData = await response.json();
  return jsonData;
};

// Passing Generics types to  fuunctions

function processItems<T>(items: T[], processor: (item: T) => void): void {
  items.forEach(processor);
}

processItems([1, 2, 3], (item) => console.log(item * 2)); //2,4,6
processItems(["a", "b", "c"], (item) => console.log(item.toUpperCase())); //A B C

const data: Array<number> = [1, 2, 3, 4, 5, 6];

data.map((item) => item * 2);
