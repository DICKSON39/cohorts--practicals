//Create a "close" button and append it to each list item

const myList = document.getElementsByTagName("li")
 let i;

 for(i = 0; i < myList.length; i++) {
    const span = document.createElement("span")
    const txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
 }

 //Click on a close button to hide the current list item
 const close = document.getElementsByClassName("close")
 let j;
 for (j =0; j < close.length; j++) {
    close[j].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"
    }
 }


 //Add a "checked" symbol when clicking on a list item
 const list = document.querySelector('ul');
 list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
 }, false)


 //Creating a new list item when clicking on the "Add" button

 function newElement () {
    const li = document.createElement("li")
    const inputValue = document.getElementById("myInput").value
    const t = document.createTextNode(inputValue)
    li.appendChild(t);

    if(!inputValue) {
        alert("Please write something!")
    }else{
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("myInput").value = ""

    const span = document.createElement("span")
    const txt = document.createTextNode("\u00D7")
    span.className= "close";
    span.appendChild(txt)
    let k;

    for (k = 0; k < close.length; k++) {
close[k].onclick=function() {
    const div = this.parentElement
    div.style.display ="none"
}
    }
 }
