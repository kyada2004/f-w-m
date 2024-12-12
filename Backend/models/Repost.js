// controllers/contactController.js
const Repost = require('../models/Repost');

// Controller for handling the form submission
exports.submitContactForm = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate the input data
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Create a new Repost document and save it to the database
        const newRepost = new Repost({ name, email, subject, message });
        await newRepost.save();

        // Send success response
        res.status(201).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error saving the form data:', error);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
};
