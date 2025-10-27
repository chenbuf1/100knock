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
origin  git@github.com:senkeifan/git-practice.git (fetch)
origin  git@github.com:senkeifan/git-practice.git (push)
```

ローカルで1行追加しました。
ローカルで1行追加しました。(from github)


## 04. push/pullとコミット履歴
```
git log --oneline
35f55ee 04.Edit from GitHub
513c22c test for 04
2c35710 “03”
a3bc295 “02”
ac1b609 01
```


## 05. .gitignoreの作成と確認
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
