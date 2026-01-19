# 00. Gitのインストールとバージョン確認

実行結果：
```
git version 2.39.5 (Apple Git-154)
```

# 01. リポジトリの初期化と最初のコミット

初期コミットのID：
```
ae58966 00
```

# 02. GitHubアカウントの作成とSSHキー登録
```
Hi chenbuf1! You've successfully authenticated, but GitHub does not provide shell access.
```


# 03. リモートリポジトリの連携

実行結果：
```
origin  git@github.com:chenbuf1/100knock.git (fetch)
origin  git@github.com:chenbuf1/100knock.git (push)
```

ローカルで1行追加しました。
ローカルで1行追加しました。(from github)


# 04. push/pullとコミット履歴
```
git log --oneline
35f55ee 04.Edit from GitHub
513c22c test for 04
2c35710 “03”
a3bc295 “02”
ac1b609 01
```


# 05. .gitignoreの作成と確認
```
cat .gitignore
node_modules/
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")の結果：
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```


# 06. ブランチ練習（developブランチ）
developブランチで追加したテキストです。

# 07. PR modify


# 08. 過去のコミット履歴の確認と差分の確認
```
git log --oneline
5b481ce Merge pull request #1 from chenbuf1/develop
4b3929a 07: add new content for practices
3503dee “06”
0e516bc 05
7d7d1c1 05: Add .gitignore file
```
git diff
diff --git a/README.md b/README.md
index 502a60c..8ba2e4b 100644
--- a/README.md
+++ b/README.md
@@ -68,3 +68,15 @@ no changes added to commit (use "git add" and/or "git commit -a")
 developブランチで追加したテキストです。
 
 ## 07. PR modify
+
+
+## 08. 過去のコミット履歴の確認と差分の確認
+```
+git log --oneline
+5b481ce Merge pull request #1 from chenbuf1/develop
+4b3929a 07: add new content for practices
+3503dee “06”
+0e516bc 05
+7d7d1c1 05: Add .gitignore file
+```
+git diff
```


```

# 10. HTTPとは何か調べてまとめる

まとめ：
```
HTTP（HyperText Transfer Protocol）は、Web上でクライアント（主にブラウザ）とサーバ間のデータ通信を行うためのプロトコルである。要求（Request）と応答（Response）から成り、ステートレスな特徴を持つ。代表的なバージョンにはHTTP/1.1（永続的接続・ヘッダ圧縮なし）、HTTP/2（バイナリ化・多重通信・ヘッダ圧縮による高速化）、HTTP/3（UDPベースのQUIC利用による低遅延通信）がある。
```

# 11. ヘッダー情報の確認

```
対象ページ: https://example.com
主要なヘッダー情報:
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36
Content-Type: text/html
Cache-Control: max-age=0
Date: Mon, 10 Nov 2025 06:43:31 GMT
Alt-Svc: h3=":443"; ma=93600
```
# 12. curlでGETリクエストを送信

実行コマンド：
```bash
curl https://httpbin.org/get
```

返ってきたレスポンス：
```json
{
  \"args\": {},
  \"headers\": {
    \"Accept\": \"*/*\",
    \"Host\": \"httpbin.org\",
    \"User-Agent\": \"curl/8.7.1\",
    \"X-Amzn-Trace-Id\": \"Root=1-6911bf1c-60be8cd603eeafcf329c67e0\"
  },
  \"origin\": \"103.5.140.141\",
  \"url\": \"https://httpbin.org/get\"
}
```
```
curl コマンドはHTTP通信をテストするためのツールである。
GET リクエストを送信すると、httpbin.org が受け取ったヘッダーや送信元IPなどをJSONで返す。
User-Agent は使用したクライアント（ここではcurl）の情報を示す。
origin は自分のグローバルIPアドレスを示す。
url は実際にアクセスしたURLである。
```
# 13. curlコマンドでPOSTリクエストを送る

