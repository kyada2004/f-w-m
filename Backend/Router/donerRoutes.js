const express = require("express");
const { donerLogin } = require("../controllers/donerController.js");
const router = express.Router();

router.post("/login", donerLogin);

module.exports = router;
