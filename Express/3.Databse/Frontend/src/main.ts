// TypeScript code for handling authentication, book management, and borrowing
interface User {
    user_id: number;
    name: string;
    role_id: number;
  }
  
  const loginSection = document.getElementById("loginSection") as HTMLElement;
  const registerSection = document.getElementById("registerSection") as HTMLElement;
  const dashboardSection = document.getElementById("dashboardSection") as HTMLElement;
  
  const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  const registerForm = document.getElementById("registerForm") as HTMLFormElement;
  const addBookForm = document.getElementById("addBookForm") as HTMLFormElement;
  const borrowBookForm = document.getElementById("borrowBookForm") as HTMLFormElement;
  
  const loginMessage = document.getElementById("loginMessage") as HTMLElement;
  const registerMessage = document.getElementById("registerMessage") as HTMLElement;
  const addBookMessage = document.getElementById("addBookMessage") as HTMLElement;
  const borrowBookMessage = document.getElementById("borrowBookMessage") as HTMLElement;
  const userInfo = document.getElementById("userInfo") as HTMLElement;
  const booksList = document.getElementById("booksList") as HTMLElement;
  
  const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
  const registerBtn = document.getElementById("registerBtn") as HTMLButtonElement;
  const dashboardBtn = document.getElementById("dashboardBtn") as HTMLButtonElement;
  const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;
  
  function showSection(section: HTMLElement) {
    loginSection.style.display = "none";
    registerSection.style.display = "none";
    dashboardSection.style.display = "none";
    section.style.display = "block";
  }
  
  // Navigation events
  loginBtn.addEventListener("click", () => showSection(loginSection));
  registerBtn.addEventListener("click", () => showSection(registerSection));
  dashboardBtn.addEventListener("click", () => {
    showSection(dashboardSection);
    loadDashboard();
  });
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    location.reload();
  });
  
  // Handle Login
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
    const password = (document.getElementById("loginPassword") as HTMLInputElement).value;
  
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        loginMessage.textContent = "Login successful!";
        dashboardBtn.style.display = "inline-block";
        logoutBtn.style.display = "inline-block";
        showSection(dashboardSection);
        loadDashboard();
      } else {
        loginMessage.textContent = data.message;
      }
    } catch {
      loginMessage.textContent = "Error logging in.";
    }
  });
  
  // Handle Registration
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = (document.getElementById("registerName") as HTMLInputElement).value;
    const email = (document.getElementById("registerEmail") as HTMLInputElement).value;
    const password = (document.getElementById("registerPassword") as HTMLInputElement).value;
    const role = (document.getElementById("registerRole") as HTMLSelectElement).value;
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role_id: parseInt(role) }),
      });
      const data = await res.json();
      registerMessage.textContent = data.message;
    } catch {
      registerMessage.textContent = "Error registering.";
    }
  });
  
  // Handle Add Book (Admin Only)
  addBookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first.");
  
    const title = (document.getElementById("bookTitle") as HTMLInputElement).value;
    const author = (document.getElementById("bookAuthor") as HTMLInputElement).value;
    const genre = (document.getElementById("bookGenre") as HTMLInputElement).value;
    const year = Number((document.getElementById("bookYear") as HTMLInputElement).value);
    const pages = Number((document.getElementById("bookPages") as HTMLInputElement).value);
    const publisher = (document.getElementById("bookPublisher") as HTMLInputElement).value;
    const description = (document.getElementById("bookDescription") as HTMLTextAreaElement).value;
    const image = (document.getElementById("bookImage") as HTMLInputElement).value;
    const price = Number((document.getElementById("bookPrice") as HTMLInputElement).value);
  
    try {
      const res = await fetch("http://localhost:3000/api/books/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ title, author, genre, year, pages, publisher, description, image, price }),
      });
      const data = await res.json();
      addBookMessage.textContent = data.message;
      loadDashboard();
    } catch {
      addBookMessage.textContent = "Error adding book.";
    }
  });
  
  // Handle Borrow Book (Borrowers Only)
  borrowBookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first.");
  
    const book_id = Number((document.getElementById("borrowBookId") as HTMLInputElement).value);
    const librarian_id = Number((document.getElementById("borrowLibrarianId") as HTMLInputElement).value);
  
    try {
      const res = await fetch("http://localhost:3000/api/borrow/borrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ book_id, librarian_id }),
      });
      const data = await res.json();
      borrowBookMessage.textContent = data.message;
      loadDashboard();
    } catch {
      borrowBookMessage.textContent = "Error borrowing book.";
    }
  });
  
  // Load Dashboard: fetch user info and books list
  async function loadDashboard() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      // Fetch user info (assuming an endpoint /api/auth/me exists)
      const userRes = await fetch("http://localhost:3000/api/books", {
        headers: { Authorization: "Bearer " + token },
      });
      const userData = await userRes.json();
      if (userData.user) {
        userInfo.textContent = `Logged in as: ${userData.user.name} (Role: ${userData.user.role_id})`;
      }
  
      // Fetch books list
      const booksRes = await fetch("http://localhost:3000/api/books");
      const booksData = await booksRes.json();
      booksList.innerHTML =
        "<ul>" +
        booksData.map((book: any) => `<li>${book.book_id} - ${book.title} by ${book.author}</li>`).join("") +
        "</ul>";
    } catch {
      userInfo.textContent = "Error fetching dashboard data.";
    }
  }
  