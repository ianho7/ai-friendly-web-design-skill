#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SKILLS = {
    'ai-friendly-web-design': 'English version',
};

const args = process.argv.slice(2);

// Only one version available
const toInstall = Object.keys(SKILLS);

// Target: ~/.claude/skills/
const skillsDir = path.join(os.homedir(), '.claude', 'skills');

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log('\n🤖 Installing AI-Friendly Web Design skill for Claude Code...\n');

for (const skill of toInstall) {
    const src = path.join(__dirname, 'skills', skill);
    const dest = path.join(skillsDir, skill);

    if (fs.existsSync(dest)) {
        console.log(`⚠️  ${skill} already exists at ${dest}`);
        if (!args.includes('--force')) {
            console.log(`   Skipping. Use --force to overwrite.\n`);
            continue;
        }
        console.log(`   --force flag detected, overwriting...\n`);
    }

    copyDir(src, dest);
    console.log(`✅ Installed: ${skill} (${SKILLS[skill]})`);
    console.log(`   → ${dest}\n`);
}

console.log('Done! Add this to your project\'s CLAUDE.md to activate:\n');
console.log('  ## AI Accessibility');
console.log('  Follow the `ai-friendly-web-design` skill for all frontend work.\n');
console.log('Original post: https://x.com/karminski3/status/2035775412874420419');
console.log('Compiled by:   https://github.com/ianho7\n');