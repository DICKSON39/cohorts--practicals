//filter method creates a new array with all elments that pass the test
//must have a return keyword or return immedetate ()

/**array.filter((element, index, array) => {
    // Function body
  });
  
  array.filter(callbackfn, thisArg);
  **/

//Returns a New Array:
// Requires return opting the return will lead into an empty array
//immutability 

  const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 ,type: 'fruits'},
    { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400,type: 'fruits'},
    { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 ,type: 'fruits' },
    { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 ,type: 'food' },
];

const filteredFoods = availableFoods.filter((foodObjec)=>(
    foodObjec.price<450
))

console.log(filteredFoods)
/*
[
    { id: 'qwe2456yh', name: 'Meat', image: '🍖🍖', price: 500 },
    { id: 'qwe2785yh', name: 'Chicken', image: '🍗🍗', price: 1200 }
]
*/