実行コマンド：
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"test"}' https://httpbin.org/post
```

送信データ：
```json
{"name":"test"}
```

返ってきたデータ：
```json
{
  "args": {},
  "data": "{\"name\":\"test\"}",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "15",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.7.1",
    "X-Amzn-Trace-Id": "Root=1-6911c288-1de42d3e79d09228766407a3"
  },
  "json": {
    "name": "test"
  },
  "origin": "103.5.140.141",
  "url": "https://httpbin.org/post"
}
```

解説：
```
- `curl` コマンドで JSON データをPOST送信した。
- サーバ（httpbin.org）は受け取ったデータを `json` フィールドとしてそのまま返している。
- `Content-Type: application/json` は送信データの形式を示す。
- `User-Agent` は使用したクライアント（curl）の情報。
- `url` はアクセスしたエンドポイントを示す。
```
# 14. HTTPステータスコードを調べてまとめる

よく使われるHTTPステータスコード：

- 200 OK：リクエストが正常に処理された
- 301 Moved Permanently：恒久的に移動
- 302 Found：一時的に移動
- 400 Bad Request：リクエストに誤り
- 401 Unauthorized：認証が必要
- 403 Forbidden：アクセス拒否
- 404 Not Found：リソースが存在しない
- 500 Internal Server Error：サーバ側のエラー
- 503 Service Unavailable：サーバが利用不可

# 15. 任意のWebサイトに対してHEADリクエストを送る

実行コマンド：
```bash
curl -I https://example.com
```

レスポンスヘッダー：
```
HTTP/2 200
content-type: text/html
etag: "bc2473a18e003bdb249eba5ce893033f:1760028122.592274"
last-modified: Thu, 09 Oct 2025 16:42:02 GMT
cache-control: max-age=86000
date: Mon, 10 Nov 2025 15:22:45 GMT
alt-svc: h3=":443"; ma=93600
```

気づいた点：
- ステータスコード200は正常応答を意味する。
- HTTP/2 を使っていることがわかる。
- alt-svc はHTTP/3用の設定情報。

# 16. クエリパラメータ付きのリクエストを送る

実行コマンド：
```bash
curl "https://httpbin.org/get?name=foo&age=20"
```

レスポンス：
```json
{
  "args": {
    "age": "20",
    "name": "foo"
  },
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.7.1",
    "X-Amzn-Trace-Id": "Root=1-6912059c-259798906f893ddf4596df3b"
  },
  "origin": "124.209.82.250",
  "url": "https://httpbin.org/get?name=foo&age=20"
}
```

解説：
- `args` フィールドに、クエリパラメータとして送った `name=foo` と `age=20` が反映されている。
# 17. HTTPメソッドの違いを調べる

以下は代表的なHTTPメソッドとその特徴の一覧である：

| メソッド | 説明 | 代表的な用途例 |
|----------|------|------------------|
| GET      | サーバからデータを取得する。 | WebページやAPIの情報取得。
| POST     | サーバにデータを送信する。 | フォーム送信、新規データ作成。
| PUT      | 指定リソースを全体的に更新する。 | ユーザ情報の上書き更新など。
| PATCH    | 指定リソースの一部を更新する。 | ユーザ名のみ変更など部分修正。
| DELETE   | 指定リソースを削除する。 | 投稿やアカウント削除など。

# 18. レスポンスのContent-Typeを調べる

以下のように、curlやブラウザのデベロッパーツールを使ってContent-Typeを確認できる。

| URL例 | 期待されるContent-Type |
|--------|------------------------|
| https://example.com | text/html |
| https://httpbin.org/json | application/json |
| https://httpbin.org/image/png | image/png |

# 19. レスポンスヘッダーとボディの違いを整理する

HTTPレスポンスは「ヘッダー」と「ボディ」に分かれている。
ヘッダーはステータスコードやサーバー、Content-Typeなどの情報を含み、通信に関するメタ情報を伝える。
一方、ボディは実際のデータ（HTML、JSON、画像など）を含む部分である。
たとえば、WebページのHTMLコードやAPIのJSONレスポンスはボディに含まれる。
つまり、ヘッダーは“情報の情報”、ボディは“本体の内容”と言える。
# 20. 最小限のHTMLページの作成

```html
<html>
  <head>
    <title> 最小限のHTMLページ</title>
  </head>
  <body>
    これは最小限のHTMLページです。
  </body>
</html>
```
# 21. 複数のHTML要素を用いて自己紹介ページの作成

```html
<html>
  <head>
    <title> 最小限のHTMLページ</title>
  </head>
  <body>
    <h1>自己紹介</h1>
    <img src="photo.jpg" alt="photo" width="100">
    <p>私は音楽が好きです：</p>

    <ul>
     <li>ずっと真夜中でいいのに。</li>
     <li>トゲナシトゲアリ</li>
    </ul>
    
  </body>
</html>
```
以下は表示結果のスクリーンショットである：
<img width="1886" height="1010" alt="21 screenshot" src="https://github.com/user-attachments/assets/5c95fda6-d47e-4d6d-9695-2a8a22e7651d" />

# 22. CSSファイルによるページの装飾

```css
body {
  background-color: #f4f4f4;
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
  padding: 40px;
}

h1 {
  color: #0066cc;
  font-size: 28px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 10px;
}

img {
  border-radius: 10px;
  margin-top: 15px;
  width: 200px;
}
```
以下は表示結果のスクリーンショットである：

<img width="866" height="1330" alt="3cdc681cde6820619d569f4abed2ab8d" src="https://github.com/user-attachments/assets/29d2ed89-2927-42bc-bb4c-70e9d7c2d497" />

## 課題23：リンクと画像表示

```html
<h2>学校リンク</h2>
<p>
  詳しくは <a href="https://www.design.kyushu-u.ac.jp/" target="_blank">九州大学芸術工学部のサイト</a> をご覧ください。
