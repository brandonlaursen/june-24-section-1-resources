const express = require('express');
const sqlite3 = require('sqlite3');

require("dotenv").config();
const app = express();
const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

app.get("/", (req, res) => {
  const sql = "SELECT * FROM posts;";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.json(err);
    }
    res.json(rows);
  });
});

app.get("/:id", (req, res) => {
  const sql = "SELECT * FROM posts WHERE id = ?;";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      return res.json(err);
    }
    res.json(row);
  });
});

app.listen(8000, () => console.log("Listening on port 8000..."))