---
type: note
date: 2026-08-08
tags: []
ai-first: true
---
# Obsidian Second Brain - Gemini CLI Operating Manual — Au Nom de la Horde

This vault runs the **obsidian-second-brain** and RPG creation skills. The skill ships a set of
*commands*: each one is a multi-step instruction file that you (the Gemini
agent) should follow when the user's request matches its trigger phrase.

## How to operate

1. Read `_CLAUDE.md` in the vault root, if it exists, to learn the user's
   vault conventions.
2. When the user's request matches a trigger in the tables below, read the
   matching file under `.gemini/commands/<name>.md` and follow its
   instructions step by step.
3. Treat the AI-first vault rule (`_CLAUDE.md`) as
   non-negotiable for every note you write: `## For future Claude` preamble,
   rich frontmatter (`type`, `date`, `tags`, `ai-first: true`), `[[wikilinks]]`
   for every person/project/concept, recency markers per external claim,
   sources verbatim, confidence levels where applicable.
4. **Design Rules (GDR):** Before generating or structuring any new RPG document (Scenario, Lore, NPC, Location, Faction, etc.), you MUST read `Design_Records/00_Index_des_Regles_de_Design.md` to find and apply the relevant formatting and design rules.
5. **Obsidian Markdown Syntax:** You MUST strictly respect the Obsidian markdown formalism. Do NOT use standard markdown variants if they differ from Obsidian's syntax (e.g., use `_..._` for italics, not `*...*`).
6. **Strict Canon & Lore Compliance (Do NOT Invent):** Before proposing ideas or creating new content, you MUST search and read the existing campaign bible, storyboards, and character files in the vault. NEVER invent new lore, timelines, or events without sourcing. Always build upon the established history and distinguish `[Canon]`, `[Officiel]`, `[Inférence]` and `[Spéculation]`.

## Command routing tables (grouped by category)

### Vault - daily writing, capture, find

| Command | What it does | Read this file |
|---|---|---|
| `/obsidian-board` | Show or update a kanban board - flags overdue items, updates from conversation | `.gemini/commands/obsidian-board.md` |
| `/obsidian-capture` | Quick idea capture - zero friction, saves to Ideas/ and mentions in daily note | `.gemini/commands/obsidian-capture.md` |
| `/obsidian-daily` | Create or update today's daily note - pulls calendar events, overdue tasks, and conversation context | `.gemini/commands/obsidian-daily.md` |
| `/obsidian-find` | Smart vault search - returns results with context, not just filenames | `.gemini/commands/obsidian-find.md` |
| `/obsidian-log` | Log this work or dev session to the vault - infers project from context | `.gemini/commands/obsidian-log.md` |
| `/obsidian-person` | Create or update a person note from conversation context | `.gemini/commands/obsidian-person.md` |
| `/obsidian-project` | Create or update a project note - adds to board and daily note automatically | `.gemini/commands/obsidian-project.md` |
| `/obsidian-projects` | Live project status from git + local docs - infers all context from vault notes, no config required | `.gemini/commands/obsidian-projects.md` |
| `/obsidian-recap` | Summarize a time period from the vault - today, week, or month | `.gemini/commands/obsidian-recap.md` |
| `/obsidian-recurring` | Track a recurring obligation (payment, filing, ops) with a cadence and a computed next-due date | `.gemini/commands/obsidian-recurring.md` |
| `/obsidian-save` | Save everything worth keeping from this conversation to the vault | `.gemini/commands/obsidian-save.md` |
| `/obsidian-task` | Add a task to the right kanban board with inferred priority and due date | `.gemini/commands/obsidian-task.md` |
| `/obsidian-world` | Load your identity, values, priorities, and current state in one shot - with progressive context levels to avoid burning tokens | `.gemini/commands/obsidian-world.md` |

### Thinking - synthesis, decisions, learning, reviews

