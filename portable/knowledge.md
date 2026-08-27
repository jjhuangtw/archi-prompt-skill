<!-- 這個檔案由 scripts/build-portable.mjs 產生,不要直接編輯。
     改內容請改 plugins/archi-prompt/skills/archi-prompt/references/ 之後重新產生。 -->

# 建築 AI 提示詞:字彙與工作流

這份是 archi-prompt.com 整理的參考資料,搭配 instructions.md 使用。
寫提示詞的方法在 instructions.md,這裡放的是具體的字彙。

## 目錄

1. 空間文法與方法論(含普立茲克得主完整範例)
2. 34 種當代風格
3. 32 位設計師語彙
4. 44 種建築史風格
5. 修圖工作流

---

## 空間文法與方法論

跟 `designers.md` 的差別:那份給你**風格關鍵字**(寫上「Zaha 風格」就有 Zaha 的樣子),
這份給你**空間文法與排列順序**——為什麼同樣寫 minimal,有人生出美術館、有人生出 Apple Store。

方法來源是一份 AI 建築 prompt 工程的整理,核心觀點是:
**AI 不是依「風格」理解建築,而是依「資訊優先級」生成畫面。**
先決定量體,再決定幾何,材質與光線都排在後面。所以把 `golden hour` 寫在第一句,
建築本身就會歪掉——因為模型把光當成了主要資訊。

本檔的完整提示詞都是依這套方法重新撰寫,並優先選用 `designers.md` 尚未收錄的得主。

---

### 一、黃金順序:提示詞的十段結構

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

### 二、空間文法庫

這些不是形容詞,是**可以直接串進任何提示詞的空間描述**。混搭使用效果最好。

#### 動線與序列

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 壓縮→釋放 | 先窄後寬才有戲劇性 | `compressed entrance sequence, low narrow passage, sudden opening toward landscape` |
| 轉折後抵達 | 門不要正對著你 | `90-degree turn before destination, indirect arrival, offset approach` |
| 層層門檻 | 不是門,是門檻 | `layered thresholds, multiple transition zones, gradual spatial transformation` |
| 停留空間 | 高級建築一定有停頓 | `quiet pause space, contemplation zone, transition terrace, breathing space` |
| 先暗後光 | 震撼的光前面一定是暗的 | `dark approach before daylight, shadow before illumination, compressed darkness` |

#### 視線與構圖

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 唯一主景 | AI 愛四面都是景,大師只給一個 | `single dominant view, primary visual axis, one framed landscape` |
| 漸次揭露 | 景要慢慢被發現,不是攤開 | `partially concealed landscape, delayed visual reveal, framed glimpse of nature` |
| 受控的天空 | 天空不能全露 | `framed sky opening, rectangular sky aperture, limited sky exposure` |
| 物件之間的靜默 | 留白,不要塞滿 | `large negative space, wide empty foreground, architectural breathing room` |
| 陰影漸層 | 不是「有陰影」,是陰影會變化 | `gradual shadow transition, deep-to-light spatial transition, layered natural shadow` |

#### 構造與材料

| 文法 | 概念 | 可直接使用的片段 |
|---|---|---|
| 漂浮的面 | 屋頂是主角,不是牆 | `ultra-thin cantilever roof, roof appearing visually weightless, continuous floating canopy` |
| 刀鋒邊緣 | 厚度決定高級感 | `razor-thin roof edge, knife-edge concrete slab, shadow gap beneath roof` |
| 漂浮的牆 | 牆與天花不相接 | `floating concrete wall, wall detached from ceiling, shadow gap beneath wall` |
| 單一材料主導 | 一種主角,其餘配角 | `one dominant material, material hierarchy, restrained material palette` |
| 幾何即地景 | 地景不是背景,是幾何 | `architectural topography, terraced geometry, geometry emerging from terrain` |

---

### 三、常見錯誤對照

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

### 四、完整提示詞:普立茲克得主

以下每則都依黃金順序撰寫,可直接使用。
`designers.md` 已收錄的安藤忠雄、Zaha、Gehry、柯比意、密斯、萊特、隈研吾、SANAA、
卡拉特拉瓦、路易斯・康、巴拉甘不重複,這裡補上其他得主。

#### 1. Peter Zumthor(2009)— 材料的沉默

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

#### 2. Álvaro Siza(1992)— 白色的轉折

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

#### 3. Eduardo Souto de Moura(2011)— 石頭與精準

- 語彙:`granite monolith, quarry architecture, precise joint, restrained detailing`
```
Long low stadium wall carved into an abandoned granite quarry, elongated horizontal
composition, exposed concrete beams spanning between raw rock faces, granite and
board-formed concrete as the only two materials, minimal openings with razor-thin
edges, architecture reading as constructed landform, wide empty foreground,
soft overcast daylight, deep cantilever shadow, 24mm tilt-shift lens, eye level,
architectural competition rendering, ultra photorealistic, 8K
```

#### 4. RCR Arquitectes(2017)— 銹蝕鋼與風景

- 語彙:`weathered corten steel, landscape incision, filtered light, Catalan volcanic terrain`
```
Linear pavilion cut into a volcanic landscape, elongated low-profile mass, exposed
weathering steel structure with slender vertical fins, corten steel as the single
dominant material against raw earth, repeated narrow vertical openings filtering
daylight into striped shadows, compressed passage opening toward a partially concealed
valley, geometry emerging from terrain, overcast diffuse light with warm rust tones,
eye-level composition, 35mm lens, architectural photography, ultra photorealistic, 8K
```

#### 5. 王澍 Wang Shu(2012)— 回收瓦與在地營造

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

#### 6. Balkrishna Doshi(2018)— 印度的低技與遮蔽

- 語彙:`vaulted low-rise housing, exposed brick, deep shade, climate-responsive`
```
Low-rise housing cluster of repeated barrel-vaulted units, modular geometry of
identical structural bays, exposed brick load-bearing walls with concrete vaults,
brick as the single dominant material, deep recessed openings and shaded verandas,
narrow shaded lanes between blocks opening into a communal courtyard, planting
establishing spatial rhythm, harsh Indian sunlight creating deep-to-light transitions,
eye-level composition, 35mm lens, architectural photography, ultra photorealistic, 8K
```

#### 7. Francis Kéré(2022)— 遮陽屋頂與社群

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

#### 8. 伊東豊雄 Toyo Ito(2013)— 結構即空間

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

#### 9. 坂茂 Shigeru Ban(2014)— 紙管與臨時性

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

#### 10. Glenn Murcutt(2002)— 輕觸大地

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

#### 11. Herzog & de Meuron(2001)— 表皮的實驗

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

#### 12. 山本理顯 Riken Yamamoto(2024)— 透明的社群

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

### 五、示範:漂浮水平面手法

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

### 六、快速套用

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

---

## 風格提示詞參考庫

依「建築外觀 / 室內設計 / 景觀設計」整理各種風格的提示詞。
每種風格有兩部分:**關鍵字**(直接串在任何提示詞後面改變風格)與**完整範例**(可直接使用)。
所有範例都可以把主體換成自己的專案,例如把 `residence` 換成 `office lobby`。

---

### 一、建築風格(12 種)

#### 1. 現代主義 Modernism
- 關鍵字:`modernist architecture, clean white volumes, pilotis, ribbon windows, flat roof, functional geometry`
```
Modernist white villa inspired by Le Corbusier, elevated on slim pilotis, horizontal
ribbon windows, roof terrace with sculptural stair, crisp geometry under clear morning
light, manicured lawn, photorealistic architectural photography, 35mm lens
```

#### 2. 粗獷主義 Brutalism
- 關鍵字:`brutalist architecture, raw board-formed concrete, massive geometric volumes, deep recessed openings, monumental scale`
```
Brutalist cultural center, monumental raw concrete volumes with board-formed texture,
deep shadowed recesses, cantilevered auditorium block, overcast dramatic sky, wet plaza
reflecting the mass, lone figure for scale, high-contrast architectural photography
```

