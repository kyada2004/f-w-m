const mongoose = require('mongoose');

const DonerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String }, // URL for uploaded image
});

module.exports = mongoose.model('Doner', DonerSchema);
