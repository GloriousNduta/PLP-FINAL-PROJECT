// controllers/taxController.js
const Transaction = require("../models/Transaction");

exports.calculateTax = (req, res) => {
  const userId = req.user.id;
  Transaction.getTransactionsByUser(userId, (err, transactions) => {
    if (err) return res.status(500).json({ error: err });

    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const taxableIncome = income - expenses;
    const taxRate = 0.15; // Example tax rate
    const taxLiability = taxableIncome * taxRate;

    res.status(200).json({ taxLiability });
  });
};