</p>

<h2>画像表示</h2>
<img src="https://www.design.kyushu-u.ac.jp/_cms_dir/wp-content/uploads/2025/11/a117bf10afbed54b93cb58d888dc5fe5-2048x1365.jpg"
     alt="九州大学校内" width="200">
```
以下は表示結果のスクリーンショットである：
<img width="1152" height="1622" alt="a7c49704e6f89ff22438c44721f7f815" src="https://github.com/user-attachments/assets/47c58fa3-94a5-45f0-be5e-524db9505784" />



# 24. 入力フォームの作成

```html
<form action="#" method="post">
  <label for="name">名前：</label><br>
  <input type="text" id="name" name="name" placeholder="お名前を入力してください"><br><br>

  <label for="email">メールアドレス：</label><br>
  <input type="email" id="email" name="email" placeholder="example@example.com"><br><br>

  <label for="message">メッセージ：</label><br>
  <textarea id="message" name="message" rows="5" cols="40" placeholder="ご質問ください"></textarea><br><br>

  <button type="submit">送信</button>
</form>
```
以下は表示結果のスクリーンショットである：


<img width="838" height="704" alt="a7dfbb238f59fee28fdace50632d07eb" src="https://github.com/user-attachments/assets/88cd350e-bb97-40c3-84b5-b8cbc92e34a7" />

# 25：テーブルによるデータ表示

```html
<table border="1">
  <tr>
    <th>時間</th>
    <th>月曜日</th>
    <th>火曜日</th>
    <th>水曜日</th>
    <th>木曜日</th>
    <th>金曜日</th>
  </tr>
  <tr>
    <td>1限</td>
    <td>数学</td>
    <td>英語</td>
    <td>化学</td>
    <td>国語</td>
    <td>物理</td>
  </tr>
  <tr>
    <td>2限</td>
    <td>体育</td>
    <td>数学</td>
    <td>英語</td>
    <td>歴史</td>
    <td>情報</td>
  </tr>
</table>
<table border="1">
  <tr>
    <th>時間</th>
    <th>月曜日</th>
    <th>火曜日</th>
    <th>水曜日</th>
    <th>木曜日</th>
    <th>金曜日</th>
  </tr>
  <tr>
    <td>1限</td>
    <td>数学</td>
    <td>英語</td>
    <td>化学</td>
    <td>国語</td>
    <td>物理</td>
  </tr>
  <tr>
    <td>2限</td>
    <td>体育</td>
    <td>数学</td>
    <td>英語</td>
    <td>歴史</td>
    <td>情報</td>
  </tr>
</table>
```
<img width="750" height="312" alt="76e1b743f0fee77327f3075185c38633" src="https://github.com/user-attachments/assets/b309e9f5-395c-43ed-9bff-34ecaceb0556" />



# 30. JavaScriptファイルの読み込み

## js.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>JavaScript読み込みテスト</title>
</head>
<body>
  <h1>Hello, HTML!</h1>
  <script src="main.js"></script>
</body>
</html>
```

## main.js
```js
console.log("Hello, JavaScript!");
```
以下は表示結果のスクリーンショットである：
<img width="910" height="322" alt="5d148dc6998576e3f88c3db41895e616" src="https://github.com/user-attachments/assets/e9497bcc-bb3e-4484-89e4-be6fa18b8cfb" />


# 31. 変数・配列・オブジェクトの基本

## main.js
```js
console.log("Hello, JavaScript!");

// 変数の定義
let x = 10;

// 配列の定義
let fruits = ["りんご", "バナナ", "みかん"];

// オブジェクトの定義
let student = {
  name: "Bufan Chen",
  age: 25,
};

// コンソール出力
console.log("変数：", x);
console.log("配列：", fruits);
console.log("オブジェクト：", student);
```
以下は表示結果のスクリーンショットである：
<img width="1252" height="604" alt="6e4536ef590a074f5b1a2b652929076d" src="https://github.com/user-attachments/assets/fe96e7b7-2d3a-4612-9cad-50608c946916" />


# 32. 基本的な演算と条件分岐


コードである：
<img width="606" height="1048" alt="a917b0d26878e597a263ac8a47babe0a" src="https://github.com/user-attachments/assets/748899f3-8732-4b99-8c9f-baa6ba013dba" />


以下は表示結果のスクリーンショットである：
<img width="590" height="294" alt="cb61c61eee3e99ac8b675b153b5e0592" src="https://github.com/user-attachments/assets/439b61d0-98da-43f5-b7d4-c93f2d7b0048" />



# 33. 繰り返し処理


