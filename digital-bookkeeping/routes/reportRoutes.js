// routes/reportRoutes.js
const express = require("express");
const { generateReport } = require("../controllers/reportController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/download", authMiddleware, generateReport);

module.exports = router;
