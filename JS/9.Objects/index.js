const myObject = {}
console.log(typeof myObject)

//how we add data
//using dot notation
// objectname.key = value

myObject.firstName = 'Dickson'
myObject.secondName = 'Ndumia'
myObject.age = 30
myObject.marks = [123, 45, 67, 78]
myObject.info = { idNum: 333333, country: 'kenya' }

console.log(myObject)

/*
{
  firstName: 'Dickson',
  secondName: 'Ndumia',
  age: 30,
  marks: [ 123, 45, 67, 78 ],
  info: { idNum: 333333, country: 'kenya' }
}
 */

//object  can contain different types of data types
const Bruno = {
    fname: 'Bruno', //string
    age: 27, //number
    marks: [23, 45, 'D minus'], //arrays
    goveInfo: {
        idNumbeer: 1234567,
        location: 'Nairobi'
    },
    meanGrade: function (meanGrade) {//function
        return meanGrade
    }
}


//access modifies in objects
//1: dot notation
//2: index string type
//3. using Object.keys
//4: destructuring
//5: using the this keyword

//1: Using dot notation
//object name.key
console.log(Bruno.age) // 27

//2: index string type - pass on a key as a string []
//objaecName[keyName]

console.log(Bruno['age']) //27

//3: using Objectleys 
//The Object.keys() static method returns an array of a given 
// object's own enumerable string-keyed property names.

console.log(Object.keys(Bruno))

//let us access the age key
let arrayKeys = Object.keys(Bruno)
console.log(arrayKeys[1])

console.log(Bruno[Object.keys(Bruno)[1]])//27

const myInfo = {
    name: 'emmanuel',
    age: 30,
    hobbies: ["reading", 'writing'],
    isMarried: false,
    meanGrade: function grades (meanGrade){
        return 'Your mean grade is ' + meanGrade
    },
    keyFn: function(n) {
        return this [Object.keys(this)[n]]
    }
}

console.log(myInfo.keyFn(1))

