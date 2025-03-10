export const users= async (queryParams: string = "") => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/posts${queryParams}`, {
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
