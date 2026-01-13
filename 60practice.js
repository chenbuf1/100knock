const express = require("express");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();
const session = require("express-session");

const app = express();
app.use(express.json());

// セッション設定  65
app.use(session({
  secret: "your_secret_key", // 任意の文字列でOK（公開しない）
  resave: false,
  saveUninitialized: false,
   cookie: {  // クッキー設定 　66
      maxAge: 60000,         // 有効期限：例 1分
      httpOnly: true,        // JavaScript からのアクセスを禁止（XSS 対策）
      secure: false          // HTTPS のとき true（開発中なら false でもOK）
    },
}));

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
      req.session.user = { id: row.id, username: row.username }; // セッションに保存  65
      res.json({ message: "Login successful", username: row.username });
    } else {
      res.status(401).send("Invalid username or password");
    }
  });
});

// ログイン済みユーザだけがアクセスできるエンドポイント 65
app.get("/mypage", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }
  res.json({ message: "Welcome to your page!", user: req.session.user });
});


// 登出 API：销毁 session  67
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send("Logout failed");
    res.clearCookie("connect.sid"); // 清除浏览器端 Cookie
    res.json({ message: "Logout successful" });
  });
});


app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
