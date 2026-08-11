---
type: gdr
date: 2026-06-09
tags: [design-record, entites, frontmatter]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-003 : En-têtes Standard d'Entités (Factions, Lieux, Groupes)

## 1. Contexte & Problématique
Lorsque le MJ ou l'IA ouvre une note décrivant une entité (un lieu, une faction, une organisation), il doit immédiatement en saisir la nature, le statut "canonique" et l'importance sans avoir à lire trois paragraphes de texte.

## 2. La Règle de Design (La Décision)
Toute note décrivant une "Entité" majeure du jeu de rôle (Factions, Points d'Intérêt, Organisations, Lieux) doit débuter par un bloc de métadonnées visuelles sous forme de liste à puces en gras, placé juste après le titre `<h1>`.

## 3. Périmètre d'Application
- [ ] Campagne
- [ ] Scénario
- [ ] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
**Structure obligatoire en haut de la note :**

```markdown
# [Titre de l'Entité]

- **Nom :** [Nom complet]
- **Statut :** [Canon / Legends / Création originale (Homebrew)]
- **Type / Rôle :** [Ex: Syndicat Criminel, Ville Spatiale, Guilde Marchande]
- **Échelle / Importance :** [Ex: Locale, Planétaire, Galactique]
```

*(Suivi du corps du texte, descriptions, etc.)*

## 5. Exceptions
Les notes de concepts abstraits (règles de système, journaux de bord de joueurs, mémos de conception) n'ont pas besoin de cet en-tête. Cette règle s'applique aux "objets du monde" de la fiction.

## 6. Conséquences
Standardisation immédiate de l'encyclopédie du monde. Permet à un agent IA d'extraire rapidement des informations structurées via du parsing markdown basique.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-09
- **Modifié le :**
- **Remplace :** N/A