コードである：
<img width="762" height="576" alt="e7b7ae770a44a9856a86fe4930e5f1b5" src="https://github.com/user-attachments/assets/af81fa0e-df01-4cad-8fef-9ac117843f48" />


以下は表示結果のスクリーンショットである：
<img width="352" height="412" alt="7915aeec9b37c680907902d3c65d9825" src="https://github.com/user-attachments/assets/26dccd05-51a2-4f41-9532-c494cd66c903" />




# 34. 関数の定義
コードである：
<img width="748" height="370" alt="3c651a6094397edd78361f9f4f5c10d5" src="https://github.com/user-attachments/assets/5b382fe9-1d83-4e25-8f29-d2184ba2db38" />


以下は表示結果のスクリーンショットである：
<img width="418" height="58" alt="66eb0110be5209d05c94eaee034c4bf4" src="https://github.com/user-attachments/assets/4b03e4a1-0c3e-4dfa-bfcf-46dff8eb794e" />




# 35. マウスイベント処理
まず、js.htmlにボタンを作ります。
<img width="600" height="400" alt="df2c09a55cef70c622b8943768ef3842" src="https://github.com/user-attachments/assets/4236c552-ff24-4da3-aa44-c5eeec26aa6c" />

main.jsのコードである：
<img width="600" height="400" alt="c566871765bf102b70c9ecb6dce56ba6" src="https://github.com/user-attachments/assets/134cdd36-fa8d-456a-9540-b96a025454e9" />

```
const button = document.getElementById("clickButton")
```
このコードは、js.html 全体（＝document）の中から、
id="clickButton" っていうボタンを探して、変数 button に入れてます。

```
button.addEventListener("click",()=>{
  console.log("ボタンがクリックされました!");
});
```
次のコードで「このボタンがクリックされた時に何をするか」を決めてます。
ボタンをクリックすると、テキストが「clickButton」だから、「click」が検知されて、下のコードconsole.log でメッセージを出すようにしてます。




以下は表示結果のスクリーンショットである：
<img width="1136" height="1162" alt="68d908f07a387e553024459513f1260e" src="https://github.com/user-attachments/assets/fc9c0e55-95e1-4182-9b06-280eaa745c3a" />



# 40. APIとは何か

まとめ：
```
API は、2 つのソフトウェアコンポーネントが一連の定義とプロトコルを使用して相互に通信できるようにするメカニズムです。

REST は Representational State Transfer の略です。REST は、クライアントがサーバーデータにアクセスするために使用できる GET、PUT、DELETE などの一連の関数を定義します。クライアントとサーバーは、HTTP を使用してデータを交換します。
REST API の主な特徴は、ステートレスであることです。ステートレスとは、サーバーがリクエスト間でクライアントデータを保存しないことを意味します。サーバーへのクライアントリクエストは、ウェブサイトにアクセスするためにブラウザに入力する URL に似ています。サーバーからのレスポンスはプレーンデータであり、ウェブページの一般的なグラフィックレンダリングはありません。
```






# 41. シンプルなHTTPサーバ

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, API!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
動作確認（curl）

```bash
curl http://localhost:3000/
```
結果
<img width="736" height="330" alt="1cffd161-c872-46df-a6a3-743802d5d76c" src="https://github.com/user-attachments/assets/9380ef12-b637-4713-887d-73d5d1c6555f" />



# 42. GETリクエストに対応したAPIの作成
```js
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello!' });
});	
```

動作確認（curl）

```bash
curl http://localhost:3000/api/greet
```

結果
<img width="846" height="312" alt="82a6143f-7714-49b6-8dcd-105c4ac8f4df" src="https://github.com/user-attachments/assets/7fea1fee-cfd6-48bf-96ff-824a331435d6" />



# 43. クエリパラメータ付きのGETリクエストへの対応
```js
app.get('/api/greet-with-name', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});
```

動作確認（curl）

```bash
curl http://localhost:3000/api/greet-with-name?name=Ushiama
```
結果
<img width="1154" height="222" alt="d07361cb-ff11-4255-891f-7b716677ba1a" src="https://github.com/user-attachments/assets/3b3bd476-4a9d-44bc-b5ef-56f4cf46630d" />


# 44. POSTリクエストでのデータを受け取りとJSONでの応答
```js
app.use(express.json());
// Express は JSON を自動で解析しないため、Content-Type: application/json のデータをオブジェクトとして扱う設定が必要です。

app.post('/api/echo', (req, res) => {
  res.json(req.body);
//前と同じで、JSONのコードを body に変えるだけで、「受け取ったJSONをそのまま返す」という意味になります。 
});
```
動作確認（curl）
```bash
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"name":"Chen", "message":"Hi"}'

// -X POST  POSTメソッドを使うことを指定します（デフォルトは GET）。
// -H "Content-Type: application/json"  リクエストヘッダを設定し、サーバーに「これは JSON データですよ」と伝えます。
// -d '{...}'   リクエストの中身を指定します。ここでは JSON 形式の文字列を送信します。
```
結果
<img width="926" height="124" alt="5a6e757d-21c9-419a-9a8b-5a797db58cc6" src="https://github.com/user-attachments/assets/d2e296d4-309e-4741-b051-63ee98803c69" />