#### 3. 解構主義/參數化 Deconstructivism / Parametric
- 關鍵字:`deconstructivist architecture, fluid parametric form, twisted geometry, seamless curved facade, Zaha Hadid style`
```
Parametric museum with flowing white curved facade, seamless GRC panels, dynamic
cantilevered forms dissolving into the plaza landscape, dusk lighting emphasizing the
curves, long exposure clouds, futuristic photorealistic rendering
```

#### 4. 包浩斯 Bauhaus
- 關鍵字:`Bauhaus style, asymmetric composition, white render with primary color accents, steel-frame glazing, functionalist`
```
Bauhaus-inspired school building, asymmetric white volumes, full-height steel-framed
curtain glazing on the workshop wing, red accent balcony, crisp afternoon light,
documentary architectural photography of the 1930s modernist era, restored condition
```

#### 5. 高技派 High-tech
- 關鍵字:`high-tech architecture, exposed steel structure, external services, tensile elements, Pompidou style, machine aesthetic`
```
High-tech research campus building, exposed white steel exoskeleton, external glass
elevators and color-coded service ducts, tensile canopy at the entrance, blue sky with
thin clouds, wide-angle photorealistic shot celebrating the structure
```

#### 6. 日式極簡/清水模 Japanese Minimalism
- 關鍵字:`Tadao Ando style, exposed concrete, minimalist geometry, controlled natural light, zen atmosphere, water feature`
```
Minimalist chapel in Tadao Ando style, smooth exposed concrete walls with precise tie
holes, a single slot of light cutting across the interior wall, shallow reflecting pool,
lone maple tree, misty morning, serene photorealistic photography
```

#### 7. 北歐現代 Scandinavian Modern
- 關鍵字:`Scandinavian architecture, blackened timber cladding, pitched roof reinterpreted, large triple glazing, hygge warmth`
```
Scandinavian modern lake house, blackened vertical timber cladding, sharp gable form,
huge corner glazing glowing warm at blue hour, snow dusted pines, wooden deck to the
frozen lake, cozy photorealistic winter photography
```

#### 8. 新古典 Neoclassical
- 關鍵字:`neoclassical architecture, symmetrical facade, columns and pediment, limestone, formal proportions`
```
Neoclassical civic library facade, symmetrical limestone front with Ionic columns and
carved pediment, grand stair, bronze lanterns, late afternoon warm light raking the
stone details, people on the steps, formal architectural photography
```

#### 9. 熱帶現代 Tropical Modernism
- 關鍵字:`tropical modernism, deep overhangs, timber louvers, cross ventilation, lush greenery, indoor-outdoor living`
```
Tropical modernist villa, deep cantilevered roof with timber soffit, full-height sliding
glass opening to an infinity pool, operable wooden louvers, lush palms and monstera,
humid golden evening, warm lights on, resort photography style
```

#### 10. 地中海 Mediterranean
- 關鍵字:`Mediterranean architecture, whitewashed walls, terracotta roof, arched openings, blue shutters, coastal`
```
Mediterranean hillside house, whitewashed rendered walls, terracotta roof tiles, arched
loggia with climbing bougainvillea, cobalt blue shutters, view over the sea, bright noon
sun with crisp shadows, travel photography style, photorealistic
```

#### 11. 新中式 Contemporary Chinese
- 關鍵字:`contemporary Chinese architecture, courtyard layout, grey brick and dark timber, layered eaves, lattice screens, moon gate`
```
Contemporary Chinese courtyard residence, grey brick walls with dark timber structure,
layered floating eaves, circular moon gate framing bamboo, still reflecting pond in the
courtyard, soft mist at dawn, tranquil photorealistic architectural photography
```

#### 12. 未來主義 Futurism
- 關鍵字:`futuristic architecture, biomorphic megastructure, self-shading skin, integrated greenery, sci-fi optimism`
```
Futuristic vertical eco-district tower, biomorphic white lattice skin with integrated
sky gardens every five floors, drones and sky bridges, golden sunset haze over the
city, ultra-detailed sci-fi architectural visualization, cinematic wide shot
```

---

### 二、室內設計風格(12 種)

#### 1. 北歐 Scandinavian
- 關鍵字:`Scandinavian interior, light oak, white walls, soft textiles, functional furniture, abundant daylight, hygge`
```
Scandinavian living room, white oak herringbone floor, light grey linen sofa with wool
throw, paper pendant lamp, birch furniture, sheer curtains diffusing soft northern
daylight, potted fiddle leaf fig, interior magazine photography, airy and calm
```

#### 2. 日式無印/Japandi
- 關鍵字:`Japandi interior, low wooden furniture, neutral earth tones, clean lines, shoji screens, zen simplicity`
```
Japandi bedroom, low oak platform bed with natural linen bedding, tatami accent area,
shoji-style sliding screen filtering morning light, single ceramic vase with dried
branch, warm beige and charcoal palette, serene minimalist interior photography
```

#### 3. 侘寂 Wabi-sabi
- 關鍵字:`wabi-sabi interior, textured lime plaster, imperfect handmade objects, muted earth tones, aged wood, quiet light`
```
Wabi-sabi living space, hand-troweled lime plaster walls in warm sand, weathered elm
bench, rough ceramic vessels, linen slipcover seating, gentle window light with soft
gradients and shadow play, contemplative atmosphere, fine art interior photography
```

#### 4. 工業風 Industrial
- 關鍵字:`industrial interior, exposed brick, steel beams, concrete floor, black metal frames, Edison bulbs, raw textures`
```
Industrial loft kitchen, exposed red brick wall, blackened steel shelving with copper
pots, polished concrete floor, oversized factory pendant lights, tall crittall-style
windows, late afternoon sun, lived-in photorealistic interior
```

#### 5. 中古世紀現代 Mid-century Modern
- 關鍵字:`mid-century modern interior, walnut furniture, tapered legs, mustard and teal accents, sunburst clock, 1960s`
```
Mid-century modern living room, walnut credenza and lounge chair with tapered legs,
mustard velvet sofa, teal accent wall, sunburst mirror, shag rug, floor-to-ceiling
window to a garden, warm 1960s color grade, editorial interior photography
```

#### 6. 輕奢現代 Modern Luxury
- 關鍵字:`modern luxury interior, marble and brass, velvet upholstery, indirect cove lighting, bespoke joinery, hotel-like`
```
Modern luxury penthouse living room, bookmatched calacatta marble feature wall, brass
inlay details, taupe velvet sectional, sculptural chandelier, indirect cove lighting,
floor-to-ceiling window with night city view, high-end hospitality photography
```

#### 7. Art Deco
- 關鍵字:`Art Deco interior, geometric patterns, brass and dark green, fluted panels, terrazzo, glamorous 1920s`
```
Art Deco hotel bar, emerald green velvet booths, fluted walnut wall panels with brass
trim, geometric terrazzo floor, fan-motif sconces, smoked glass pendant, moody warm
lighting, glamorous 1920s atmosphere, cinematic interior photography
```

#### 8. 法式優雅 Parisian
- 關鍵字:`Parisian apartment interior, Haussmann moldings, herringbone parquet, marble fireplace, mix of antique and modern`
```
Parisian Haussmann apartment salon, ornate ceiling moldings and rosette, oak herringbone
parquet, marble fireplace with gilt mirror, modern bouclé armchairs mixing with antique
side tables, tall French windows with juliet balcony, soft daylight, effortless elegance
```

#### 9. 波希米亞 Boho
- 關鍵字:`bohemian interior, layered rugs and textiles, rattan furniture, hanging plants, warm terracotta, eclectic`
```
Bohemian sunroom, layered vintage kilim rugs, rattan peacock chair, macramé wall
hanging, dozens of trailing plants, terracotta and ochre palette, string lights,
golden hour sun streaming through, cozy eclectic interior photography
```

