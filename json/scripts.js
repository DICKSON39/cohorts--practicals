document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");

            productList.addEventListener('click', event =>{
                event.target.style.backgroundcolor = 'tomato';
            }

            )

            products.forEach(product => {
                const li = document.createElement("li");
                li.innerHTML = `
                
                    <strong>${product.name}</strong> - $${product.price}
                    <p>${product.description}</p>
                    <p><em>Category:</em> ${product.category}</p>
                    <p><strong>Stock:</strong> ${product.stock}</p>
                    <button class="buy-btn">Buy Now</button>

                    <hr>
                `;
                productList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});

/*eventListener Listens for specific events to create interactive web pages events
: click, mouseover, mouseout .addEventListener(event, callback)

. DOMContentLoaded Event Listener
js
Copy
Edit
document.addEventListener("DOMContentLoaded", function () { 
This ensures the JavaScript runs only after the HTML document is fully loaded.
Without this, the script might try to access elements before they exist.
2. Fetching Data from the API
js
Copy
Edit
fetch("http://localhost:3000/products")
    .then(response => response.json()) 
    .then(products => { 
The fetch function makes a request to the given URL (http://localhost:3000/products).
.then(response => response.json()) converts the response from JSON format to a JavaScript object.
.then(products => {...}) runs the next block of code after the data is successfully retrieved.
3. Selecting the Product List Element
js
Copy
Edit
const productList = document.getElementById("product-list");
This finds the <ul> or <div> (whatever it is) with the ID "product-list" in the HTML file.
This is where all the product information will be added.
4. Event Listener for Click Events (BUG in Code)
js
Copy
Edit
productList.addEventListener('click', event =>{
    event.target.style.backgroundcolor = 'tomato';
});
This listens for clicks anywhere inside the productList element.
When clicked, it attempts to change the background color of the clicked element to tomato.
⚠️ BUG: backgroundcolor is incorrect; the correct property is backgroundColor.
✅ Fixed Code:

js
Copy
Edit
event.target.style.backgroundColor = 'tomato';
5. Creating and Adding Product Elements
js
Copy
Edit
products.forEach(product => {
    const li = document.createElement("li"); // Create a new list item
    li.innerHTML = `
        <strong>${product.name}</strong> - $${product.price}
        <p>${product.description}</p>
        <p><em>Category:</em> ${product.category}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
        <button class="buy-btn">Buy Now</button>
        <hr>
    `;
    productList.appendChild(li); // Add the item to the product list
});
Loops through each product in the products array.
Creates an <li> element for each product.
Fills it with product details (name, price, description, category, stock).
Appends the product to the productList so it appears on the webpage.
6. Handling Fetch Errors
js
Copy
Edit
.catch(error => console.error("Error fetching products:", error));
If something goes wrong (e.g., the server is down or there’s a typo in the URL), it logs the error.

}

*/
