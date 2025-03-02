type IngredientType = {
    name: string
    quantity: string
}
type Recipe = {
    title: string;
    instructions: string;
    ingredients: Array <IngredientType>//Ingredient is form of an Array
    //ingredients: Array <{name:string; quantity:string}>
    //ingrients: IngridientType[]
  };
  
  const processRecipe = (recipe: Recipe) => {
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

  type ShoppingCart = {
    userId: string;
    items: Array<string>
  };
  
  const processCart = (cart: ShoppingCart) => {
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
  

  export type syntax = {
     syn1: string;
     syn2: string;
     syn3: number;
  }

  