# 45. 配列データを返すAPIの実装
```js
app.get('/api/items', (req, res) => {
  const items = ['apple', 'banana', 'orange'];
  res.json(items);
});
```
動作確認（curl）
```bash
curl http://localhost:3000/api/items
```

# 46. パスパラメータでデータを取得するAPIの作成
```js
const animals = ['cat', 'dog', 'elephant', 'lion'];

app.get('/api/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  if (id >= 0 && id < animals.length) {
    res.json({ animal: animals[id] });
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});
```
動作確認（curl）
```bash
// correct
curl http://localhost:3000/api/animals/2
// incorrect
curl http://localhost:3000/api/animals/10
```


# 47
```js
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
```
動作確認（curl）
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"tool": "keyboard"}' \
  http://localhost:3000/api/tools

//GETで全体確認：
curl http://localhost:3000/api/tools
```


# 48 
```js
app.delete('/api/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id < 0 || id >= animals.length) {
    return res.status(404).json({ error: 'Animal not found' });
  }

  animals.splice(id, 1); // 指定位置の動物を削除

  res.json(animals); // 削除後の配列を返す
});
```
動作確認（curl）
```bash
//delete 2nd animal, is eleplant
curl -X DELETE http://localhost:3000/api/animals/2
// delete 2nd animal again, now is lion
curl -X DELETE http://localhost:3000/api/animals/2
// {"error":"Animal not found"}
curl -X DELETE http://localhost:3000/api/animals/10
```


# 50 データベースとは何か
まとめ：
```
データベース（DB）は、データを効率的に保存・管理・検索する仕組みであり、業務システムやWebアプリなどに広く利用されている。中でもRDBMS（関係データベース管理システム）は、データを表（テーブル）として管理し、SQL言語を用いて操作できるのが特徴である。データの整合性・一貫性を保ちやすく、複数のテーブル間の関係を定義することができるため、銀行・企業・医療機関など、大量データを扱う分野で活用されている。
```

# 51 SQLiteを用いたデータベースの作成
実行コマンド：
```bash
sqlite3 mydata.db
sqlite> .tables
sqlite> .exit
```

結果
```bash
ls -l mydata.db
-rw-r--r--  1 cesc  staff  0 Dec 22 09:43 mydata.db
```

# 52 SQLでテーブルを作成
実行したSQL文:
```
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL,
  stock INTEGER DEFAULT 0
);
```

結果
sqlite> .table
```bash
products
```
sqlite> .schema products
```bash
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL,
  stock INTEGER DEFAULT 0
);
```


# 53 レコードの追加・検索
実行したSQL文:
```
sqlite> INSERT INTO products (name, price, stock)
   ...> VALUES
   ...>   ('apple', 100.00, 10),
   ...>   ('watermelon', 2000.00, 5),
   ...>   ('berry', 300.00, 8);
```

結果
sqlite> SELECT * FROM products;
```bash
1|apple|100.0|10
2|watermelon|2000.0|5
3|berry|300.0|8
```


# 54 レコードの更新・削除
実行したSQL文:
```
sqlite> UPDATE products
   ...> SET stock = 10
   ...> WHERE id = 2;
sqlite> DELETE FROM products
   ...> WHERE id = 3;
```

結果
SELECT * FROM products;
```
1|apple|100.0|10
2|watermelon|2000.0|10
```


# 55 複数条件での検索や並べ替え
実行したSQL文:
```
sqlite> SELECT * FROM products
   ...> WHERE stock > 0 AND price >= 1000
   ...> ORDER BY price DESC;
```

結果
```
2|watermelon|2000.0|10
3|pineapple|1500.0|10
```


# 56 Node.jsからデータベースに接続
コード
```
cat <<EOF > listTables.js //create js
// sqlite3 ライブラリを読み込む
const sqlite3 = require('sqlite3').verbose();
// データベースファイル mydata.db に接続
const db = new sqlite3.Database('./mydata.db', (err) => {
  if (err) {
    console.error('データベース接続エラー:', err.message);
    return;
  }
  console.log('データベースに接続しました');
});
// テーブル一覧を取得するSQL
const sql = \`SELECT name FROM sqlite_master WHERE type='table'\`;
// SQLを実行して結果を表示
db.all(sql, [], (err, rows) => {
  if (err) {
    console.error('テーブル一覧取得エラー:', err.message);
    return;
  }

  console.log('テーブル一覧:');
  rows.forEach((row) => {
    console.log(\`- \${row.name}\`);
  });
  // データベースを閉じる
  db.close((err) => {
    if (err) {
      console.error('データベース終了エラー:', err.message);
    }
  });
});
EOF
```

