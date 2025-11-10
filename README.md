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
## 13. curlコマンドでPOSTリクエストを送る

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
- `curl` コマンドで JSON データをPOST送信した。
- サーバ（httpbin.org）は受け取ったデータを `json` フィールドとしてそのまま返している。
- `Content-Type: application/json` は送信データの形式を示す。
- `User-Agent` は使用したクライアント（curl）の情報。
- `url` はアクセスしたエンドポイントを示す。

