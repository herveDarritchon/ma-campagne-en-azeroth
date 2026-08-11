---
name: location-architect
description: Développement et écriture d'un Lieu immersif et actionnable en respectant strictement les Game Design Records (GDR).
---

# Location Architect

Utilise ce skill lorsque l'utilisateur te demande de créer, développer ou refactoriser un Lieu (ou Point d'Intérêt) pour la campagne.

## 🎯 Objectif
Créer un espace de jeu immersif, mémorable et immédiatement exploitable par le Maître du Jeu à la table, en appliquant de manière stricte les **Game Design Records (GDR)** de la campagne.

## 📜 Les GDR à appliquer impérativement

### 1. Construction Systémique (GDR-024)
Ne commence **jamais** par lister les pièces d'un lieu.
Construis le lieu à partir de son **contexte** :
- **Fonction :** À quoi servait ce lieu à l'origine ? À quoi sert-il maintenant ?
- **Flux :** Qui y entre, qui en sort, qu'est-ce qui y circule (marchandises, informations, énergie) ?
- **Histoire :** Quels événements l'ont façonné ?

### 2. Lisibilité Historique / "La Ruine Habitée" (GDR-023)
L'exploration doit raconter une histoire sans que le MJ n'ait à faire de monologue.
Répartis des indices environnementaux tangibles à trois échelles :
- **Le Site (Macro) :** L'approche du lieu, sa silhouette, le paysage environnant.
- **Le Bâtiment (Méso) :** L'architecture, l'état des façades, l'organisation spatiale générale.
- **La Salle (Micro) :** Les objets abandonnés, les traces d'usure, les détails spécifiques (une tasse renversée, un écran brisé).

### 3. Structure Atmosphère / Contrôle / Danger (GDR-008)
Le lieu doit être défini par ces trois axes :
- **Atmosphère :** Impression immédiate (odeur, son, lumière) en 1 ou 2 phrases percutantes.
- **Contrôle :** Quelle faction, entité ou force naturelle tient ce lieu actuellement ?
- **Dangers & Opportunités :** Qu'est-ce qui menace les PJ ? Que peuvent-ils y gagner ?

### 4. Présentation Actionnable (GDR-001)
Évite le style littéraire ou le roman. Le texte doit être fait de *bullet points*, de phrases courtes et de verbes d'action. Chaque détail doit être une munition pour le MJ (un obstacle, une ressource, un abri).

### 5. Utilisation du Template et des En-têtes (GDR-012 & GDR-003)
Tu dois **obligatoirement** baser ta production sur le template officiel.
Avant de commencer à rédiger, si tu ne l'as pas en mémoire, utilise tes outils pour lire :
- `Templates/Template_Lieu.md` (ou `Templates/Template_POI.md`)
Et respecte scrupuleusement l'en-tête YAML défini par le **GDR-003** (Frontmatter : Type, Faction, Localisation, etc.).

---

## ⚙️ Méthodologie (Step-by-Step)

1. **Analyse de la demande :** Comprends l'intention de l'utilisateur (quel est le rôle narratif de ce lieu ?).
2. **Récupération du Template :** Lis `Templates/Template_Lieu.md` pour récupérer la structure vide.
3. **Drafting Systémique (GDR-024 & GDR-023) :** Pense d'abord Fonction/Flux/Histoire, puis définis les indices à distiller.
4. **Rédaction Actionnable :** Remplis les sections du template de manière courte, percutante (Atmosphère, Contrôle, Dangers).
5. **Génération / Fichier :** Présente le résultat à l'utilisateur sous forme de code Markdown propre, ou crée directement le fichier `.md` dans le Vault si l'utilisateur te le demande, en respectant la nomenclature (GDR-002, avec les tirets bas `_`).
