# AI-Friendly Web Design — Claude Code Skill


A Claude Code Skill that helps you build web interfaces friendly to both AI agents and human users — covering semantic HTML, ARIA attributes, stable locators, form best practices, and more.

> Original post: [@karminski-牙医](https://weibo.com/2169039837/QxmP8bEIS) · Compiled by: [@ianho7](https://github.com/ianho7)

---

## What It Does

When active in Claude Code, this skill automatically applies whenever you:

- Build or review a UI component, form, or frontend feature
- Ask how to make your UI "agent-friendly" or "AI-accessible"
- Review existing code for accessibility or automation compatibility
- Mention AI agents, Playwright, automation, a11y, aria, or semantic HTML

Claude will follow the 14-principle checklist and flag issues during code review with severity levels (🔴 High / 🟡 Medium / 🟢 Low).

---

## Installation

### Option A: npx (recommended)

```bash
# Install globally — available to all your Claude Code projects
npx ai-friendly-web-design-skill

# Install locally — only for the current project
npx ai-friendly-web-design-skill --local

# Force overwrite an existing installation
npx ai-friendly-web-design-skill --force
```

| Flag | Install path |
|------|-------------|
| _(none)_ | `~/.claude/skills/` (global, all projects) |
| `--local` | `.claude/skills/` in current project |
| `--force` | Overwrite if already installed |

### Option B: Clone directly into your skills directory

```bash
git clone https://github.com/ianho7/ai-friendly-web-design-skill \
  ~/.claude/skills/ai-friendly-web-design
```

### Option C: Manual

1. Download or clone this repo
2. Copy the `skills/ai-friendly-web-design/` folder into your Claude Code skills directory:
   - macOS/Linux: `~/.claude/skills/`
   - Windows: `%USERPROFILE%\.claude\skills\`

### Verify the structure

```
~/.claude/skills/
└── ai-friendly-web-design/
    ├── SKILL.md
    └── references/
        └── guidelines.md
```

---

## Usage

Once installed, Claude Code picks it up automatically. You can also set up slash commands in your project for explicit review and fix workflows.

### Add to your project's `CLAUDE.md`

```markdown
## AI Accessibility
All frontend development and code reviews must follow the `ai-friendly-web-design` skill.
New interactive components should include `data-testid` and appropriate `aria-*` attributes by default.
```

### Optional: Slash commands

Create `.claude/commands/review-ai-accessibility.md` in your project:

```markdown
Use the ai-friendly-web-design skill to review: $ARGUMENTS

For each issue, output:
- File path + line number
- Which principle is violated
- Before/after code snippet

Sort by severity: 🔴 High (breaks agent operation) / 🟡 Medium / 🟢 Low
End with a summary table.
```

Then run in Claude Code:

```
/review-ai-accessibility src/components/
/review-ai-accessibility src/components/CheckoutForm.tsx
```

---

## What's Inside

| File | Purpose |
|------|---------|
| `SKILL.md` | Trigger description + condensed checklist + review checklist |
| `references/guidelines.md` | Full rationale + code examples for all 14 principles |

The two files are designed to work together — `SKILL.md` is always loaded when the skill triggers; `guidelines.md` is loaded on demand when Claude needs the full context.

---

## The 14 Principles (Summary)

| # | Principle | Impact |
|---|-----------|--------|
| 1 | Use semantic tags + ARIA attributes | Agent navigation accuracy |
| 2 | Hide decorative elements (`aria-hidden`) | Reduce token waste |
| 3 | Stable `data-testid` / `data-ai-action` locators | Automation robustness |
| 4 | Native form controls over div simulations | Standard API compatibility |
| 5 | No actions hidden behind hover | Discoverability |
| 6 | Pagination over infinite scroll | Predictable navigation |
| 7 | Explicit loading states (`disabled` + text) | Prevent race conditions |
| 8 | Avoid iframe / Shadow DOM | Extraction penetration |
| 9 | Sync state to URL | Deep linking + reproducibility |
| 10 | Plain text error messages | Agent self-correction |
| 11 | Listen to `input`/`change` events | Programmatic input support |
| 12 | Complete critical flows in-page | Context continuity |
| 13 | Dual UI + API entry points | Native agent integration |
| 14 | Rate limiting over ReCAPTCHA | Agent accessibility |

---

## License

CC BY 4.0 — feel free to use, adapt, and share with attribution.