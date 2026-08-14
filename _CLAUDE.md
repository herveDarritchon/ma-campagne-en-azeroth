---
type: note
date: 2026-08-08
tags: []
ai-first: true
---
# Claude Operating Manual — herve.darritchon@gmail.com's Vault (Au Nom de la Horde)

> Read this file before doing anything in this vault.
> This is the single source of truth for how Claude operates here.

---

## Section 0 — AI-First Vault Rule (read first, applies to every note)

This vault is designed for **future-Claude** to read and reason over, not for human review. The owner rarely reads notes directly — they call Claude to retrieve, synthesize, and connect dots across accumulated knowledge.

**Every note Claude writes to this vault must follow these rules:**

1. **Self-contained context** — Each note must explain itself. Future-Claude may pull this single note via search with no surrounding context. Don't rely on backlinks alone for meaning.
2. **"For future Claude" preamble** — Every note begins with a 2-3 sentence summary in plain English so Claude can decide relevance in 10 seconds before parsing the structured data.
3. **Rich, consistent frontmatter** — Filterable metadata (`type`, `date`, `topic`, `tags`, `related-people`, `related-projects`, `sources`, `confidence`). Different note types may have different schemas, but every note has machine-readable frontmatter.
4. **Recency markers per claim** — When stating external facts, attach the date: "Status confirmed (as of 2026-08-08)" so future-Claude knows what to verify before trusting.
5. **Sources preserved verbatim** — Every external claim has its source reference or URL inline so it can be re-verified or refreshed.
6. **Cross-links are mandatory** — Every person, project, idea, decision, or concept referenced uses `[[wikilinks]]` so the graph is traversable.
7. **Confidence levels** — Where applicable, mark claims as `stated | high | medium | speculation` so future-Claude knows what to trust vs verify.
8. **Obsidian Markdown Syntax** — You MUST strictly respect the Obsidian markdown formalism. Do NOT use standard markdown variants if they differ from Obsidian's syntax (e.g., use `_..._` for italics, not `*...*`).
9. **Design Rules (GDR)** — Before generating or structuring any new RPG document (Scenario, Lore, NPC, Location, Faction, etc.), you MUST read `Design_Records/00_Index_des_Regles_de_Design.md` to find and apply the relevant formatting and design rules.
10. **Mermaid Strict Syntax** — When creating Mermaid diagrams, NEVER use special characters (parentheses `()`, ampersands `&`, spaces, etc.) directly in subgraph or node IDs. ALWAYS use the strict syntax with an identifier and a bracketed label (e.g., `subgraph S1 [Label with (special) & characters]`).
11. **Nomenclature WoW en Français** — Vous devez systématiquement utiliser les noms officiels en français pour toutes les créatures, lieux, personnages, factions et objets de l'univers de World of Warcraft.

This rule applies to all `/obsidian-*` and `/research*` commands, all scheduled agents, and any direct vault writes.

---

## Section 0.5 — Verify Live State Before Acting

Before declaring a bug, drafting a fix, or writing architecture: read the actual files, notes, schema, or live data. Speculation from stale context burns time and produces drafts that contradict established lore or rules.

---

## Vault Identity

- **Owner / GM:** herve.darritchon@gmail.com
- **Project Name:** Au Nom de la Horde
- **Game System / Setting:** D&D 5e
- **Description:** Campagne de jeu de rôle et bible de lore assistée par IA
- **Created on:** 2026-08-08

---

## AI Objectives / Rôles de l'IA

Ton objectif principal en tant qu'assistant IA dans ce Vault est de :
1. **Organiser la roadmap du projet :** Suivre les tâches, mettre à jour les tableaux de bord et structurer les étapes de développement.
2. **Ordonner la création des fichiers :** S'assurer que les documents sont créés au bon endroit et dans le bon ordre (brouillon dans `Campagnes/`, puis validation vers `Monde/` ou `Production/`).
3. **Générer du contenu :** Rédiger des scénarios, des descriptions de PNJ, de factions et de lieux.
4. **Aider à l'invention :** Proposer des idées créatives, brainstormer sur des rebondissements ou des concepts de game design.
5. **Rechercher le lore de WoW Classic :** Sourcer et respecter le canon de l'univers de Warcraft, fournir du contexte historique et éviter les incohérences.
6. **Nomenclature en français :** Utiliser systématiquement les noms officiels en français pour les créatures, les lieux, les personnages, les sorts, etc. de l'univers de World of Warcraft.

---

## Folder Map

