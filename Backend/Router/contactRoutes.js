// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController.js');

// POST route for submitting the contact form
router.post('/contact', submitContactForm);

// GET route for fetching the admin message (you can modify this logic as needed)
router.get('/admin-message', (req, res) => {
    res.json({ message: 'Thank you for reaching out to us. We will get back to you shortly.' });
});

module.exports = router;
