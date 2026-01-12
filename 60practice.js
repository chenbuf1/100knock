const express = require("express");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

const db = new sqlite3.Database("app.db");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // 哈希化
  const hash = await bcrypt.hash(password, 10);

  // 存数据库
  db.run(
    "INSERT INTO users (username, password_hash) VALUES (?, ?)",
    [username, hash],
    function (err) {
      if (err) return res.status(500).send("error");
      res.json({ id: this.lastID, username });
    }
  );
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
