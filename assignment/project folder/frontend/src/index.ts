const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual API URL
interface Post {
  post_id: number;
  caption: string;
  image_url?: string; // Optional field
  post_created_at: string;
  user_id: number;
  username: string;
  email: string;
}
// DOM Elements
const mainContent = document.getElementById("mainContent")!;
const registerBtn = document.getElementById("registerBtn")!;
const loginBtn = document.getElementById("loginBtn")!;
const createPostBtn = document.getElementById("createPostBtn")!;
const viewPostsBtn = document.getElementById("viewPostsBtn")!;
const logoutBtn = document.getElementById("logoutBtn")!;

// Utility: Save and Get Token
const saveToken = (token: string) => localStorage.setItem("authToken", token);
const getToken = () => localStorage.getItem("authToken");

// Load Register Form
registerBtn.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Register</h2>
    <form id="registerForm">
      <input type="text" id="username" placeholder="Username" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
    <p id="message"></p>
  `;

  document.getElementById("registerForm")!.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      document.getElementById("message")!.textContent = data.message || "Registration successful!";
    } catch (error) {
      console.error(error);
      document.getElementById("message")!.textContent = "Registration failed.";
    }
  });
});
// Load Login Form
loginBtn.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Login</h2>
    <form id="loginForm">
      <input type="email" id="email" placeholder="Email" required>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p id="message"></p>

  `;

  document.getElementById("loginForm")!.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed!");
      }

      if (data.token) {
        saveToken(data.token);
        document.getElementById("message")!.textContent = "Login successful!";
        
        // ✅ Check if logoutBtn exists before accessing its style
        const logoutButton = document.getElementById("logoutBtn");
        if (logoutButton) {
          logoutButton.style.display = "block";
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error: any) {
      console.error("Login Error:", error.message);
      document.getElementById("message")!.textContent = error.message || "Login failed.";
    }
  });
});
  




// Load Create Post Form
createPostBtn.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Create a Post</h2>
    <form id="createPostForm">
    
      <input type="text" id="title" placeholder="caption" required>
      <input type="url" id="imageUrl" placeholder="Image URL" required>
       <input type="text" id="id" placeholder="id" required>
      <button type="submit">Post</button>
    </form>
    <p id="message"></p>
  `;

  document.getElementById("createPostForm")!.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user_id = (document.getElementById("id") as HTMLInputElement).value
    const caption = (document.getElementById("title") as HTMLInputElement).value;
    const image_url = (document.getElementById("imageUrl") as HTMLInputElement).value;
    const token = getToken();

    if (!token) {
      document.getElementById("message")!.textContent = "You must be logged in to create a post.";
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ caption,user_id, image_url }),
      });

      const data = await response.json();
      document.getElementById("message")!.textContent = data.message || "Post created!";
    } catch (error) {
      console.error(error);
      document.getElementById("message")!.textContent = "Post creation failed.";
    }
  });
});

viewPostsBtn.addEventListener("click", async () => {
  mainContent.innerHTML = "<h2>All Posts</h2><div id='postsContainer'>Loading posts...</div>";

  try {
    const response = await fetch(`http://localhost:5000/api/posts`);
    const data = await response.json();

    const postsContainer = document.getElementById("postsContainer")!;
    postsContainer.innerHTML = "";

    if (!data.posts || data.posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts found.</p>";
      return;
    }

    data.posts.forEach((post: Post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = `
        <p><strong>${post.username}</strong></p>
        <p>${post.caption}</p>
        ${post.image_url ? `<img src="${post.image_url}" alt="Post Image" style="max-width: 100%; height: auto;">` : ""}
        <p><small>Posted on: ${new Date(post.post_created_at).toLocaleString()}</small></p>
      `;

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    document.getElementById("postsContainer")!.innerHTML = "<p>Error loading posts.</p>";
  }
});






