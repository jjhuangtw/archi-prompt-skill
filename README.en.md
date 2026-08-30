# archi-prompt skill

[繁體中文](README.md) · **English** · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

An architectural AI prompting skill for Claude. It comes from [archi-prompt.com](https://archi-prompt.com) — a community site holding 4,000+ prompts for architecture, interiors and landscape — and packages the writing method distilled there into a single skill.

Once installed, ask Claude for "a prompt for a museum on a hillside" or "turn this SketchUp model into a photoreal render" and it writes to this method instead of piling up adjectives.

## The core method

**AI does not understand architecture through "style". It generates from information priority.**

A model treats whatever opens the prompt as the main subject. Put `golden hour` in the first sentence and the building itself falls apart, because light became the subject of the image. So the prompt is ordered like this:

```
Mass → Geometry → Structure → Material → Openings → Spatial organization → Landscape → Lighting → Camera → Rendering
```

Retouching runs on the opposite logic: the point is not what to change, but writing down **what must stay exactly as it is** — otherwise the model cheerfully redraws the floor count and the camera angle along the way.

## Examples

Every image below was generated from the prompt printed under it, taken as-is from [archi-prompt.com](https://archi-prompt.com) — click a title for the original post. Text-to-image prompts are written in English in the golden order; retouching prompts are written in Chinese and open by pinning down what must not change.

### [Tadao Ando Style · Bare Concrete Museum and Light Gap](https://archi-prompt.com/p/0aa4b2e3-0fef-4c0d-9b48-40213ec700e8)

`Exterior` · `Text-to-image` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-0aa4b2e3.webp" width="300" alt="Tadao Ando style concrete museum with a slit skylight and reflecting pool">

```
Art museum in the style of Tadao Ando, smooth exposed concrete volumes, a long slit
skylight casting a moving blade of light on the wall, shallow reflecting pool at the
entrance, single cherry tree, misty dawn, serene photorealistic photography
```

Material comes before light, so the result is a building — not a mood shot.

### [Zaha Hadid Style · Fluid Curve Performing Arts Center](https://archi-prompt.com/p/ff378a3a-2846-43f3-85ca-01f8444b260d)

`Exterior` · `Text-to-image` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-ff378a3a.webp" width="480" alt="Zaha Hadid style performing arts center with fluid white shell at dusk">

```
Performing arts center in the style of Zaha Hadid, fluid white curvilinear shell flowing
into the plaza, seamless GRC surfaces, ribbon-like glazing, dusk with cool blue sky and
warm interior glow, aerial three-quarter view, photorealistic rendering
```

A master's name has to land on real mass and material (`fluid white curvilinear shell`, `seamless GRC`); the name alone leaves the model guessing.

### [Taiwanese Street House Renovation · Post-Rain Evening](https://archi-prompt.com/p/6a16d579-8dbe-48f5-8536-475ba054c41d)

`Exterior` · `Text-to-image` · `Grok`

<img src="https://archi-prompt.com/uploads/gen-6a16d579.webp" width="480" alt="Renovated Taiwanese narrow townhouse with perforated brick screen facade on a rainy evening">

```
Renovated narrow townhouse facade in a dense Taiwanese street, weathered neighbors on both
sides, new perforated brick screen facade with warm light glowing through, scooters parked
along the street, humid evening atmosphere after rain, overhead power lines, street-level
photography, hyperrealistic, nostalgic yet contemporary mood
```

Spell out the context — weathered neighbors, scooters, power lines — or the model drops the house into a tidy European street.

### [SketchUp Model to Realistic Rendering](https://archi-prompt.com/p/780867a0-32e2-4c14-b8e6-8ba2720700dd)

`Exterior` · `Retouch` · `Nano Banana`

<img src="https://archi-prompt.com/uploads/gen-780867a0.webp" width="480" alt="Photoreal architectural photography converted from a SketchUp white model">

```
將這張 SketchUp 白模截圖轉換成擬真建築攝影:保持建築量體、開窗位置與視角完全不變,
加入真實材質(清水模、玻璃、金屬板),補上柔和的下午自然光與陰影,背景加入淺景深的
街道與行道樹,整體呈現專業建築攝影質感。
```

"Keep the massing, openings and viewpoint exactly the same" comes first — without it, the model redraws the floor count and the camera angle too. Retouching prompts are written in Chinese on purpose: they are instructions, and Nano Banana follows Chinese instructions precisely.

### [Axel Vervoordt Style · Wabi-Sabi Country Living Room](https://archi-prompt.com/p/43cd5a79-3311-4187-8741-a25aad452150)

`Interior` · `Text-to-image` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-43cd5a79.webp" width="480" alt="Wabi-sabi country living room with lime-washed walls and oak beams">

```
Country house living room designed by Axel Vervoordt, lime-washed textured walls,
centuries-old oak beams, low linen sofas, wabi-sabi ceramics on a rustic altar table,
soft window light with painterly shadows, quiet timeless atmosphere, fine art photo
```

Interiors live on surface condition — `lime-washed`, `centuries-old oak` — not on adjectives like "cozy".

### [Piet Oudolf Style · Meadow-Style Public Garden](https://archi-prompt.com/p/5ae02baf-0072-4a9c-9801-3fe752c9a72f)

`Landscape` · `Text-to-image` · `GPT Image`

<img src="https://archi-prompt.com/uploads/gen-5ae02baf.webp" width="480" alt="Meadow-style public garden with ornamental grasses in golden autumn backlight">

```
Public garden designed by Piet Oudolf, drifts of ornamental grasses and echinacea seed
heads in matrix planting, mown grass path winding through, low golden autumn backlight,
frost on textures, immersive naturalistic garden photography
```

Landscape needs a planting logic and a route through it (`matrix planting`, `mown grass path`), or you just get handsome weeds.

### 4,000+ more

<table>
<tr>
<td width="25%"><a href="https://archi-prompt.com/p/4e6ac053-60a7-42ec-8da4-9d5c6973655c"><img src="https://archi-prompt.com/uploads/gen-4e6ac053.webp" alt="Taiwanese sanheyuan courtyard house"></a><br>Taiwanese sanheyuan</td>
<td width="25%"><a href="https://archi-prompt.com/p/9426e97f-ad1e-4a95-a378-5445bf3f8cea"><img src="https://archi-prompt.com/uploads/gen-9426e97f.webp" alt="Japanese zen rock garden in morning mist"></a><br>Zen garden, morning mist</td>
<td width="25%"><a href="https://archi-prompt.com/p/6c366419-bc04-48bd-b7f7-cdfd6cc7f201"><img src="https://archi-prompt.com/uploads/gen-6c366419.webp" alt="Bare shell apartment virtually staged as a modern living room"></a><br>Bare shell → living room</td>
<td width="25%"><a href="https://archi-prompt.com/p/8fa463b3-6c5e-4932-9a43-25fb5a022a72"><img src="https://archi-prompt.com/uploads/gen-8fa463b3.webp" alt="Facade material swapped from concrete to red brick"></a><br>Facade material swap</td>
</tr>
</table>

When your subject already has a close match on the site, the skill pulls one back as a skeleton — faster and more accurate than starting from scratch.

## What's inside

| | |
|---|---|
| Method | The ten-part golden order, a spatial grammar library, a table of common mistakes |
| Styles | 34 contemporary styles (architecture / interior / landscape), each with keywords and a full example |
| Masters | The vocabulary of 32 designers (12 architects, 10 interior, 10 landscape) |
| History | 44 historical styles, with style-transfer templates |
| Retouching | Model-to-render, light and time of day, material option comparisons, viewpoint and drawing conversion |
| Real cases | Find a close match among the 4,000+ prompts on archi-prompt.com and use it as a skeleton |

## Install

The same content is packaged three ways. Pick the one that matches your tool.

### Claude Code

```
/plugin marketplace add jjhuangtw/archi-prompt-skill
/plugin install archi-prompt@archi-prompt
```

Or drop the whole `plugins/archi-prompt/skills/archi-prompt/` folder into `~/.claude/skills/`.

### OpenAI Codex, Gemini CLI and other CLI agents

Clone the repo and start your agent inside it — [AGENTS.md](AGENTS.md) in the root is the common convention for these tools, and they read it automatically.

```bash
git clone https://github.com/jjhuangtw/archi-prompt-skill.git
cd archi-prompt-skill
```

### Custom GPTs on ChatGPT, Gems on Gemini

Neither product has a file system, so nothing can be "read only when needed". The content is flattened into two files under [portable/](portable/): paste `instructions.md` into the instructions field and upload `knowledge.md` as knowledge. Setup steps are in [portable/README.md](portable/README.md).

---

The files under `portable/` are generated from the skill sources by `node scripts/build-portable.mjs` — don't edit them directly. Change `plugins/archi-prompt/skills/archi-prompt/` and regenerate.

## License

[MIT](LICENSE) — free to use, modify and use commercially. A credit to [archi-prompt.com](https://archi-prompt.com) is appreciated when it helps.

Prompts submitted by members of the site are not part of what this repo packages; only the methodology and style vocabulary compiled by the site are here. Anything quoted from the site belongs to its author — treat it as reference and structure, not as something to paste wholesale and call your own.
