---
name: archi-prompt
description: 寫建築、室內、景觀的 AI 生圖與修圖提示詞。Write and fix AI image prompts for architecture, interior, and landscape design. 使用者提到建築透視圖、效果圖、外觀、立面、中庭、樣品屋、SU/SketchUp 模型轉渲染、白模轉實景、換材質、換天空、日轉夜、加人、平面圖轉透視、競圖表現圖、大師風格(安藤、Zaha、隈研吾…)、或任何 architectural rendering / archviz / interior render / landscape render 的生圖需求時,都應該用這個 skill。使用者說「生出來的圖不像建築」「改圖之後建築就跑掉了」「同一個角度換材質比較」這類問題時也要用。不要用在非空間類的生圖(人像、產品、插畫)。
---

# 建築 AI 提示詞

寫給建築、室內、景觀的 AI 生圖提示詞。核心的方法來自一個觀察:

**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**

模型會把提示詞開頭的東西當成主要資訊。所以把 `golden hour` 寫在第一句,建築本身就會歪掉——
因為模型把「光」當成了這張圖的主題,而不是那棟房子。同理,`beautiful modern building`
這種堆形容詞的寫法解析率極低,因為每個詞都不指涉具體的形。

先決定量體,再決定幾何,材質與光線都排在後面。這是這份 skill 的全部基礎。

## 先判斷是哪一種

| | 文生圖 | 修圖 |
|---|---|---|
| 做什麼 | 從文字生出一張新圖 | 改一張既有的圖 |
| 語言 | **用英文寫**,模型對英文建築術語的解析最準 | **用繁體中文寫**,指令型的敘述中文更精確,Nano Banana 中文理解好 |
| 最大風險 | 生出來的東西不是建築,是「建築感的裝飾品」 | 改完之後建築本體跑掉了 |
| 對策 | 黃金順序 | 明寫哪些東西不准動 |

使用者拿著一張現況照片、SU 模型、白模、手繪稿來,就是修圖。要無中生有就是文生圖。

## 文生圖:黃金順序

照這個順序排,比堆更多形容詞有效得多:

```
1. 量體 Mass          → monolithic cubic volume / elongated horizontal pavilion
2. 幾何 Geometry      → orthogonal grid / circular void / stepped platforms
3. 結構 Structure     → exposed concrete frame / slender steel columns
4. 材料 Material      → board-formed concrete / rammed earth / weathered steel
5. 開口 Openings      → frameless floor-to-ceiling glazing / narrow vertical slit
6. 空間組織 Spatial   → courtyard-centered / linear procession / compressed entry
7. 景觀 Landscape     → building emerges from terrain / water guides perspective
8. 光線 Lighting      → soft overcast daylight / single shaft of light
9. 鏡頭 Camera        → 24mm tilt-shift, eye level, symmetrical composition
10. 算圖 Rendering    → architectural photography, ultra photorealistic, 8K
```

不必十段都寫滿——但已經寫的那幾段要照這個先後。缺了前面幾段就從中間開始,
是最常見的失敗原因:模型不知道這是什麼形狀的東西,只好自己編一個。

**一句只描述一件事。** 不要寫 `beautiful concrete modern building`,拆成
`rectangular concrete volume` / `smooth exposed concrete` / `deep shadow joints`,
模型的解析率會高很多。

## 修圖:先講不准動什麼

修圖失敗幾乎都是同一件事——使用者只想換材質,結果模型順手把樓層數、開窗位置、
拍攝角度全部重畫了一遍。所以修圖提示詞的重點不是「要改什麼」,而是**「什麼必須保持不變」**,
而且要具體到可以被檢查:

> 原有的隔間位置、窗的位置、樓層高度與相機視角完全不變。

這句話(或它的等價物)幾乎該出現在每一則修圖提示詞裡。英文版是
`keep the exact same composition, perspective and geometry`。

要做方案比較(同一個角度、換三種材質)時更要寫死:除了指定的那一項,
光線方向、時間、人物、周圍環境全部一致,否則兩張圖沒有可比性。

## 避免清單:負面約束比正面形容更有效

