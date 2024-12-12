const mongoose = require('mongoose');

// Define schema for admin message
const adminMessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
}, { timestamps: true });

// Create a model based on the schema
const AdminMessage = mongoose.model('AdminMessage', adminMessageSchema);

module.exports = AdminMessage;
