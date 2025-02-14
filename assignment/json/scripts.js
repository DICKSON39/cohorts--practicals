document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");
            

            productList.addEventListener('click', event => {
                
            });

            products.forEach(product => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="product-card">
                        <img src="${product.images}" alt="${product.name}">
                        <strong>${product.name}</strong> - $${product.price}
                        <p>${product.description}</p>
                        <p><b>LOCATION:${product.location}</b></p>
                        <p><em>Category:</em> ${product.category}</p>
                        <p><strong>Stock:</strong> ${product.stock}</p>
                        <button class="buy-btn">Buy</button>
                        <button class="buy-btn">Add to Wishlist</button>
                    </div>
                `;
                productList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
