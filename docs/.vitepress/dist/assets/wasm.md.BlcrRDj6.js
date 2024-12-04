import{_ as s,c as e,a4 as t,o as i}from"./chunks/framework.D2q5ST7L.js";const b=JSON.parse('{"title":"RustでWebAssemblyにコンパイルする","description":"","frontmatter":{},"headers":[],"relativePath":"wasm.md","filePath":"wasm.md"}'),l={name:"wasm.md"};function n(r,a,h,p,o,c){return i(),e("div",null,a[0]||(a[0]=[t('<h1 id="rustでwebassemblyにコンパイルする" tabindex="-1">RustでWebAssemblyにコンパイルする <a class="header-anchor" href="#rustでwebassemblyにコンパイルする" aria-label="Permalink to &quot;RustでWebAssemblyにコンパイルする&quot;">​</a></h1><h2 id="webassemblyとは" tabindex="-1">WebAssemblyとは <a class="header-anchor" href="#webassemblyとは" aria-label="Permalink to &quot;WebAssemblyとは&quot;">​</a></h2><p>ネットの情報をまとめると、</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>WebAssembly(WASM)は、Webブラウザ上で高速に実行できるバイナリ形式のコードで、C、C++、Rustなどの言語で書かれたコードをコンパイルしてブラウザ内で動作させるために使われる。WASMはJavaScriptと連携して動作し、Webアプリケーションのパフォーマンスを向上させるため、計算の負荷が大きい処理やゲーム、ビデオ処理などに利用される。</p></div><p>という感じのものらしい。JavaScriptを完全に置き換えるものではなく、JavaScriptの一部のコードをWasmに置き換えることで、データ量が小さくなりパフォーマンスの向上が期待できるようだ。</p><h2 id="導入" tabindex="-1">導入 <a class="header-anchor" href="#導入" aria-label="Permalink to &quot;導入&quot;">​</a></h2><p>とりあえず<a href="https://rustwasm.github.io/docs/book/" target="_blank" rel="noreferrer">公式ドキュメント</a>に従って環境を構築していく。</p><h3 id="wasm-packをインストール" tabindex="-1"><code>wasm-pack</code>をインストール <a class="header-anchor" href="#wasm-packをインストール" aria-label="Permalink to &quot;`wasm-pack`をインストール&quot;">​</a></h3><p>OSごとにインストールするためのコマンドが違うようで、<a href="https://rustwasm.github.io/wasm-pack/installer/" target="_blank" rel="noreferrer">このページ</a>からインストールする。私はUbuntuを使っているので以下のコマンドを使うように表示された。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rustwasm.github.io/wasm-pack/installer/init.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><h3 id="cargo-generateをインストール" tabindex="-1"><code>cargo-generate</code>をインストール <a class="header-anchor" href="#cargo-generateをインストール" aria-label="Permalink to &quot;`cargo-generate`をインストール&quot;">​</a></h3><p><code>cargo-generate</code>を利用することによって既存のテンプレートから簡単にプロジェクトを作成できるらしい。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo-generate</span></span></code></pre></div><h3 id="npmをインストール" tabindex="-1">npmをインストール <a class="header-anchor" href="#npmをインストール" aria-label="Permalink to &quot;npmをインストール&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm@latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div>',15)]))}const k=s(l,[["render",n]]);export{b as __pageData,k as default};
