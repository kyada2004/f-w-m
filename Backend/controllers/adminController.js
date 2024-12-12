const Admin = require('../models/Admin.js');

const adminLogin = async (req, res) => {
  const { usernameOrEmailOrPhone, password } = req.body;

  try {
    // Find the admin by username, email, or phone
    const admin = await Admin.findOne({
      $or: [
        { username: usernameOrEmailOrPhone },
        { email: usernameOrEmailOrPhone },
        { phone: usernameOrEmailOrPhone },
      ],
    });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check the password (add encryption in production)
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Admin login successful', userType: 'admin' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { adminLogin };
