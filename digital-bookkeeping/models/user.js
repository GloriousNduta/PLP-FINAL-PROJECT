// models/User.js
const db = require("../config/db");

class User {
  static createUser(email, password, callback) {
    const query = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.execute(query, [email, password], callback);
  }

  static findUserByEmail(email, callback) {
    const query = "SELECT * FROM users WHERE email = ?";
    db.execute(query, [email], callback);
  }
}

module.exports = User;
