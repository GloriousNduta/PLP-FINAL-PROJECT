const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemon = require('nodemon');

app.use(express.json());
app.use(cors());
dotenv.config();

// app.get('' ,(req, res)=> {
    // res.send("welcome to my digital bookkeeping website")
// });

// connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD
})

// check if connection works
db.connect((err) => {
    if(err) return console.log("Error connecting to MySQL")

      console.log("Connected to MySQL as id:", db.threadId)
})

app.listen(5500,() => {
    console.log('server is running on port 5500 ')
});