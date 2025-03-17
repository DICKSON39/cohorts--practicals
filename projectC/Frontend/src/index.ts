const API_URL = "http://localhost:5000"; // Change to match your backend

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form") as HTMLFormElement;
  const registerForm = document.getElementById("register-form") as HTMLFormElement;
  const addBookForm = document.getElementById("add-book-form") as HTMLFormElement;
  const logoutBtn = document.getElementById("logout") as HTMLButtonElement;
  const booksContainer = document.getElementById("books-container") as HTMLDivElement;
  const authSection = document.getElementById("auth-section") as HTMLDivElement;
  const dashboard = document.getElementById("dashboard") as HTMLDivElement;
  const usernameSpan = document.getElementById("username") as HTMLSpanElement;
  const adminActions = document.getElementById("admin-actions") as HTMLDivElement;
  const librarianActions = document.getElementById("librarian-actions") as HTMLDivElement;

  const showRegister = document.getElementById("show-register") as HTMLAnchorElement;
  
  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.toggle("hidden");
  });

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    try {
      const response = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role_id", data.role_id);
      localStorage.setItem("username", data.name);
      loadDashboard();
    } catch (error) {
      alert(error);
    }
  });

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = (document.getElementById("reg-name") as HTMLInputElement).value;
    const email = (document.getElementById("reg-email") as HTMLInputElement).value;
    const password = (document.getElementById("reg-password") as HTMLInputElement).value;
    const role_id = (document.getElementById("role_id") as HTMLSelectElement).value;

    try {
      const response = await fetch(`${API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role_id }),
      });

      if (!response.ok) throw new Error("Registration failed");

      alert("Registration successful! Please log in.");
    } catch (error) {
      alert(error);
    }
  });

  const loadDashboard = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    authSection.classList.add("hidden");
    dashboard.classList.remove("hidden");
    usernameSpan.textContent = localStorage.getItem("username") || "";

    const role = localStorage.getItem("role_id");
    if (role === "1") adminActions.classList.remove("hidden");
    if (role === "2") librarianActions.classList.remove("hidden");

    await fetchBooks();
  };

  const fetchBooks = async () => {
    const response = await fetch(`${API_URL}/api/v1/books`);
    const books = await response.json();

    booksContainer.innerHTML = books
      .map((book: any) => `
        <div class="book">
          <h4>${book.title}</h4>
          <p>Author: ${book.author}</p>
          <p>Available: ${book.available_copies}</p>
          <button onclick="borrowBook(${book.id})">Borrow</button>
        </div>
      `)
      .join("");
  };

  addBookForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = (document.getElementById("book-title") as HTMLInputElement).value;
    const author = (document.getElementById("book-author") as HTMLInputElement).value;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/api/v1/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, author }),
      });

      if (!response.ok) throw new Error("Failed to add book");

      alert("Book added successfully!");
      fetchBooks();
    } catch (error) {
      alert(error);
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });

  loadDashboard();
});
