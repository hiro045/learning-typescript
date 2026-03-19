# learning-typescript
TypeScript学習用

## 使い方

#### インストール
`npm install -g typescript`

### コンパイル
- ファイル指定
    - `tsc index.ts`  
    - `tsc index.ts --target ES2015`  
    - `tsc index.ts --target ES6`  
- すべてのファイルを一括
    - `tsc --init`でtsconfig.jsonを作成
        - `tsc --init`
    - コンパイル
        - `tsc`
- watchモード: 保存時に自動的にTSからJSにコンパイルする
    - `tsc index.ts -w`
    - `tsc index.ts --watch`

#### tsconfig.jsonについて
##### `files`, `include`, `exclude`
- files
    - コンパイル対象を個別ファイルで明示指定する。
    - 記載したファイルのみが対象（ワイルドカード不可）
- include
    - コンパイル対象をパターン（glob）で指定する。
    - `**`で再帰的にディレクトリを探索
    - 省略時はデフォルトで全 `.ts` ファイルが対象
    - `files`と`include`を両方省略すると、`exclude`対象以外の全ファイルがコンパイルされる
- exclude
    - `include`の対象から除外するパターンを指定する。
    - ルートディレクトリからみたファイルパスを記述する
    - `**`で再帰的にディレクトリを探索
##### `target`
- `compilerOptions` の `target`
    - TypeScriptをコンパイルした際に、どのバージョンのJavaScriptを出力するかを指定するオプション

**主な選択肢**

| 値 | 出力されるJS | 主な用途 |
| ---- | ---- | ---- |
| ES3 | 古い構文に変換 | 古いブラウザ対応 |
| ES5 | var, function等 | IE対応が必要な場合 |
| ES6 / ES2015 | let, const, アロー関数等 | モダンブラウザ |
| ES2016 ~ ES2022 | 各年の仕様に準拠 | Node.jsや現代的な環境 |
| ESNext | 最新仕様 | 常に最新を追う場合 |

##### `rootDir` と `outDir`
- `rootDir`
    - TypeScriptソースファイルのルートディレクトリを指定
    - コンパイル対象ファイルの起点となるディレクトリ
    - ディレクトリ構造を `outDir` にそのまま反映させるために使う
- `outDir`
    - コンパイル後のJSファイルの出力先を指定
    - 省略するとソースファイルと同じ場所に `.js` が生成される
    - `dist` や `build` を指定するのが一般的

### 実行
node index.js

### 参考
- [compatibility table](https://compat-table.github.io/compat-table/es6/)
- [tsconfig Reference](https://www.typescriptlang.org/tsconfig/)