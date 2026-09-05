# archi-prompt skill

[繁體中文](README.md) · [English](README.en.md) · **日本語** · [简体中文](README.zh-CN.md)

Claude 用の建築 AI プロンプトスキル。建築・インテリア・ランドスケープのプロンプトを8,000件以上蓄積したコミュニティサイト [archi-prompt.com](https://archi-prompt.com) から、そこで整理された書き方をひとつの skill にまとめたもの。

インストールしたあと、Claude に「丘の上の美術館のプロンプトを書いて」「この SketchUp モデルをフォトリアルなレンダリングにしたい」と頼めば、形容詞を並べるのではなく、この方法に沿って書く。

## 中核となる方法

**AI は「スタイル」で建築を理解しない。「情報の優先順位」で画像を生成する。**

モデルはプロンプトの冒頭にあるものを主たる情報として扱う。`golden hour` を最初の一文に置けば、建築そのものが崩れる。光がその画像の主題になってしまうからだ。だからプロンプトはこの順に並べる:

```
ボリューム → 幾何 → 構造 → 素材 → 開口 → 空間構成 → ランドスケープ → 光 → カメラ → レンダリング
```

レタッチはこれとは逆のロジックになる。要点は「何を変えるか」ではなく、**「何を変えてはいけないか」**を明記すること。そうしなければ、モデルは階数やカメラアングルまでついでに描き直す。

## 実例

以下の画像はすべて、その下にあるプロンプトから生成されたもの。[archi-prompt.com](https://archi-prompt.com) からそのまま引用している。タイトルをクリックすると元の投稿を見られる。テキストから生成するプロンプトは英語でゴールデンオーダーに沿って、レタッチのプロンプトは中国語で、変えてはいけないものを冒頭で固定して書く。

### [安藤忠雄風・コンクリート打ち放し美術館と光の隙間](https://archi-prompt.com/p/0aa4b2e3-0fef-4c0d-9b48-40213ec700e8)

`外観` · `テキストから生成` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-0aa4b2e3.webp" width="300" alt="Tadao Ando style concrete museum with a slit skylight and reflecting pool">

```
Art museum in the style of Tadao Ando, smooth exposed concrete volumes, a long slit
skylight casting a moving blade of light on the wall, shallow reflecting pool at the
entrance, single cherry tree, misty dawn, serene photorealistic photography
```

素材(打ち放しコンクリート)を光(朝霧)より先に置く。だから出てくるのは建築であって、雰囲気写真ではない。

### [ザハ・ハディド風・流れるような曲面の舞台芸術センター](https://archi-prompt.com/p/ff378a3a-2846-43f3-85ca-01f8444b260d)

`外観` · `テキストから生成` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-ff378a3a.webp" width="480" alt="Zaha Hadid style performing arts center with fluid white shell at dusk">

```
Performing arts center in the style of Zaha Hadid, fluid white curvilinear shell flowing
into the plaza, seamless GRC surfaces, ribbon-like glazing, dusk with cool blue sky and
warm interior glow, aerial three-quarter view, photorealistic rendering
```

巨匠の名前は具体的なボリュームと素材に落とし込む(`fluid white curvilinear shell`、`seamless GRC`)。名前だけでは、モデルは当てずっぽうで描く。

### [台湾の街屋リノベーション・雨上がりの夕方](https://archi-prompt.com/p/6a16d579-8dbe-48f5-8536-475ba054c41d)

`外観` · `テキストから生成` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-6a16d579.webp" width="480" alt="Renovated Taiwanese narrow townhouse with perforated brick screen facade on a rainy evening">

```
Renovated narrow townhouse facade in a dense Taiwanese street, weathered neighbors on both
sides, new perforated brick screen facade with warm light glowing through, scooters parked
along the street, humid evening atmosphere after rain, overhead power lines, street-level
photography, hyperrealistic, nostalgic yet contemporary mood
```

古い隣家、スクーター、電線といった文脈は明示する。書かなければ、モデルは街屋を小綺麗なヨーロッパの通りに置いてしまう。

### [SketchUp モデルからリアルなレンダリングへ](https://archi-prompt.com/p/780867a0-32e2-4c14-b8e6-8ba2720700dd)

`外観` · `レタッチ` · `Nano Banana`

<img src="https://archi-prompt.com/uploads/gen-780867a0.webp" width="480" alt="Photoreal architectural photography converted from a SketchUp white model">

```
將這張 SketchUp 白模截圖轉換成擬真建築攝影:保持建築量體、開窗位置與視角完全不變,
加入真實材質(清水模、玻璃、金屬板),補上柔和的下午自然光與陰影,背景加入淺景深的
街道與行道樹,整體呈現專業建築攝影質感。
```

「ボリューム・開口位置・視点はまったく変えない」を最初に置く。この一句がないと、モデルは階数やカメラアングルまで描き直す。レタッチのプロンプトを中国語で書くのは意図的で、指示文としての精度が高く、Nano Banana の中国語理解も良いため。

### [アクセル・フェルヴォールト風・侘寂のカントリーリビング](https://archi-prompt.com/p/43cd5a79-3311-4187-8741-a25aad452150)

`インテリア` · `テキストから生成` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-43cd5a79.webp" width="480" alt="Wabi-sabi country living room with lime-washed walls and oak beams">

```
Country house living room designed by Axel Vervoordt, lime-washed textured walls,
centuries-old oak beams, low linen sofas, wabi-sabi ceramics on a rustic altar table,
soft window light with painterly shadows, quiet timeless atmosphere, fine art photo
```

インテリアは素材の表面の状態(`lime-washed`、`centuries-old oak`)で決まる。「居心地がいい」「質感がある」といった感覚語では決まらない。

### [ピート・アウドルフ風・草原式パブリックガーデン](https://archi-prompt.com/p/5ae02baf-0072-4a9c-9801-3fe752c9a72f)

`ランドスケープ` · `テキストから生成` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-5ae02baf.webp" width="480" alt="Meadow-style public garden with ornamental grasses in golden autumn backlight">

```
Public garden designed by Piet Oudolf, drifts of ornamental grasses and echinacea seed
heads in matrix planting, mown grass path winding through, low golden autumn backlight,
frost on textures, immersive naturalistic garden photography
```

ランドスケープには植栽のロジックと動線が要る(`matrix planting`、`mown grass path`)。なければ、見栄えのいい雑草にしかならない。

### ほかにも8,000件以上

<table>
<tr>
<td width="25%"><a href="https://archi-prompt.com/p/4e6ac053-60a7-42ec-8da4-9d5c6973655c"><img src="https://archi-prompt.com/uploads/gen-4e6ac053.webp" alt="Taiwanese sanheyuan courtyard house"></a><br>台湾の三合院・燕尾棟</td>
<td width="25%"><a href="https://archi-prompt.com/p/9426e97f-ad1e-4a95-a378-5445bf3f8cea"><img src="https://archi-prompt.com/uploads/gen-9426e97f.webp" alt="Japanese zen rock garden in morning mist"></a><br>枯山水庭園・朝霧</td>
<td width="25%"><a href="https://archi-prompt.com/p/6c366419-bc04-48bd-b7f7-cdfd6cc7f201"><img src="https://archi-prompt.com/uploads/gen-6c366419.webp" alt="Bare shell apartment virtually staged as a modern living room"></a><br>スケルトン物件→リビング</td>
<td width="25%"><a href="https://archi-prompt.com/p/8fa463b3-6c5e-4932-9a43-25fb5a022a72"><img src="https://archi-prompt.com/uploads/gen-8fa463b3.webp" alt="Facade material swapped from concrete to red brick"></a><br>外壁材の交換</td>
</tr>
</table>

題材に近いものがサイトにあれば、skill はそれを骨組みとして引いてくる。ゼロから書くより速く、精度も高い。

## 収録内容

| | |
|---|---|
| 方法論 | ゴールデンオーダー10段構成、空間文法ライブラリ、よくある失敗の対照表 |
| スタイル | 現代の34スタイル(建築/インテリア/ランドスケープ)、それぞれキーワードと完全な作例つき |
| 巨匠 | 32人のデザイナーの語彙(建築12、インテリア10、ランドスケープ10) |
| 建築史 | 44の歴史様式、スタイル変換テンプレートつき |
| レタッチ | モデルからレンダリングへ、光と時間帯、素材案の比較、視点と図面の変換 |
| 実例 | archi-prompt.com の8,000件以上から近いものを探して骨組みに使う |

## インストール

同じ内容を3つの形式にまとめてある。使っているツールに合わせて選ぶ。

### Claude Code

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

あるいは `plugins/archi-prompt/skills/archi-prompt/` フォルダをそのまま `~/.claude/skills/` に置いてもいい。

### OpenAI Codex、Gemini CLI などの CLI エージェント

このリポジトリを clone して、その中でエージェントを起動するだけ。ルートの [AGENTS.md](AGENTS.md) はこの種のツールの共通慣例で、自動的に読み込まれる。

```bash
git clone https://github.com/jjhuangtw/archi-prompt-skill.git
cd archi-prompt-skill
```

### ChatGPT の Custom GPT、Gemini の Gem

この2つの製品にはファイルシステムがなく、「必要なときに参照ファイルを読む」ができない。そのため内容を2つのファイルに平坦化して [portable/](portable/) に置いてある。`instructions.md` を指示欄に貼り、`knowledge.md` をナレッジとしてアップロードする。設定手順は [portable/README.md](portable/README.md) を参照。

---

`portable/` 以下のファイルは `node scripts/build-portable.mjs` が skill の原本から生成する。直接編集しないこと。内容を変えるときは `plugins/archi-prompt/skills/archi-prompt/` を編集してから再生成する。

## ライセンス

[MIT](LICENSE) —— 自由に使用・改変・商用利用できる。役に立ったら [archi-prompt.com](https://archi-prompt.com) に一言触れてもらえると嬉しい。

サイトの会員が投稿したプロンプトはこのリポジトリの配布対象ではなく、ここにあるのはサイト側が整理した方法論とスタイル語彙のみ。サイトから引用した内容は元の作者に帰属する。参考と骨組みとして扱い、丸ごとコピーして自作と称さないこと。