結果
node listTables.js
```
データベースに接続しました
テーブル一覧:
- products
```

# 57 Webサーバとデータベースの連携
updated server.js code:
```
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'mydata.db');
const db = new sqlite3.Database(dbPath);

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
```

結果
```
<img width="1152" height="362" alt="90e499cd532f3054cba004cf243dad43" src="https://github.com/user-attachments/assets/f099ac41-616b-42f4-b955-5ff52e110951" />

```

# 58 Webフォームからの入力データをデータベースに登録

create a public file and create form.html

server.js code edited
```bash
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
```

結果
```
<img width="1158" height="548" alt="7c34b732308efd5dead336174653167c" src="https://github.com/user-attachments/assets/38393b14-ee47-40e9-9b5b-5cdb5adb332c" />
<img width="970" height="294" alt="1bbe8123f06425cf7a0f7df99d8a8067" src="https://github.com/user-attachments/assets/05767650-385f-41cf-bd69-eac1882441f4" />
<img width="508" height="218" alt="ceb708ce8913c6c0d2f9af6e28ec0cc5" src="https://github.com/user-attachments/assets/a88a6122-204a-46af-803f-7b127faa77f4" />
```
# 59 登録データの編集・削除機能の実装
server.js code edited
```bash
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

```



# 60 認証と認可の違い
まとめ：
```
認証（Authentication）は「あなたは誰か」を確認する仕組みで，ID・パスワード，二要素認証，生体認証などにより本人確認を行う。一方，認可（Authorization）は「何をしてよいか」を決める仕組みで，ログイン後に閲覧・編集・削除などの権限を制御する。Webサービスでは，まず認証でユーザを特定し，次に認可で役割（管理者・一般ユーザなど）に応じた操作範囲を制限することで，安全なアクセス管理を実現する。なお，システムの処理順として，認証（Authentication）は必ず認可（Authorization）より先に行われる。
```

# 61 セッションとクッキーの仕組み
なぜ必要？
ブラウザとサーバー間の通信は状態を保持しない「HTTPのステートレス通信」であるため，ログイン状態などを維持するには，クッキー（Cookie）とセッション（Session）を組み合わせて利用する。
```
クッキーとは，
Webサイトが利用者のブラウザに保存する小さなデータである。主に文字列として保存され，次回以降のアクセス時に自動的にサーバへ送信される。
役割
ブラウザに小さなデータを保存する仕組み
ユーザ識別、設定保存、トラッキングなどに利用
仕組み
1. サーバ → ブラウザ  Set-Cookie: user_id=abc123; Max-Age=3600;  Set-Cookieとは、サーバーがブラウザに対してCookieを送信し、ブラウザに保存させるためのHTTPレスポンスヘッダー
2. ブラウザが保存
3. 次回アクセス時に自動送信 Cookie: user_id=abc123

セッションとは，ユーザごとの一時的な状態をサーバ側で管理する仕組みである。多くの場合，ユーザには「セッションID」だけが渡され，実際のデータはサーバ側に保存される。
役割
ユーザの状態をサーバ側で管理
ログイン状態、カート、権限情報など
仕組み
1. 初回アクセス
サーバがセッションIDを発行
セッションデータをサーバに保存
2. セッションIDをクッキーに入れて返す  Set-Cookie: session_id=xyz789;
3. 次回以降
ブラウザが session_id を送信
サーバが対応するセッション情報を取得

セッションとクッキーの違い

|        | クッキー           | セッション         |
|------------|--------------------|--------------------|
| 保存場所   | ブラウザ           | サーバ側           |
| 保存容量   | 小さい             | 比較的自由         |
| セキュリティ | 低め               | 高め               |
| 有効期限   | 指定可能           | 一定時間で失効     |
```




# 62 パスワードの安全な保存
「生パスワード保存」とは、ユーザが入力したパスワードをそのままデータベースに保存することを指す。
なぜ生パスワード保存は危険か？
```
データが漏洩した場合に全ユーザのパスワードがそのまま閲覧・利用可能な状態になる．さらに，管理者や内部者であっても容易に他人のパスワードを見られてしまい，重大なプライバシー侵害や不正利用につながる危険がある．
```
ハッシュ化とは
```
ハッシュ化とは，文字列などのデータを，一方向の関数によって固定長の別の値に変換する処理である．この変換は基本的に元に戻すことができず，同じ入力からは常に同じハッシュ値が得られるが，少しでも入力が変わると全く異なる値になるという性質を持つ．
```
ハッシュ化の意義
```
パスワードをハッシュ化して保存することで，サーバは生パスワードを保持せずに本人確認ができるようになる．万一データが漏洩しても，保存されているのは元に戻せないハッシュ値だけであり，管理者や第三者であっても直接パスワードを知ることはできない．特に bcrypt・scrypt・PBKDF2 などの方式は，計算を意図的に遅くし，ソルトを用いることで，総当たり攻撃や事前計算攻撃に強い耐性を持つ．
```

