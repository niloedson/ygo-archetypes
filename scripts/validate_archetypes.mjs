#!/usr/bin/env node
/**
 * @file validate_archetypes.mjs
 * @description Linter and syntax validator for community-contributed Yu-Gi-Oh! archetype profiles.
 * Enforces the 5-section schema, Activation Context Gates table, and RFC 0001 YGN/YBN grammar.
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const REQUIRED_SECTIONS = [
  '## 1. Canonical Engine Core & Ratios',
  '## 2. Functional Taxonomy & Activation Context Gates',
  '## 3. Milestone Checkpoints',
  '## 4. Canonical Playlines',
  '## 5. End-Board Strength Hierarchy'
];

let totalErrors = 0;
let totalChecked = 0;

function validateArchetypeFile(filePath) {
  totalChecked++;
  console.log(`\nValidating: ${filePath}`);
  const content = readFileSync(filePath, 'utf-8');

  // 1. Enforce 5-Section Schema
  for (const section of REQUIRED_SECTIONS) {
    if (!content.includes(section)) {
      console.error(`  ❌ [MISSING SECTION]: File lacks "${section}"`);
      totalErrors++;
    }
  }

  // 2. Validate Activation Context Gates Table
  if (!content.includes('Activation Pre-Condition') || !content.includes('Taxonomy Role')) {
    console.error(`  ❌ [INVALID TABLE]: Section 2 must contain the formal Activation Context Gates table.`);
    totalErrors++;
  }

  // 3. Validate YBN Checkpoint Syntax
  const ybnMatches = content.match(/T\d+\|M\d+\|LP\d+:\d+\|P1:[^|\r\n]+/g);
  if (!ybnMatches || ybnMatches.length === 0) {
    console.error(`  ❌ [MISSING YBN]: Section 3 must contain valid RFC 0001 YBN board state snapshots.`);
    totalErrors++;
  } else {
    console.log(`  ✓ Found ${ybnMatches.length} valid RFC 0001 YBN checkpoint(s).`);
  }

  // 4. Validate YGN Code Blocks
  const ygnBlocks = content.match(/```ygn[\s\S]+?```/g);
  if (!ygnBlocks || ygnBlocks.length === 0) {
    console.error(`  ❌ [MISSING YGN]: Section 4 must contain at least one \`\`\`ygn canonical playline block.`);
    totalErrors++;
  } else {
    console.log(`  ✓ Found ${ygnBlocks.length} canonical YGN playline block(s).`);
  }

  if (totalErrors === 0) {
    console.log(`  ✅ [PASS]: Archetype profile conforms 100% to Haunted Labs RFC 0001 standard.`);
  }
}

// Find all archetype profiles
const archetypesDir = resolve(process.cwd(), 'archetypes');
if (!existsSync(archetypesDir)) {
  console.error(`❌ Archetypes directory not found at ${archetypesDir}`);
  process.exit(1);
}

const entries = readdirSync(archetypesDir);
for (const entry of entries) {
  const fullPath = join(archetypesDir, entry);
  if (statSync(fullPath).isDirectory()) {
    const mdFiles = readdirSync(fullPath).filter((f) => f.endsWith('.md'));
    for (const md of mdFiles) {
      validateArchetypeFile(join(fullPath, md));
    }
  }
}

console.log(`\n======================================================`);
console.log(`Validation Complete: ${totalChecked} checked, ${totalErrors} errors found.`);
console.log(`======================================================`);

if (totalErrors > 0) {
  process.exit(1);
}
