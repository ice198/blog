import{_ as e,c as r,a2 as t,o as i}from"./chunks/framework.BQmytedh.js";const p="/assets/image1.CNbPrgkW.webp",o="/assets/image2.Cb6gaDrd.webp",n="/assets/image3.Bm4RAa0n.webp",s="/assets/image4.CahAwQJr.png",l="/assets/image5.YtwjT-El.png",u=JSON.parse('{"title":"人狼Onlineのトリップについて","description":"","frontmatter":{},"headers":[],"relativePath":"trip.md","filePath":"trip.md","lastUpdated":1732264587000}'),h={name:"trip.md"};function c(d,a,m,b,g,k){return i(),r("div",null,a[0]||(a[0]=[t('<h1 id="人狼onlineのトリップについて" tabindex="-1">人狼Onlineのトリップについて <a class="header-anchor" href="#人狼onlineのトリップについて" aria-label="Permalink to &quot;人狼Onlineのトリップについて&quot;">​</a></h1><h2 id="トリップとは" tabindex="-1">トリップとは <a class="header-anchor" href="#トリップとは" aria-label="Permalink to &quot;トリップとは&quot;">​</a></h2><p>Wikioediaによると</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>トリップとは、個人の識別のために使われる文字列を表示する機能、またはその機能によって表示された文字列を指す。</p></div><img src="'+p+'" width="600" style="display:block;margin:auto;"><p>プレイヤー名をタップすると表示されるこれですね。</p><p>人狼Onlineではアカウントを作成することなく自由にゲームに参加することができます。また、すでに他の人に利用されている名前も使うことができます。そのため、他のプレイヤーの名前を使って荒らしなどを行う人が出た場合、本人と見分けることが困難になってしまいます。</p><p>そのような、<strong>なりすましを防ぐために使われるものがトリップ</strong>です。</p><h2 id="トリップの付け方" tabindex="-1">トリップの付け方 <a class="header-anchor" href="#トリップの付け方" aria-label="Permalink to &quot;トリップの付け方&quot;">​</a></h2><img src="'+o+'" width="500" style="display:block;margin:auto;"><p>このように、プレイヤー名の後に#をつけて任意の半角英数字10文字を入力すると下のように<strong>固定トリップ</strong>を付けることができます。</p><img src="'+n+'" width="600" style="display:block;margin:auto;"><p>固定トリップには◆がつきます。また、固定トリップ（固定酉）に対して◆のついていないトリップは素トリップ（素酉）と呼ばれます。</p><p>このときに入力した #**********（任意の半角英数字10文字）を<strong>トリップキー</strong>と呼びます。（#は半角です。全角＃と間違えやすいので注意。）</p><p>トリップは入力されるトリップキーによって決まります。#Tarabaganiと入力すれば、必ず◆yClz510H9lとなります。トリップキーとトリップの関係は不規則です。トリップキーを1文字でも変えると、全く別のトリップができます。（ただしトリップキーとして使われるのは8文字目までなので、9文字目と10文字目は関係なく、トリップに影響はしません）</p><p>トリップは、トリップキーをトリップに変換することはできても、トリップをトリップキーに変換することはできないようにできています。</p><h2 id="_10桁トリップと12桁トリップ" tabindex="-1">10桁トリップと12桁トリップ <a class="header-anchor" href="#_10桁トリップと12桁トリップ" aria-label="Permalink to &quot;10桁トリップと12桁トリップ&quot;">​</a></h2><p>トリップキーをつけるのに半角英数字10文字を入力すると述べましたが、それに加えて .（ピリオド）と /（スラッシュ）も使えます。</p><p>正確にはUTF-8の10byteの文字列が使えます。（UTF-8は文字コードの1種です。ここでの説明は省略します。）</p><p>10byte以外の文字列をトリップキーにした場合、10桁トリップは付きません。</p><p>人狼Onlineには10桁トリップの他に、12桁トリップがあります。</p><p>12桁トリップはUTF-8の12byte以上の文字列をトリップキーにした場合に付けることができます。</p><img src="'+s+'" width="500" style="display:block;margin:auto;"><br><img src="'+l+'" width="600" style="display:block;margin:auto;"><p>ざっくり言うと、<strong>#の後に半角英数字10文字を入れると10桁トリップ、半角英数字12文字を入れると12桁トリップを付けることができます。</strong></p><h2 id="トリップ検索とは" tabindex="-1">トリップ検索とは <a class="header-anchor" href="#トリップ検索とは" aria-label="Permalink to &quot;トリップ検索とは&quot;">​</a></h2><p>トリップの文字列はトリップキーによって不規則に決まると述べましたが、ある程度なら任意の文字列を入れることができます。</p><p>一体どうやるのか。</p><p>トリップからトリップキーをつくれないのなら方法は1つ。それは総当りです。</p><p>つまりトリップキーを適当に入れまくって自分の望むトリップができるまで続けるんですね。</p><p>最初の1桁や2桁はそれでできるかもしれませんが、あまり現実的ではないので実際にはプログラムにやらせます。</p><p>ブラウザでトリップを検索するには<a href="https://olivier-zinro.fc2.net/blog-category-21.html" target="_blank" rel="noreferrer">トリップ検索サイト</a>や<a href="https://milkybot.wiki.fc2.com/wiki/UncoTripFinder" target="_blank" rel="noreferrer">UTF</a>などのサイトがあります。</p><p>また、PC向けにMeriken&#39;s Tripcode Engineという高速なトリップ検索ソフトがあります。パソコンを持っている人はこちらを使うのがいいかと思います。</p><h2 id="トリップ検索にかかる時間" tabindex="-1">トリップ検索にかかる時間 <a class="header-anchor" href="#トリップ検索にかかる時間" aria-label="Permalink to &quot;トリップ検索にかかる時間&quot;">​</a></h2><p>一致させる文字数を増やすごとに指数関数的に増加します。3文字トリップは比較的かんたんに作れますが、5文字トリップになるとブラウザ検索では厳しくなります。パソコンでトリップ検索ソフトを使っても、8文字以上一致させるには時間がかかります。</p><p>この <strong>「検索に時間がかかる」ことが固定トリップの安全性を高めています。</strong></p><p>トリップ検索ツールで他人と全く同じトリップを作ろうとした場合、完成させるには膨大な時間がかかるため現実的ではありません。</p><h2 id="トリップ検索にかかる時間の目安-utfを使用した場合" tabindex="-1">トリップ検索にかかる時間の目安(UTFを使用した場合) <a class="header-anchor" href="#トリップ検索にかかる時間の目安-utfを使用した場合" aria-label="Permalink to &quot;トリップ検索にかかる時間の目安(UTFを使用した場合)&quot;">​</a></h2><h3 id="ブラウザ版" tabindex="-1">ブラウザ版 <a class="header-anchor" href="#ブラウザ版" aria-label="Permalink to &quot;ブラウザ版&quot;">​</a></h3><p>ブラウザで検索する場合はパソコンとモバイル端末ではそんなに差がないかなという印象です。もちろんスペックに依存するのですが、</p><p>iPhone SE（初代）　　　　　　 3000Trips/sec</p><p>iPhone12　　　　　　　　　　　11000Trips/sec</p><p>パソコン（Ryzen7 5800H）　　12000Trips/sec</p><p>ぐらいのスピードで計算できます。パソコンはタブ数を増せばさらに計算速度は上がります。以下に12000Trip/secで計算した場合の所要時間を示します。</p><p>3文字トリップ　　22秒</p><p>4文字トリップ　　23分</p><p>5文字トリップ　　1491分</p><p>この所要時間は推定ですので、運が良ければ1秒で出る可能性も0ではありません。</p><p>サイコロでイメージすると分かりやすいです。例えば6という目を出そうとすると、1回目の試行で出る確率は6分の1ですが、3回目では2分の1になります。</p><p>トリップに当てはめて考えると、5文字トリップを作ろうとした場合はすべてのパターンが 64の5乗=1073741824となります。</p><p>つまり1073741824面のサイコロ（ほぼ球体ですが…）の中から特定の1パターンを出すようなものです。計算速度は1秒間にサイコロを振る回数です。</p><p>上の例に当てはめると、1秒間に12000回サイコロを振るということなので、</p><p>1073741824÷12000=89479秒（1491分）</p><p>すべてのパターンを出す目安は1491分となります。目安なので、1491分よりも早く終わる時もあれば、さらに時間がかかる時もあります。</p><p>ブラウザでの話をしましたが、パソコンではどうなのかというとトリップ検索ソフトを使った場合の検索速度は</p><p>10桁で　　130000000Trips/sec</p><p>12桁で　　300000000Trips/sec</p><p>ほどの速度が出ます。私の環境での速度なので、さらに高性能なCPUを使った場合はもっと速度が出ると思います。Meriken&#39;s Tripcode EngineはGPUを使って計算することもできるようなので、ゲーミングパソコンを持ってる方は試してみると良いかもしれません。（私は普通のノートパソコンを使っているので検証できませんでした。）</p><p>やはり検索ソフトは高速ですね。ブラウザの1万倍くらいの速度が出ています。5文字トリップがおよそ8秒でできてしまう速度です。</p><p>（ブラウザ版では10桁トリップについてしか書いていませんが、これは12桁トリップを検索できるサイトを私が知らないためです。もしかしたら12桁トリップ検索サイトがあるかもしれないです。）</p><h2 id="追記" tabindex="-1">追記 <a class="header-anchor" href="#追記" aria-label="Permalink to &quot;追記&quot;">​</a></h2><p>いくら探しても12桁トリップ検索サイトを見つけられなかったので、<a href="https://tripcodefinder.pages.dev/tripcodefinder/" target="_blank" rel="noreferrer">12桁トリップ作成機</a>を作りました。</p><h2 id="個人的な考え" tabindex="-1">個人的な考え <a class="header-anchor" href="#個人的な考え" aria-label="Permalink to &quot;個人的な考え&quot;">​</a></h2><p>5文字トリップ以上を検索するならパソコンを使わないと厳しい印象。スマホでブラウザの検索ツールを使う場合、画面を表示し続ける必要があるので不便だと感じました。とはいえ4文字以下なら普通に検索できるので、有効な検索手段だとは思います。</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><p><a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AA%E3%83%83%E3%83%97_(%E9%9B%BB%E5%AD%90%E6%8E%B2%E7%A4%BA%E6%9D%BF)" target="_blank" rel="noreferrer">トリップ - Wikipedia</a></p><p><a href="https://qiita.com/KiwamiTrip/items/863baf9e82064603c22d" target="_blank" rel="noreferrer">トリップについて - Qiita</a></p><p><a href="https://milkybot.wiki.fc2.com/wiki/%E3%83%88%E3%83%AA%E3%83%83%E3%83%97%E3%81%AE%E5%AE%89%E5%85%A8%E6%80%A7" target="_blank" rel="noreferrer">トリップの安全性 - Milkyの裏人狼onlinewiki</a></p><hr><h3 id="おまけ" tabindex="-1">おまけ <a class="header-anchor" href="#おまけ" aria-label="Permalink to &quot;おまけ&quot;">​</a></h3><p>ご自由にどうぞ</p><p>◆Logical.EYZR　　#AｴF､c給ｭ｢｡ﾕﾋ</p>',73)]))}const _=e(h,[["render",c]]);export{u as __pageData,_ as default};
