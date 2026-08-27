# 空間文法與方法論

跟 `designers.md` 的差別:那份給你**風格關鍵字**(寫上「Zaha 風格」就有 Zaha 的樣子),
這份給你**空間文法與排列順序**——為什麼同樣寫 minimal,有人生出美術館、有人生出 Apple Store。

方法來源是一份 AI 建築 prompt 工程的整理,核心觀點是:
**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**
先決定量體,再決定幾何,材質與光線都排在後面。所以把 `golden hour` 寫在第一句,
建築本身就會歪掉——因為模型把光當成了主要資訊。

本檔的完整提示詞都是依這套方法重新撰寫,並優先選用 `designers.md` 尚未收錄的得主。

---

## 一、黃金順序:提示詞的十段結構

寫建築提示詞時照這個順序排,比堆更多形容詞有效得多:

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

**每一句只描述一件事。** 不要寫 `beautiful concrete modern building`,
拆成 `rectangular concrete volume` / `smooth exposed concrete` / `deep shadow joints`,
模型的解析率會高很多。

---

## 二、空間文法庫

這些不是形容詞,是**可以直接串進任何提示詞的空間描述**。混搭使用效果最好。

### 動線與序列

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 壓縮→釋放 | 先窄後寬才有戲劇性 | `compressed entrance sequence, low narrow passage, sudden opening toward landscape` |
| 轉折後抵達 | 門不要正對著你 | `90-degree turn before destination, indirect arrival, offset approach` |
| 層層門檻 | 不是門,是門檻 | `layered thresholds, multiple transition zones, gradual spatial transformation` |
| 停留空間 | 高級建築一定有停頓 | `quiet pause space, contemplation zone, transition terrace, breathing space` |
| 先暗後光 | 震撼的光前面一定是暗的 | `dark approach before daylight, shadow before illumination, compressed darkness` |

### 視線與構圖

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 唯一主景 | AI 愛四面都是景,大師只給一個 | `single dominant view, primary visual axis, one framed landscape` |
| 漸次揭露 | 景要慢慢被發現,不是攤開 | `partially concealed landscape, delayed visual reveal, framed glimpse of nature` |
| 受控的天空 | 天空不能全露 | `framed sky opening, rectangular sky aperture, limited sky exposure` |
| 物件之間的靜默 | 留白,不要塞滿 | `large negative space, wide empty foreground, architectural breathing room` |
| 陰影漸層 | 不是「有陰影」,是陰影會變化 | `gradual shadow transition, deep-to-light spatial transition, layered natural shadow` |

### 構造與材料

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 漂浮的面 | 屋頂是主角,不是牆 | `ultra-thin cantilever roof, roof appearing visually weightless, continuous floating canopy` |
| 刀鋒邊緣 | 厚度決定高級感 | `razor-thin roof edge, knife-edge concrete slab, shadow gap beneath roof` |
| 漂浮的牆 | 牆與天花不相接 | `floating concrete wall, wall detached from ceiling, shadow gap beneath wall` |
| 單一材料主導 | 一種主角,其餘配角 | `one dominant material, material hierarchy, restrained material palette` |
| 幾何即地景 | 地景不是背景,是幾何 | `architectural topography, terraced geometry, geometry emerging from terrain` |

---

## 三、常見錯誤對照

| ✗ 不要寫 | ✓ 改寫成 | 為什麼 |
|---|---|---|
| `minimal` | `very few architectural elements, large uninterrupted surfaces, absence of decoration` | 每個模型對 minimal 的理解都不同 |
| `modern building` | `horizontal reinforced concrete pavilion` | Modern 可以是 Apple、Zaha、SANAA、Foster,資訊量幾乎為零 |
| `peaceful` `elegant` | `still water, empty foreground, no people, soft overcast daylight` | 描述**原因**,不要描述感覺 |
| `beautiful walls` | `retaining wall` `load-bearing wall` `freestanding wall` | 名詞越精確,畫面越準 |
| `big roof` | `cantilever` `roof slab` `soffit` `structural diaphragm` | 用真正的建築名詞 |
| `large courtyard` | `courtyard occupies 40% of site` `roof spans 18 meters` | 給比例,模型才穩定 |
| `beautiful garden` | `landscape defines circulation, water guides perspective` | 景觀要有功能,不是裝飾 |
| 堆疊 `Ando + Kuma + Zaha` | 拆解成共同語言:`floating slab, warm timber, filtered daylight` | 混搭大師名字只會得到四不像 |

---

## 四、完整提示詞:普立茲克得主

以下每則都依黃金順序撰寫,可直接使用。
`designers.md` 已收錄的安藤忠雄、Zaha、Gehry、柯比意、密斯、萊特、隈研吾、SANAA、
卡拉特拉瓦、路易斯・康、巴拉甘不重複,這裡補上其他得主。

