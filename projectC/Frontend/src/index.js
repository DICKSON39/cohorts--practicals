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
const API_URL = "http://localhost:5000"; // Change to match your backend
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const addBookForm = document.getElementById("add-book-form");
    const logoutBtn = document.getElementById("logout");
    const booksContainer = document.getElementById("books-container");
    const authSection = document.getElementById("auth-section");
    const dashboard = document.getElementById("dashboard");
    const usernameSpan = document.getElementById("username");
    const adminActions = document.getElementById("admin-actions");
    const librarianActions = document.getElementById("librarian-actions");
    const showRegister = document.getElementById("show-register");
    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.toggle("hidden");
    });
    loginForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
            const response = yield fetch(`${API_URL}/api/v1/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok)
                throw new Error("Invalid credentials");
            const data = yield response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("role_id", data.role_id);
            localStorage.setItem("username", data.name);
            loadDashboard();
        }
        catch (error) {
            alert(error);
        }
    }));
    registerForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;
        const role_id = document.getElementById("role_id").value;
        try {
            const response = yield fetch(`${API_URL}/api/v1/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role_id }),
            });
            if (!response.ok)
                throw new Error("Registration failed");
            alert("Registration successful! Please log in.");
        }
        catch (error) {
            alert(error);
        }
    }));
    const loadDashboard = () => __awaiter(void 0, void 0, void 0, function* () {
        const token = localStorage.getItem("token");
        if (!token)
            return;
        authSection.classList.add("hidden");
        dashboard.classList.remove("hidden");
        usernameSpan.textContent = localStorage.getItem("username") || "";
        const role = localStorage.getItem("role_id");
        if (role === "1")
            adminActions.classList.remove("hidden");
        if (role === "2")
            librarianActions.classList.remove("hidden");
        yield fetchBooks();
    });
    const fetchBooks = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${API_URL}/api/v1/books`);
        const books = yield response.json();
        booksContainer.innerHTML = books
            .map((book) => `
        <div class="book">
          <h4>${book.title}</h4>
          <p>Author: ${book.author}</p>
          <p>Available: ${book.available_copies}</p>
          <button onclick="borrowBook(${book.id})">Borrow</button>
        </div>
      `)
            .join("");
    });
    window.borrowBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
        const token = localStorage.getItem("token");
        if (!token)
            return alert("Please log in");
        try {
            const response = yield fetch(`${API_URL}/api/v1/books/borrow/${bookId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            });
            const data = yield response.json();
            if (!response.ok)
                throw new Error(data.message || "Could not borrow book");
            alert("Book borrowed successfully!");
            fetchBooks();
        }
        catch (error) {
            alert(error);
        }
    });
    addBookForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const title = document.getElementById("book-title").value;
        const author = document.getElementById("book-author").value;
        const token = localStorage.getItem("token");
        try {
            const response = yield fetch(`${API_URL}/api/v1/books`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ title, author }),
            });
            if (!response.ok)
                throw new Error("Failed to add book");
            alert("Book added successfully!");
            fetchBooks();
        }
        catch (error) {
            alert(error);
        }
    }));
    logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
    loadDashboard();
});
