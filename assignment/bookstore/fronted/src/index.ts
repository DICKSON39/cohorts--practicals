import { fetchEvents } from "./events";




const displayEvents = (events: any[]) => {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = events
    .map(
      (event) => `
    <div class="event">
    <h3>${event.title}</h3>
      <img src="${event.image}" alt="${event.title}" />
       <p>Price:${event.price}</p>
      <p>Description ${event.description}</p>
      <p> Genre ${event.genre}</p>
      <p>Year ${event.year}</p>
      <p> Pages${event.pages}</p>
      <p>Publisher${event.publisher}</p>
      <p> Author${event.author}</p>
     <button class="addCart" data-title="${event.title}" data-price="${event.price}">Add to Cart</button>

    </div>
  `
    )
    .join("");

    attachCartEventListeners();
};

// Fetch and display events on page load
const loadEvents = async (args: string = "") => {
  const events = await fetchEvents(args); // Pass query args to fetchEvents
  displayEvents(events);
};

// Load all events initially
loadEvents();

//
document
  .getElementById("filterForm")
  ?.addEventListener("click", async (event) => {
    event.preventDefault();
    const yearFilterElement = document.getElementById(
      "yearFilter"
    ) as HTMLInputElement;
    const genreFilterElement = document.getElementById(
      "genreFilter"
    ) as HTMLInputElement;
    const pagesFilterElement = document.getElementById(
      "pagesFilter"
    ) as HTMLInputElement;

    const yearFilter = yearFilterElement ? yearFilterElement.value : "";
    const genreFilter = genreFilterElement
      ? genreFilterElement.value.toLowerCase()
      : "";
    const pagesFilter = pagesFilterElement ? pagesFilterElement.value : "";

    const queryParams = `?year=${yearFilter}&genre=${genreFilter}&pages=${pagesFilter}`;
    const filteredEvents = await fetchEvents(queryParams);

    displayEvents(filteredEvents);
  });


 // Function to attach event listeners to all "Add to Cart" buttons
const attachCartEventListeners = () => {
  document.querySelectorAll(".addCart").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.target as HTMLButtonElement;
      const title = target.getAttribute("data-title");
      const price = target.getAttribute("data-price");

      if (title && price) {
        await addToCart(title, parseFloat(price));
      }
    });
  });
};

// Function to send the cart update request to the backend
const addToCart = async (title: string, price: number) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/events/addingCart?name=${title}&price=${price}`
    );
    const data = await response.json();
    console.log(data.message); // Optional: Log response
    alert("Added to cart!"); // Feedback to user
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};