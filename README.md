# README

webpackerの使用方法については以下のサイトを確認。
http://qiita.com/yoshiokaCB/items/564ed0440f0428c0009a

注）yarnがインストールされていることが前提条件です。

## 使用方法

```
$ git clone https://github.com/yoshiokaCB/react-webpacker-sample.git
$ cd react-webpacker-sample
$ bundle
$ bin/yarn install

# rails サーバ起動
$ rails s

# タスクランナー起動
$ bin/webpack-dev-server

```

以下、アクセスして表示を確認する。

### React-Bootstrap
http://localhost:3000/react_sample/bootstrap

### react-jsonschema-form
http://localhost:3000/react_sample/form

### Material-UI
http://localhost:3000/react_sample/material_ui


それぞれ、`/app/javascript/` 以下にファイルが置かれているので、それぞれ変更を加えて動きを確認する。
