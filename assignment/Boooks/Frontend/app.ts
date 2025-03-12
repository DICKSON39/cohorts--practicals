const API_URL = "http://localhost:5000";

interface User {
  name: string;
  email: string;
  password: string;
}

interface Book {
  user_id: number;
  title: string;
  description: string;
  author: string;
  pages: number;
  genre: string;
  publisher: string;
  year: number;
  price: number;
  image_url: string;
}

// Register User
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = (document.getElementById("regName") as HTMLInputElement).value;
  const email = (document.getElementById("regEmail") as HTMLInputElement).value;
  const password = (document.getElementById("regPassword") as HTMLInputElement).value;

  const response = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password } as User),
  });

  const data = await response.json();
  alert(data.message);
});

// Login User
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
  const password = (document.getElementById("loginPassword") as HTMLInputElement).value;

  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful!");
  } else {
    alert(data.message);
  }
});

// Add Book
document.getElementById("addBookForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user_id = (document.getElementById("user_id") as HTMLInputElement).value // Replace with actual logged-in user ID
  const title = (document.getElementById("bookTitle") as HTMLInputElement).value;
  const description = (document.getElementById("bookDescription") as HTMLInputElement).value;
  const author = (document.getElementById("bookAuthor") as HTMLInputElement).value;
  const pages = parseInt((document.getElementById("bookPages") as HTMLInputElement).value);
  const genre = (document.getElementById("bookGenre") as HTMLInputElement).value;
  const publisher = (document.getElementById("bookPublisher") as HTMLInputElement).value;
  const year = parseInt((document.getElementById("bookYear") as HTMLInputElement).value);
  const price = parseFloat((document.getElementById("bookPrice") as HTMLInputElement).value);
  const image_url = (document.getElementById("bookImage") as HTMLInputElement).value;

  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, title, description, author, pages, genre, publisher, year, price, image_url } as unknown as Book),
  });

  const data = await response.json();
  alert(data.message);
});

// Filter Books
document.getElementById("filter-btn")?.addEventListener("click", async () => {
  const title = (document.getElementById("filterTitle") as HTMLInputElement).value;
  const genre = (document.getElementById("filterGenre") as HTMLInputElement).value;
  const year = (document.getElementById("filterYear") as HTMLInputElement).value;
  const pages = (document.getElementById("filterPages") as HTMLInputElement).value;

  let url = `${API_URL}/booksFiltering?`;
  if (title) url += `title=${title}&`;
  if (genre) url += `genre=${genre}&`;
  if (year) url += `year=${year}&`;
  if (pages) url += `pages=${pages}&`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch books");
    const books: Book[] = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
});

// Display Books
function displayBooks(books: Book[]) {
  const container = document.getElementById("books-container")!;
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

