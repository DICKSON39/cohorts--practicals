let sales: number = 12345678;
let course: string = "Typescript"
let is_published: boolean= true;
let level;

function render (document: any){
  console.log(document)}

  let numbers: number [] = [1,2,3]

  let user1:[number, string, number] = [1, 'Mosh', 2]
  user1[0] 

  const small = 1
  const medium = 2
  const large = 3

  //PascalCase

  enum Size { Small = 0, Medium, Large}

  let example1: string = "Hello World!";
  let example2: number = 42;
  let example3: boolean = true;
  let example4: symbol = Symbol();

  let example6: null = null;
  let example7: undefined = undefined;

  
let isReleased:boolean = true;

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
const logAlbumInfo = (
  title:string,
  trackcount:number,
  isReleased: boolean
) => {
  //The rest of function body
}

// function add(a, b) {
//   Parameter 'b' implicitly has an 'any' type.
//   Parameter 'a' implicitly has an 'any' type.
//     return a + b;
//   }

function add(a:number, b:number){
  return a + b
}
// let anyVariable: any = "This can be anything!";

// anyVariable(); // no error

// anyVariable.deep.property.access; // no error

// export const add = (a: boolean, b: boolean) => {
//   return a + b;
// Operator '+' cannot be applied to types 'boolean' and 'boolean'.
// };

export const addNums = (a:number, b:number) => {
  return a + b

}

const concatTwoStrings = (a:string, b:string) => {
  return [a, b].join
}

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


 let Example1: string = "Hello World!";
 let Example2: number = 42;
 let Example3 : boolean = true;
 let Example4 : symbol = Symbol();
//let Example5 : bigint = 123n


console.log(Example1)
console.log(Example2)
console.log(Example3)
console.log(Example4)


function addExamples (Example1:string, Example2:number) {

  return Example1 + Example2


}

console.log(addExamples(Example1, Example2))


// const handleFormData = (e: any) => {
//   e.preventDefault();

//   const data = new FormData(e.terget);

//   const value = Object.fromEntries(data.entries());

//   return value;
// };

function addd(a: number, b: number) {
  return a + b;
}

// addd("something", 2) //Argument of type 'string' is not assignable to parameter of type 'number'.

const results = addd(5, 7)

console.log(results)

const concatTwoStrings1 = (a: string, b: string) => {
  return [a, b].join(" ");
};

const results1 = concatTwoStrings1("Hello", "World");

console.log(results1)

 type User = {
  first:string,
  last:string

}

const concatName = (user:User) => {
 // Parameter 'user' implicitly has an 'any' type.
    return `${user.first} ${user.last}`;
  };

  const user:User = {first: "John", last: "Doe"}
  console.log(concatName(user))