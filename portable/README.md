# 在 ChatGPT 與 Gemini 使用

`instructions.md` 與 `knowledge.md` 由 `node scripts/build-portable.mjs` 從 skill 原始檔產生,
**不要直接編輯**,改內容請改 `plugins/archi-prompt/skills/archi-prompt/` 之後重新產生。

## 為什麼需要這兩個檔案

Claude Code 與 Codex 這類 agent 有檔案系統,可以「要用才去讀 `references/` 裡的某一份」。
ChatGPT 的 Custom GPT 與 Gemini 的 Gem 沒有這個能力 —— 它們只有「常駐的指示」加上
「檢索式的知識庫」。所以內容要攤平成兩份:

| 檔案 | 放哪裡 | 大小 |
|---|---|---|
| `instructions.md` | 貼進 Instructions / 自訂指令欄位 | 約 4 KB,在 Custom GPT 的 8000 字元上限內 |
| `knowledge.md` | 當檔案上傳到知識庫 | 約 63 KB,六份參考資料合併 |

## ChatGPT — 建立 Custom GPT

1. ChatGPT 左側 → **探索 GPT** → 右上 **建立**
2. 切到 **設定** 分頁(不要用對話式的建立精靈,它會覆寫你的指示)
3. **名稱**:建築提示詞 / ArchiPrompt
4. **說明**:寫建築、室內、景觀的 AI 生圖與修圖提示詞
5. **指示**:把 `instructions.md` 的**全部內容**貼進去(開頭的 HTML 註解可以留著,不影響)
6. **知識**:上傳 `knowledge.md`
7. **功能**:留著「網頁瀏覽」,查 archi-prompt.com 的 API 時用得到;不需要 DALL·E 與程式碼執行
8. 儲存 → 右上角選 **公開連結** 或 **僅限自己**

## Gemini — 建立 Gem

1. Gemini 左側 → **Gem 管理員** → **新增 Gem**
2. **名稱**:建築提示詞
3. **指示**:貼上 `instructions.md` 的全部內容
4. **知識**:上傳 `knowledge.md`(Gem 支援附加檔案)
5. 儲存

## 直接貼上(不建檔,一次性)

只想試一次的話,把 `instructions.md` 整份貼進對話開頭,再問你的問題就行。
需要具體風格字彙時,再把 `knowledge.md` 裡對應的那一段貼進去 —— 整份 63 KB
一次貼會吃掉太多 context,而且大部分用不到。

## 產出之後

這套東西產出的是**提示詞**,不是圖。拿到提示詞之後:

- 文生圖 → GPT Image(ChatGPT 內建)、Gemini 的影像生成、Grok、Midjourney
- 修圖 → Nano Banana(Gemini 影像)最準,能在改材質光線的同時保留原構圖

`instructions.md` 裡的模型選擇表會建議該用哪一個。
