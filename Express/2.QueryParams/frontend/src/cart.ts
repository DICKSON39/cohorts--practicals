import { books } from "./index"; 

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

let cart: CartItem[] = [];

// Get sidebar elements
const cartSidebar = document.getElementById("cart-sidebar")!;
const closeCartBtn = document.getElementById("close-cart")!;
const cartButton = document.getElementById("cart-button")!;

// Open cart sidebar
cartButton.addEventListener("click", () => {
    cartSidebar.classList.add("open");
});

// Close cart sidebar
closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
});

// Function to add book to cart
export function addToCart(bookId: number) {
    const book = books.find(b => b.id === bookId);
    if (!book) {
        console.log("Book not found");
        return;
    }

    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            price: book.price,
            quantity: 1,
            image: book.image
        });
    }

    updateCartUI();
}

// Function to remove item from cart
export function removeFromCart(bookId: number) {
    cart = cart.filter(item => item.id !== bookId);
    updateCartUI();
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

// Function to update cart UI
function updateCartUI() {
    const cartContainer = document.getElementById("cart-items")!;
    const cartTotal = document.getElementById("cart-total")!;

    cartContainer.innerHTML = ""; // Clear previous content

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            ${item.title} - $${item.price} x ${item.quantity} 
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${calculateTotal()}`;

    // Attach remove event listeners
    document.querySelectorAll(".remove-from-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const target = event.target as HTMLButtonElement;
            const bookId = parseInt(target.getAttribute("data-id") || "0");

            if (bookId) {
                removeFromCart(bookId);
            }
        });
    });
}
