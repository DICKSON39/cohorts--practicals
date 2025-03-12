// Define a type alias for a string
type Name = string;

// Define a type alias for an object
type User = {
  id: number;
  name: Name;
  email: string;
};

// Define a type alias for a function
type Greet = (user: User) => string;

// Example usage of the type aliases
const greetUser: Greet = (user) => {
  return `Hello, ${user.name}!`;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

console.log(greetUser(user)); // Output: Hello, John Doe!

type id = string | number;
let userId: id = 34567;
userId = "hhfhfdhhdh jjfjfjj";

// const getRectangleArea = (rectangle: {width: number; height: number}) => {
//     return rectangle.width * rectangle.height;
// };
// const getRectanglePerimeter = (rectangle: {
//     width: number;
//     height: number
// }) => {
//     return 2* (rectangle.width + rectangle.height)

type Rectangle = {
  width: number;
  height: number;
};

const rect1 = {
  width: 24,
  height: 12,
};

const rect2 = {
  width: 20,
  height: 34,
};

const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(getRectangleArea(rect1));//288
console.log(getRectanglePerimeter(rect1));//72
console.log(getRectangleArea(rect2)); //680
console.log(getRectanglePerimeter(rect2));//108


type SquareType = {
    width: number;
    height: number;
}

const square1 = {
    width: 20,
    height: 20,
}

const getSquareArea = (Square:SquareType) => {
    return Square.width * Square.height
}
const getSquarePerimeter = (Square:SquareType) => {
    return (Square.width*2) + (Square.height*2)
}

console.log(getSquareArea(square1))// 400
console.log(getSquarePerimeter(square1)) //80