### 1. Peter Zumthor(2009)— 材料的沉默

- 語彙:`stacked local stone, thermal bath, material silence, single shaft of light`
```
Monolithic bathing pavilion partially embedded into a mountain slope, orthogonal
geometry of stacked stone slabs, load-bearing masonry of thin local quartzite layers,
one dominant material with no secondary finishes, narrow vertical slits and a single
rectangular sky aperture, compressed dark corridor opening into a steaming water hall,
architecture emerging from terrain, single shaft of daylight across still water,
gradual shadow transition, eye-level composition, 35mm architectural lens,
ultra photorealistic, museum-quality visualization, 8K
```

### 2. Álvaro Siza(1992)— 白色的轉折

- 語彙:`white rendered volumes, sculpted circulation, indirect arrival, sea horizon`
```
Low white rendered civic building on a rocky coastal site, irregular orthogonal volumes
shifted against each other, reinforced concrete structure with smooth plaster finish,
one dominant white material, deep-set openings with no visible frames, 90-degree turn
before the entrance and a layered threshold sequence, building following the terrain
toward a single framed sea horizon, bright Atlantic daylight with crisp shadows,
eye-level composition, 28mm architectural lens, architectural photography,
ultra photorealistic, 8K
```

### 3. Eduardo Souto de Moura(2011)— 石頭與精準

- 語彙:`granite monolith, quarry architecture, precise joint, restrained detailing`
```
Long low stadium wall carved into an abandoned granite quarry, elongated horizontal
composition, exposed concrete beams spanning between raw rock faces, granite and
board-formed concrete as the only two materials, minimal openings with razor-thin
edges, architecture reading as constructed landform, wide empty foreground,
soft overcast daylight, deep cantilever shadow, 24mm tilt-shift lens, eye level,
architectural competition rendering, ultra photorealistic, 8K
```

### 4. RCR Arquitectes(2017)— 銹蝕鋼與風景

- 語彙:`weathered corten steel, landscape incision, filtered light, Catalan volcanic terrain`
```
Linear pavilion cut into a volcanic landscape, elongated low-profile mass, exposed
weathering steel structure with slender vertical fins, corten steel as the single
dominant material against raw earth, repeated narrow vertical openings filtering
daylight into striped shadows, compressed passage opening toward a partially concealed
valley, geometry emerging from terrain, overcast diffuse light with warm rust tones,
eye-level composition, 35mm lens, architectural photography, ultra photorealistic, 8K
```

### 5. 王澍 Wang Shu(2012)— 回收瓦與在地營造

- 語彙:`recycled tile wall, wa pan masonry, tiled roofscape, vernacular reinterpretation`
```
Museum complex of stacked rectangular volumes with sweeping tiled roofs, layered
orthogonal geometry stepping up a hillside, concrete frame infilled with recycled
grey clay tiles and salvaged brick in wa pan masonry, tile and raw concrete as the
dominant palette, small irregular openings punctuating the textured wall, courtyard
organizing circulation with a 90-degree turn before arrival, building reading as
constructed topography, soft misty daylight, gradual shadow transition, eye-level
composition, 35mm lens, architectural photography, ultra photorealistic, 8K
```

### 6. Balkrishna Doshi(2018)— 印度的低技與遮蔽

- 語彙:`vaulted low-rise housing, exposed brick, deep shade, climate-responsive`
```
Low-rise housing cluster of repeated barrel-vaulted units, modular geometry of
identical structural bays, exposed brick load-bearing walls with concrete vaults,
brick as the single dominant material, deep recessed openings and shaded verandas,
narrow shaded lanes between blocks opening into a communal courtyard, planting
establishing spatial rhythm, harsh Indian sunlight creating deep-to-light transitions,
eye-level composition, 35mm lens, architectural photography, ultra photorealistic, 8K
```

### 7. Francis Kéré(2022)— 遮陽屋頂與社群

- 語彙:`elevated shading canopy, clay brick, stack ventilation, community architecture`
```
Village school of long low clay brick classrooms beneath a large detached steel canopy,
elongated horizontal composition, lightweight steel truss roof floating above the
masonry volumes with a wide shadow gap, compressed laterite brick as the dominant
material, shuttered openings and perforated ceilings for stack ventilation,
covered shaded space between roof and building forming the social heart,
dry savanna landscape, bright equatorial sunlight with deep canopy shadow,
eye-level composition, 28mm lens, architectural photography, ultra photorealistic, 8K
```

### 8. 伊東豊雄 Toyo Ito(2013)— 結構即空間

