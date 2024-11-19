// routes/bookkeepingRoutes.js
const express = require("express");
const {
  addTransaction,
  getTransactions,
} = require("../controllers/bookkeepingController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addTransaction);
router.get("/all", authMiddleware, getTransactions);

module.exports = router;
