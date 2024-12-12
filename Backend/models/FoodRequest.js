// models/FoodRequest.js
const mongoose = require('mongoose');

const foodRequestSchema = new mongoose.Schema({
    foodItem: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    personalNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    approvalStatus: {
        type: String,
        default: 'Pending',
    },
    requestNumber: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('FoodRequest', foodRequestSchema);
