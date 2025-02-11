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

e.g {
   document.addEventListener("DOMContentLoaded", function () {//this is the event listener.
    fetch("http://localhost:3000/products") The source is to be gotten from here
        .then(response => response.json()) 
        .then(products => {
            const productList = document.getElementById("product-list"); this gets the id of the product list in html file.

}

*/
