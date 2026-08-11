---
name: apply-gdr
description: Audite un fichier, identifie les Game Design Rules (GDR) pertinentes, demande validation à l'utilisateur, puis les applique pour mettre le fichier en conformité.
---

# Apply GDR (Game Design Rule)

Utilise ce skill pour auditer un document, déterminer quelles Règles de Design Editoriales (GDR) du vault lui sont applicables, faire valider cette sélection par l'utilisateur, puis réécrire le contenu pour qu'il respecte strictement ces règles.

## Paramètres attendus
1. **Fichier cible** : Le chemin (ou nom) du fichier à auditer et modifier.
2. **GDR à appliquer (Optionnel)** : Si l'utilisateur précise une ou plusieurs règles, intègre-les d'office à ta sélection. Sinon, lance la détection automatique.

## Processus d'exécution

1. **Recherche et Sélection des GDR pertinentes**
   - Parcours l'index des règles de design (`Design_Records/00_Index_des_Regles_de_Design.md`) ou le dossier `Design_Records/` pour recenser les règles existantes.
   - Analyse le contenu et la nature du **Fichier cible** (Lieu, PNJ, Scénario, Introduction, etc.).
   - Croise ces informations pour présélectionner les GDR qui auraient une véritable utilité sur ce document.

2. **Validation Utilisateur (Obligatoire)**
   - Utilise l'outil `ask_question` (avec `is_multi_select: true` et les GDR trouvées en options) pour proposer ton choix à l'utilisateur. 
   - S'il n'est pas possible d'utiliser `ask_question`, présente la liste dans le chat en expliquant brièvement pourquoi chaque GDR s'applique, et demande-lui de confirmer celles à retenir.
   - **Important :** Ne modifie pas le document tant que l'utilisateur n'a pas validé sa sélection.

3. **Assimilation des Règles**
   - Lis attentivement les fichiers correspondant aux GDR validées par l'utilisateur.
   - Assimile l'intention, les obligations et le format attendu (exemples Avant/Après).

4. **Application & Édition**
   - Réécris les sections du fichier cible qui enfreignent les règles validées.
   - Conserve impérativement le lore, l'histoire et l'intention d'origine ; seule la structure, le ton ou la mise en forme doivent être modifiés pour se conformer aux GDR.
   - Sauvegarde les modifications dans le fichier via tes outils d'édition.

5. **Compte-rendu concis**
   - Termine en indiquant brièvement à l'utilisateur ce qui a été modifié de façon non verbeuse. Ne réexplique pas les règles.
