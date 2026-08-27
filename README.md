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

### 用 plugin 安裝(建議)

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

### 直接複製

把 `plugins/archi-prompt/skills/archi-prompt/` 整個資料夾放到 `~/.claude/skills/` 底下即可。

## 授權

內容採 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hant) —— 可自由使用、修改、商業利用,請保留出處連結到 archi-prompt.com。

站上會員投稿的提示詞不在本 skill 的打包範圍內;skill 只包含站方自行整理的方法論與風格字彙。透過 API 查到的內容屬於原作者,請當作參考與骨架,不要整段照抄後宣稱是自己寫的。
