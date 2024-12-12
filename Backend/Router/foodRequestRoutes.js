// routes/foodRequestRoutes.js
const express = require('express');
const router = express.Router();
const { createFoodRequest } = require('../controllers/foodRequestController.js');

// Define the POST route to handle food request submissions
router.post('/', createFoodRequest);

module.exports = router;
