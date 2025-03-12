"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
const API_URL = "http://localhost:5000";
// Register User
(_a = document.getElementById("registerForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const response = yield fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
    const data = yield response.json();
    alert(data.message);
}));
// Login User
(_b = document.getElementById("loginForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const response = yield fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    const data = yield response.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
    }
    else {
        alert(data.message);
    }
}));
// Add Book
(_c = document.getElementById("addBookForm")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const user_id = document.getElementById("user_id").value; // Replace with actual logged-in user ID
    const title = document.getElementById("bookTitle").value;
    const description = document.getElementById("bookDescription").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = parseInt(document.getElementById("bookPages").value);
    const genre = document.getElementById("bookGenre").value;
    const publisher = document.getElementById("bookPublisher").value;
    const year = parseInt(document.getElementById("bookYear").value);
    const price = parseFloat(document.getElementById("bookPrice").value);
    const image_url = document.getElementById("bookImage").value;
    const response = yield fetch(`${API_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, title, description, author, pages, genre, publisher, year, price, image_url }),
    });
    const data = yield response.json();
    alert(data.message);
}));
// Filter Books
(_d = document.getElementById("filter-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const title = document.getElementById("filterTitle").value;
    const genre = document.getElementById("filterGenre").value;
    const year = document.getElementById("filterYear").value;
    const pages = document.getElementById("filterPages").value;
    let url = `${API_URL}/booksFiltering?`;
    if (title)
        url += `title=${title}&`;
    if (genre)
        url += `genre=${genre}&`;
    if (year)
        url += `year=${year}&`;
    if (pages)
        url += `pages=${pages}&`;
    try {
        const response = yield fetch(url);
        if (!response.ok)
            throw new Error("Failed to fetch books");
        const books = yield response.json();
        displayBooks(books);
    }
    catch (error) {
        console.error("Error fetching books:", error);
    }
}));
// Display Books
function displayBooks(books) {
    const container = document.getElementById("books-container");
    container.innerHTML = "";
    if (books.length === 0) {
        container.innerHTML = "<p>No books found.</p>";
        return;
    }
    books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Publisher:</strong> ${book.publisher}</p>
      <p><strong>Price:</strong> $${book.price}</p>
      <p>${book.description}</p>
      <img src="${book.image_url}" alt="${book.title}" style="width:100%;">
    `;
        container.appendChild(bookElement);
    });
}
