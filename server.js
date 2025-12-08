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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
