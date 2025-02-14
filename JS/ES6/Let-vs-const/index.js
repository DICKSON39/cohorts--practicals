/*function example() {
    if (true) {
      let x = 10;
      console.log(x); // 10
    }
    console.log(x); // ReferenceError: x is not defined
  }
    example();
    */
  
  

  var length = 30
  function area(){
    return length * length
  }

  console.log(area());

  const width = 20
  function calculate (){
    const width = 40;
    return width + width
  }

  console.log(calculate())

  const y = 20;
console.log(y); // 20

// Reassigning will cause an error
// y = 30; // TypeError: Assignment to constant variable

const obj = { key: 'value' };
obj.key = 'newValue'; // Allowed
console.log(obj.key); // 'newValue'

const z = 10; // Global scope

if (z === 10) {
    const z = 20; // Block scope (inside the if block)
    console.log(z); // 20
}

console.log(z); // 10