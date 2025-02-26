"use strict";
const processRecipe = (recipe) => {
    // Do something with the recipe in here
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
});
const processCart = (cart) => {
    // Do something with the cart in here
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
});
// const setRange = (range: [number, number]) => {
//   const x = range[0];
//   const y = range[1];
//   // Do something with x and y in here
//   // x and y should both be numbers!
//   type tests = [
//     Expect<Equal<typeof x, number>>,
//     Expect<Equal<typeof y, number>>
//   ];
// };
