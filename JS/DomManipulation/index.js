/**
 What is the DOM?
The Document Object Model (DOM) is a programming interface for web documents.
 It represents the page so that programs can change the document structure, style, and content. 
 The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

 */

 //Accessing the DOM
//Running a function whenm the document is loaded
 window.onload = () => {
//Create a couple of elements in an otherwise empty HTML page
const heading = document.createElement("h1")
const headingText = document.createTextNode("Big Head!")
heading.appendChild(headingText)
document.body.appendChild(heading)
 }

 /**
  * DOM interfaces
  This guide is about the objects and the actual things you can use to manipulate the DOM hierarchy. 
  There are many points where understanding how these work can be confusing. For example, the object representing the HTML form element gets its name property from the HTMLFormElement interface but its className property from the HTMLElement interface. In both cases, 
  the property you want is in that form object.
  */

  const story = document.body.querySelector(".story");

  const setText = document.body.querySelector("#set-text")
  setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night..."
  })

  const clearText = document.body.querySelector("#clear-text")
  clearText.addEventListener("click", () => {
    story.textContent= "";
  })

  /**
   * Document.querySelector() to access the <div> and the buttons
EventTarget.addEventListener() to listen for button clicks
Document.createElement to create the element
Node.appendChild() to add the child
Node.removeChild() to remove the child.
   */


const parent = document.body.querySelector(".parent")

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    //Only add a child if we don't already have one
    //in addition to the text node "parent"

    if(parent.childNodes.length > 1) {
        return
    }
    const child = document.createElement("div")
    child.classList.add("child")
    child.textContent = "child"
    parent.appendChild(child)
})

const removeChild = document.body.querySelector("#remove-child")

removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child")
    parent.removeChild(child)
})