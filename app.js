const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/patternDB') // Removed deprecated options
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the homepage
app.get('/', (req, res) => {
  res.render('index'); // Render the `index.ejs` file in the `views/` folder
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
