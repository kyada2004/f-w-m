const express = require('express');
const router = express.Router();
const { saveAdminMessage } = require('../controllers/adminmessgeController.js');

// POST route to save admin message
router.post('/admin-message', saveAdminMessage);

module.exports = router;