#### 10. 新中式 Contemporary Chinese
- 關鍵字:`contemporary Chinese interior, dark wood lattice, ink painting tones, celadon accents, symmetry, garden borrowed view`
```
Contemporary Chinese tea room, dark walnut lattice screens, ink-wash tone silk wall
panels, celadon porcelain on a long altar table, round window borrowing a bamboo garden
view, symmetrical composition, quiet diffused light, refined oriental atmosphere
```

#### 11. 極簡主義 Minimalist
- 關鍵字:`minimalist interior, monolithic surfaces, hidden storage, single material palette, precise shadow gaps, emptiness`
```
Minimalist gallery-like living space, seamless microcement floor and walls in warm
grey, one long monolithic island bench, hidden flush doors with shadow gaps, a single
artwork, precise recessed lighting, vast negative space, architectural digest style
```

#### 12. 美式鄉村 Modern Farmhouse
- 關鍵字:`modern farmhouse interior, shiplap walls, reclaimed wood beams, apron sink, black iron fixtures, cozy neutral`
```
Modern farmhouse kitchen, white shiplap walls, reclaimed oak ceiling beams, large
apron-front sink under a garden window, matte black iron pendants over a butcher block
island, open shelves with stoneware, morning light, warm inviting photography
```

---

### 三、景觀設計風格(10 種)

#### 1. 日式庭園 Japanese Garden
- 關鍵字:`Japanese garden, raked gravel, moss and stones, pruned pine, stone lantern, tsukubai water basin, tranquil`
```
Japanese stroll garden, raked white gravel sea around moss islands, sculpted black
pine, weathered stone lantern beside a tsukubai basin, maple turning red, morning
mist, wooden viewing deck in foreground, serene photorealistic photography
```

#### 2. 現代極簡景觀 Modern Minimal
- 關鍵字:`modern minimal landscape, linear paving bands, clipped hedges, specimen tree, corten steel edges, reflecting pool`
```
Modern minimal courtyard landscape, long linear granite paving bands alternating with
clipped low hedges, single multi-stem specimen tree uplit at dusk, corten steel planter
edges, black reflecting pool mirroring the facade, architectural landscape photography
```

#### 3. 自然草甸風 Naturalistic / New Perennial
- 關鍵字:`naturalistic planting design, Piet Oudolf style, ornamental grasses, perennial drifts, seed heads, four-season interest`
```
Naturalistic perennial garden in Piet Oudolf style, drifts of ornamental grasses mixed
with echinacea, salvia and seed heads, mown path weaving through the meadow, backlit
by low autumn sun, dew and spiderwebs, immersive photorealistic garden photography
```

#### 4. 英式村舍花園 English Cottage
- 關鍵字:`English cottage garden, abundant mixed borders, roses and foxgloves, brick path, picket gate, romantic overflow`
```
English cottage garden in June, overflowing mixed borders of roses, delphiniums and
foxgloves, worn brick path to a timber gate, climbing wisteria on the stone cottage,
soft overcast light, bees and butterflies, romantic garden photography
```

#### 5. 法式幾何庭園 French Formal
- 關鍵字:`French formal garden, parterre, axial symmetry, clipped boxwood patterns, gravel walks, fountain focal point`
```
French formal parterre garden viewed from the chateau terrace, symmetrical boxwood
scrollwork patterns infilled with white gravel and lavender, central tiered fountain,
pleached lime allée on both axes, golden early evening light, grand perspective
```

#### 6. 熱帶度假風 Tropical Resort
- 關鍵字:`tropical resort landscape, layered palms and heliconia, freeform pool, timber deck, tiki torches, lush paradise`
```
Tropical resort pool landscape, freeform lagoon pool with swim-up bar, layered planting
of coconut palms, heliconia and giant elephant ears, ipe timber deck with loungers,
tiki torches lit at dusk, turquoise water glow, luxury travel photography
```

#### 7. 沙漠耐旱景觀 Xeriscape
- 關鍵字:`xeriscape desert landscape, saguaro and agave, decomposed granite, boulder groupings, drought tolerant, desert modern`
```
Desert modern xeriscape front yard, sculptural saguaro and golden barrel cactus among
weathered granite boulders, agave clusters, rusted steel address wall, decomposed
granite ground, long shadows at sunset, Arizona desert light, photorealistic
```

#### 8. 中式園林 Classical Chinese Garden
- 關鍵字:`classical Chinese garden, taihu rockery, zigzag bridge, moon gate, pavilion by the pond, borrowed scenery, lattice windows`
```
Classical Suzhou garden scene, taihu limestone rockery beside a still lotus pond,
zigzag stone bridge to a hexagonal pavilion, moon gate framing layered bamboo beyond,
white wall as canvas for tree shadows, drizzly poetic atmosphere, photorealistic
```

#### 9. 地中海庭園 Mediterranean Garden
- 關鍵字:`Mediterranean garden, olive trees, lavender rows, terracotta pots, gravel terrace, cypress, rustic pergola`
```
Mediterranean hillside garden, gnarled olive trees in a gravel terrace, rows of
lavender, oversized terracotta pots with rosemary, rustic timber pergola draped in
grapevine, long table set for lunch, cicada-hot midday light, Provence atmosphere
```

#### 10. 都市生態/雨水花園 Urban Ecological
- 關鍵字:`urban rain garden, bioswale planting, permeable paving, native wetland species, boardwalk, sponge city, educational signage`
```
Urban rain garden streetscape after rain, planted bioswale with native rushes and iris
between sidewalk and road, permeable pavers, low corten weirs, small timber boardwalk,
droplets on foliage, fresh overcast light, sustainable city photography
```

---

### 四、風格轉換修圖模板(Nano Banana)

把任何一種上面的風格套到既有照片/渲染上,結構不變:

**建築外觀風格轉換**
```
把這張建築照片轉換成[粗獷主義]風格:外牆改為粗獷的清水混凝土,開口改為深凹的
窗洞,但建築的量體輪廓、樓層高度、視角、周邊環境完全保持不變,光線維持原圖。
```

**室內風格轉換**
```
把這個房間改成[Art Deco]風格:家具、燈具、材質、色調全部換成該風格的元素
(幾何圖案、黃銅、絲絨、墨綠色),但空間格局、窗戶位置、相機視角完全不變。
```

**景觀風格轉換**
```
把這個庭院改成[日式庭園]風格:配置耙紋碎石、苔蘚、造型黑松、石燈籠,
但基地範圍、周邊建築、相機視角完全不變,光線改為清晨柔和的漫射光。
```

---

## 大師風格提示詞收集

在提示詞中加入大師名字(如 `in the style of Tadao Ando`、`designed by Kelly Wearstler`)是
把整張圖拉向一致設計語言最有效的方法 —— Zaha Hadid 是 Midjourney 上被引用最多的建築師(6.3 萬次)。

每位大師整理:**風格特徵**(可單獨當關鍵字用)+ **完整範例提示詞**。
範例可把建築/空間類型換成自己的專案。

---

### 一、著名建築師(12 位)

#### 1. 安藤忠雄 Tadao Ando
- 特徵:`exposed concrete, geometric purity, controlled natural light, water reflection, zen stillness`
```
Art museum in the style of Tadao Ando, smooth exposed concrete volumes, a long slit
skylight casting a moving blade of light on the wall, shallow reflecting pool at the
entrance, single cherry tree, misty dawn, serene photorealistic photography
```

#### 2. 札哈・哈蒂 Zaha Hadid
- 特徵:`fluid parametric curves, seamless white surfaces, dynamic sweeping forms, futuristic elegance`
```
Performing arts center in the style of Zaha Hadid, fluid white curvilinear shell
flowing into the plaza, seamless GRC surfaces, ribbon-like glazing, dusk with cool
blue sky and warm interior glow, aerial three-quarter view, photorealistic rendering
```

#### 3. 法蘭克・蓋瑞 Frank Gehry
- 特徵:`deconstructivist sculptural masses, crumpled titanium ribbons, colliding volumes, reflective metal skin`
```
Concert hall in the style of Frank Gehry, billowing stainless steel ribbons catching
golden sunset light, colliding sculptural volumes, glass slots between metal petals,
people at the plaza for scale, dramatic photorealistic architectural photography
```

