const express = require('express');
const app = express();

// Define route for the main app
app.get('/', (req, res) => {
  // Your main app logic
  res.send('Main App');
});

// Define route for the /demo path
app.get('/demo', (req, res) => {
  // Redirect to a different site
  res.redirect('https://www.loom.com/share/e2ff37da4f2d421386044965dd9fbeb1');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});