- 語彙:`organic structural lattice, tube columns, blurred boundary, structural forest`
```
Public library of a transparent rectangular volume supported by irregular latticed
tube columns, orthogonal envelope containing organic structure, steel lattice tubes
carrying floor plates with no internal walls, glass and white steel as the palette,
frameless floor-to-ceiling glazing dissolving the façade, open floors where structure
alone defines territory, street-level landscape continuing into the interior,
soft even daylight, eye-level composition, 24mm tilt-shift lens,
architectural photography, ultra photorealistic, 8K
```

### 9. 坂茂 Shigeru Ban(2014)— 紙管與臨時性

- 語彙:`paper tube structure, cardboard columns, humanitarian architecture, translucent membrane`
```
Temporary cathedral formed by a row of large cardboard paper tubes leaning into an
A-frame, simple triangular geometry, paper tube structural members with timber joints,
paper and polycarbonate as the dominant materials, translucent membrane roof glowing
with diffused daylight, single volume with a clear processional axis toward the altar,
bare gravel forecourt with wide empty foreground, soft overcast daylight filtering
through the membrane, eye-level symmetrical composition, 24mm lens,
architectural photography, ultra photorealistic, 8K
```

### 10. Glenn Murcutt(2002)— 輕觸大地

- 語彙:`corrugated metal roof, touch the earth lightly, veranda, cross ventilation`
```
Long narrow house raised on slender steel posts above untouched bushland, elongated
horizontal pavilion, lightweight steel frame with a curved corrugated metal roof,
metal sheet and timber as the palette, full-length adjustable louvre openings along
both long façades, single-loaded linear plan with a continuous veranda, building
barely touching the terrain with landscape running underneath, harsh Australian
sunlight with crisp roof shadow, eye-level composition, 35mm lens,
architectural photography, ultra photorealistic, 8K
```

### 11. Herzog & de Meuron(2001)— 表皮的實驗

- 語彙:`facade as experiment, printed concrete, material transformation, textured skin`
```
Compact rectangular gallery clad in a deeply textured facade of custom-cast concrete
panels, pure cubic geometry, concrete structure with a non-structural patterned skin,
one material transformed through surface treatment, irregular window openings cut
without frames, single compressed entry leading to a tall top-lit hall, hard urban
plaza with no planting and a wide empty foreground, flat overcast daylight revealing
surface texture, eye-level composition, 35mm lens, architectural photography,
ultra photorealistic, 8K
```

### 12. 山本理顯 Riken Yamamoto(2024)— 透明的社群

- 語彙:`transparent community, shared threshold, layered privacy, glass-walled commons`
```
Mid-rise residential block organized around a glazed communal deck, orthogonal
stacked geometry with a carved-out central void, exposed concrete frame with full
glass partitions, concrete and clear glass as the palette, transparent thresholds
between private units and shared circulation, layered privacy achieved through depth
rather than walls, planted terraces establishing rhythm across the void, soft even
daylight with no harsh shadow, eye-level composition, 24mm tilt-shift lens,
architectural photography, ultra photorealistic, 8K
```

---

## 五、示範:漂浮水平面手法

這是原文唯一一則完整提示詞的手法拆解——安藤忠雄的沃斯堡現代美術館。
重點在於:**主角是漂浮的水平面,不是牆**。AI 常把美術館畫成玻璃盒或辦公樓,
就是因為不知道屋頂才是主體。

三個關鍵:

1. **不要寫 `roof`**,改寫 `floating horizontal concrete plane` / `ultra-thin cantilever roof`
2. **強調屋頂厚度**:`razor-thin roof edge` / `knife-edge concrete slab` / `shadow gap beneath roof`
3. **倒影當成第二棟建築**:不要寫 `water pool`,改寫 `reflection occupies lower half of frame`、
   `reflection doubles architectural volume`

```
Minimal contemporary art museum composed of repeated floating pavilion structures
beneath ultra-thin concrete roof planes, frameless floor-to-ceiling glazing, perfect
mirror reflecting pond occupying the foreground, elongated horizontal composition,
invisible structural detailing, rhythmic column grid, calm overcast daylight, museum
dissolving into landscape, tranquil atmosphere, architectural photography,
24mm tilt-shift lens, ultra photorealistic, architectural competition rendering, 8K
```

---

## 六、快速套用

想把任何普通提示詞升級,照這個公式加料:

```
[量體] + [幾何] + [單一主材] + [開口方式]
+ compressed entrance sequence
+ single framed landscape
+ floating [roof/wall] with shadow gap
+ large negative space
+ soft overcast daylight
+ 24mm tilt-shift lens, eye level
+ architectural photography, ultra photorealistic, 8K
```

比起再多加十個形容詞,補上「空間怎麼被體驗」對品質的提升明顯得多。
