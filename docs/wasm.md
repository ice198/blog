# RustでWebAssemblyにコンパイルする

## WebAssemblyとは
ネットの情報をまとめると、
:::info
WebAssembly(WASM)は、Webブラウザ上で高速に実行できるバイナリ形式のコードで、C、C++、Rustなどの言語で書かれたコードをコンパイルしてブラウザ内で動作させるために使われる。WASMはJavaScriptと連携して動作し、Webアプリケーションのパフォーマンスを向上させるため、計算の負荷が大きい処理やゲーム、ビデオ処理などに利用される。
:::
という感じのものらしい。JavaScriptを完全に置き換えるものではなく、JavaScriptの一部のコードをWasmに置き換えることで、データ量が小さくなりパフォーマンスの向上が期待できるようだ。

## 導入
とりあえず[公式ドキュメント](https://rustwasm.github.io/docs/book/)に従って環境を構築していく。

### `wasm-pack`をインストール
OSごとにインストールするためのコマンドが違うようで、[このページ](https://rustwasm.github.io/wasm-pack/installer/)からインストールする。私はUbuntuを使っているので以下のコマンドを使うように表示された。

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

### `cargo-generate`をインストール
`cargo-generate`を利用することによって既存のテンプレートから簡単にプロジェクトを作成できるらしい。

```bash
cargo install cargo-generate
```

### npmをインストール

```bash
npm install npm@latest -g
```
