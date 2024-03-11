// controllers/authController.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// GET route for login page
router.get('/', (req, res) => {
  res.render('index');
});

// POST route for login form submission
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = userModel.findByUsername(username);

  if (user && user.password === password) {
    res.redirect('/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

module.exports = router;
