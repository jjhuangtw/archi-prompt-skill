# 建築 AI 提示詞 — Agent 指示

這個 repo 是一套寫建築、室內、景觀 AI 生圖提示詞的方法與字彙,來自 [archi-prompt.com](https://archi-prompt.com)。

使用者要你寫、修、或評估這類提示詞時 —— 建築透視圖、效果圖、外觀、立面、中庭、樣品屋、
SU/SketchUp 模型轉渲染、白模轉實景、換材質、換天空、日轉夜、平面圖轉透視、競圖表現圖、
大師風格、archviz、interior render —— 照這份文件做。非空間類的生圖(人像、產品、插畫)不適用。

## 核心

**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**

模型會把提示詞開頭的東西當成主要資訊。把 `golden hour` 寫在第一句,建築本身就會歪掉,
因為模型把光當成了這張圖的主題。`beautiful modern building` 這種堆形容詞的寫法解析率極低,
因為每個詞都不指涉具體的形。

## 先判斷是哪一種

使用者拿著現況照片、SU 模型、白模、手繪稿來 → **修圖**。要無中生有 → **文生圖**。

文生圖用英文寫(模型對英文建築術語解析最準),修圖用繁體中文寫(指令型敘述中文更精確)。

## 文生圖:黃金順序

```
1. 量體 Mass       2. 幾何 Geometry    3. 結構 Structure   4. 材料 Material
5. 開口 Openings   6. 空間組織 Spatial  7. 景觀 Landscape   8. 光線 Lighting
9. 鏡頭 Camera     10. 算圖 Rendering
```

不必十段都寫滿,但已經寫的那幾段要照這個先後。缺了前面幾段是最常見的失敗原因:
模型不知道這是什麼形狀的東西,只好自己編一個。

**一句只描述一件事。** 不要寫 `beautiful concrete modern building`,拆成
`rectangular concrete volume` / `smooth exposed concrete` / `deep shadow joints`。

## 修圖:先講不准動什麼

修圖失敗幾乎都是同一件事 —— 使用者只想換材質,結果模型把樓層數、開窗位置、
拍攝角度全部重畫了。所以重點不是「要改什麼」,而是**「什麼必須保持不變」**,
而且要具體到可以被檢查:

> 原有的隔間位置、窗的位置、樓層高度與相機視角完全不變。

英文版是 `keep the exact same composition, perspective and geometry`。

做方案比較(同一角度換三種材質)時更要寫死:除了指定的那一項,光線方向、時間、
人物、周圍環境全部一致,否則兩張圖沒有可比性。

## 每一則都要有避免清單

收尾寫一行 `避免:`,列出三到五件明確不要的事:

> 避免:出現金屬欄杆與救生設施、把岩石整平、牆面貼磚、加入棕櫚等熱帶植栽。

這比再加十個形容詞有用,因為它切掉的是模型的預設傾向。針對的是**這個題材最容易被畫壞的地方**,
不是通用的廢話。`no text, no watermark, no labels` 這類技術性排除也放這裡。

## 模型怎麼選

| 需求 | 用哪個 |
|---|---|
| 修圖、模型轉渲染、換材質、方案比較 | **Nano Banana**(Gemini 影像)—— 改風格的同時能保留原構圖與視角,中文指令理解好 |
| 文生圖、分析圖、剖面圖、簡報用圖 | **GPT Image** —— 圖表與帶文字的版面最穩 |
| 文生圖、氛圍與情境探索 | **Grok** —— 光影戲劇性強 |
| 不確定 | 標「通用」,寫法照黃金順序即可 |

## 字彙在哪裡

需要具體字彙時再讀,不必全部載入:

```
plugins/archi-prompt/skills/archi-prompt/references/
├── method.md      空間文法庫、常見錯誤對照、普立茲克得主完整範例
├── styles.md      34 種當代風格(建築 12 / 室內 12 / 景觀 10),各有關鍵字與完整範例
├── designers.md   32 位設計師語彙(建築師 12 / 室內 10 / 景觀 10)
├── history.md     44 種建築史風格,含風格轉換模板
├── retouching.md  修圖工作流:SU 轉渲染、光線與時間、材質比較、視角轉換
└── site-api.md    查 archi-prompt.com 上四千多則實例的公開 API
```

使用者指名風格就讀 `styles.md`,指名設計師就讀 `designers.md`,以此類推。
一次讀一份,不要全部灌進 context。

## 查站上實例

archi-prompt.com 有四千多則依這套方法整理過的提示詞,公開 API 唯讀、不需金鑰:

```bash
curl -s "https://archi-prompt.com/api/prompts?q=中庭&category=建築外觀&limit=5&brief=1"
```

題材如果站上已經有類似的,查一則回來當骨架比從零開始快。參數與用法見 `references/site-api.md`。

查到的是別人寫的作品:拿來當參考與骨架,借用它排列量體與幾何的方式,
然後換成使用者的題材重新寫一遍。不要整段照抄後宣稱是自己寫的,要引用就附上 `/p/<id>` 連結。

## 其他入口

同一份內容也包成了別的形式,改內容時記得一起更新:

- `plugins/archi-prompt/skills/archi-prompt/SKILL.md` —— Claude Code 的 skill
- `portable/` —— 給 ChatGPT 的 Custom GPT 與 Gemini 的 Gem 用,由
  `node scripts/build-portable.mjs` 從 skill 原始檔產生,不要手動編輯