# 63 ユーザ登録API
dbを作る
<img width="842" height="190" alt="a81d5e41-132c-4300-b236-a3149ee00463" src="https://github.com/user-attachments/assets/39f56fca-3841-438f-b550-0798d9b8bfa6" />

jsコード
```js
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
```

結果：
テストユーザーを作成する
<img width="1144" height="174" alt="34be5a18-5e44-491b-b204-5d386f2d9b87" src="https://github.com/user-attachments/assets/c0decf1f-87ca-4ceb-a999-ff2f1cb77adf" />

<img width="1018" height="182" alt="9ee31862-8f89-463f-a39a-949a56418fdc" src="https://github.com/user-attachments/assets/347c9836-a9be-4072-9258-3f7e9783c7f5" />


# 64 ログインAPI
コード：
```js
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
```

結果；
<img width="1150" height="320" alt="9fc1d2b8-071d-41e7-887f-d2d1f4e22114" src="https://github.com/user-attachments/assets/6a2b1b8e-e493-46ee-a4e6-884110c99329" />

# 65 セッション管理
`express-session` ミドルウェアを使い、ログイン後にセッション情報を保持し、ログイン済ユーザのみがアクセスできるエンドポイント `/mypage` を実装した。
- 未ログイン状態で `/mypage` にアクセス → 401 Unauthorized
- ログイン成功後に `/mypage` にアクセス → ユーザ情報を取得できる

まず　npm install express-session

コード
const session = require("express-session");

// セッション設定
```js
app.use(session({
  secret: "your_secret_key", // 任意の文字列でOK（公開しない）
  resave: false,
  saveUninitialized: false,
}));
```

<img width="1394" height="688" alt="e15c531b-2c12-4b9e-9dcb-3a7fdfa860c7" src="https://github.com/user-attachments/assets/35fcebe6-9264-4ac8-b5e5-03abd32132a7" />

// ログイン済みユーザだけがアクセスできるページ
```js
app.get("/mypage", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }
  res.json({ message: "Welcome to your page!", user: req.session.user });
});
```

結果：
```
課題65ではクッキーについて明示的な指示はありませんが、
express-session はセッションIDをクッキーとしてクライアントに渡します。
そのため、curlでログイン状態を検証するには、
-c でクッキーを保存し、-b でクッキーを送信する方法が必要になります。

-c cookie.txtとは、サーバーから送られたクッキーを cookie.txt に保存するオプションです。
-b cookie.txtとは、保存されたクッキーを使ってリクエストを送るオプションです。
```
<img width="1134" height="342" alt="f9e1e282-1ab3-4a54-ab3d-14ba9c4065dc" src="https://github.com/user-attachments/assets/102914e3-7823-4234-8385-d5b96622661a" />



# 66 クッキーを利用したセッション管理
クッキー設定部分のコード：
```js
   cookie: {  // クッキー設定 　66
      maxAge: 60000,         // 有効期限：例 1分
      httpOnly: true,        // JavaScript からのアクセスを禁止（XSS 対策）
      secure: false          // HTTPS のとき true（開発中なら false でもOK）
    },
```
結果：

<img width="1140" height="476" alt="3009b862-4d23-475e-b8cd-646bb266a997" src="https://github.com/user-attachments/assets/83c0750e-ce03-4230-86b6-4d5122f03710" />


# 67 ログアウト処理
コード：
```js
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send("Logout failed");
    res.clearCookie("connect.sid"); // clear cookie
    res.json({ message: "Logout successful" });
  });
});
```
結果：

<img width="1168" height="420" alt="85c0d0da-7736-4ae9-b433-d21608f65085" src="https://github.com/user-attachments/assets/682a8d38-56cf-4bba-b7b4-acb60a260210" />


# 68 認証が必要なページ／API
コード：
```js
function requireLogin(req, res, next) {
  if (req.session && req.session.user) {
    next(); // 登录状态，继续处理
  } else {
    res.status(401).json({ error: "Unauthorized: Please log in" });
  }
}

app.get("/protected", requireLogin, (req, res) => {
  res.json({ message: "This is a protected page", user: req.session.user });
});
```
結果：

<img width="1142" height="336" alt="010ccd7a-db6c-4fd8-aeb9-3379688811aa" src="https://github.com/user-attachments/assets/44fa7f24-5a1e-4968-9a2e-b76bb52c06fc" />


