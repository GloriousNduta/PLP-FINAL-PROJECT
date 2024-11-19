// routes/taxRoutes.js
const express = require("express");
const { calculateTax } = require("../controllers/taxController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/calculate", authMiddleware, calculateTax);

module.exports = router;
