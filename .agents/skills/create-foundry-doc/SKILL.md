---
name: create-foundry-doc
description: Crée un document Markdown dans le répertoire Monde/ formaté pour Wizzlethorpe Vaults (Foundry VTT).
---

# `create-foundry-doc` Skill

Ce skill a pour objectif de créer un document Markdown dans le répertoire `Monde/` de la campagne. Ce document est formaté spécifiquement pour être synchronisé vers Foundry VTT via le module **Wizzlethorpe Vaults**.

Dans un premier temps, ce skill se concentre uniquement sur la création de **Journaux** (JournalEntry / JournalEntryPage). La création automatique de documents Foundry natifs (Actor, Scene, Item...) sera ajoutée dans une version ultérieure.

## Workflow du Skill

Lorsque l'utilisateur invoque ce skill (ex: `Crée un document Foundry pour le chef des bandits`), suivez ces étapes de manière conversationnelle si certaines informations manquent :

### Étape 1 : Identifier le nom du document
Demandez ou confirmez le nom du document (ex: "Le Chef des Bandits", "Auberge du Poney Fringant"). Ce nom sera utilisé pour le titre du document et le nom du fichier (en kebab-case ou format adapté).

### Étape 2 : Déduire le sous-dossier selon le type d'entité
Bien que le document ne soit pour l'instant qu'un Journal, demandez à l'utilisateur quel type d'entité ce document représente afin de déduire automatiquement le sous-dossier cible dans `Monde/` :
- **Actor (PNJ, Monstre, Personnage)** ➡️ `Monde/PNJ/`
- **Scene (Lieu, Région, Carte)** ➡️ `Monde/Lieux/`
- **Item (Objet, Équipement)** ➡️ `Monde/Objets/`
- **JournalEntry (Lore, Histoire, Faction)** ➡️ `Monde/Factions/` ou `Monde/Lore/`
*Si le type ne correspond à rien d'évident, demandez dans quel sous-dossier le placer.*

### Étape 3 : Demander le rôle et les accès du document
Dans Wizzlethorpe Vaults, l'accès se gère via des rôles (`player`, `dm`). Demandez à l'utilisateur :
1. Le niveau d'accès global de la page (ex: est-ce un document uniquement pour le `dm` ou accessible au `player` ?). Cela définira la propriété `role:` dans le frontmatter.
2. Si la page est accessible aux joueurs (`role: player`), demandez s'il y a des notes ou du contenu réservé exclusivement au MJ à l'intérieur. Ces blocs seront créés sous forme de callouts Obsidian `> [!dm]`.

### Étape 4 : Générer le fichier Markdown
Créez le fichier Markdown dans le bon répertoire avec l'outil d'écriture de fichier.

**Règles de formatage obligatoires :**
1. **Frontmatter exclusif à Foundry :** Le bloc YAML ne doit contenir **que** le bloc `foundry:` et, si spécifié, la propriété globale `role:` (ex: `role: dm` ou `role: player`). Ne pas inclure les attributs Obsidian habituels (`type`, `date`, `tags`, `ai-first: true`).
2. Ajouter l'option `journal: true` ou laisser le bloc `foundry:` vide selon les besoins pour préparer l'ajout futur des types d'Actor/Scene.
3. Intégrer un titre de niveau 1 (`#`).
4. Si demandé, ajouter les sections restreintes en utilisant la syntaxe des callouts (ex: `> [!dm] Notes secrètes...`).

**Exemple de modèle généré :**
```yaml
---
role: player
foundry:
  # Prêt pour une future mise à jour (ex: base: Actor:npc)
---
# [Nom du Document]

[Contenu public du journal, descriptions, etc.]

> [!dm] Notes du MJ
> [Informations réservées au Maître du Jeu : caractéristiques, motivations cachées, etc.]
```

### Étape 5 : Confirmation
Confirmez à l'utilisateur que le fichier a bien été créé, indiquez son emplacement exact, et demandez-lui s'il souhaite que vous commenciez à rédiger le contenu du journal.
