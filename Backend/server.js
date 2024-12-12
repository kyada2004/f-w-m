const express = require('express');
const connectDB = require('./config/db.js');
const adminRoutes = require('./Router/adminRoutes.js');  // Correct path
const donerRoutes = require('./Router/donerRoutes.js');
const foodRequestRoutes = require('./Router/foodRequestRoutes.js');
const contactRoutes = require('./Router/contactRoutes.js');
const adminmessgeRoutes = require('./Router/adminmessgeRoutes.js');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/api/admin', adminRoutes);  
app.use('/api/doner', donerRoutes);
app.use('/api/donerfood', foodRequestRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/adminmessges', adminmessgeRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
