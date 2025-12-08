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


#48 
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


