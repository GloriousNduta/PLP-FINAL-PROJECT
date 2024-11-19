// models/Transaction.js
const db = require("../config/db");

class Transaction {
  static createTransaction(userId, type, amount, description, callback) {
    const query =
      "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)";
    db.execute(query, [userId, type, amount, description], callback);
  }

  static getTransactionsByUser(userId, callback) {
    const query = "SELECT * FROM transactions WHERE user_id = ?";
    db.execute(query, [userId], callback);
  }
}

module.exports = Transaction;
