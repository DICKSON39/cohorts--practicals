"use strict";
// Example usage of the type aliases
const greetUser = (user) => {
    return `Hello, ${user.name}!`;
};
const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
};
console.log(greetUser(user)); // Output: Hello, John Doe!
let userId = 34567;
userId = "hhfhfdhhdh jjfjfjj";
const rect1 = {
    width: 24,
    height: 12,
};
const rect2 = {
    width: 20,
    height: 34,
};
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
console.log(getRectangleArea(rect1)); //288
console.log(getRectanglePerimeter(rect1)); //72
console.log(getRectangleArea(rect2)); //680
console.log(getRectanglePerimeter(rect2)); //108
const square1 = {
    width: 20,
    height: 20,
};
const getSquareArea = (Square) => {
    return Square.width * Square.height;
};
const getSquarePerimeter = (Square) => {
    return (Square.width * 2) + (Square.height * 2);
};
console.log(getSquareArea(square1)); // 400
console.log(getSquarePerimeter(square1)); //80