#### 4. 柯比意 Le Corbusier
- 特徵:`modernist white volumes, pilotis, ribbon windows, roof garden, béton brut, five points of architecture`
```
Villa in the style of Le Corbusier, crisp white volume lifted on slender pilotis,
horizontal ribbon windows, sculptural roof garden with curved windbreak, ramp visible
through the facade, clear Mediterranean morning light, modernist photography
```

#### 5. 密斯・凡德羅 Mies van der Rohe
- 特徵:`steel and glass pavilion, less is more, floating flat roof, travertine podium, open plan transparency`
```
Glass pavilion house in the style of Mies van der Rohe, black steel frame with
floor-to-ceiling glazing, floating white roof plane, travertine podium and core,
furniture visible through transparent facade, calm lawn and mature trees, dusk glow
```

#### 6. 萊特 Frank Lloyd Wright
- 特徵:`organic architecture, horizontal prairie lines, cantilevered terraces over nature, warm stone and timber`
```
Residence in the style of Frank Lloyd Wright, dramatic cantilevered concrete terraces
over a rocky stream with waterfall, horizontal stone coursing, warm interior light,
autumn forest surrounding, late afternoon, iconic architectural photography
```

#### 7. 隈研吾 Kengo Kuma
- 特徵:`layered timber lattice, material lightness, dissolving facade, wood louvers, Japanese craft detail`
```
Community cultural pavilion in the style of Kengo Kuma, layered cedar lattice facade
dissolving into the forest edge, warm light filtering between wood fins, stone base,
visitors beneath the deep eave, soft overcast light, delicate photorealistic detail
```

#### 8. SANAA(妹島和世+西澤立衛)
- 特徵:`extreme lightness, thin white columns, curved glass walls, blurred boundaries, ethereal minimalism`
```
Museum pavilion in the style of SANAA, continuous curved glass wall with ultra-thin
white steel columns, flat white roof appearing weightless, interior blending with the
park landscape, people drifting through, bright even daylight, ethereal atmosphere
```

#### 9. 聖地牙哥・卡拉特拉瓦 Santiago Calatrava
- 特徵:`white skeletal structure, biomorphic ribs, kinetic wings, cable-stayed elegance, engineering as sculpture`
```
Transit station in the style of Santiago Calatrava, soaring white steel ribs forming
a birdlike vaulted canopy, glass between skeletal structure, dramatic upward view,
crisp blue sky, high-key photorealistic photography celebrating the structure
```

#### 10. 路易斯・康 Louis Kahn
- 特徵:`monumental geometric masses, brick and concrete, circular and triangular openings, silence and light`
```
Institute library in the style of Louis Kahn, monumental brick volumes with giant
circular openings, deep shadowed arcades, precise concrete bands, warm low sun raking
across the geometry, empty contemplative plaza, timeless architectural photography
```

#### 11. 路易斯・巴拉甘 Luis Barragán
- 特徵:`saturated colored walls, pink and ochre planes, water channels, dramatic shadow, emotional minimalism`
```
Courtyard house in the style of Luis Barragán, intersecting planes of saturated pink
and ochre walls, still water channel reflecting the sky, a single palm shadow cast on
the wall, deep blue sky, hard sunlight and long shadows, poetic minimal photography
```

#### 12. BIG / 比亞克・英格斯 Bjarke Ingels
- 特徵:`playful pragmatism, twisted or stepped mass, green terraces, diagram-driven bold move, social rooftop`
```
Residential block in the style of BIG Bjarke Ingels, mountain-shaped stepped massing
with planted terraces cascading toward the harbor, one bold twisting gesture, bicycles
and social courtyard, bright Scandinavian daylight, crisp photorealistic rendering
```

---

### 二、著名室內設計師(10 位)

#### 1. 凱莉・韋斯特勒 Kelly Wearstler
- 特徵:`bold eclectic glamour, sculptural furniture, mixed marbles, brass, graphic patterns, fearless color`
```
Hotel lobby lounge designed by Kelly Wearstler, sculptural travertine seating, bold
graphic marble floor in two tones, vintage brass lighting, oversized abstract art,
layered textures of velvet and burl wood, moody glamorous light, editorial photography
```

#### 2. 阿塞爾・維伍德 Axel Vervoordt
- 特徵:`wabi-sabi antiques, lime-washed walls, monastic calm, aged patina, East-West harmony`
```
Country house living room designed by Axel Vervoordt, lime-washed textured walls,
centuries-old oak beams, low linen sofas, wabi-sabi ceramics on a rustic altar table,
soft window light with painterly shadows, quiet timeless atmosphere, fine art photo
```

#### 3. 文森・范・杜伊森 Vincent Van Duysen
- 特徵:`warm minimalism, monolithic natural materials, tactile purity, muted palette, serene luxury`
```
Family kitchen and dining space designed by Vincent Van Duysen, monolithic bluestone
island, flush oak cabinetry, lime plaster walls in warm grey, linen curtains diffusing
daylight, ceramic tableware, serene warm minimalism, architectural interior photography
```

#### 4. 菲利普・史塔克 Philippe Starck
- 特徵:`playful iconoclasm, ghost chairs, surreal scale, glossy contrasts, witty modern luxury`
```
Boutique hotel restaurant designed by Philippe Starck, transparent ghost chairs around
long communal marble table, surreal oversized lamp, baroque mirror leaning on raw
concrete wall, playful mix of glossy white and gold, theatrical lighting, cinematic
```

#### 5. 印蒂亞・瑪達維 India Mahdavi
- 特徵:`saturated candy colors, rounded plush forms, playful geometry, pink and mint, joyful chic`
```
Cafe interior designed by India Mahdavi, blush pink velvet banquettes with rounded
forms, mint scalloped ceiling, patterned terrazzo floor in candy tones, brass globe
pendants, joyful saturated color palette, flat even light, iconic instagram-worthy
```

#### 6. 伊爾絲・克勞福 Ilse Crawford
- 特徵:`human warmth, tactile natural materials, soft light, comfort-first design, sensory wellbeing`
```
Boutique guesthouse lounge designed by Ilse Crawford, warm oak paneling, wool and
sheepskin textures over crafted furniture, cork side tables, layered warm lamplight,
plants by the window seat, inviting human-scaled comfort, lifestyle photography
```

#### 7. 彼得・馬里諾 Peter Marino
- 特徵:`ultra-luxury flagship, bronze and leather, commissioned art, dark sensual materiality`
```
Luxury flagship boutique designed by Peter Marino, blackened bronze display cases,
hand-stitched leather wall panels, commissioned contemporary artwork, smoked glass
and travertine, dramatic accent lighting, exclusive sensual atmosphere, editorial
```

#### 8. 多蘿西・德雷珀 Dorothy Draper
- 特徵:`maximalist baroque, cabbage-rose chintz, black-white checkerboard, oversized plaster moldings, hollywood regency`
```
Grand hotel corridor designed by Dorothy Draper, black and white checkerboard marble
floor, oversized white baroque plaster moldings on emerald walls, cabbage-rose chintz
armchairs, giant birdcage chandelier, glamorous 1940s hollywood regency, saturated
```

#### 9. 帕奇希婭・奧奇拉 Patricia Urquiola
- 特徵:`craft-tech textiles, curved modular seating, layered patterns, warm contemporary Italian design`
```
Showroom lounge designed by Patricia Urquiola, curved modular sofa in woven jacquard,
3D-knitted rugs layering geometric patterns, blown glass pendants, terracotta and
teal palette, warm Milanese daylight, contemporary Italian design photography
```

#### 10. 約瑟夫・迪朗 Joseph Dirand
- 特徵:`Parisian precision minimalism, sculpted marble, perfect proportions, monochrome elegance`
```
Apartment dining room designed by Joseph Dirand, sculpted grey marble fireplace,
precise minimal paneling, vintage Pierre Jeanneret chairs around a stone table,
monochrome palette with one brass accent, soft Parisian light, refined photography
```

---

### 三、著名景觀設計師(10 位)

