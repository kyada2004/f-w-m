const AdminMessage = require('../models/AdminMessage.js');

// Controller for saving admin message
exports.saveAdminMessage = async (req, res) => {
  const { adminMessage } = req.body;

  // Validate the input
  if (!adminMessage) {
    return res.status(400).json({ message: "Admin message is required." });
  }

  try {
    // Save the admin message to the database
    const newAdminMessage = new AdminMessage({ message: adminMessage });
    await newAdminMessage.save();

    // Respond with success
    res.status(201).json({ message: "Admin message saved successfully!" });
  } catch (error) {
    console.error("Error saving admin message:", error);
    res.status(500).json({ message: "An error occurred while saving the message." });
  }
};
