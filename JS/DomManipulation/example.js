function change() {
    // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
const header = document.getElementsByTagName("h2").item(0)

 // The firstChild of the header is a Text node:
 header.firstChild.data = "A dynamic document"


 //Now heade is "A dynamic document"

 //Access the first paragraph

 const para = document.getElementsByTagName("p").item(0)
 para.firstChild.data ="This is the first paragraph"

 //Create a new Text node for the second paragraph

  const newText = document.createTextNode("This is the second paragraph.");

    // Create a new Element to be the second paragraph
    const newElement = document.createElement("p");

      // Put the text in the paragraph
  newElement.appendChild(newText);

   // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);


}

// const root = document.createElement("html");
// root.lang = "en";

// const head = document.createElement("head");
// const title = document.createElement("title");
// title.appendChild(document.createTextNode("My Document"));
// head.appendChild(title);

// const body = document.createElement("body");
// const header = document.createElement("h1");
// header.appendChild(document.createTextNode("Header"));
// const paragraph = document.createElement("p");
// paragraph.appendChild(document.createTextNode("Paragraph"));
// body.appendChild(header);
// body.appendChild(paragraph);

// root.appendChild(head);
// root.appendChild(body);