# 69 CSRF・XSS対策
1. CSRF（Cross-Site Request Forgery）
```
脆弱性の概要
CSRF とは，ユーザがログイン中の状態を悪用し，攻撃者が用意した別サイトから，本人の意思とは無関係なリクエストを正規サイトに送らせる攻撃である．
例えば，銀行サイトにログインしたまま悪意あるページを開くと，「送金」「設定変更」などの処理が自動で実行されてしまうことがある．
サーバは「ログイン済みユーザからの正当な操作」だと誤認してしまう点が問題である．

主な対策
1.CSRF トークンの利用
フォーム送信時にランダムなトークンを埋め込み，正規画面からの送信かを検証する
2.SameSite 属性付き Cookie
他サイトからのリクエスト時に Cookie を送らせない
3.重要操作は POST メソッドを使用
GET だけで状態変更できない設計にする
4.再認証や確認画面の導入
送金・退会など重要操作時にパスワード再入力を求める
```
2. XSS（Cross-Site Scripting）
```
脆弱性の概要
XSS とは，入力欄やURLパラメータなどに悪意あるスクリプトを埋め込み，
それを他ユーザのブラウザ上で実行させる攻撃である．

主な対策
1. 出力時エスケープ
HTML に表示する前に <, >, ", ' などを無害化する
2. 入力値のバリデーション
不正なタグやスクリプトを拒否・除去する
3. HttpOnly 属性付き Cookie
JavaScript から Cookie を読み取れないようにする
4. CSP（Content Security Policy）の導入
実行できるスクリプトの出所を制限する
```



# 70 Reactプロジェクトの作成
```
npx create-react-app my-react-app
cd react_profile
npm start
```
スクリーンショット
<img width="500" height="500" alt="ff7cc28b-3f05-470d-8ad0-709255ff573d" src="https://github.com/user-attachments/assets/65f65e5d-dcb1-4ae1-9d9c-b42ddd89cc1d" />

# 71 最初のコンポーネントの作成
コード：
src/Profile.js
```js
import React from 'react';

function Profile() {
  return (
    <div>
      <h2>私のプロフィール</h2>
      <p>名前：陳 卜凡</p>
      <p>出身：中国</p>
      <p>趣味：コーヒー・音楽</p>
    </div>
  );
}

export default Profile;
```

src/App.js
```js
import React from 'react';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Reactへようこそ</h1>
      <Profile />
    </div>
  );
}

export default App;
```

スクリーンショット
<img width="632" height="470" alt="650555d3-9187-4938-a627-23e4908ffad6" src="https://github.com/user-attachments/assets/a5bc73f9-3ee6-4dd5-936f-071c6c3a0047" />

# 72 propsを用いたデータ受け渡し
App.js
```js
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Profile name="Cesc" age={24} />
    </div>
  );
}
```
Kid
```js
import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>こんにちは、{props.name}さん！</h2>
      <p>年齢: {props.age}歳</p>
    </div>
  );
}

export default Profile;
```
スクリーンショット
<img width="664" height="394" alt="d4408c55-fe67-4f90-8160-2ae31adc146f" src="https://github.com/user-attachments/assets/b742ae86-8d1f-44ac-ab3e-077c17c2fc4d" />


# 73 useStateによる状態管理
Counter.js
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={() => setCount(count + 1)}>＋ 増やす</button>
      <button onClick={() => setCount(count - 1)}>－ 減らす</button>
    </div>
  );
}

export default Counter;
```

App.js
```js
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>useState カウンター</h1>
      <Counter />
    </div>
  );
}
```

スクリーンショット
<img width="726" height="390" alt="aaefe3f5-d166-4556-8356-0671662c6112" src="https://github.com/user-attachments/assets/60c54878-4f18-4c68-ae5a-0b0904ac52b7" />

# 74 リストの動的描画

Counter.js
```js
import React from 'react';

function FruitList() {
  const fruits = ['りんご', 'バナナ', 'みかん', 'ぶどう'];

  return (
    <div>
      <h2>果物リスト</h2>
      <ul>
        {fruits.map((fruit, index) => (  //map() を使ってリストを動的に表示している
          <li key={index}>{fruit}</li>
        ))}  
      </ul>
    </div>
  );
}//key 属性は index で設定

export default FruitList;
```
スクリーンショット
<img width="556" height="566" alt="475f57cd-e426-4d5f-8b22-fe628a79e4ae" src="https://github.com/user-attachments/assets/5ba09bfa-75c6-485f-adb5-9220227160e2" />

# 75 フォーム入力とイベント処理

# 76 useEffectによる副作用処理

# 77 複数コンポーネントの分割・再利用

# 78 react-router-domを利用したルーティング

# 79 Reactアプリの公開









