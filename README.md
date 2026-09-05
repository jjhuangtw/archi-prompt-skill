# archi-prompt skill

**繁體中文** · [English](README.en.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

給 Claude 用的建築 AI 提示詞技能。來自 [archi-prompt.com](https://archi-prompt.com) —— 一個累積了八千多則建築、室內、景觀 AI 提示詞的社群平台 —— 把站上整理出來的寫作方法打包成一個 skill。

裝上之後,跟 Claude 說「幫我寫一個山坡上美術館的提示詞」或「這張 SU 模型想轉成寫實渲染」,它就會照這套方法寫,而不是堆一串形容詞。

## 核心方法

**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**

模型會把提示詞開頭的東西當成主要資訊。把 `golden hour` 寫在第一句,建築本身就會歪掉,因為模型把光當成了這張圖的主題。所以提示詞照這個順序排:

```
量體 → 幾何 → 結構 → 材料 → 開口 → 空間組織 → 景觀 → 光線 → 鏡頭 → 算圖
```

修圖則是另一套邏輯:重點不是「要改什麼」,而是明寫**「什麼必須保持不變」**,否則模型會順手把樓層數與拍攝角度一起重畫。

## 範例

下面每一張都是 [archi-prompt.com](https://archi-prompt.com) 上的實際成果,提示詞原封不動附在圖下面,點標題可以看原始貼文。文生圖用英文寫、依黃金順序排;修圖用中文寫、開頭先鎖死不准動的東西。

### [安藤忠雄風・清水模美術館與光縫](https://archi-prompt.com/p/0aa4b2e3-0fef-4c0d-9b48-40213ec700e8)

`建築外觀` · `文生圖` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-0aa4b2e3.webp" width="300" alt="Tadao Ando style concrete museum with a slit skylight and reflecting pool">

```
Art museum in the style of Tadao Ando, smooth exposed concrete volumes, a long slit
skylight casting a moving blade of light on the wall, shallow reflecting pool at the
entrance, single cherry tree, misty dawn, serene photorealistic photography
```

材料(清水模)排在光線(晨霧)前面,所以出來的是一棟建築,不是一張氣氛照。

### [Zaha Hadid 風・流動曲面表演藝術中心](https://archi-prompt.com/p/ff378a3a-2846-43f3-85ca-01f8444b260d)

`建築外觀` · `文生圖` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-ff378a3a.webp" width="480" alt="Zaha Hadid style performing arts center with fluid white shell at dusk">

```
Performing arts center in the style of Zaha Hadid, fluid white curvilinear shell flowing
into the plaza, seamless GRC surfaces, ribbon-like glazing, dusk with cool blue sky and
warm interior glow, aerial three-quarter view, photorealistic rendering
```

大師風格要落到具體的量體與材料(`fluid white curvilinear shell`、`seamless GRC`),只寫名字模型會亂猜。

### [台灣街屋改造・雨後傍晚](https://archi-prompt.com/p/6a16d579-8dbe-48f5-8536-475ba054c41d)

`建築外觀` · `文生圖` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-6a16d579.webp" width="480" alt="Renovated Taiwanese narrow townhouse with perforated brick screen facade on a rainy evening">

```
Renovated narrow townhouse facade in a dense Taiwanese street, weathered neighbors on both
sides, new perforated brick screen facade with warm light glowing through, scooters parked
along the street, humid evening atmosphere after rain, overhead power lines, street-level
photography, hyperrealistic, nostalgic yet contemporary mood
```

老鄰居、機車、電線這些脈絡要明寫出來,不寫模型會把街屋放進一條乾淨的歐洲街道。

### [SketchUp 模型轉實景渲染](https://archi-prompt.com/p/780867a0-32e2-4c14-b8e6-8ba2720700dd)

`建築外觀` · `修圖` · `Nano Banana`

<img src="https://archi-prompt.com/uploads/gen-780867a0.webp" width="480" alt="Photoreal architectural photography converted from a SketchUp white model">

```
將這張 SketchUp 白模截圖轉換成擬真建築攝影:保持建築量體、開窗位置與視角完全不變,
加入真實材質(清水模、玻璃、金屬板),補上柔和的下午自然光與陰影,背景加入淺景深的
街道與行道樹,整體呈現專業建築攝影質感。
```

「量體、開窗位置與視角完全不變」放在最前面 —— 少了這半句,模型會連樓層數跟拍攝角度一起重畫。

### [Axel Vervoordt 風・侘寂鄉村客廳](https://archi-prompt.com/p/43cd5a79-3311-4187-8741-a25aad452150)

`室內設計` · `文生圖` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-43cd5a79.webp" width="480" alt="Wabi-sabi country living room with lime-washed walls and oak beams">

```
Country house living room designed by Axel Vervoordt, lime-washed textured walls,
centuries-old oak beams, low linen sofas, wabi-sabi ceramics on a rustic altar table,
soft window light with painterly shadows, quiet timeless atmosphere, fine art photo
```

室內的重點在材質的表面狀態(`lime-washed`、`centuries-old oak`),不是「溫馨」「有質感」這種感受詞。

### [Piet Oudolf 風・草甸式公共花園](https://archi-prompt.com/p/5ae02baf-0072-4a9c-9801-3fe752c9a72f)

`景觀設計` · `文生圖` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-5ae02baf.webp" width="480" alt="Meadow-style public garden with ornamental grasses in golden autumn backlight">

```
Public garden designed by Piet Oudolf, drifts of ornamental grasses and echinacea seed
heads in matrix planting, mown grass path winding through, low golden autumn backlight,
frost on textures, immersive naturalistic garden photography
```

景觀要有種植邏輯與動線(`matrix planting`、`mown grass path`),否則只會得到一張漂亮的雜草。

### 還有八千多則

<table>
<tr>
<td width="25%"><a href="https://archi-prompt.com/p/4e6ac053-60a7-42ec-8da4-9d5c6973655c"><img src="https://archi-prompt.com/uploads/gen-4e6ac053.webp" alt="Taiwanese sanheyuan courtyard house"></a><br>台灣三合院・燕尾脊</td>
<td width="25%"><a href="https://archi-prompt.com/p/9426e97f-ad1e-4a95-a378-5445bf3f8cea"><img src="https://archi-prompt.com/uploads/gen-9426e97f.webp" alt="Japanese zen rock garden in morning mist"></a><br>日式枯山水・晨霧</td>
<td width="25%"><a href="https://archi-prompt.com/p/6c366419-bc04-48bd-b7f7-cdfd6cc7f201"><img src="https://archi-prompt.com/uploads/gen-6c366419.webp" alt="Bare shell apartment virtually staged as a modern living room"></a><br>毛胚屋轉現代風客廳</td>
<td width="25%"><a href="https://archi-prompt.com/p/8fa463b3-6c5e-4932-9a43-25fb5a022a72"><img src="https://archi-prompt.com/uploads/gen-8fa463b3.webp" alt="Facade material swapped from concrete to red brick"></a><br>外牆材質替換</td>
</tr>
</table>

題材如果站上已經有類似的,skill 會撈一則回來當骨架,比從零開始寫快也準。

## 內容

| | |
|---|---|
| 方法論 | 黃金順序十段結構、空間文法庫、常見錯誤對照 |
| 風格 | 34 種當代風格(建築/室內/景觀),各有關鍵字與完整範例 |
| 大師 | 32 位設計師的語彙(建築師 12、室內 10、景觀 10) |
| 建築史 | 44 種歷史風格,含風格轉換模板 |
| 修圖 | SU 模型轉渲染、光線與時間、材質方案比較、視角與圖面轉換 |
| 實例 | 需要時到 archi-prompt.com 上八千多則現成提示詞裡找相近的當骨架 |

## 安裝

同一份內容包成三種入口,依你用的工具選一個。

### Claude Code

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

或直接把 `plugins/archi-prompt/skills/archi-prompt/` 整個資料夾放到 `~/.claude/skills/` 底下。

### OpenAI Codex、Gemini CLI 等 CLI agent

把這個 repo clone 下來,在裡面開你的 agent 就行 —— 根目錄的 [AGENTS.md](AGENTS.md) 是這類工具的通用慣例,它會自動讀。

```bash
git clone https://github.com/jjhuangtw/archi-prompt-skill.git
cd archi-prompt-skill
```

### ChatGPT 的 Custom GPT、Gemini 的 Gem

那兩個產品沒有檔案系統,沒辦法「要用才去讀某一份參考檔」,所以內容攤平成兩個檔案放在 [portable/](portable/):`instructions.md` 貼進指示欄位,`knowledge.md` 當知識庫上傳。設定步驟見 [portable/README.md](portable/README.md)。

---

`portable/` 底下的檔案由 `node scripts/build-portable.mjs` 從 skill 原始檔產生,不要直接編輯。改內容請改 `plugins/archi-prompt/skills/archi-prompt/` 之後重新產生。

## 授權

[MIT](LICENSE) —— 可自由使用、修改、商業利用。用得上的話,歡迎順手提一下出處 [archi-prompt.com](https://archi-prompt.com)。

站上會員投稿的提示詞不在本 repo 的打包範圍內,這裡只有站方自行整理的方法論與風格字彙。從站上引用到的內容屬於原作者,請當作參考與骨架,不要整段照抄後宣稱是自己寫的。