#### 1. 皮特・奧多夫 Piet Oudolf
- 特徵:`new perennial movement, grass and seed head drifts, four-season decay beauty, matrix planting`
```
Public garden designed by Piet Oudolf, drifts of ornamental grasses and echinacea
seed heads in matrix planting, mown grass path winding through, low golden autumn
backlight, frost on textures, immersive naturalistic garden photography
```

#### 2. 羅伯托・布雷・馬克斯 Roberto Burle Marx
- 特徵:`brazilian modernist curves, bold monochrome planting sweeps, wavy paving mosaics, tropical abstraction`
```
Waterfront promenade designed by Roberto Burle Marx, sweeping black and white
Portuguese pavement waves, bold curvilinear beds of monochrome tropical planting,
royal palms in rhythm, turquoise sea beyond, aerial oblique view, vivid photorealistic
```

#### 3. 枡野俊明 Shunmyo Masuno
- 特徵:`contemporary zen garden, stone setting as meditation, raked gravel, borrowed scenery, spiritual calm`
```
Contemporary zen garden designed by Shunmyo Masuno, carefully set standing stones in
raked gravel sea, moss mounds, single pruned pine, framed borrowed mountain view,
quiet drizzle atmosphere, contemplative photorealistic photography
```

#### 4. 弗雷德里克・奧姆斯特德 Frederick Law Olmsted
- 特徵:`pastoral park scenery, sweeping meadows, naturalistic lake edges, carriage paths, democratic landscape`
```
Great urban park designed by Frederick Law Olmsted, sweeping pastoral meadow framed
by mature elm groves, naturalistic lake with stone bridge, winding carriage path,
families picnicking, soft summer afternoon light, timeless landscape photography
```

#### 5. 彼得・沃克 Peter Walker
- 特徵:`minimalist land art, perfect geometric grids, single-species rows, refined ground planes`
```
Corporate campus plaza designed by Peter Walker, perfect grid of ginkgo trees in
crushed granite, long minimal stone benches, precise bands of lawn and gravel, subtle
fog fountain line, early morning long shadows, minimalist landscape photography
```

#### 6. 凱瑟琳・古斯塔夫森 Kathryn Gustafson
- 特徵:`sculpted landforms, flowing grass terraces, water as ribbon, sensual topography`
```
Memorial garden designed by Kathryn Gustafson, sensual sculpted lawn landforms
flowing like fabric, granite water ribbon following the terrain, visitors walking
the curves, soft overcast light emphasizing the topography, elegant landscape photo
```

#### 7. 丹・凱利 Dan Kiley
- 特徵:`modernist allées, orchard grids, geometric water channels, classical order in modern form`
```
Civic garden designed by Dan Kiley, formal allée of honey locust trees over a long
reflecting channel, geometric fountain grid, clipped hedge rooms, dappled light
through the canopy, one-point perspective, modernist landscape photography
```

#### 8. 瑪莎・舒瓦茨 Martha Schwartz
- 特徵:`pop art landscape, artificial color objects, ironic geometry, playful provocation`
```
Urban plaza designed by Martha Schwartz, rows of glossy candy-colored sculptural
mounds on striped paving, neon-edged planters with single palms, playful pop art
landscape against corporate towers, bright saturated daylight, bold graphic photo
```

#### 9. 詹姆斯・科納 James Corner
- 特徵:`post-industrial reuse, elevated linear park, native planting between rails, urban theater`
```
Elevated linear park designed by James Corner Field Operations, converted rail
viaduct with native grasses growing between concrete plank paving, peel-up timber
benches, city framed on both sides, people strolling at sunset, urban photography
```

#### 10. 萬能布朗 Capability Brown
- 特徵:`english landscape garden, rolling lawns to the house, serpentine lake, clumps of trees, ha-ha wall`
```
English estate landscape designed by Capability Brown, rolling lawn sweeping
uninterrupted to the manor, serpentine lake with classical bridge, scattered clumps
of oak and cedar, grazing deer, golden evening mist, romantic landscape painting mood
```

---

### 四、大師風格轉換模板(Nano Banana 修圖)

```
把這張[建築/室內/庭院]照片轉換成[安藤忠雄]的風格:材質、光線、色調換成該大師的
標誌性語言(清水混凝土、精準的光縫、寧靜水面),但原有的空間結構、視角、
構圖完全保持不變。
```

```
用[Kelly Wearstler]的風格重新設計這個房間:替換家具、燈具、材質與色彩計畫,
呈現大膽的雕塑感家具、混搭大理石與黃銅、圖形化圖案,但房間格局、門窗位置、
相機視角完全不變。
```

### 使用小提醒

- 大師名字對 Midjourney/Grok 這類模型效果最強;GPT Image 有時會迴避在世人物名稱,
  可改用「特徵關鍵字」欄位的描述達到同樣效果
- 名字 + 特徵關鍵字一起用最穩定:`in the style of Tadao Ando, exposed concrete, controlled light`
- 商業案發表時建議說「受某某風格啟發」,避免暗示大師本人參與設計

---

## 建築史風格提示詞收集

依時代整理建築史與室內設計史上的經典風格。
每種風格:**年代**、**特徵關鍵字**(可直接串進任何提示詞)、**完整範例**。
AI 社群中最常用的歷史風格依序是:Art Nouveau > Gothic > Baroque > Art Deco。

---

### 一、西方建築史(14 種)

#### 1. 古埃及 Ancient Egyptian(西元前 3000–30)
- 關鍵字:`ancient Egyptian architecture, massive battered pylon walls, papyrus columns, hieroglyph reliefs, axial temple`
```
Ancient Egyptian temple complex, massive battered pylon gateway with painted
hieroglyph reliefs, avenue of sphinxes, papyrus-bundle columns in the hypostyle hall,
golden desert light at dusk, incense haze, cinematic archaeological reconstruction
```

#### 2. 古希臘 Ancient Greek(西元前 800–146)
- 關鍵字:`classical Greek architecture, Doric temple, fluted marble columns, pediment sculpture, entasis, acropolis`
```
Classical Greek Doric temple on a hilltop acropolis, fluted white marble columns with
subtle entasis, sculptured pediment and metopes, worshippers in the foreground,
brilliant Aegean light, cypress and olive trees, photorealistic reconstruction
```

#### 3. 古羅馬 Ancient Roman(西元前 509–西元 476)
- 關鍵字:`Roman architecture, monumental arches, coffered concrete dome, oculus, travertine and brick, aqueduct`
```
Roman public bath interior, monumental coffered concrete vault with central oculus
beam of light, travertine columns, steaming pools, mosaic floors, citizens in togas,
volumetric light through steam, photorealistic historical reconstruction
```

#### 4. 拜占庭 Byzantine(330–1453)
- 關鍵字:`Byzantine architecture, central dome on pendentives, gold mosaics, marble revetment, mystical light`
```
Byzantine basilica interior, vast central dome floating on pendentives ringed by
windows, glittering gold mosaic surfaces, green and purple marble columns, hanging
oil lamps, shafts of dusty light, mystical atmosphere, photorealistic
```

#### 5. 羅馬式 Romanesque(1000–1200)
- 關鍵字:`Romanesque architecture, thick stone walls, round arches, barrel vault, small windows, fortress-like monastery`
```
Romanesque monastery church, massive rough stone walls with round-arched portal and
carved tympanum, squat twin towers, barrel-vaulted dim nave with candlelight, misty
morning in a rural valley, weathered photorealistic historical photography
```

#### 6. 哥德式 Gothic(1150–1500)
- 關鍵字:`Gothic architecture, pointed arches, ribbed vaults, flying buttresses, rose window, stained glass, vertical aspiration`
```
Gothic cathedral interior, soaring ribbed vaults and clustered columns drawing the
eye upward, immense rose window and stained glass casting colored light across the
stone floor, incense haze, tiny figures for scale, awe-inspiring photorealistic
```

