# archi-prompt skill

給 Claude 用的建築 AI 提示詞技能。來自 [archi-prompt.com](https://archi-prompt.com) —— 一個累積了四千多則建築、室內、景觀 AI 提示詞的社群平台 —— 把站上整理出來的寫作方法打包成一個 skill。

裝上之後,跟 Claude 說「幫我寫一個山坡上美術館的提示詞」或「這張 SU 模型想轉成寫實渲染」,它就會照這套方法寫,而不是堆一串形容詞。

## 核心方法

**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**

模型會把提示詞開頭的東西當成主要資訊。把 `golden hour` 寫在第一句,建築本身就會歪掉,因為模型把光當成了這張圖的主題。所以提示詞照這個順序排:

```
量體 → 幾何 → 結構 → 材料 → 開口 → 空間組織 → 景觀 → 光線 → 鏡頭 → 算圖
```

修圖則是另一套邏輯:重點不是「要改什麼」,而是明寫**「什麼必須保持不變」**,否則模型會順手把樓層數與拍攝角度一起重畫。

## 實際案例 Examples

裝上之後實際長什麼樣子 —— 五個常見情境,各附中英文說明。
*What it actually does — five common situations, explained in Chinese and English.*

### 案例一:一句話展開成完整提示詞

**Case 1 — One sentence becomes a full prompt**

你說:「幫我寫一個山坡上的美術館,清水模,要有天光。」
*You say: "Write me a prompt for a museum on a hillside, exposed concrete, with a skylight."*

它照黃金順序展開,英文、一句一件事、收尾補一行避免清單:
*It expands that in the golden order — English, one idea per sentence, closing with an avoid list:*

```
A low horizontal museum volume embedded into a sloping hillside, three staggered
rectangular masses stepping down with the terrain. Orthogonal geometry, long
unbroken roof line. Exposed board-formed concrete structural frame, visible
tie-rod holes. A single narrow skylight slot runs the full length of the main
gallery. Frameless glazing only at the two end walls. Circulation is a linear
procession from a compressed entry into the tall gallery. Native grasses and a
shallow reflecting pool at the lower level. Soft overcast daylight, one shaft of
light falling from the skylight onto the floor. 24mm tilt-shift, eye level,
one-point perspective. Architectural photography, ultra photorealistic, 8K.

Avoid: glass curtain walls, decorative panels, golden hour lighting, cars in the
foreground, text or labels.
```

光線排在第八段,不是第一句。寫在開頭,模型會把「光」當成這張圖的主題,建築本身就歪了。
*Lighting comes eighth, not first. Put it up front and the model treats light as the subject of the image — and the building itself falls apart.*

### 案例二:SketchUp 白模轉寫實渲染

**Case 2 — Turning a SketchUp white model into a photoreal render**

你說:「這張 SU 截圖想轉成寫實照片。」修圖用中文寫,而且重點不是要改什麼,是先講死什麼不准動:
*You say: "Turn this SketchUp screenshot into a photo." Retouching prompts are written in Chinese, and the point is not what to change — it is nailing down what must not move:*

```
把這張 SketchUp 白模截圖轉成擬真建築攝影:建築量體、開窗位置、視角完全不變。
外牆改為清水混凝土,開口部為深灰鋁框玻璃,加入柔和的下午自然光與正確陰影,
背景補上淺景深的街道、行道樹與天空,地面為淺色石材鋪面,整體呈現專業建築攝影質感。
```

沒有第一句那半行,模型會順手把樓層數與拍攝角度一起重畫 —— 這是修圖最常見的失敗。
*Without that first clause, the model happily redraws the floor count and the camera angle too — the single most common way retouching goes wrong.*

### 案例三:同一個角度,三種材質方案

**Case 3 — Same viewpoint, three material options**

要做方案比較,除了指定的那一項,其他全部寫死,否則兩張圖沒有可比性:
*For an options comparison, everything except the one variable has to be pinned down, or the images cannot be compared at all:*

```
以這張街屋立面為基礎,生成材質方案比較:方案A 深灰金屬板+木格柵、
方案B 白色塗料+綠植牆、方案C 玻璃磚+清水模。開窗位置與建築輪廓完全不變,
每個方案單獨出圖,相同視角相同光線,方便並排比較。
```

*Fix the openings, the outline, the viewpoint and the light; change only the material. That is what makes a comparison a comparison.*

### 案例四:把沒有資訊量的形容詞換掉

**Case 4 — Replacing adjectives that carry no information**

| ✗ 不要寫 / Don't write | ✓ 改寫成 / Write instead | 為什麼 / Why |
|---|---|---|
| `modern building` | `horizontal reinforced concrete pavilion` | Modern 可以是 Apple、Zaha、SANAA、Foster,資訊量幾乎為零<br>*"Modern" could mean Apple, Zaha, SANAA or Foster — near-zero information* |
| `minimal` | `very few architectural elements, large uninterrupted surfaces, absence of decoration` | 每個模型對 minimal 的理解都不同<br>*Every model reads "minimal" differently* |
| `peaceful` `elegant` | `still water, empty foreground, no people, soft overcast daylight` | 描述原因,不要描述感覺<br>*Describe the cause, not the feeling* |
| `large courtyard` | `courtyard occupies 40% of site`, `roof spans 18 meters` | 給比例,模型才穩定<br>*Give proportions and the output stops drifting* |
| `Ando + Kuma + Zaha` | `floating slab, warm timber, filtered daylight` | 混搭大師名字只會得到四不像,要拆成共同語彙<br>*Stacking famous names yields mush — break them down into shared vocabulary*|

### 案例五:直接撈站上四千多則現成的提示詞

**Case 5 — Pulling from 4,000+ existing prompts on the site**

題材有現成的類似案例時,查一則回來當骨架,比從零開始寫快也準。skill 會自己去查:
*When something similar already exists, fetching one as a skeleton is faster and more accurate than starting from scratch. The skill queries it on its own:*

```bash
curl -s "https://archi-prompt.com/api/prompts?q=中庭&category=建築外觀&limit=5&brief=1"
```

查到的內容是站上會員的作品,當參考與骨架用,不要整段照抄後宣稱是自己寫的。
*Results are work by the site's members. Use them as reference and structure — don't paste one wholesale and call it yours.*

## 內容

| | |
|---|---|
| 方法論 | 黃金順序十段結構、空間文法庫、常見錯誤對照 |
| 風格 | 34 種當代風格(建築/室內/景觀),各有關鍵字與完整範例 |
| 大師 | 32 位設計師的語彙(建築師 12、室內 10、景觀 10) |
| 建築史 | 44 種歷史風格,含風格轉換模板 |
| 修圖 | SU 模型轉渲染、光線與時間、材質方案比較、視角與圖面轉換 |
| 實例 | 透過公開 API 查 archi-prompt.com 上四千多則現成提示詞 |

## 安裝

同一份內容包成三種入口,依你用的工具選一個。

### Claude Code

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

或直接把 `plugins/archi-prompt/skills/archi-prompt/` 整個資料夾放到 `~/.claude/skills/` 底下。

### OpenAI Codex、Gemini CLI 等 CLI agent

把這個 repo clone 下來,在裡面開你的 agent 就行 —— 根目錄的 [AGENTS.md](AGENTS.md)
是這類工具的通用慣例,它會自動讀。

```bash
git clone https://github.com/jjhuangtw/archi-prompt-skill.git
cd archi-prompt-skill
```

### ChatGPT 的 Custom GPT、Gemini 的 Gem

那兩個產品沒有檔案系統,沒辦法「要用才去讀某一份參考檔」,所以內容攤平成兩個檔案放在
[portable/](portable/):`instructions.md` 貼進指示欄位,`knowledge.md` 當知識庫上傳。
設定步驟見 [portable/README.md](portable/README.md)。

---

`portable/` 底下的檔案由 `node scripts/build-portable.mjs` 從 skill 原始檔產生,
不要直接編輯。改內容請改 `plugins/archi-prompt/skills/archi-prompt/` 之後重新產生。

## 授權

[MIT](LICENSE) —— 可自由使用、修改、商業利用。用得上的話,歡迎順手提一下出處 [archi-prompt.com](https://archi-prompt.com)。

站上會員投稿的提示詞不在本 repo 的打包範圍內,這裡只有站方自行整理的方法論與風格字彙。透過 API 查到的內容屬於原作者,請當作參考與骨架,不要整段照抄後宣稱是自己寫的。
