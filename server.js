const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// 57setting.データベースファイルのパス（相对路径）
const dbPath = path.join(__dirname, 'mydata.db');
const db = new sqlite3.Database(dbPath);

// 41：根路径，返回文本
app.get('/', (req, res) => {
  res.send('Hello, API!');
});

// 42：/api/greet 路径，返回JSON
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello!' });
});

// 43: クエリパラメータに対応する /api/greet
app.get('/api/greet-with-name', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// 44
app.use(express.json());

app.post('/api/echo', (req, res) => {
  res.json(req.body);
});

// 45. 配列データを返すAPIの実装
app.get('/api/items', (req, res) => {
  const items = ['apple', 'banana', 'orange'];
  res.json(items);
});

// 46. パスパラメータでデータを取得するAPIの作成
const animals = ['cat', 'dog', 'elephant', 'lion'];

app.get('/api/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  if (id >= 0 && id < animals.length) {
    res.json({ animal: animals[id] });
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});

// 47
//工具リスト
const tools = ['notebook', 'pen', 'ruler'];

// GET: 現在のツール一覧を取得
app.get('/api/tools', (req, res) => {
  res.json(tools);
});
// POST: 新しいツールを追加
app.post('/api/tools', (req, res) => {
  const newTool = req.body.tool;

  if (!newTool || typeof newTool !== 'string') {
    return res.status(400).json({ error: 'Invalid tool name' });
  }

  tools.push(newTool);
  res.json(tools);
});

//  48：DELETEメソッドで指定の動物を削除
app.delete('/api/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id < 0 || id >= animals.length) {
    return res.status(404).json({ error: 'Animal not found' });
  }

  animals.splice(id, 1); // 指定位置の動物を削除

  res.json(animals); // 削除後の配列を返す
});

// 57.API: /api/products → DBのレコード一覧をJSONで返す
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('DB error:', err.message);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(rows);
    }
  });
});



// 58 
// POST请求的body解析
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 静态文件（HTMLフォーム）配信
app.use(express.static(path.join(__dirname, 'public')));

// POST: /submit → 表单数据插入数据库
app.post('/submit', (req, res) => {
  const { name, price } = req.body;

  const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
  db.run(sql, [name, price], function (err) {
    if (err) {
      console.error('DB insert error:', err.message);
      res.status(500).send('データ登録失敗');
    } else {
      res.send(`登録成功！商品ID: ${this.lastID}`);
    }
  });
});

// データを編集するAPI（update）
app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, price, stock } = req.body;

  const sql = `UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?`;
  db.run(sql, [name, price, stock, id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: '編集に失敗しました' });
    } else {
      res.json({ message: '編集しました', changes: this.changes });
    }
  });
});

// データを削除するAPI（DELETE）
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM products WHERE id = ?`;
  db.run(sql, [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: '削除に失敗しました' });
    } else {
      res.json({ message: '削除成功', changes: this.changes });
    }
  });
});





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
