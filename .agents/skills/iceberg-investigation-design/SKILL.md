---
name: iceberg-investigation-design
description: Design an investigation scenario using the Iceberg method (GDR-022), fetching context from Sources, Production, and Campagnes.
---
# Iceberg Investigation Design

This skill helps you design a roleplaying game investigation strictly following the Iceberg Method, as defined in `GDR-022_Enquetes_en_Iceberg`.

## Trigger
Use this skill when the user asks to create, write, or design an investigation (enquête, mystère, affaire) for a scenario or campaign.

## Instructions

When invoked, follow this exact workflow:

### 1. Contextual Research (Crucial Step)
Before generating any content, you MUST anchor the investigation in the existing campaign lore.
Use your search tools (like `grep_search` or `list_dir` + `view_file`) to look for the elements mentioned in the user's brief within these specific directories:
- `Sources/`
- `Production/`
- `Campagnes/`
Find existing NPCs, locations, factions, or ongoing plots that can be tied into the investigation to make it feel connected to the world.

### 2. Apply GDR-022: The Iceberg Method
You must strictly respect the rules of `GDR-022_Enquetes_en_Iceberg`.
- **PROHIBITED:** Do not write a linear list of "clues to find" (indices à trouver) per scene. Do not use the "Rule of 3 Clues".
- **REQUIRED STRUCTURE:**
  1. **La Vérité (Backstory):** Write a clear summary of what actually happened. Who committed the crime/act, why, and how.
  2. **L'Iceberg des Vérités (Levels of Depth):** Break down the truth into layers.
     - *Niveau 0 (Surface):* The inciting incident, public rumors, what everyone knows at the start.
     - *Niveau -1:* The first layer of secrets (e.g., the immediate accomplices, the weapon used).
     - *Niveau -2:* Deeper secrets (e.g., the real motive, the middle-man).
     - *Niveau -3 (or deeper):* The core truth (e.g., the mastermind, the grand conspiracy).
  3. **Lieux et Factions (Mapping):** For each level, list the locations, NPCs, or Factions where players can uncover this level of truth.
  4. **Génération Dynamique (GM Note):** Include a brief section reminding the GM to improvise the specific clues (a datapad, a confession, a footprint) dynamically based on *how* the players choose to investigate those locations/factions.

### 3. Formatting and Output
Write the final document in strict Obsidian Markdown formalism:
- Use `[[wikilinks]]` for any mentioned NPC, Location, or Faction. Do not use standard markdown links `[text](url)`.
- Include the AI-first frontmatter at the top of the file:
```yaml
---
type: scenario
date: YYYY-MM-DD
tags: [enquete, iceberg]
ai-first: true
---
```
- Present the final document to the user, either by writing it directly to a file (if requested) or outputting it in the chat for review.
