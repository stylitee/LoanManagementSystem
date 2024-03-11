// app.js
const express = require('express');
const app = express();
const port = 3000;
const authController = require('./controllers/authController');

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', authController);

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
