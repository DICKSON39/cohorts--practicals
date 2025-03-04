import { addToCart } from "./cart";
import { books } from "./index";
import { filterBooks } from "./filter";

function displayBooks(filteredBooks = books) {
  const bookList = document.getElementById("book-list");

  if (!bookList) return; // Ensure the element exists

  bookList.innerHTML = filteredBooks
    .map(
      (book) => `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Price:</strong> $${book.price}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Published by:</strong> ${book.publisher}</p>
            <button class="add-to-cart-btn" data-id="${book.id}">ADD TO CART</button>
        </div>
    `
    )
    .join(""); // Convert array to string and insert into HTML

  // Attach event listeners for Add to Cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement; // Cast to HTMLButtonElement
      const bookId = parseInt(target.getAttribute("data-id") || "0", 10); // Base 10 conversion

      if (bookId) {
        addToCart(bookId);
      }
    });
  });
}


document.getElementById("filterForm")?.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const filteredBooks = filterBooks(); 
  displayBooks(filteredBooks); 
});


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(displayBooks,2000); 
});
