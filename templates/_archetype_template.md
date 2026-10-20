# Archetype Profile: [Archetype Name]

**Tier / Classification:** [Tier 1 / Tier 2 / Rogue / Experimental]  
**Primary Attributes & Types:** [e.g. FIRE Pyro / DARK Dragon / EARTH Machine]  
**Core Summoning Mechanics:** [e.g. Link Summon, Xyz Rank 4, Fusion, Synchro]  
**Target Deck Size:** [40 Cards (Max Consistency) / 45 Cards / 60-Card Pile]  

---

## 1. Canonical Engine Core & Ratios

### Main Deck Engine
* **Mandatory 3-Ofs (Linchpins & Primary Ignition):**
  - `[Card A]` ($3\times$) — Primary searcher; searches engine card on Normal or Special Summon.
  - `[Card B]` ($3\times$) — Primary enabler / field spell / ignition spell.
* **1-to-2-Ofs (Search Targets, Extenders & Payoffs):**
  - `[Card C]` ($1\text{–}2\times$) — High-impact searchable extender.
  - `[Card D]` ($1\times$) — Archetypal trap or end-board search target.

### Extra Deck Engine
* `[Boss 1]` ($1\text{–}2\times$) — Primary combo stepping stone.
* `[Boss 2]` ($1\times$) — Terminal end-board boss monster.

---

## 2. Functional Taxonomy & Activation Context Gates

*Categorizes every card in the engine and non-engine pool, defining its formal operational conditions:*

| Card Name | Taxonomy Role | Location | Activation Pre-Condition | Live Context / Restrictions |
| :--- | :--- | :---: | :--- | :--- |
| **`[Starter Card]`** | `[STARTER-1]` | `HAND` | None | Turn 1 & Turn 2 |
| **`[Normal Starter]`** | `[STARTER-NS]` | `HAND` | Consumes Normal Summon | Turn 1 & Turn 2 |
| **`[Extender Card]`** | `[EXTENDER]` | `HAND` | Control no monsters or archetype only | Turn 1 & Turn 2 |
| **Ash Blossom & Joyous Spring** | `[TECH-HT]` | `HAND` | Discard as cost | Turn 0, Turn 1 & Turn 2 |
| **Mulcharmy Fuwalos** | `[TECH-HT]` | `HAND` | `CONTROL_NO_CARDS` (Empty field only!) | **Turn 0 (Going Second ONLY)** |
| **Evenly Matched** | `[TECH-BREAKER]` | `HAND` | `CONTROL_NO_CARDS` | **Turn 2 (Going Second ONLY)** |
| **Lightning Storm** | `[TECH-BREAKER]` | `HAND` | `CONTROL_NO_FACEUP_CARDS` | **Turn 2 (Going Second ONLY)** |
| **Infinite Impermanence** | `[TECH-HT]` | `HAND` / `SET` | Hand: `CONTROL_NO_CARDS`; Set: None | Turn 0 (Hand) / Turn 1+ (Set) |

---

## 3. Milestone Checkpoints (RFC 0001 YBN Board Snapshots)

*Grandmaster milestone board states guiding the simulation engine's A\* heuristic:*

* **Milestone 1 (Gateway / Early Body):**
  ```ybn
  T1|M1|LP8000:8000|P1:EL[#e1:GatewayLink(atk)],M2[#d1:Extender(atk)]|P2:|G:NS=0,SS=2
  ```
* **Milestone 2 (Information & Revelation):**
  ```ybn
  T1|M1|LP6800:8000|P1:EL[#e1:GatewayLink(atk)],GY:[#d2:InfoCard]|P2:|G:NS=0,SS=3
  ```
* **Milestone 3 (Terminal Ceiling Endboard):**
  ```ybn
  T1|M1|LP6800:8000|P1:ER[#e2:Boss(atk)],M2[#d3:Disrupt1(atk)],M3[#d4:Disrupt2(atk)],F[#d5:Field],S2[#h1:Imperm(set)],S3[#d6:CounterTrap(set)],H:[#h2:AshBlossom]|P2:|G:NS=1,SS=15
  ```
  - **Target $V(\text{YBN})$ Ceiling:** `29.6`

---

## 4. Canonical Playlines (RFC 0001 YGN Move Sequences)

*Standardized algebraic notation eliminating narrative ambiguity and functioning as executable test fixtures:*

### Line A: Primary Uninterrupted Ceiling Line
* **Opening Hand:** `[Card A, Card B, Card C, Tech 1, Tech 2]`
* **Algebraic YGN Sequence:**
```ygn
A(H)[#1:StarterA]>SEARCH(D:#2:StarterB)
A(H)[#2:StarterB]>SS(D:#3:Body1)
S(H)[#4:Extender]>M2
L[#3:M1]>ER[#e1:Link1](atk)<ED
A(ER)[#e1:Link1]>RETRIEVE(GY:#2:StarterB)
L[#4:M2+#e1:ER]>ER[#e2:Link2](atk)<ED
...
SET[#12:Impermanence]>S2
```
* **Terminal YBN State:**
```ybn
T1|M1|LP6800:8000|P1:ER[#e5:Boss(atk)],M2[#e7:SubBoss(atk)],M3[#e6:Anchor(atk)],M4[#8:Disrupt1(atk)],M5[#9:Disrupt2(atk)],F[#5:Field],S2[#12:Imperm(set)],S3[#11:CounterTrap(set)],H:[AshBlossom]|P2:|G:NS=1,SS=15
```

