---
name: source-discipline
description: Discipline de source pour ne rien inventer et distinguer Source, Inférence, Proposition et Non vérifié dans les contenus de campagne.
---

# Source Discipline

Utilise ce skill dès qu'une demande implique des documents de campagne, du lore, des décisions déjà prises ou une intégration dans la bible.

## Objectif

Empêcher l'agent de transformer une hypothèse en fait établi.

## Règles

- Ne présente jamais une invention comme une information établie.
- Distingue toujours :
  - Source : explicitement présent dans les documents fournis.
  - Inférence : déduction prudente à partir d'éléments présents.
  - Proposition : ajout créatif nouveau.
  - Non vérifié : information impossible à confirmer avec les éléments disponibles.
- Si une information manque, écris : Non documenté.
- Si une information de lore ne peut pas être vérifiée, écris : Non vérifié.
- Ne comble pas automatiquement les trous.
- Ne fusionne pas deux éléments si leur lien n'est pas explicitement établi.
- Signale les contradictions au lieu de les résoudre silencieusement.

## Format recommandé

Quand c'est utile, ajoute un bloc :

```markdown
## Statut des informations

- Source :
- Inférence :
- Proposition :
- Non vérifié :
- Non documenté :
```

## À éviter

- "On peut supposer que..." sans étiquette.
- "Il est évident que..." si ce n'est pas écrit.
- Transformer une idée intéressante en canon interne.

