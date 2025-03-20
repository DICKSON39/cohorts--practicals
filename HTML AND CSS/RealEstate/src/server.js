const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.send('Message received!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});