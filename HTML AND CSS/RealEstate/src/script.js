// Function to handle property details
function viewDetails(propertyId) {
    alert(`Viewing details for ${propertyId}`);
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

  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.00' // Amount in USD
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');