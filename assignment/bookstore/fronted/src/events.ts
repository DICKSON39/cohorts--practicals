//file to fetch events 

const API_URL = 'http://localhost:3000/api/events'
export const fetchEvents = async (queryParams: string = "") => {
    try {
      const response = await fetch(`http://localhost:3000/api/eventsFilter${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
  
      return await response.json(); // Return the events data
    } catch (error) {
      console.error("Error fetching events:", error);
      return []; // Return empty array if fetch fails
    }
  };
  
  // Add an item to the cart
export const addToCart = async (title: string, price: number) => {
  try {
    const response = await fetch(`${API_URL}/addingCart?name=${title}&price=${price}`);
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};