| Command | What it does | Read this file |
|---|---|---|
| `/idea-discovery` | Surface 3-5 next-direction candidates by reading ungraduated ideas, open project questions, and orphan research notes - what is worth working on next | `.gemini/commands/idea-discovery.md` |
| `/obsidian-adr` | Generate a decision record when the vault structure changes - the vault knows why it knows what it does | `.gemini/commands/obsidian-adr.md` |
| `/obsidian-challenge` | Red-team your current idea against your own vault history - finds contradictions, past failures, and flawed assumptions | `.gemini/commands/obsidian-challenge.md` |
| `/obsidian-connect` | Bridge two unrelated domains using your vault's link graph - forces creative friction to spark new ideas | `.gemini/commands/obsidian-connect.md` |
| `/obsidian-decide` | Extract decisions from this conversation and log them to the right project notes | `.gemini/commands/obsidian-decide.md` |
| `/obsidian-emerge` | Surface unnamed patterns from your recent notes - recurring themes, hidden connections, and conclusions you haven't explicitly stated | `.gemini/commands/obsidian-emerge.md` |
| `/obsidian-graduate` | Promote an idea fragment into a full project spec with tasks, board entries, and structure | `.gemini/commands/obsidian-graduate.md` |
| `/obsidian-learn` | Review vault learnings, prune stale ones, surface active patterns - the vault's lessons compound or expire | `.gemini/commands/obsidian-learn.md` |
| `/obsidian-panel` | Convene a panel of distinct perspectives on a decision - one independent verdict per lens, then a synthesis. A multi-persona complement to /obsidian-challenge | `.gemini/commands/obsidian-panel.md` |
| `/obsidian-reconcile` | Find and resolve contradictions in the vault - the vault maintains its own truth | `.gemini/commands/obsidian-reconcile.md` |
| `/obsidian-review` | Generate a structured weekly or monthly review note from vault history | `.gemini/commands/obsidian-review.md` |
| `/obsidian-synthesize` | Automatic synthesis - scans the vault for unnamed patterns and writes synthesis pages without being asked | `.gemini/commands/obsidian-synthesize.md` |
| `/vault-deep-synthesis` | Deep cross-reference of everything the vault knows about one topic - agreements, contradictions, stale claims, and coverage gaps. Pure vault, no network | `.gemini/commands/vault-deep-synthesis.md` |

### Research - bring external sources into the vault

| Command | What it does | Read this file |
|---|---|---|
| `/notebooklm` | Vault-first source-grounded research via Gemini File Search. One command, no browser. The grounded parallel to /research-deep (which is open-web via Perplexity). | `.gemini/commands/notebooklm.md` |
| `/obsidian-ingest` | Ingest a source into the vault - the vault rewrites itself around new knowledge. Every ingest updates entities, rewrites stale claims, synthesizes new concepts, and resolves contradictions. | `.gemini/commands/obsidian-ingest.md` |
| `/podcast` | Extract metadata, transcript, and summary from a podcast episode, saved as an AI-first note in the vault | `.gemini/commands/podcast.md` |
| `/research` | Web research with citations - Perplexity Sonar when an API key is set, free key-less sources (Wikipedia, HackerNews, arXiv, Reddit, and more) otherwise. Deep dossier with summary, facts, timeline, players, contrarian views, open questions | `.gemini/commands/research.md` |
| `/research-deep` | Vault-first deep research - scans the vault, fills gaps (Perplexity + Grok when keyed, free key-less sources otherwise), synthesizes a delta, then propagates updates across people/projects/ideas via /obsidian-save | `.gemini/commands/research-deep.md` |
| `/x-pulse` | Scan X for what's trending in a topic - themes, voices, hooks, and post ideas powered by Grok + Live Search | `.gemini/commands/x-pulse.md` |
| `/x-read` | Deep-read an X (Twitter) post via Grok + Live Search - verbatim post, thread, TL;DR, claims, reply sentiment, voices to watch | `.gemini/commands/x-read.md` |
| `/youtube` | Extract transcript, metadata, and top comments from a YouTube video - summarized via Grok and saved to vault | `.gemini/commands/youtube.md` |

### Meta - vault setup, health, structure

| Command | What it does | Read this file |
|---|---|---|
| `/create-command` | Create a new obsidian-second-brain command via interview - zero markdown editing required | `.gemini/commands/create-command.md` |
| `/obsidian-architect` | Scan a codebase and write a maintained set of architecture notes into the vault - overview, per-module notes, key decisions. Re-run to refresh without clobbering your edits | `.gemini/commands/obsidian-architect.md` |
| `/obsidian-export` | Export a clean structured snapshot of the vault that any agent or tool can consume - flat JSON or markdown index | `.gemini/commands/obsidian-export.md` |
| `/obsidian-health` | Run a vault health check - grouped by severity, detects contradictions, concept gaps, stale claims, and structural issues | `.gemini/commands/obsidian-health.md` |
| `/obsidian-init` | Scan your vault and generate a _CLAUDE.md operating manual, index.md catalog, and log.md pointer | `.gemini/commands/obsidian-init.md` |
| `/obsidian-visualize` | Generate a visual canvas map of your vault - see the shape of your second brain and how knowledge connects | `.gemini/commands/obsidian-visualize.md` |