// controllers/reportController.js
const PDFDocument = require("pdfkit");
const fs = require("fs");
const Transaction = require("../models/Transaction");

exports.generateReport = (req, res) => {
  const userId = req.user.id;
  Transaction.getTransactionsByUser(userId, (err, transactions) => {
    if (err) return res.status(500).json({ error: err });

    const doc = new PDFDocument();
    const fileName = `report-${userId}-${Date.now()}.pdf`;
    const filePath = `./reports/${fileName}`;

    doc.pipe(fs.createWriteStream(filePath));
    doc.text("Financial Report", { align: "center" });
    doc.moveDown();

    transactions.forEach((t) => {
      doc.text(`${t.type.toUpperCase()}: $${t.amount} - ${t.description}`);
    });

    doc.end();

    res.status(200).json({ filePath });
  });
};