### Line B: Compromised Fallback Line (Under Ash / Imperm on 1st Search)
* **Opening Hand:** `[Card A, Extender B, ...]`
* **Algebraic YGN Sequence:**
```ygn
A(H)[#1:StarterA]>SEARCH(D:#2:StarterB) [C1 // R1: Ash Negate]
S(H)[#3:ExtenderB]>M1
L[#3:M1]>EL[#e1:Link1](atk)<ED
SET[#4:FallbackTrap]>S1
```
* **Terminal YBN State:**
```ybn
T1|M1|LP8000:8000|P1:EL[#e1:Link1(atk)],S1[#4:FallbackTrap(set)],H:[#h1:AshBlossom]|P2:|G:NS=0,SS=2
```

### Line C: Emergency Minimum Endpoint (Under Mulcharmy Fuwalos / Nibiru, $\le 2$ Summons)
* **Strategy:** Minimize opponent draw advantage or avoid 5th summon threshold.
```ygn
N[#1:StarterA](atk)>M1
SET[#2:SearchableTrap]>S1
```
* **Terminal YBN State:**
```ybn
T1|M1|LP8000:8000|P1:M1[#1:StarterA(atk)],S1[#2:SearchableTrap(set)],H:[#h1:AshBlossom]|P2:|G:NS=1,SS=0
```

---

## 5. End-Board Strength Hierarchy & V(YBN) Valuation Calibration
*Community strategic ground truth: Human players explicitly rank the relative value of end-board pieces for this archetype. The `ygo-lab` skill automatically parses this section to calibrate numerical weights in the compiled Action DAG (`*.archetype.json`) for `ygo-sim-core`.*

* **Rank 1 (Primary Ceiling Setup — Target V(YBN) = 29.6):**
  - Piece 1: `[Boss 1]` (`[LAYER-FIELD]`, Triangulated Quick-Effect Disruption) $\rightarrow$ *Target Weight: +4.0*
  - Piece 2: `[Counter Trap]` (`[LAYER-BACKROW]`, Spell Speed 3 Negate & Pop) $\rightarrow$ *Target Weight: +3.0*
  - Piece 3: `[Retained Hand Trap]` (`[LAYER-HAND]`, Live Negate like Ash Blossom) $\rightarrow$ *Target Weight: +2.0*
  - Piece 4: `[Field Spell / GY Looper]` (`[LAYER-GRAVEYARD]`, Turn 3 Starter Search / Special Summon) $\rightarrow$ *Target Weight: +1.5*
* **Rank 2 (Fallback Setup under 1 Interruption — Target V(YBN) = 14.0):**
  - Piece 1: `[Fallback Monster]` (`[LAYER-FIELD]`, Quick Disruption) $\rightarrow$ *Target Weight: +2.0*
  - Piece 2: `[Retained Hand Trap]` (`[LAYER-HAND]`) $\rightarrow$ *Target Weight: +2.0*
* **Rank 3 (Emergency Minimum Endpoint under Fuwalos/Nibiru, ≤2 Summons — Target V(YBN) = 4.0):**
  - Minimum viable board: `[Normal Summon Body + Set Trap]` $\rightarrow$ *Target Weight: +4.0*
* **Strategic Interruption Priority Order:**
  `[HAND-RIP / FULL-INFO] > [SPELL/TRAP-NEGATE] > [COUNTER-TRAP] > [CONTROL-SNATCH] > [SPOT-REMOVAL] > [GY-TRIGGER]`

---

## 6. Proven Secondary Engine Synergies (Pile Clustering)

* **Engine A:** [Description of synergy, e.g. shared Type/Attribute or free Level bodies].
* **Engine B:** [Description of synergy].
* **Strict Anti-Synergies & Hard Locks:**
  - [List any Type locks, Attribute locks, or Extra Deck summon locks].

---

## 7. Chokepoints & Counter-Play Matrix

| Opponent Interruption | Target Card / Chokepoint | Impact Severity | Recommended Counter-Line / Insulation |
| :--- | :--- | :---: | :--- |
| **Ash Blossom & Joyous Spring** | `[Card Name]` | High / Med / Low | [Insulation or bait strategy] |
| **Droll & Lock Bird** | `[1st Search Event]` | High / Med / Low | [Play around Droll] |
| **Nibiru, the Primal Being** | 5th Summon Window | High / Med / Low | [Summon negate prior to 5th summon or fallback] |
| **Infinite Impermanence** | `[Field Monster]` | High / Med / Low | [Dodge with quick-play tribute or extender] |

---

## 8. Hypergeometric Benchmarks

* **Minimum Starters for $>90\%$ Consistency ($n = 5$):**
  - 40-Card Deck: **$\ge 14$ Starters** ($P = 90.0\%$).
  - 45-Card Deck: **$\ge 16$ Starters** ($P = 90.3\%$).
  - 60-Card Deck: **$\ge 22$ Starters** ($P = 90.8\%$).
* **Garnet Draw Risk Cap:** $\le 12.5\%$ (maximum 1 hard brick in 40 cards).
* **Hand Trap Defense Target ($n = 5$):** $\ge 12$ Hand Traps ($P(\ge 1) \ge 85.1\%$, $P(\ge 2) \ge 48.0\%$).
