# Yu-Gi-Oh! Archetype Knowledge Commons (`ygo-archetypes`)

[![RFC 0001](https://img.shields.io/badge/standard-RFC_0001_(YGN%2FYBN)-8b5cf6.svg)](https://niloedson.github.io/projects/ygn-standard.html)
[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC_BY_4.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)

An open, community-driven repository of competitive Yu-Gi-Oh! archetype profiles, standardized playlines, grandmaster milestone checkpoints, and Activation Context Gates—maintained under **Haunted Labs** and standardized on **RFC 0001 (YGN / YBN)**.

---

## The Vision: Community Dueling Ground Truth

Historically, competitive trading card game theory has lived scattered across Reddit posts, Discord threads, and YouTube videos. This repository unifies archetypal knowledge into machine-verifiable, human-readable algebraic standards:

1. **Standardized 5-Section Archetype Profiles:** Canonical engine ratios, extenders, Garnets, and chokepoints.
2. **Activation Context Gates:** Eliminating false valuations by formally defining operational conditions (e.g. `CONTROL_NO_CARDS` on `Mulcharmy Fuwalos` and `Evenly Matched`).
3. **Milestone Checkpoints (RFC 0001 YBN):** Single-line 14-zone spatial board state snapshots marking combo milestones (Gateway $\to$ Information Engine $\to$ Terminal Triangulation).
4. **Canonical Playlines (RFC 0001 YGN):** Standardized algebraic notation capturing clean LIFO chain resolutions without browser clickstream noise.

---

## How to Contribute an Archetype

Contributing to `ygo-archetypes` requires zero programming experience:

1. **Copy the Template:** Copy [`templates/_archetype_template.md`](templates/_archetype_template.md) to `archetypes/<archetype_name>/<archetype_name>.md`.
2. **Document the Core:** Fill in the 15-card engine core, secondary engine synergies, and chokepoints.
3. **Capture the Combo:**
   - Play your combo naturally on **Dueling Book**.
   - Copy the raw duel log (`duel_log.txt`) into the free [Haunted Labs Match Notary](https://niloedson.github.io/tools/notary.html).
   - Click **"⚡ Transcribe to RFC 0001 YGN"**.
   - Click **"📄 Copy Markdown for ygo-archetypes PR"** and paste it into Section 4!
4. **Submit a Pull Request:** Automated GitHub Actions run `npm run validate` to verify that your YGN syntax and card passcodes resolve cleanly.

### Prefer Not to Use Git? Submit via the Archetype Theory Form
Don't want to open a GitHub Pull Request? You can submit your playlines, combo notes, or ruling analyses directly to Nilo Edson via the **[Submit Archetype Theory Form](https://niloedson.github.io/tools/submit-archetype-theory.html)**! We will review the theory, verify the line in `ygo-sim-core`, and commit it to this repository with full attribution to your handle.

---

## Repository Structure

```text
ygo-archetypes/
├── archetypes/
│   └── revol_bots/
│       ├── revol_bots.md            # Community archetype reference (5-section schema)
│       └── revol_bots.ydk           # Standard tournament decklist
├── templates/
│   └── _archetype_template.md       # Canonical contributor template
├── scripts/
│   └── validate_archetypes.mjs      # Pull request linter & parser validator
├── .github/
│   └── workflows/
│       └── validate-pr.yml          # Continuous Integration PR check
└── package.json
```

---

## License

All archetype profiles and community documentation in this repository are licensed under the [Creative Commons Attribution 4.0 International License (CC-BY-4.0)](LICENSE).
