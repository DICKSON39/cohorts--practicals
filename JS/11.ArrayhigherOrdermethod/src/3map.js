// The map method creates a new array populated with the results of calling a
// provided function on every element in the calling array. Unlike forEach,  map returns a
// new array and does not modify the
//  original array.

/*
array.map(callbackfn, thisArg);
 */

let runners = ["Kiplimo", "Kipchumba", "Koskei"];
let newRunnerMsg = runners.map(function (runner) {
  return `${runner} runs a 100 meters`;
});

console.log(runners);         // ["Kiplimo", "Kipchumba", "Koskei"]
console.log(newRunnerMsg);    
// ["Kiplimo runs a 100 meters", "Kipchumba runs a 100 meters", 
// "Koskei runs a 100 meters"]

const initialFoodPrices = [
    { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 ,type: 'fruits'},
    { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400,type: 'fruits'},
    { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 ,type: 'fruits' },
    { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 ,type: 'food' },
];
const newFoodArrays = availableFoods.map((foodObj)=>
{
    return foodObj
})

newFoodArrays//this returns a new array containing food

let newPrice = initialFoodPrices.map((foodObj)=>
{
    return foodObj.price + 50
})
newPrice