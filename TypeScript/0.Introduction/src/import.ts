import { InfoType } from "../src/index";
import { UserName } from "../src/index";

const Info:InfoType = {
    name: ["John", "Emmah", "Joseph"],
    age: [12, 13, 15, 16],
    areChamps: true
  }
  
 const Info2:InfoType = {
    name: ["J", "k", "l"],
    age: [22, 23, 24,45],
    areChamps: false
 }

 console.log(Info)
 console.log(Info2)


 let newUser:UserName = {
    firstname: "Dickson Ndumia",
    secondname: "Ndegwa john",
    age: 20,
    email: "@daltonmnyeri19.com",
    isStudent: true,
    description: [
      {height:"short", sanity: 10 },
      
    ]
  
  }
  
  console.log(newUser)
  
  type digits= {
    numbers:number[];

  }
  const newnums:digits = {
    numbers: [1,2,3,4,5,6]
  }

//   const onlyOddNumbers = newnums.filter(num => {
//     return num % 2 !==0
//   })

//   console.log(onlyOddNumbers)