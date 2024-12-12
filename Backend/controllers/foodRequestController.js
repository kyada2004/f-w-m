// controllers/foodRequestController.js
const FoodRequest = require('../models/FoodRequest.js');

// Controller for handling the POST request to create a food request
exports.createFoodRequest = async (req, res) => {
    const { foodItem, quantity, name, city, state, personalNumber, address, approvalStatus, requestNumber } = req.body;

    // Perform some basic validation (if required)
    if (!foodItem || !quantity || !name || !city || !state || !personalNumber || !address) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (quantity <= 0) {
        return res.status(400).json({ message: 'Quantity must be a positive number.' });
    }

    try {
        // Create a new food request record
        const newRequest = new FoodRequest({
            foodItem,
            quantity,
            name,
            city,
            state,
            personalNumber,
            address,
            approvalStatus,
            requestNumber,
        });

        // Save the food request into the database
        await newRequest.save();

        // Send success response
        res.status(201).json({ message: 'Food request submitted successfully!' });
    } catch (error) {
        console.error('Error saving food request:', error);
        res.status(500).json({ message: 'Error saving food request. Please try again.' });
    }
};
