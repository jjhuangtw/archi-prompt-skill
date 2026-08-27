# 查 archi-prompt.com 的公開 API

站上有四千多則依黃金順序整理過的提示詞,涵蓋建築外觀、景觀、室內三類,
含大師作品、台灣在地題材、以及各種空間類型。要寫的題材如果站上已經有類似的,
查一則回來當骨架比從零開始快。

唯讀、不需要金鑰。有讀取限流,連續查詢請控制在每分鐘數十次以內。

## 列表查詢

```
GET https://archi-prompt.com/api/prompts
```

| 參數 | 說明 |
|---|---|
| `q` | 關鍵字。同時比對標題(中英日簡四種)、提示詞內文、模型、作者、標籤、來源 |
| `category` | `建築外觀` / `景觀設計` / `室內設計` / `人物` |
| `type` | `文生圖` / `修圖` |
| `architect` | 建築師標籤,例如 `安藤忠雄`、`王澍` |
| `space` | 空間類型標籤,例如 `醫療`、`遊樂場`、`水樂園`、`店面`、`招牌` |
| `model` | `Nano Banana` / `GPT Image` / `通用` 等 |
| `author` | 作者名 |
| `sort` | `popular` 依熱門度,預設為最新 |
| `limit` / `offset` | 分頁,`limit` 單次上限 200 |
| `brief=1` | 精簡欄位。**不含 `prompt` 全文**,所以查列表時一律加上省 context,選定之後再用單筆端點拿全文 |
| `since` | ISO 時間字串,只回這個時間點之後異動的 |

總筆數在回應的 `X-Total-Count` 標頭。

## 例子

找中庭相關的建築外觀提示詞:

```bash
curl -s "https://archi-prompt.com/api/prompts?q=中庭&category=建築外觀&limit=5&brief=1"
```

找安藤忠雄的:

```bash
curl -s "https://archi-prompt.com/api/prompts?architect=安藤忠雄&limit=10&brief=1"
```

找醫療空間的修圖工作流:

```bash
curl -s "https://archi-prompt.com/api/prompts?space=醫療&type=修圖&brief=1"
```

看單一則的完整內容(含 `prompt` 全文與 `source`):

```bash
curl -s "https://archi-prompt.com/api/prompts/<id>"
```

## 回傳欄位

`id`、`title`、`titleEn`/`titleJa`/`titleCn`(自動翻譯的標題)、`category`、`type`、`model`、
`source`(來源與作品出處)、`author`、`image`、`likes`、`copies`、`tags`(建築師標籤)、
`spaces`(空間類型標籤)、`createdAt`/`updatedAt`、`commentCount`。

`prompt`(提示詞全文)在不加 `brief=1` 的列表與單筆端點都會回傳;加了 `brief=1` 就沒有。
所以省 context 的流程是:先用 `brief=1` 的列表挑出目標的 `id`,再用 `/api/prompts/<id>` 拿全文。
題材很明確、只需要兩三則時,直接用不帶 `brief` 的列表配小的 `limit` 也可以。

`source` 欄位通常寫成 `主題｜設計師(英文名)｜作品 年份`,例如
`泳池設計｜阿爾瓦羅・西薩(Álvaro Siza)｜Leça Swimming Pools 1966`。
要跟使用者說明這則的出處時用得上。

## 網頁

每則有獨立網址 `https://archi-prompt.com/p/<id>`,可以直接給使用者看成果圖。
標籤也有獨立頁:`/a/<建築師>`、`/s/<空間類型>`。

## 怎麼用查到的東西

拿來當骨架與參考,不要整段複製後當成自己寫的——那是別人分享的作品。
合理的用法是:看它怎麼排列量體與幾何、借用它的空間文法與避免清單的寫法,
然後換成使用者的題材重新寫一遍。要引用時附上 `/p/<id>` 的連結。
