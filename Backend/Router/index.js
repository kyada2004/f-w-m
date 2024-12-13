const express = require("express");
const adminRoute = require("./adminRoutes.js");
const contactRoutes = require("./contactRoutes.js");
const donerRoutes = require("./donerRoutes.js");
const foodRequestRoutes = require("./foodRequestRoutes.js");
const adminmessgeRoutes = require("./adminmessgeRoutes.js");

const router = express.Router();

router.use("/admin", adminRoute);
router.use("/contact", contactRoutes);
router.use("/doner", donerRoutes);
router.use("/donerfood", foodRequestRoutes);
router.use("/adminmessges", adminmessgeRoutes);

module.exports = router;
