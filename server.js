const express = require('express');
const app = express();
const port = 3000;

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



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
