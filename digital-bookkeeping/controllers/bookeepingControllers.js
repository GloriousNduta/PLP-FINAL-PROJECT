// controllers/bookkeepingController.js
const Transaction = require("../models/Transaction");

exports.addTransaction = (req, res) => {
  const { type, amount, description } = req.body;
  const userId = req.user.id; // Assume authMiddleware sets req.user
  Transaction.createTransaction(
    userId,
    type,
    amount,
    description,
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Transaction added successfully" });
    }
  );
};

exports.getTransactions = (req, res) => {
  const userId = req.user.id;
  Transaction.getTransactionsByUser(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};
