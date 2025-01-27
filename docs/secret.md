隠しページへようこそ。

---

# URL
以下は私が知っているすべてのURLです。

## 村作成URL

http://zinro.net/m/room_create.php?mode=submit

このURLに以下の項目を先頭に&を付けてつなげていく。


|設定|パラメータ|説明|
|:-:|:-:|:-:|
|プレイヤー名|player_name|プレイヤー名の設定（必須）|
|村名|room_name|村の名前（必須）|
|コメント|comment|村の説明文|
|村の掟|rule|設定方法がかなり大変（後述）|
|定員|teiin|定員数を半角数字で設定|
|軽量版|speed|1 にするとオン|
|観戦者として入る|rom|1 にするとオン|
|合言葉をつける|pass|設定した文字列が合言葉になり、鍵村になる。|
|GMモード|no_gm|0 と設定するとオン（後述）|
|非公開村|private|1 と設定するとオン（後述）|

### プレイヤー名
トリップを設定する場合は **#** を **%23** に置き換える必要がある。例えば、田中#aaaaaaaaaa は、田中%23aaaaaaaaaa となる。

### 村の掟
**#** を **%23** に、全角スペースを **%E3%80%80** に、半角スペースを **+** に、改行を **%0D%0A** に置き換えなければならない。

例えば、
``` 村の掟
【ルール】
早噛み禁止。
全角スペース→　半角スペース→ #人狼
````
と設定する場合は、
````
rule=【ルール】%0D%0A早噛み禁止。%0D%0A全角スペース→%E3%80%80半角スペース→+%23人狼
````
となる。

### GMモード
no_gm=0 とすると、

<img src="/images/image13.png" width="500" style="display: block; margin: auto;">

のように、GMとして村が作成される。GMモードについては詳しく知らない。恐らく、以前存在していた機能だと思われる。

### 非公開村
private=1 とすると、【村を探す】のリストに作成した村が表示されなくなる。【村に入る】のページに直接村名を入力ことで入村できる。合言葉で鍵村を作成する機能が実装される以前に、身内村を作成するための機能の名残だと思われる。

### 例
プレイヤー名: 田中
<br>村名: 田中の村
<br>コメント: みんなきてね。
<br>村の掟:
``` 村の掟
【ルール】
早噛み禁止。
暴言禁止。
```
定員: 10
<br>観戦者として入る: オン
<br>合言葉をつける: パスワード1111

という村を作成するURLは、
```
http://zinro.net/m/room_create.php?mode=submit&player_name=田中&room_name=田中の村&comment=みんなきてね。&rule=【ルール】%0D%0A早噛み禁止。%0D%0A暴言禁止。&teiin=10&rom=1&pass=パスワード1111
```
となる。

## 村作成後に変更
一部のパラメータは村作成後に変更できる。

https://zinro.net/m/player.php?mode=モード&パラメータ=値

|設定|モード|パラメータ|値|
|:-:|:-:|:-:|:-:|
|村の説明文を変更|update_room_comment|comment|文字列|
|定員数を変更|changeTeiin|teiin|数|
|合言葉変更|updatePass|pass|文字列|
|ワンナイト|setOnenight|is_onenight|on|
|ワードウルフ|setWord|is_word|on|

## 役職設定変更URL

https://zinro.net/m/player.php?mode=updateJobset&job_1=**

**のところに任意の数字を入れる。例えば、

https://zinro.net/m/player.php?mode=updateJobset&job_1=3

というURLは人狼の人数を3人に設定できる。通常では設定できない数（9999人など）にしたり、小数（3.14人など）にすることも可能。

役職に対応するパラメータは以下を参照。

|パラメータ|役職|
|:-:|:-:|
|job_1|人狼|
|job_3|狩人|
|job_4|占い師|
|job_5|霊能者|
|job_6|狂人|
|job_7|狂信者|
|job_8|狐|
|job_9|背徳者|
|job_10|猫又|
|job_11|共有者|
|job_12|役人|
|job_13|怪盗|
|job_14|狼憑き|
|job_15|ものまね|
|job_16|てるてる|
|job_17|恋人|
|job_18|パン屋|
|job_19|黒猫|

:::warning 注意点
複数の役職を設定するときは

https://zinro.net/m/player.php?mode=updateJobset&job_1=1&job_3=1&job_4=1

のように、&job_?=** を後ろにつなげて設定する必要がある。URLを読み込むとそのURLで設定されていない役職は0としてリセットされてしまうので、全ての役職設定をURLに含める必要がある。
:::

## 村設定変更URL

村設定もURLを読み込むことで変更できる。

https://zinro.net/m/player.php?mode=updateJobset&パラメータ=値

設定事項に対応するパラメータは以下を参照。

|設定|パラメータ|値|
|:-:|:-:|:-:|
|役欠けなし|yakukakenashi|on|
|身内限定|friend|on|
|初心者歓迎|beginner|on|
|中級以上|no_beginner|on|
|人狼系|zinro|on|
|雑談系|no_zinro|on|
|最多票が同数のとき再投票にする|revote|on|
|投票中発言可|votechat|on|
|白ランダム|whiterandom|on|
|プレイヤー名をランダムにする|shufflename|on|

::: warning 注意点
パラメータは設定しなければオフになる。したがって、役職設定と同じように **&パラメータ=値** を後ろにつなげる必要がある。村設定だけしてしまうと役職設定がリセットされてしまうため、実際には役職設定+村設定をすべて含めたURLを読み込む必要がある。
:::

例として、

タグ: 人狼系、初心者歓迎
<br>役職設定【人狼-2,占い師-1,狩人-1,霊能者-1,狂人-1,役欠け:あり】
<br>村設定【再投票:オフ,ワンナイト:オフ,白ランダム:オン】

として設定するURLは、

https://zinro.net/m/player.php?mode=updateJobset&job_1=2&job_3=1&job_4=1&job_5=1&job_6=1&beginner=on&zinro=on&whiterandom=on

のようになる。

## その他のURL

#### ゲーム開始
https://zinro.net/m/player.php?mode=start

#### シーン変更（昼から投票時間に）
https://zinro.net/m/player.php?mode=updateScene&from=昼

#### シーン変更（投票時間から夜に）
https://zinro.net/m/player.php?mode=updateScene&from=投票

#### 延長
https://zinro.net/m/player.php?mode=extendTime

#### 中断
https://zinro.net/m/player.php?mode=stopGame

#### プレイヤー情報取得
https://zinro.net/m/api/?mode=players

プレイヤー情報の他に、村の情報も取得できる。

#### プレイヤーをキック
https://zinro.net/m/player.php?kick=ID

IDからプレイヤーをキックするURL。

:::info IDとは
すべてのプレイヤーに割り振られている数字列。
<br>**例**
<br>田中: 11409410
<br>佐藤: 11409411
<br>
<br>これらは通常見ることはないが、プレイヤー情報取得URLから確認できる。キックURLを使用するには、まずキック対象のプレイヤーのIDを取得する必要がある。余談だが、初日犠牲者にもIDが割り振られているため、IDを取得すれば初日犠牲者やRM自身をキックすることもできる。
:::

#### 村の掟同意
https://zinro.net/m/player.php?mode=commit_room_rule

観戦者も村の掟に同意することが可能。

---
# ツール
以下は私が過去に作ったBotについてです。

## Brella v.1.5

人狼onlineで動作するbot。過去から現在までのログを集計し、プレイヤーのスキルをレート(人狼パワー)として数値化する。あまり当てにならない。

<a href="/Brella_v.1.5.zip" download>
  <button class="download-btn">ダウンロード</button>
</a>

<style>
  .download-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 12px; /* 角を丸くする */
  }

  .download-btn:hover {
    background-color: #45a049;
  }

  a {
    text-decoration: none;
  }
</style>

## セットアップ

#### 1. Chromeブラウザをインストール
すでにインストール済みの場合はスキップ

#### 2. VSCodeをインストール
[ダウンロードページ](https://code.visualstudio.com/download)からVSCodeを入れた後、BrellaフォルダをVSCodeで開く。
```
user@PC:~/Desktop/Brella$
```
ターミナルを表示させて、最後の文字列がBrellaになっていればOK

#### 3. Chromeドライバーをダウンロード
[ダウンロードページ](https://googlechromelabs.github.io/chrome-for-testing/)からそれぞれのOSのchromeドライバー(**Stable**の**chromedriver**)をダウンロードしてBrellaフォルダ内のchromeフォルダに置く。
```
Brella
├── README.md
├── bot.py
├── chrome
│   └── chromedriver
├── data
└── settings.txt
```


#### 4. Pythonとpipをインストール
OSごとに方法が異なるため省略。

#### 5. 環境構築
pythonとpipがインストールできたら以下を実行

```py
python3  -m venv venv
```
次は使うOSによって異なる

Mac,Linuxの場合
```py
source venv/bin/activate
```
Windowsの場合
```py
.\venv\Scripts\activate
```
その後はどのOSも同じ
```py
pip install selenium
pip install pandas
pip install requests
 ```

 #### 6. 管理者設定
settings.txtの2行目に管理者のトリップを入力する。(初期に ◆example.AA となっている箇所を書き換える。)

2行目以外の場所に記述した場合は認識されないため注意。基本的に1回設定すれば変更する必要はないが、使うトリップを変えた場合はその都度変更する必要がある。

## 使い方
以下を実行
```py
python3 bot.py
```
chromeブラウザが自動実行されて村選択画面が表示されるので、自分が建てた村にbotを**観戦者**として入村させる。40秒ごとにページを読み込み直すので、ページが途中でリフレッシュされるまでに入村させる必要がある。(入村後にブラウザは自動で最小化される。)

入村後は自動で実行されるため操作する必要はない。botの機能を使うには以下のコマンドを人狼onlineのページで発言する。

### 一般コマンド
すべてのユーザーが使えるコマンド

**#ウデマエ**　　　内部レートをもとに S A B C の中から判定される
<br>**#タイマー** XX　 XXの部分に数字を入れる。#タイマー 30 だと30秒が計測される

ウデマエの仕様はプレイヤーのレートが全体の上位何％かで判定している。

S 上位20%以上
<br>A 上位50%以上
<br>B 上位50%未満
<br>C 人狼パワーが不明

レートは過去の10a狩のログを集計して計算している。平均は1500。

### 管理者コマンド
管理者のみが使えるコマンド

**#部屋パワー**　　　プレイヤーの平均内部レートを表示
<br>**#開始**　　　　　　botにゲームの開始を伝える
<br>**#退室**　　　　　　botを村から退出させる

## その他

### 素酉改竄
ブラウザのCookieを書き換えることで素酉を変更できる。詳しい仕組みは知らない。以下は頑張って見つけた素酉キーたち。

<br>%00hlXdXi"e\b　→　Aquamarine
<br>%13\Z!efcf+pX　→　Technology

Cookieの tripkey の値を素酉キーに書き換えることで使うことができる。

### 蹴り戻り
ipアドレスを変えることで一度キックされた村に入ることができる。使う機会がほとんどないため詳しくは知らない。プロキシサイトはreCAPTCHAを突破できなかった。一応VPNを使うことで成功はした。
