
//This is the script for the index.html
function hello() {
    const heading = document.querySelector('h1');
    if (heading.innerHTML === "Hello!") {
        heading.innerHTML = "Goodbye"
    } else {
        heading.innerHTML = "Hello!"
    }

}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function() {
      const name=  document.querySelector("#name").value;

      alert(`hello, ${name}!`)
      console.log(name)
    }
})

const fruits = ["Banana", "apple", "Mangoes", "Kiwi"]

function display(){
  const showFruit = fruits.map(fruits => {
    return fruits
  } )

  document.querySelector("p").innerHTML=showFruit
}