站上四千多則提示詞有一個共同的收尾——一行 `避免:`,列出三到五件明確不要的事:

> 避免:出現金屬欄杆與救生設施、把岩石整平、牆面貼磚、加入棕櫚等熱帶植栽。

這比再加十個形容詞有用,因為它切掉的是模型的預設傾向。寫避免清單時針對的是
**這個題材最容易被畫壞的地方**,不是通用的廢話。例如畫醫療空間就要避免
「拍成器材型錄」,畫老屋改造就要避免「把舊結構粉刷得像新的」。

`no text, no watermark, no labels` 這類技術性排除也放這裡。

## 模型怎麼選

| 需求 | 用哪個 | 為什麼 |
|---|---|---|
| 修圖、模型轉渲染、換材質、換天空、方案比較 | **Nano Banana**(Gemini 影像) | 改風格/光線/材質的同時能幾乎完美保留原構圖與視角,中文指令理解好 |
| 文生圖、分析圖、剖面圖、簡報用圖 | **GPT Image** | 圖表與帶文字的版面最穩 |
| 文生圖、氛圍與情境探索 | **Grok** | 光影戲劇性強 |
| 不確定 | 標「通用」,寫法照黃金順序即可 | 各家都吃這套結構 |

## 去站上找實例

archi-prompt.com 有四千多則已經寫好、依這套方法整理過的提示詞,依建築外觀、景觀設計、
室內設計、人物分類,也有建築師與空間類型的標籤頁(`/a/<建築師>`、`/s/<空間類型>`)。

**當使用者的題材有現成的類似案例時,拿一則回來當骨架,比從零開始寫快也準。**
看它怎麼排列量體與幾何、借用它的空間文法與避免清單的寫法,然後換成使用者的題材重新寫一遍。
那是別人分享的作品,不要整段照抄後宣稱是自己寫的;要引用時附上該則的 `/p/<id>` 連結。

## 參考資料

SKILL.md 只放方法。要具體的字彙時再讀下面這些,不必全部載入:

| 檔案 | 什麼時候讀 |
|---|---|
| `references/method.md` | 要完整的空間文法庫(可直接串進提示詞的空間描述)、常見錯誤對照表、以及依這套方法寫成的普立茲克得主完整範例 |
| `references/styles.md` | 使用者指定風格(現代主義、粗獷主義、侘寂、工業風、熱帶現代…)。34 種,每種有關鍵字與完整範例 |
| `references/designers.md` | 使用者指名大師(安藤忠雄、Zaha、隈研吾、巴拉岡、Kelly Wearstler…)。32 位,建築師/室內/景觀分列 |
| `references/history.md` | 需要歷史風格(哥德、裝飾藝術、中世紀現代…)或做風格轉換。44 種,含 Nano Banana 的歷史風格轉換模板 |
| `references/retouching.md` | 做修圖工作流:SU 模型轉渲染、光線與時間、材質方案比較、加內容、視角與圖面轉換 |

## 一個完整的例子

使用者說:「幫我寫一個山坡上美術館的提示詞,清水模,要有天光。」

照黃金順序組裝,英文,一句一件事,收尾加避免清單:

```
A low horizontal museum volume embedded into a sloping hillside, three staggered
rectangular masses stepping down with the terrain. Orthogonal geometry, long
unbroken roof line. Exposed board-formed concrete structural frame, visible tie-rod
holes. Smooth grey concrete walls, weathered steel handrails. A single narrow
skylight slot runs the full length of the main gallery. Frameless glazing only at
the two end walls. Circulation is a linear procession from a compressed entry into
the tall gallery. Native grasses and a shallow reflecting pool at the lower level.
Soft overcast daylight, one shaft of light falling from the skylight onto the floor.
24mm tilt-shift, eye level, one-point perspective. Architectural photography,
ultra photorealistic, 8K.

Avoid: glass curtain walls, decorative panels, golden hour lighting, cars in the
foreground, text or labels.
```

注意光線排在第八段而不是第一句,而避免清單切掉的正是「山坡美術館」這個題材
最容易滑過去的預設:玻璃盒子、裝飾板、黃昏光。