| Folder | Purpose |
|---|---|
| `Logs/` | Daily operation logs and AI dev sessions |
| `Campagnes/` | Espace de travail principal (brouillons, aventures actives). Une fois le contenu validé, il alimente `Production/` et `Monde/` |
| `Regles/` | Règles du jeu, classes, races, sorts, équipement |
| `Monde/` | Lore persistant, factions, PNJs, lieux. Ce répertoire sert à générer le contenu dans Foundry VTT en utilisant [Wizzlethorpe Vaults](https://github.com/wizzlethorpe/vaults) |
| `Compendiums/` | Contenu formaté pour compilation vers Foundry VTT (via `vfmc`) |
| `Production/` | Répertoire pour le contenu PDF ou suppléments à fournir une fois finalisé |
| `Sources/` | External resources, books extractions, rulebook references and facts |
| `Design_Records/` | Game Design Records (GDR) - immutable editorial & game design rules |
| `Templates/` | Pre-built markdown templates for gameplay and entity creation |
| `Bases/` | Obsidian Dataview / Bases views (.base) |
| `Assets/` | Visuals, handouts, maps and media assets |

---

## Key Files

- **Dashboard:** `[[Index_du_Vault]]` — Main navigation and project overview
- **Task Tracking:** `[[Suivi_éditorial_par_projet]]` — Editorial board and task backlog
- **Index:** `[[index]]` — Catalog of all pages generated by Claude
- **Design Records:** `[[Design_Records/00_Index_des_Regles_de_Design|Index des Règles de Design (GDR)]]`

---

## Auto-Save Rules

Claude should auto-save the following **without asking**:
- Decisions made in conversation → relevant campaign/production note + daily log
- New NPCs mentioned → `Monde/PNJs/` (create stub if needed)
- Tasks assigned or committed to → `Suivi_éditorial_par_projet`
- Content created / Dev work done → `Logs/` + project note
- Completed tasks → mark as done in `Suivi_éditorial_par_projet`

---

## Naming Conventions & Frontmatter Requirements

- **File Naming:** Use underscores instead of spaces (e.g., `Nom_Du_Fichier.md`).
- **Localisations / Points of Interest:** Prefix files with relevant emojis (e.g., `🏙️_Capitale.md`, `🏰_Donjon.md`).
- **Content Sourcing:** Mandatory tags for lore origins: `[Canon]`, `[Officiel]`, `[Inférence]`, ou `[Spéculation]`.

**Every note must have at minimum:**
```yaml
---
type: [note-type]
date: YYYY-MM-DD
tags:
  - [tag]
ai-first: true
---
```

**Pour les documents dans `Campagnes/` (Cycle de vie) :**
Vous devez **obligatoirement** inclure un champ `status` dans le frontmatter pour définir si le document doit être généré dans `Production/` et `Monde/` lors d'une mise à jour des livrables.
Valeurs autorisées :
- `status: brouillon` (En cours de rédaction, ne pas générer)
- `status: en_relecture` (En attente de relecture)
- `status: validé` (Finalisé, doit être généré vers Monde et Production)

**Foundry VTT Integration (Wizzlethorpe Vaults):**
Pour les notes devant être synchronisées comme documents natifs dans Foundry, ajoutez le bloc `foundry` :
```yaml
foundry:
  base: Actor:npc # ou un UUID D&D5e comme Compendium.dnd5e.monsters.Actor.bandit
  embed: true # false si la page ne sert que de statblock
  # sync: false # pour empêcher l'import (brouillons)
```

**Inline Metadata for RPG Entities (PNJs, Factions, POIs):**
Use bold markdown lists at the top:
- `**Nom :**`
- `**Statut :** officiel / univers étendu / création originale`
- `**Type / Rôle :**`
- `**Échelle / Importance :**`

---

## Propagation Rules & Workflow

**Flux de travail (Workflow de contenu) :**
L'organisation de la codebase suit une contrainte de validation stricte basée sur le champ `status` du frontmatter :
1. **Travail en cours (`status: brouillon` ou `status: en_relecture`) :** Tout contenu en cours de création, de rédaction ou de test doit rester dans le répertoire `Campagnes/`.
2. **Validation (`status: validé`) :** Le contenu de travail de `Campagnes/` est validé et son statut est mis à jour.
3. **Publication :** Le contenu `validé` doit alors être généré vers ses répertoires de destination finale lors d'une demande de mise à jour des livrables :
   - Vers `Monde/` pour le contenu destiné à être ingéré dans Foundry VTT.
   - Vers `Production/` pour la génération des documents PDF finaux.

| Event | Also update |
|---|---|
| New POI / NPC | Campaign Index + Monde/PNJs/ ou Monde/Localisations/ folder + daily log |
| Task done | `Suivi_éditorial_par_projet` + daily log |
| Concept designed | Relevant Production folder + daily log |

---

## Do Not Touch

- `Templates/` — Never modify templates during normal vault operations unless explicitly requested.
- `Design_Records/` — Only create new GDRs with `_Template_GDR.md`; never modify accepted GDRs without ADR consensus.