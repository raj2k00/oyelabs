// 3.
require("dotenv").config();
const mysql = require("node-mysql");

let db = mysql.createConnection({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.SQL_PASSWORD,
  database: "CustomerDB",
});

let sql = `CREATE TABLE Customers (email VARCHAR(255) unique, name VARCHAR(255))`;

db.query(sql, function (err) {
  if (err) throw err;
  db.end();
});

sql = "INSERT INTO Customer (email, name) VALUES ?";
let values = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjai",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

db.query(sql, [values], function (err) {
  if (err) {
    if (err.errno == 1062) {
      console.log("message", "The email already exist.");
      let email = email.split("@")[0].join(name);
      sql = `INSERT INTO Customer (email, name) VALUES (email name)`;
      db.query(sql, function (err) {
        if (err) throw err;
        db.end();
      });
    }
  }
  db.end();
});

//-----------------------------------------------------------------

// 2
