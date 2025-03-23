//This is the script for the counter.html

if(!localStorage.getItem('counter')) {
  localStorage.setItem('counter',0);
}


function  less () {
    let counter = localStorage.getItem('counter')
    counter = counter - 1
    document.querySelector('h1').innerHTML =counter;
    localStorage.setItem('counter', counter)

    if(counter% 10 === -1 ) {
        alert(`The number ${counter} is now a negative`)
    }

}
function count() {
    let counter = localStorage.getItem('counter')
    counter++
   

    document.querySelector("h1").innerHTML = counter
    localStorage.setItem('counter', counter)

    if (counter % 10 ===0) {
        alert(`the total is ${counter}`)
    }
     //counter++;
    //Alert(counter)

}

function reset() {
    let counter = localStorage.getItem('counter')
    counter = 0
    document.querySelector("h1").innerHTML =counter
    localStorage.setItem('counter', counter)
    if(counter === 0) {
        alert(`the number is reset to:${counter}`)
    }
}


//This adding an interval for the counter to count it for itself:
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count

    //setInterval(count, 2000)
})