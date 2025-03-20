// Function to handle car details
function viewDetails(carId) {
    alert(`Viewing details for ${carId}`);
  }
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent.`);
    // Here you can add code to send the form data to a server
  });

 