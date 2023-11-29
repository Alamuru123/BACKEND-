// routes/restaurant.js

const express = require('express');
const router = express.Router();

// Your restaurant data or database model
const restaurantsData = [
  { name: 'Restaurant A', /* other properties */ },
  { name: 'Restaurant B', /* other properties */ },
  // Add more restaurant data as needed
];

// Define a route to handle GET requests to /restaurants
router.get('/', (req, res) => {
  res.json(restaurantsData); // Return the restaurant data as JSON
});

module.exports = router;
