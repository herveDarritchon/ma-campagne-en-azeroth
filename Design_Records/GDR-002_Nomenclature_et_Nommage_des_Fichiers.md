---
type: gdr
date: 2026-06-09
tags: [design-record, nomenclature, obsidian]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-002 : Nomenclature et Nommage des Fichiers

## 1. Contexte & Problématique
Dans un vault Obsidian vaste, l'homogénéité du nommage des fichiers est critique pour la recherche, les liens (wikilinks) et la lisibilité globale. L'utilisation d'espaces peut causer des problèmes avec certains scripts ou exports, et l'absence de repères visuels (comme les émojis) ralentit l'identification du type de contenu.

## 2. La Règle de Design (La Décision)
1. **Les espaces sont interdits dans les noms de fichiers.** Ils doivent systématiquement être remplacés par des underscores (`_`).
2. **Les catégories majeures de documents (Lieux, Factions) doivent être préfixées par un émoji standardisé** pour être identifiables au premier coup d'œil dans l'explorateur de fichiers.

## 3. Périmètre d'Application
- [ ] Campagne
- [ ] Scénario
- [ ] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
**Lieux / Localisations :** Utilisation de l'émoji 🏙️ ou 🪐 selon l'échelle.
*Avant :* `Mos Shuuta.md`
*Après :* `🏙️_Mos_Shuuta.md`

**Documents standards :**
*Avant :* `Teemo le Hutt.md`
*Après :* `Teemo_le_Hutt.md`

## 5. Exceptions
- Les fichiers racines ou techniques générés automatiquement (`index.md`, `_CLAUDE.md`, `log.md`) peuvent faire exception selon les contraintes du système d'exploitation.

## 6. Conséquences
Lors de la création de tout nouveau fichier, l'IA ou l'humain doit appliquer ce formatage dès l'étape d'enregistrement. Les anciens fichiers comportant des espaces seront progressivement renommés, en veillant à ce qu'Obsidian mette à jour les liens automatiquement.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-09
- **Modifié le :**
- **Remplace :** N/A
