const API_URL = "http://localhost:3000/books";
let cart = [];
let booksData = []; // Global variable to store books

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart-icon");
    const closeCartButton = document.getElementById("closeCart");
    const cartModal = document.getElementById("cartModal");
    const filterForm = document.getElementById("filterForm");

    cartIcon.addEventListener("click", toggleCart);
    closeCartButton.addEventListener("click", function () {
        cartModal.classList.remove("open");
    });

    fetchBooks(); // Fetch books on page load

    // Attach event listener for filters
    filterForm.addEventListener("submit", filterBooks);
});

async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        booksData = await response.json(); // Store fetched books
        displayBooks(booksData); // Display books initially
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(({ title, author, price, image, description, publisher, pages, year, genre }) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <h3>${title}</h3>
            <img src="${image}" alt="${title}">
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Price:</strong> $${price}</p>
            <p><strong>Info:</strong> ${description}</p>
            <p><strong>Publisher:</strong> ${publisher}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Pages:</strong> ${pages}</p>
            <p><strong>Genre:</strong> ${genre}</p>
            <button class="buy-btn" data-title="${title}" data-price="${price}" data-image="${image}">Buy Now</button>
        `;
        bookList.appendChild(bookElement);
    });

    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function () {
            const bookTitle = this.dataset.title;
            const bookPrice = parseFloat(this.dataset.price);
            const bookImage = this.dataset.image;
            addToCart(bookTitle, bookPrice, bookImage);
        });
    });
}

function filterBooks(event) {
    event.preventDefault();

    const yearFilter = document.getElementById("yearFilter").value;
    const genreFilter = document.getElementById("genreFilter").value.toLowerCase();
    const pagesFilter = document.getElementById("pagesFilter").value;

    let filteredBooks = booksData.filter(book => 
        (yearFilter === "" || book.year === parseInt(yearFilter)) &&
        (genreFilter === "" || book.genre.toLowerCase().includes(genreFilter)) &&
        (pagesFilter === "" || book.pages <= parseInt(pagesFilter))
    );

    displayBooks(filteredBooks);
}

function addToCart(title, price, image) {
    let book = cart.find(item => item.title === title);
    if (book) {
        book.quantity++;
    } else {
        cart.push({ title, price, image, quantity: 1 });
    }
    updateCartIcon();
}

function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    updateCartIcon();
    updateCartDisplay();
}

function increaseQuantity(title) {
    let book = cart.find(item => item.title === title);
    if (book) book.quantity++;
    updateCartDisplay();
}

function decreaseQuantity(title) {
    let book = cart.find(item => item.title === title);
    if (book && book.quantity > 1) {
        book.quantity--;
    } else {
        removeFromCart(title);
    }
    updateCartDisplay();
}

function updateCartIcon() {
    document.querySelector(".cart-icon").textContent = `shopping_cart (${cart.length})`;
}

function toggleCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.classList.toggle("open");
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceElement.textContent = "Total: $0";
        return;
    }

    cart.forEach(({ title, price, image, quantity }) => {
        totalPrice += price * quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${image}" alt="${title}">
            <div class="cart-details">
                <p>${title}</p>
                <p>$${price} x ${quantity}</p>
            </div>
            <div class="cart-controls">
                <button onclick="increaseQuantity('${title}')">+</button>
                <button onclick="decreaseQuantity('${title}')">-</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Your Total: $${totalPrice.toFixed(2)}`;
}
fetchBooks()