#### 7. 文藝復興 Renaissance(1400–1600)
- 關鍵字:`Renaissance architecture, harmonic proportions, symmetrical facade, rusticated base, dome and lantern, classical orders revived`
```
Renaissance palazzo facade on an Italian piazza, rusticated stone base with refined
upper floors, evenly spaced arched windows with pediments, grand cornice, marble
fountain in front, warm Tuscan afternoon light, photorealistic architectural study
```

#### 8. 巴洛克 Baroque(1600–1750)
- 關鍵字:`Baroque architecture, dramatic curves, theatrical grandeur, gilded ornament, trompe-l'oeil ceiling, dynamic movement`
```
Baroque palace hall, undulating gilded walls with paired columns, ceiling fresco
dissolving into painted sky, marble sculptures in dramatic poses, crystal chandeliers,
theatrical shafts of golden light, opulent photorealistic interior
```

#### 9. 洛可可 Rococo(1730–1770)
- 關鍵字:`Rococo style, pastel colors, asymmetric rocaille ornament, gilded scrollwork, playful lightness, boudoir elegance`
```
Rococo salon, pale pink and mint walls with asymmetric gilded rocaille scrollwork,
oval mirrors multiplying candlelight, delicate curved furniture, painted cherub
ceiling, silk drapery, soft powdery light, playful aristocratic elegance
```

#### 10. 新古典主義 Neoclassical(1750–1850)
- 關鍵字:`Neoclassical architecture, restrained classical orders, portico with pediment, symmetry and reason, limestone`
```
Neoclassical museum with grand Corinthian portico, precise limestone facade, long
symmetrical wings, bronze doors, formal stair with citizens ascending, cool clear
morning light emphasizing the order and restraint, photorealistic
```

#### 11. 維多利亞 Victorian(1837–1901)
- 關鍵字:`Victorian architecture, ornate bay windows, polychrome brick, turrets and gables, cast iron cresting, painted lady`
```
Victorian painted lady townhouse row, polychrome facades in sage, plum and cream,
ornate bay windows and turned porch columns, fish-scale shingles on the turret,
gas street lamps at dusk, romantic photorealistic street photography
```

#### 12. 布雜學院派 Beaux-Arts(1880–1930)
- 關鍵字:`Beaux-Arts architecture, monumental symmetry, paired colossal columns, sculptural ornament, grand civic stair`
```
Beaux-Arts central railway station, monumental arched windows between paired
colossal columns, sculptural figures crowning the cornice, vast vaulted concourse
with brass clock, streams of travelers, golden afternoon light, cinematic
```

#### 13. 新藝術運動 Art Nouveau(1890–1910)
- 關鍵字:`Art Nouveau architecture, whiplash curves, floral ironwork, organic stone carving, stained glass, Horta and Gaudí spirit`
```
Art Nouveau apartment building entrance, flowing whiplash curves carved in stone,
floral wrought-iron balconies and door, stained glass canopy glowing at dusk,
organic column like a plant stem, romantic photorealistic detail photography
```

#### 14. 裝飾藝術 Art Deco(1920–1940)
- 關鍵字:`Art Deco skyscraper, stepped ziggurat massing, vertical fluting, sunburst motifs, chrome and stone, jazz age glamour`
```
Art Deco skyscraper crown at night, stepped ziggurat massing with vertical fluted
piers, illuminated sunburst spire, chrome eagle ornaments, city lights below, 1930s
jazz age glamour, dramatic low-angle photorealistic photography
```

---

### 二、東方建築史(6 種)

#### 1. 中國唐代木構(618–907)
- 關鍵字:`Tang dynasty Chinese architecture, massive dougong brackets, gentle sweeping roof, deep eaves, timber structure, dignified simplicity`
```
Tang dynasty Buddhist temple hall, massive timber structure with prominent dougong
bracket sets, gently sweeping tiled roof with deep eaves, vermilion columns on stone
platform, morning incense smoke, mountain mist behind, dignified photorealistic
```

#### 2. 中國明清宮殿(1368–1912)
- 關鍵字:`Ming Qing imperial palace, golden glazed roof tiles, red walls, white marble terraces, painted dougong, axial grandeur`
```
Ming dynasty imperial palace hall on triple white marble terraces, golden glazed
roof with mythical beast finials, deep red walls and columns, intricate painted
beams, vast paved courtyard, low winter sun and long shadows, majestic photorealistic
```

#### 3. 閩南/台灣傳統(明清至日治)
- 關鍵字:`Minnan Taiwanese traditional architecture, swallowtail ridge, red brick and terracotta, jiǎnnián mosaic, courtyard sanheyuan`
```
Traditional Taiwanese sanheyuan courtyard house, red brick walls with white stone
base, dramatic swallowtail roof ridge with jiannian porcelain mosaic decoration,
terracotta roll tiles, banyan tree shading the courtyard, warm afternoon light,
nostalgic photorealistic photography
```

#### 4. 日本寺院/數寄屋(飛鳥至江戶)
- 關鍵字:`Japanese temple architecture, cypress bark roof, deep verandas, sukiya teahouse, tatami and shoji, wabi restraint`
```
Japanese sukiya-style teahouse beside a moss garden, cypress bark hip roof, deep
engawa veranda, shoji screens glowing softly from within, stepping stones and stone
lantern, evening drizzle, quiet wabi atmosphere, photorealistic
```

#### 5. 東南亞高棉 Khmer(9–15 世紀)
- 關鍵字:`Khmer temple architecture, corncob prasat towers, bas-relief galleries, sandstone, jungle reclamation, Angkor`
```
Khmer sandstone temple at sunrise, five corncob prasat towers reflected in the lotus
moat, long bas-relief galleries, monks in saffron robes crossing the causeway, golden
mist over the jungle, epic photorealistic photography
```

#### 6. 伊斯蘭建築 Islamic(7 世紀起)
- 關鍵字:`Islamic architecture, horseshoe arches, muqarnas vault, geometric tile mosaic, courtyard with fountain, minaret`
```
Islamic palace courtyard, forest of slender columns with horseshoe arches, intricate
geometric zellige tile in blue and gold, carved muqarnas vault, central marble
fountain, filtered light through mashrabiya screens, serene photorealistic
```

---

### 三、室內設計史(10 種)

#### 1. 哥德式室內 Gothic Interior
- 關鍵字:`Gothic interior, linenfold oak paneling, pointed arch doorways, heraldic tapestry, candlelit stone hall`
```
Gothic great hall interior, dark linenfold oak paneling, pointed arch stone fireplace,
heraldic tapestries, long oak table with iron candelabras, stained glass window light
on the stone floor, medieval atmosphere, photorealistic
```

#### 2. 文藝復興室內 Renaissance Interior
- 關鍵字:`Renaissance interior, coffered walnut ceiling, fresco walls, marble floor, classical proportions, studiolo`
```
Renaissance palazzo studiolo, coffered walnut ceiling with gilt rosettes, fresco
lunettes above intarsia wood paneling, marble chequer floor, globe and manuscripts
on the desk, warm window light, scholarly refined atmosphere, photorealistic
```

#### 3. 巴洛克室內 Baroque Interior
- 關鍵字:`Baroque interior, gilded boiserie, mirror gallery, ceiling fresco, marble and gold, palatial drama`
```
Baroque mirror gallery, arched mirrors facing tall windows, gilded boiserie and
pilasters, painted vault celebrating the heavens, parquet de Versailles floor,
crystal chandeliers ablaze, golden evening light, palatial photorealistic
```

#### 4. 洛可可室內 Rococo Interior
- 關鍵字:`Rococo boudoir, pastel boiserie, gilt rocaille, oval back chairs, silk upholstery, feminine lightness`
```
Rococo boudoir, ivory boiserie with gilt asymmetric rocaille carving, pale blue silk
upholstered fauteuils, small marquetry writing desk, oval pastel portrait, crystal
girandoles, soft morning light through silk curtains, delicate photorealistic
```

