# Archetype Profile: R.B. (Revol-Bots)

**Tier / Classification:** Competitive Rogue / Engine-Intensive Combo  
**Primary Attributes & Types:** FIRE, EARTH, DARK & WIND Machine  
**Core Summoning Mechanics:** Link Climbing (Link-1 $\to$ Link-2 $\to$ Link-3), Linked Quick-Effect Disruption, Modular 2-Machine Swarming  
**Target Deck Size:** 40 Cards (Maximized Consistency)

---

## 1. Canonical Engine Core & Ratios

R.B. (Revol-Bots) is a recursive Machine Link-climbing strategy centered around establishing linked Link-3 bosses (*R.B. The Brute Blues* and *R.B. Shepherd's Crook*) whose pointing Link arrows unlock the Quick Effect disruptions of Main Deck R.B. monsters.

Because the primary archetypal starters are Spells (*Stage Landing* and *Funk Dock*), the archetype operates as a **compact 15-card core** paired with a modular secondary engine capable of reliably summoning **2 Machine bodies** to Link Summon the pivotal combo gateway: `R.B. VALCan Booster` (Link-2 Machine). Crucially, *Stage Landing* also functions autonomously as a pure 1-card starter, enabling full end-board execution without committing a Normal Summon or secondary engine.

### Main Deck Core (The 15-Card Standard)

* **Mandatory Linchpin Spells (1-Card Starters & Accelerators):**
  - `R.B. Stage Landing` ($3\times$) — **Linchpin 3-Of & Full 1-Card Starter**. Crucially, **NOT once per turn**. Special Summons 1 "R.B." monster from Deck or Extra Deck (with a different name than cards you control) and provides continuous destruction protection from the GY. Restricts Extra Deck summons to Machine monsters with $\le 1500$ original ATK for the turn.
  - `R.B. Funk Dock` ($3\times$) — Archetypal ignition Field Spell; 1-card starter. Searches an "R.B." card upon activation (HOPT). Whenever an on-field "R.B." monster leaves the field by card effect, triggers to Special Summon an "R.B." monster from the Deck.
  - `Terraforming` ($1\times$, Limited) / `Set Rotation` ($1\times$) — Directly accesses *Funk Dock*.
* **Extenders & Soft Bricks (Optimal at 1-Ofs):**
  - `R.B. Ga10 Driller` ($1\times$, Level 3 EARTH Machine, 500/500) — Inherent Special Summon from hand when controlling no face-up monsters or only "R.B." monsters. Linked Quick-Effect monster destruction.
  - `R.B. Ga10 Cutter` ($1\times$, Level 4 EARTH Machine, 700/700) — Inherent Special Summon from hand. Linked Quick-Effect Spell/Trap activation negation and destruction.
  - `R.B. Ga10 Pile Bunker` ($1\times$, Level 8 EARTH Machine, 1500/1500) — Inherent Special Summon extender and board-wipe trigger.
  - `R.B. VALCan Rocket` ($1\times$, Level 5 FIRE Machine, 1000/1000) — Inherent Special Summon extender and burn spot removal.
* **High-Level Search Targets & Hard Bricks:**
  - `R.B. Lambda Blade` ($0\text{–}1\times$, Level 7 DARK Machine) — On-summon Foolish Burial for R.B. cards. Linked Quick-Effect monster control snatch.
  - `R.B. Lambda Cannon` ($1\times$, Level 6 DARK Machine) — On-summon retrieval from GY. Linked Turn 1 Hand-Rip & Full Hand Revelation.
* **Archetypal Payoff Traps (Searchable Disruptions, 1-Of Max):**
  - `R.B. Next Phase` ($1\times$, Counter Trap) — Searchable Counter Trap set via *Shepherd's Crook*. Negates monster activations at Spell Speed 3.
  - `R.B. Last Stand` ($1\times$, Normal Trap) — Special Summons 1 R.B. monster from Deck/GY.

---

## 2. Functional Taxonomy & Activation Context Gates

*Categorizes every card and explicitly defines its operational conditions:*

| Card Name | Taxonomy Role | Zone Location | Activation Pre-Condition | Live Context / Strategic Grounding |
| :--- | :--- | :---: | :--- | :--- |
| **`R.B. Stage Landing`** | `[STARTER-1]` | `HAND` | None (Non-HOPT) | Turn 1 & Turn 2 (1-Card Full Combo) |
| **`R.B. Funk Dock`** | `[STARTER-1]` | `HAND` | HOPT Activation | Turn 1 & Turn 2 (Field Spell Starter) |
| **`Pillar of the Future - Cyanos`** | `[STARTER-NS]` | `HAND` | Consumes Normal Summon | Turn 1 & Turn 2 (2 Machine Bodies) |
| **`R.B. Lambda Cannon`** | `[PAYOFF-INFO]`| `FIELD_M` | Must be Linked to R.B. Link | Turn 1 (Hand-Rip & Full Revelation) |
| **`R.B. Ga10 Cutter`** | `[PAYOFF-DISRUPT]`| `FIELD_M` | Must be Linked to R.B. Link | Turn 2 (Spell/Trap Negate & Destroy) |
| **`R.B. Lambda Blade`** | `[PAYOFF-DISRUPT]`| `FIELD_M` | Must be Linked to R.B. Link | Turn 2 Opponent Main Phase (Control Snatch) |
| **`R.B. Next Phase`** | `[PAYOFF-DISRUPT]`| `BACKROW` | Set on field; control R.B. monster | Turn 2 (Spell Speed 3 Monster Negate) |
| **Ash Blossom & Joyous Spring** | `[TECH-HT]` | `HAND` | Discard from hand | Turn 0, Turn 1 & Turn 2 (Universal Negate) |
| **Mulcharmy Fuwalos** | `[TECH-HT]` | `HAND` | `CONTROL_NO_CARDS` (Empty field only!) | **Turn 0 (Going Second ONLY - Dead on Built Board)** |
| **Evenly Matched** | `[TECH-BREAKER]`| `HAND` | `CONTROL_NO_CARDS` | **Turn 2 (Going Second ONLY - Dead with Cards)** |
| **Infinite Impermanence** | `[TECH-HT]` | `HAND` / `SET` | Hand: `CONTROL_NO_CARDS`; Set: None | Turn 0 (Hand) / Turn 1+ (Set in S2) |

---

## 3. Milestone Checkpoints (RFC 0001 YBN Board Snapshots)

*Grandmaster milestone board states guiding the simulation engine's A\* heuristic:*

* **Milestone 1 (2-Machine Gateway in EL):**
  ```ybn
  T1|M1|LP8000:8000|P1:EL[#ed4:R.B. VALCan Booster(atk)],H:[#d11:R.B. Funk Dock]|P2:|G:NS=0,SS=4
  ```
* **Milestone 2 (Information Engine & Swarm in M4):**
  ```ybn
  T1|M1|LP6800:8000|P1:EL[#ed4:R.B. VALCan Booster(atk)],M4[#d37:R.B. Lambda Blade(atk)],F[#d11:R.B. Funk Dock],GY:[#d36:R.B. Lambda Cannon]|P2:|G:NS=0,SS=6
  ```
* **Milestone 3 (Terminal Triangulation Ceiling Endboard):**
  ```ybn
  T1|M1|LP6800:8000|P1:ER[#ed1:R.B. The Brute Blues(atk)],M2[#ed15:Prototype Sky Striker Ace - Amatsu(atk)],M3[#ed6:R.B. Shepherd's Crook(atk)],M4[#d37:R.B. Lambda Blade(atk)],M5[#d9:R.B. Ga10 Cutter(atk)],F[#d11:R.B. Funk Dock],S2[#h5:Infinite Impermanence(set)],S3[#d38:R.B. Next Phase(set)],GY:[13 Cards],B:[#d5:Cyanos],H:[#h4:Ash Blossom, #d2:Stage Landing],D:31,ED:8|P2:|G:NS=1,SS=15
  ```
  - **Terminal $V(\text{YBN})$ Score:** `29.6` [★ Universal Competitive Ceiling]

---

## 4. Canonical Playlines (RFC 0001 YGN Move Sequences)

### Line A: Primary Uninterrupted 26-Step Ceiling Line (Sky Striker Hybrid)
* **Opening Hand:** `[Sky Striker Mobilize - Engage!, R.B. Stage Landing, Sky Striker Ace - Roze, Ash Blossom & Joyous Spring, Infinite Impermanence]`
* **Algebraic YGN Sequence:**
```ygn
A(H)[#1:Engage]>SEARCH(D:#2:Drones)
A(H)[#2:Drones]>TOKEN
S(H)[#3:Roze]>M2
L[#tok:M1]>ER[#e1:Kagari](atk)<ED
A(ER)[#e1:Kagari]>RETRIEVE(GY:#2:Drones)
L[#3:M2+#e1:ER]>ER[#e2:Camellia](atk)<ED
A(ER)[#e2:Camellia]>MILL(D:#4:Cyanos)
A(H)[#2:Drones]>TOKEN
L[#tok:M3]>EL[#e3:Shizuku](atk)<ED
L[#e2:ER+#e3:EL]>EL[#e4:VALCan](atk)<ED
A(EL)[#e4:VALCan]>SEARCH(D:#5:FunkDock)
A(H)[#5:FunkDock]>SEARCH(D:#6:StageLanding)
A(H)[#6:StageLanding]>SS(D:#7:LambdaCannon)
A(M2)[#7:LambdaCannon]>PEEK_AND_POP
A(F)[#5:FunkDock]>SS(D:#8:LambdaBlade)
A(M2)[#8:LambdaBlade]>MILL(D:#9:Ga10Cutter)
A(EL)[#e4:VALCan]>SS(GY:#7:LambdaCannon)
A(M1)[#7:LambdaCannon]>RETRIEVE(GY:#9:Ga10Cutter)
L[#e4:M3+#7:M1]>ER[#e5:BruteBlues](atk)<ED
S(H)[#9:Ga10Cutter]>M5
A(ER)[#e5:BruteBlues]>SEARCH(D:#10:StageLanding)
A(H)[#10:StageLanding]>SS(ED:#e6:ShepherdCrook)
A(EL)[#e6:ShepherdCrook]>SET_TRAP(D:#11:NextPhase)
A(GY)[#4:Cyanos]>REVIVE(GY:#3:Roze)
L[#3:M2]>M2[#e7:Amatsu](atk)<ED
SET[#12:Impermanence]>S2
```
* **Resulting Terminal YBN State:**
```ybn
T1|M1|LP6800:8000|P1:ER[#ed1:The Brute Blues(atk)],M2[#ed15:Amatsu(atk)],M3[#ed6:Shepherd's Crook(atk)],M4[#d37:Lambda Blade(atk)],M5[#d9:Ga10 Cutter(atk)],F[#d11:Funk Dock],S2[#h5:Imperm(set)],S3[#d38:Next Phase(set)],GY:[13 Cards],B:[#d5:Cyanos],H:[#h4:Ash Blossom,#d2:Stage Landing],D:31,ED:8|P2:|G:NS=1,SS=15
```

---

## 5. End-Board Strength Hierarchy & V(YBN) Valuation Calibration

* **Rank 1 (Primary Ceiling Setup — Target V(YBN) = 29.6):**
  - Piece 1: `R.B. The Brute Blues` (`[LAYER-FIELD]`, 5100 ATK, 3 Pointing Arrows) $\rightarrow$ *Target Weight: +4.0*
  - Piece 2: `R.B. Ga10 Cutter` (`[LAYER-FIELD]`, Spell/Trap Negate & Destroy) $\rightarrow$ *Target Weight: +2.5*
  - Piece 3: `R.B. Lambda Blade` (`[LAYER-FIELD]`, Monster Control Snatch) $\rightarrow$ *Target Weight: +2.5*
  - Piece 4: `R.B. Next Phase` (`[LAYER-BACKROW]`, Spell Speed 3 Monster Negate) $\rightarrow$ *Target Weight: +3.0*
  - Piece 5: `Infinite Impermanence` (`[LAYER-BACKROW]`, Column Monster Negate) $\rightarrow$ *Target Weight: +2.0*
  - Piece 6: `R.B. Shepherd's Crook` (`[LAYER-GRAVEYARD]`, Turn 2 Quick Revival) $\rightarrow$ *Target Weight: +1.5*
  - Piece 7: `Ash Blossom & Joyous Spring` (`[LAYER-HAND]`, Search/SS Negate) $\rightarrow$ *Target Weight: +2.0*
  - Piece 8: `R.B. Lambda Cannon` (`[LAYER-HAND]`, Full Opponent Hand Knowledge) $\rightarrow$ *Target Weight: +4.0*

* **Strategic Interruption Priority Order:**
  `[HAND-RIP / FULL-INFO] > [SPELL/TRAP-NEGATE] > [COUNTER-TRAP] > [CONTROL-SNATCH] > [SPOT-REMOVAL] > [GY-TRIGGER]`
