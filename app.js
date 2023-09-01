const express = require('express');
const app = express();

// Define route for the main app
app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, './index.html')));
});

// Define route for the /demo path
app.get('/demo', (req, res) => {
  // Redirect to a different site
  res.redirect('https://www.loom.com/share/e2ff37da4f2d421386044965dd9fbeb1');
});

app.get('/deck', (req, res) => {
  // Redirect to a different site
  res.redirect("https://www.figma.com/proto/hYD8ozCxLPo7NKc7626szr/Playtest-Deck?page-id=0%3A1&type=design&node-id=29-2&viewport=841%2C-684%2C0.15&t=Hx1Hu7HEtgiAAwQ0-1&scaling=contain&mode=design");
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});