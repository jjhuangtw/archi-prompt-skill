// 從 skill 原始檔產生 portable/ 底下的兩個檔案。
//
//   node scripts/build-portable.mjs
//
// portable/ 是給 ChatGPT 的 Custom GPT 與 Gemini 的 Gem 用的 —— 那兩個產品沒有
// 檔案系統,沒辦法像 Claude Code 或 Codex 那樣「要用才去讀 references/」,
// 所以得把內容攤平成可以貼上或上傳的形式:
//
//   instructions.md  SKILL.md 的本文,貼進 Instructions / 自訂指令欄位
//   knowledge.md     六份 references 合併,當知識庫上傳
//
// 手動維護這兩份一定會跟本體脫節,所以固定用這支腳本重新產生。
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL = path.join(ROOT, 'plugins/archi-prompt/skills/archi-prompt');
const OUT = path.join(ROOT, 'portable');

const banner = (extra) =>
  `<!-- 這個檔案由 scripts/build-portable.mjs 產生,不要直接編輯。\n` +
  `     改內容請改 plugins/archi-prompt/skills/archi-prompt/${extra} 之後重新產生。 -->\n\n`;

// SKILL.md 去掉 frontmatter 就是本文。frontmatter 是 Claude 用來判斷何時載入的,
// 在 Custom GPT / Gem 裡沒有對應概念(那邊一律常駐),留著只會佔字數。
const skill = fs.readFileSync(path.join(SKILL, 'SKILL.md'), 'utf8');
const body = skill.replace(/^---\n[\s\S]*?\n---\n/, '').trimStart();

// 「參考資料」那張表列的是 references/ 的檔名,在攤平的版本裡沒有意義,換成知識庫的說法
const instructions = body
  .replace(
    /## 參考資料[\s\S]*?(?=\n## )/,
    `## 參考資料\n\n` +
    `知識庫裡的 archi-prompt-knowledge.md 有具體的字彙,需要時去查:\n\n` +
    `- **空間文法庫、常見錯誤對照、普立茲克得主完整範例** —— 要可直接串進提示詞的空間描述時\n` +
    `- **34 種風格** —— 使用者指定風格(現代主義、粗獷主義、侘寂、工業風、熱帶現代…)\n` +
    `- **32 位大師** —— 使用者指名設計師(安藤忠雄、Zaha、隈研吾、巴拉岡、Kelly Wearstler…)\n` +
    `- **44 種建築史風格** —— 需要歷史風格或做風格轉換\n` +
    `- **修圖工作流** —— SU 模型轉渲染、光線與時間、材質方案比較、視角與圖面轉換\n\n`
  )
  // 內文其他地方指向 references/ 檔名的句子也要改口,不然使用者會去找不存在的檔案
  .replace(
    /細節與更多用法見 `references\/site-api\.md`。/,
    '細節與更多用法見知識庫裡「查 archi-prompt.com 的公開 API」那一節。'
  );

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'instructions.md'), banner('SKILL.md') + instructions, 'utf8');

const ORDER = ['method.md', 'styles.md', 'designers.md', 'history.md', 'retouching.md', 'site-api.md'];
const parts = ORDER.map((f) => {
  const text = fs.readFileSync(path.join(SKILL, 'references', f), 'utf8').trim();
  // 每份 reference 的標題整層降一級,合併之後才有單一的文件層級:
  // 原本的 H1(檔名標題)變成 H2,它底下的 H2 變 H3,以此類推。
  // 由深到淺替換,否則剛升級的標題會被下一條規則再降一次。
  return text.replace(/^(#{1,5}) /gm, (_, h) => '#'.repeat(h.length + 1) + ' ');
});

const knowledge =
  banner('references/') +
  '# 建築 AI 提示詞:字彙與工作流\n\n' +
  '這份是 archi-prompt.com 整理的參考資料,搭配 instructions.md 使用。\n' +
  '寫提示詞的方法在 instructions.md,這裡放的是具體的字彙。\n\n' +
  '## 目錄\n\n' +
  ORDER.map((f, i) => `${i + 1}. ${{
    'method.md': '空間文法與方法論(含普立茲克得主完整範例)',
    'styles.md': '34 種當代風格',
    'designers.md': '32 位設計師語彙',
    'history.md': '44 種建築史風格',
    'retouching.md': '修圖工作流',
    'site-api.md': '查 archi-prompt.com 的公開 API',
  }[f]}`).join('\n') +
  '\n\n---\n\n' +
  parts.join('\n\n---\n\n') +
  '\n';

fs.writeFileSync(path.join(OUT, 'knowledge.md'), knowledge, 'utf8');

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(`✓ portable/instructions.md  ${instructions.length} 字元 / ${kb(instructions.length)}`);
console.log(`✓ portable/knowledge.md     ${knowledge.length} 字元 / ${kb(knowledge.length)}`);
if (instructions.length > 7500) {
  console.warn('⚠ instructions.md 接近 Custom GPT 的 8000 字元上限,考慮把內容移到知識庫');
}