#### 5. 喬治亞式 Georgian(1714–1830)
- 關鍵字:`Georgian interior, sash windows, dado and cornice moldings, muted heritage colors, mahogany furniture, restrained elegance`
```
Georgian townhouse drawing room, tall sash windows with shutters, walls in muted
sage with crisp dado and cornice moldings, mahogany furniture, marble fireplace
with fender, portrait in gilt frame, calm daylight, restrained English elegance
```

#### 6. 帝政風格 Empire(1800–1830)
- 關鍵字:`Empire style interior, mahogany with ormolu mounts, laurel and sphinx motifs, saturated silk walls, Napoleonic grandeur`
```
Empire style salon, crimson silk-draped walls, mahogany furniture with gilt bronze
sphinx and laurel mounts, round pedestal table on lion paw feet, marble bust on
column, candlelight and firelight, Napoleonic grandeur, photorealistic
```

#### 7. 維多利亞室內 Victorian Interior
- 關鍵字:`Victorian parlor, layered patterns, heavy velvet drapery, dark wood, collected objects, gaslight warmth`
```
Victorian parlor, deep red William Morris wallpaper, heavy fringed velvet drapery,
tufted chesterfield, dark carved furniture crowded with framed photographs, ferns
and curiosities, warm gaslight glow, densely layered photorealistic interior
```

#### 8. 美術工藝運動 Arts & Crafts(1880–1920)
- 關鍵字:`Arts and Crafts interior, honest oak joinery, Morris patterns, hammered copper, inglenook fireplace, handcrafted warmth`
```
Arts and Crafts living hall, quarter-sawn oak paneling and exposed joinery, inglenook
fireplace with hammered copper hood, William Morris block-print curtains, handmade
tile, oak settle with wool cushions, low afternoon light, honest crafted warmth
```

#### 9. 新藝術室內 Art Nouveau Interior
- 關鍵字:`Art Nouveau interior, whiplash line furniture, stained glass, floral marquetry, organic unity of design`
```
Art Nouveau dining room, furniture with flowing whiplash curves, stained glass
panels of stylized lilies, floral marquetry sideboard, sinuous brass light fixtures
like vines, mural of maidens and flowers, warm amber light, total work of art
```

#### 10. 孟菲斯 Memphis(1980s)
- 關鍵字:`Memphis design interior, clashing primary colors, terrazzo laminate, squiggle patterns, playful postmodern geometry`
```
Memphis design living room, bold clashing colors, laminate furniture with black and
white squiggle patterns, asymmetric bookshelf totem, terrazzo everything, neon
squiggle wall light, playful 1980s postmodern energy, saturated editorial photo
```

---

### 四、20 世紀現代運動(6 種)

#### 1. 國際樣式 International Style(1920–1970)
- 關鍵字:`International Style, glass and steel box, curtain wall grid, free plan, no ornament, corporate modernism`
```
International Style office tower of the 1950s, pristine glass and steel curtain wall
in a precise grid, dark bronze mullions, open plaza with a single abstract sculpture,
crisp geometry against blue sky, mad-men era corporate elegance, photorealistic
```

#### 2. 表現主義 Expressionism(1910–1930)
- 關鍵字:`Expressionist architecture, sculptural streamlined brick, organic curved mass, Erich Mendelsohn spirit, dynamic monolith`
```
Expressionist observatory tower, sculptural white streamlined form like a ship's
prow, curved brick details, small deep windows, dramatic storm clouds behind,
1920s avant-garde monument, moody photorealistic photography
```

#### 3. 構成主義 Constructivism(1920–1935)
- 關鍵字:`Soviet Constructivism, dynamic diagonal geometry, red and white, cantilevered volumes, industrial glazing, propaganda modernism`
```
Constructivist workers club building, bold cantilevered glass volume thrust
diagonally over the entrance, red banner walls with white supergraphics, industrial
ribbon glazing, revolutionary energy, winter light, archival photorealistic style
```

#### 4. 流線摩登 Streamline Moderne(1930–1945)
- 關鍵字:`Streamline Moderne, rounded corners, horizontal speed lines, porthole windows, glass block, nautical curves`
```
Streamline Moderne diner and gas station, rounded white corners with chrome speed
lines, porthole windows, glass block entry glowing turquoise at dusk, neon signage,
vintage cars, 1930s optimism, cinematic photorealistic americana
```

#### 5. 代謝派 Metabolism(1960–1975)
- 關鍵字:`Japanese Metabolism, capsule modules on megastructure core, plug-in units, futuristic concrete towers, Nakagin spirit`
```
Metabolist capsule tower, hundreds of white prefabricated capsule modules with round
windows plugged onto twin concrete cores, some capsules being craned into place,
1970s Tokyo streetscape below, retro-futuristic photorealistic photography
```

#### 6. 後現代主義 Postmodernism(1975–1995)
- 關鍵字:`Postmodern architecture, playful classical references, oversized pediment, pastel and bold color, irony and collage, Memphis energy`
```
Postmodern civic building, oversized broken pediment crowning a colorful facade,
giant abstracted columns in terracotta and teal, checkerboard granite base, playful
collage of classical references, sunny plaza with palm trees, 1980s photorealistic
```

---

### 五、區域風土建築(8 種)

#### 1. 蒙兀兒 Mughal(16–18 世紀)
- 關鍵字:`Mughal architecture, white marble onion dome, pietra dura inlay, iwan portal, char bagh garden, minarets`
```
Mughal mausoleum at dawn, white marble onion dome with four minarets, grand iwan
portal with pietra dura floral inlay, long reflecting pool of the char bagh garden,
soft pink morning mist, symmetrical composition, majestic photorealistic
```

#### 2. 南印度達羅毗荼 Dravidian
- 關鍵字:`Dravidian temple architecture, towering gopuram covered in painted deities, pillared mandapa halls, temple tank, vivid polychrome`
```
South Indian Dravidian temple gopuram, towering pyramid gateway covered in hundreds
of vividly painted deity sculptures, pilgrims below with flower garlands, temple
tank reflecting the tower, hot saturated tropical light, photorealistic detail
```

#### 3. 努比亞土坯 Nubian / Hassan Fathy
- 關鍵字:`Nubian mud brick architecture, parabolic adobe vaults, earthen domes, Hassan Fathy vernacular, desert sustainability`
```
Nubian village architecture in the style of Hassan Fathy, parabolic mud brick vaults
and domes, thick earthen walls with small triangular openings, sand-toned surfaces
glowing at sunset, palm shadows, handcrafted sustainable beauty, photorealistic
```

#### 4. 摩洛哥 Riad Moroccan
- 關鍵字:`Moroccan riad, courtyard with central fountain, zellige tile, carved cedar and stucco, horseshoe arches, lantern light`
```
Moroccan riad courtyard, central marble fountain surrounded by emerald zellige tile,
carved stucco arcades and cedar balconies, orange trees in each corner, brass
lanterns casting patterned light at dusk, intimate photorealistic atmosphere
```

#### 5. 西班牙殖民復興 Spanish Colonial Revival
- 關鍵字:`Spanish Colonial Revival, white stucco walls, red clay tile roof, arched arcade, wrought iron, courtyard fountain`
```
Spanish Colonial Revival estate, white stucco volumes with red clay barrel tile
roofs, arched arcade around a fountain courtyard, bougainvillea on wrought iron
balconies, olive trees, warm California golden hour, photorealistic
```

#### 6. 都鐸復興 Tudor Revival
- 關鍵字:`Tudor Revival, half-timbered gables, steep roofs, tall brick chimneys, leaded diamond windows, storybook charm`
```
Tudor Revival manor house, dark half-timbered gables over honey brick, steeply
pitched slate roofs with clustered ornate chimneys, leaded diamond-pane windows
glowing warm, cottage garden in front, misty English evening, storybook photorealism
```

#### 7. 美式工藝 Craftsman Bungalow
- 關鍵字:`Craftsman bungalow, low-pitched gable, deep porch with tapered columns on stone piers, exposed rafter tails, earthy woodwork`
```
American Craftsman bungalow, low-pitched gable roof with exposed rafter tails, deep
front porch with tapered wood columns on river stone piers, earthy green shingle
siding, warm porch light at dusk, autumn maples, nostalgic photorealistic
```

