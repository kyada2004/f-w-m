const Doner = require("../models/Doner.js");

const registerDoner = async (req, res) => {
  try {
    const { name, email, phone, password, image } = req.body;

    // Check if the user already exists
    const existingDoner = await Doner.findOne({ email });
    if (existingDoner) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Save the doner data
    const newDoner = new Doner({ name, email, phone, password, image });
    await newDoner.save();

    res
      .status(201)
      .json({ message: "Registration successful", doner: newDoner });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

const donerLogin = async (req, res) => {
  const { usernameOrEmailOrPhone, password } = req.body;

  try {
    const doner = await Doner.findOne({
      $or: [
        { email: usernameOrEmailOrPhone },
        { phone: usernameOrEmailOrPhone },
      ],
    });

    if (!doner) {
      return res.status(404).json({ message: "Donor not found" });
    }

    // Check the password (add encryption in production)
    if (doner.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ message: "Donor login successful", userType: "doner" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerDoner, donerLogin };
