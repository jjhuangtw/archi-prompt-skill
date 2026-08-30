# archi-prompt skill

[繁體中文](README.md) · [English](README.en.md) · [日本語](README.ja.md) · **简体中文**

给 Claude 用的建筑 AI 提示词技能。来自 [archi-prompt.com](https://archi-prompt.com) —— 一个累积了四千多则建筑、室内、景观 AI 提示词的社区平台 —— 把站上整理出来的写作方法打包成一个 skill。

装上之后,跟 Claude 说「帮我写一个山坡上美术馆的提示词」或「这张 SU 模型想转成写实渲染」,它就会照这套方法写,而不是堆一串形容词。

## 核心方法

**AI 不是依「风格」理解建筑,而是依「信息优先级」生成画面。**

模型会把提示词开头的东西当成主要信息。把 `golden hour` 写在第一句,建筑本身就会歪掉,因为模型把光当成了这张图的主题。所以提示词照这个顺序排:

```
体量 → 几何 → 结构 → 材料 → 开口 → 空间组织 → 景观 → 光线 → 镜头 → 渲染
```

修图则是另一套逻辑:重点不是「要改什么」,而是明写**「什么必须保持不变」**,否则模型会顺手把楼层数与拍摄角度一起重画。

## 范例

下面每一张都是 [archi-prompt.com](https://archi-prompt.com) 上的实际成果,提示词原封不动附在图下面,点标题可以看原始贴文。文生图用英文写、依黄金顺序排;修图用中文写、开头先锁死不准动的东西。

### [安藤忠雄风・清水混凝土美术馆与光缝](https://archi-prompt.com/p/0aa4b2e3-0fef-4c0d-9b48-40213ec700e8)

`建筑外观` · `文生图` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-0aa4b2e3.webp" width="300" alt="Tadao Ando style concrete museum with a slit skylight and reflecting pool">

```
Art museum in the style of Tadao Ando, smooth exposed concrete volumes, a long slit
skylight casting a moving blade of light on the wall, shallow reflecting pool at the
entrance, single cherry tree, misty dawn, serene photorealistic photography
```

材料(清水混凝土)排在光线(晨雾)前面,所以出来的是一栋建筑,而不是一张气氛照。

### [Zaha Hadid 风・流动曲面表演艺术中心](https://archi-prompt.com/p/ff378a3a-2846-43f3-85ca-01f8444b260d)

`建筑外观` · `文生图` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-ff378a3a.webp" width="480" alt="Zaha Hadid style performing arts center with fluid white shell at dusk">

```
Performing arts center in the style of Zaha Hadid, fluid white curvilinear shell flowing
into the plaza, seamless GRC surfaces, ribbon-like glazing, dusk with cool blue sky and
warm interior glow, aerial three-quarter view, photorealistic rendering
```

大师风格要落到具体的体量与材料(`fluid white curvilinear shell`、`seamless GRC`),只写名字模型会乱猜。

### [台湾街屋改造・雨后傍晚](https://archi-prompt.com/p/6a16d579-8dbe-48f5-8536-475ba054c41d)

`建筑外观` · `文生图` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-6a16d579.webp" width="480" alt="Renovated Taiwanese narrow townhouse with perforated brick screen facade on a rainy evening">

```
Renovated narrow townhouse facade in a dense Taiwanese street, weathered neighbors on both
sides, new perforated brick screen facade with warm light glowing through, scooters parked
along the street, humid evening atmosphere after rain, overhead power lines, street-level
photography, hyperrealistic, nostalgic yet contemporary mood
```

老邻居、机车、电线这些脉络要明写出来,不写模型会把街屋放进一条干净的欧洲街道。

### [SketchUp 模型转实景渲染](https://archi-prompt.com/p/780867a0-32e2-4c14-b8e6-8ba2720700dd)

`建筑外观` · `修图` · `Nano Banana`

<img src="https://archi-prompt.com/uploads/gen-780867a0.webp" width="480" alt="Photoreal architectural photography converted from a SketchUp white model">

```
將這張 SketchUp 白模截圖轉換成擬真建築攝影:保持建築量體、開窗位置與視角完全不變,
加入真實材質(清水模、玻璃、金屬板),補上柔和的下午自然光與陰影,背景加入淺景深的
街道與行道樹,整體呈現專業建築攝影質感。
```

「体量、开窗位置与视角完全不变」放在最前面 —— 少了这半句,模型会连楼层数跟拍摄角度一起重画。

### [Axel Vervoordt 风・侘寂乡村客厅](https://archi-prompt.com/p/43cd5a79-3311-4187-8741-a25aad452150)

`室内设计` · `文生图` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-43cd5a79.webp" width="480" alt="Wabi-sabi country living room with lime-washed walls and oak beams">

```
Country house living room designed by Axel Vervoordt, lime-washed textured walls,
centuries-old oak beams, low linen sofas, wabi-sabi ceramics on a rustic altar table,
soft window light with painterly shadows, quiet timeless atmosphere, fine art photo
```

室内的重点在材质的表面状态(`lime-washed`、`centuries-old oak`),不是「温馨」「有质感」这种感受词。

### [Piet Oudolf 风・草甸式公共花园](https://archi-prompt.com/p/5ae02baf-0072-4a9c-9801-3fe752c9a72f)

`景观设计` · `文生图` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-5ae02baf.webp" width="480" alt="Meadow-style public garden with ornamental grasses in golden autumn backlight">

```
Public garden designed by Piet Oudolf, drifts of ornamental grasses and echinacea seed
heads in matrix planting, mown grass path winding through, low golden autumn backlight,
frost on textures, immersive naturalistic garden photography
```

景观要有种植逻辑与动线(`matrix planting`、`mown grass path`),否则只会得到一张漂亮的杂草。

### 还有四千多则

<table>
<tr>
<td width="25%"><a href="https://archi-prompt.com/p/4e6ac053-60a7-42ec-8da4-9d5c6973655c"><img src="https://archi-prompt.com/uploads/gen-4e6ac053.webp" alt="Taiwanese sanheyuan courtyard house"></a><br>台湾三合院・燕尾脊</td>
<td width="25%"><a href="https://archi-prompt.com/p/9426e97f-ad1e-4a95-a378-5445bf3f8cea"><img src="https://archi-prompt.com/uploads/gen-9426e97f.webp" alt="Japanese zen rock garden in morning mist"></a><br>日式枯山水・晨雾</td>
<td width="25%"><a href="https://archi-prompt.com/p/6c366419-bc04-48bd-b7f7-cdfd6cc7f201"><img src="https://archi-prompt.com/uploads/gen-6c366419.webp" alt="Bare shell apartment virtually staged as a modern living room"></a><br>毛坯房转现代风客厅</td>
<td width="25%"><a href="https://archi-prompt.com/p/8fa463b3-6c5e-4932-9a43-25fb5a022a72"><img src="https://archi-prompt.com/uploads/gen-8fa463b3.webp" alt="Facade material swapped from concrete to red brick"></a><br>外墙材质替换</td>
</tr>
</table>

题材如果站上已经有类似的,skill 会捞一则回来当骨架,比从零开始写快也准。

## 内容

| | |
|---|---|
| 方法论 | 黄金顺序十段结构、空间文法库、常见错误对照 |
| 风格 | 34 种当代风格(建筑/室内/景观),各有关键词与完整范例 |
| 大师 | 32 位设计师的语汇(建筑师 12、室内 10、景观 10) |
| 建筑史 | 44 种历史风格,含风格转换模板 |
| 修图 | SU 模型转渲染、光线与时间、材质方案比较、视角与图面转换 |
| 实例 | 需要时到 archi-prompt.com 上四千多则现成提示词里找相近的当骨架 |

## 安装

同一份内容包成三种入口,依你用的工具选一个。

### Claude Code

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

或直接把 `plugins/archi-prompt/skills/archi-prompt/` 整个文件夹放到 `~/.claude/skills/` 底下。

### OpenAI Codex、Gemini CLI 等 CLI agent

把这个 repo clone 下来,在里面开你的 agent 就行 —— 根目录的 [AGENTS.md](AGENTS.md) 是这类工具的通用惯例,它会自动读。

```bash
git clone https://github.com/jjhuangtw/archi-prompt-skill.git
cd archi-prompt-skill
```

### ChatGPT 的 Custom GPT、Gemini 的 Gem

那两个产品没有文件系统,没办法「要用才去读某一份参考档」,所以内容摊平成两个文件放在 [portable/](portable/):`instructions.md` 贴进指示栏位,`knowledge.md` 当知识库上传。设置步骤见 [portable/README.md](portable/README.md)。

---

`portable/` 底下的文件由 `node scripts/build-portable.mjs` 从 skill 原始档产生,不要直接编辑。改内容请改 `plugins/archi-prompt/skills/archi-prompt/` 之后重新产生。

## 授权

[MIT](LICENSE) —— 可自由使用、修改、商业利用。用得上的话,欢迎顺手提一下出处 [archi-prompt.com](https://archi-prompt.com)。

站上会员投稿的提示词不在本 repo 的打包范围内,这里只有站方自行整理的方法论与风格字汇。从站上引用到的内容属于原作者,请当作参考与骨架,不要整段照抄后宣称是自己写的。