#### 8. 沙漠現代主義 Palm Springs Desert Modernism(1950s)
- 關鍵字:`mid-century desert modernism, butterfly roof, breeze block screen, walls of glass to the pool, Palm Springs style`
```
Palm Springs mid-century modern house, dramatic butterfly roof, white breeze block
privacy screen, floor-to-ceiling glass opening to a turquoise pool, orange front
door, cacti and mountains behind, crisp desert light, slim aarons style photography
```

---

### 六、歷史風格轉換模板(Nano Banana 修圖)

```
把這棟建築照片轉換成[哥德式]風格:立面改為該時代的語言(尖拱窗、飛扶壁、
玫瑰窗、石材雕飾),但建築的量體輪廓、樓層位置、視角、周邊街景完全保持不變。
```

```
把這個房間改成[維多利亞]時代的室內:牆面、家具、燈具、織品全部換成該時代
元素(圖案壁紙、絨布窗簾、深色木家具、煤氣燈氛圍),但空間格局、門窗位置、
相機視角完全不變。
```

```
「時代穿越」比較圖:以這張現代建築照片為基準,生成同一棟建築在[文藝復興/
巴洛克/Art Deco]三個時代的樣子,量體與視角一致,方便並排比較。
```

### 使用小提醒

- 歷史風格 + 現代機能混搭是很受歡迎的用法:例如
  `Gothic cathedral converted into a modern library, original vaults preserved`
- 想要「考據感」加 `historical reconstruction, archaeological accuracy`;
  想要「戲劇感」加 `cinematic, epic scale, volumetric light`
- 東方傳統建築描述構件用專有名詞效果最好:`dougong 斗拱`、`swallowtail ridge 燕尾脊`、`engawa 緣側`

---

## 修圖工作流(Nano Banana / Gemini 影像)

> **強項**:修圖之王 —— 能在改變風格/光線/材質的同時**幾乎完美保留原圖結構與視角**,支援多張圖合成,中文指令理解好。建築工作流程(SU 轉渲染、方案比較)首選。

#### 修圖|模型轉渲染

**1. SketchUp 白模轉實景**
```
把這張 SketchUp 白模截圖轉成擬真建築攝影:建築量體、開窗位置、視角完全不變。
外牆改為清水混凝土,開口部為深灰鋁框玻璃,加入柔和的下午自然光與正確陰影,
背景補上淺景深的街道、行道樹與天空,地面為淺色石材鋪面,整體呈現專業建築攝影質感。
```

**2. Revit/CAD 立面圖轉渲染立面**
```
將這張黑白 CAD 立面圖轉成有材質的渲染立面:所有線條位置、比例、開窗分割完全照原圖,
牆面套用[淺灰色石材],窗框為深色金屬,玻璃有淡淡天空反射,底部加入人物剪影與植栽
作為比例參考,白色背景,乾淨的簡報風格。
```

**3. 手繪透視線稿轉寫實**
```
把這張手繪透視線稿轉成照片級渲染:構圖、透視、家具位置完全依照原稿。
材質:橡木地板、米白色牆面、亞麻布沙發。光線:左側窗戶進來的晨光,柔和陰影。
保留一點手繪的溫度感,但整體是高級室內攝影質感。
```

#### 修圖|光線與時間

**4. 白天轉黃昏**
```
把這張白天拍的建築外觀照片改成黃昏:天空換成橘紫漸層晚霞,室內燈全部點亮透出暖光,
外牆受光面轉為暖色調,玻璃反射晚霞,建築結構、材質、構圖完全不變,
整體是 magic hour 的專業建築攝影氛圍。
```

**5. 白天轉夜景**
```
將這張建築照片改為夜景:深藍色夜空,建築立面打上向上洗牆的暖色投光,室內亮燈,
景觀燈帶照亮步道邊緣,前景水池倒映燈光,構圖與建築完全不變,長曝光攝影質感。
```

**6. 季節變換**
```
把這張照片的季節從夏天改成秋天:所有樹木變成紅黃色系的秋葉,地面散落少量落葉,
光線改為低角度的秋日午後暖光,建築、道路、視角完全不變。
(變化:改成「冬天:落葉喬木只剩枝幹,地面與屋頂積薄雪,天空灰白」)
```

#### 修圖|材質與方案比較

**7. 外牆材質替換**
```
把這棟建築的外牆材質從[清水模]換成[紅棕色手工磚],磚縫為淺灰色,
其他部分——窗框、玻璃、屋頂、周邊環境、光線——全部保持不變,
材質要有真實的凹凸質感和受光變化。
```

**8. 一圖生成三方案**(需支援多輸出或分次執行)
```
以這張街屋立面為基礎,生成材質方案比較:方案A 深灰金屬板+木格柵、
方案B 白色塗料+綠植牆、方案C 玻璃磚+清水模。開窗位置與建築輪廓完全不變,
每個方案單獨出圖,相同視角相同光線,方便並排比較。
```

**9. 室內風格轉換**
```
把這個客廳從現代風改成日式無印風:家具替換為低矮的橡木家具、榻榻米坐墊、
紙燈籠吊燈,牆面改為米白色,加入綠植,但空間格局、窗戶位置、相機視角完全不變,
自然柔和的採光。
```

#### 修圖|加內容

**10. 毛胚屋虛擬佈置**
```
在這張毛胚屋照片中做虛擬裝修:保持空間結構、窗戶、透視不變,鋪淺色木地板,
牆面刷暖白色,佈置[北歐風]客廳——布沙發、木茶几、地毯、落地燈、掛畫、綠植,
窗簾半開透進自然光,呈現房產行銷照片的質感。
```

**11. 荒地加景觀設計**
```
在這張空地照片上做景觀改造:相機視角與周邊建築不變,加入蜿蜒碎石步道、
原生草花帶、三棵不同高度的喬木、一組戶外座椅與低矮景觀燈,
光線維持原照片的陰天漫射光,自然野趣風格。
```

**12. 加人物與生活感**
```
在這張建築渲染圖中加入自然的人物:入口處兩人交談、廣場上有人騎腳踏車經過、
咖啡座有人坐著,人物比例正確、穿著日常、有投影,不要遮擋建築主體,
光線方向與原圖一致。
```

#### 修圖|視角與圖面轉換

**13. 平面圖轉鳥瞰渲染**
```
根據這張彩色平面圖生成 45 度鳥瞰渲染:完全依照圖面配置——建築位置、道路、
綠地、水景的相對關係不變,建築以簡潔白色量體呈現,植栽用真實樹木,
清晨長影,專業提案效果圖風格。
```

**14. 單張外觀生成其他角度**
```
根據這張建築正面照片,生成同一棟建築的[左側 45 度角/背面/空拍俯視]視角,
建築的材質、開窗邏輯、比例、環境風格保持一致,同樣的天氣與光線。
```

#### 文生圖(Nano Banana 也能直出)

**15. 綠建築社區中庭**
```
住宅社區的下沉式中庭花園,環繞的建築有層層退縮的種植露台,垂掛的藤蔓植物,
中央有淺水景與汀步,居民在座椅區聊天,溫暖的傍晚光線,寫實建築攝影風格,人視角。
```

---

### 附:通用增強關鍵字(三個模型通用)

| 目的 | 加在提示詞後面 |
|---|---|
| 更像真實攝影 | `photorealistic, architectural photography, shot on 35mm lens` |
| 黃昏氛圍 | `golden hour, warm interior glow, long soft shadows` |
| 陰天柔光(材質最清楚) | `overcast diffused light, soft shadows, neutral color balance` |
| 空拍 | `aerial drone view at 45 degrees, high detail` |
| 人視角臨場感 | `eye-level street view, people for scale, shallow depth of field` |
| 競圖乾淨風 | `minimalist competition render, desaturated palette, white sky` |
| 修圖時保護原圖(最重要) | 「建築結構、視角、構圖完全不變」/ `keep the exact same composition, perspective and geometry` |
