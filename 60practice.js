const express = require("express");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

const db = new sqlite3.Database("app.db");

// ユーザ登録API  63
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // hash
  const hash = await bcrypt.hash(password, 10);
  // save into database
  db.run(
    "INSERT INTO users (username, password_hash) VALUES (?, ?)",
    [username, hash],
    function (err) {
      if (err) return res.status(500).send("error");
      res.json({ id: this.lastID, username });
    }
  );
});

// ログインAPI  64
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row) => {
    if (err) return res.status(500).send("Server error");
    if (!row) return res.status(401).send("Invalid username or password");

    const match = await bcrypt.compare(password, row.password_hash);
    if (match) {
      res.json({ message: "Login successful", username: row.username });
    } else {
      res.status(401).send("Invalid username or password");
    }
  });
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
