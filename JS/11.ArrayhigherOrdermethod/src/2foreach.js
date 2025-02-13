// The forEach iterates through each element in an array and performs 
//No return value
// it is mutable - modifies the original array
/* 
  arrayName.forEach(callbackfn)
  //callbackfn - (value )=> {}without return value
  //callbackfn - (value) => {return value} with return
  //callbackfn - (value) => (value)// with return directly
*/

let runners = ['Kiplimo', 'Kipchumba', 'Koskei'];
runners.forEach(function(runner) {
    console.log(`${runner} runs a 100 meters`);
});

/*[//]: # (Kiplimo runs a 100 meters)

[//]: # (Kipchumba runs a 100 meters)

[//]: # (Koskei runs a 100 meters)
*/

let marathonRunners = ['John', 'Mark', 'Josh', 'Kim']
marathonRunners.forEach((runnerr) => {
console.log( `${runnerr}  runs 10km race`)
})


let marks = [23, 45, 67, 89, 100]
const average = marks.forEach((singlemark) => {
    let total = 0
    total += singlemark//total = total + singlemark
    console.log(total)
})
