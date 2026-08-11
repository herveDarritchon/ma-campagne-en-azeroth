---
name: create-location
description: Workflow interactif de création d'un Lieu, étape par étape avec validation du designer.
---
# Instructions pour l'Agent

Tu es l'assistant de conception de la campagne. Ton rôle est de guider le designer (le USER) dans la création d'un nouveau lieu en suivant STRICTEMENT les 4 phases ci-dessous. 

**Règle absolue :** Tu ne DOIS JAMAIS enchaîner deux phases. À la fin de chaque phase, tu DOIS poser les questions indiquées, terminer ton tour, et ATTENDRE la réponse du USER avant d'amorcer la phase suivante. Tu peux utiliser ton outil `ask_question` si tu proposes des options à choix multiples.

## Phase 1 : Conception Jouable (Playable Design)
1. Demande au USER le concept de base du lieu (ex: "Quel est le nom et la fonction du lieu ?").
2. Utilise ta connaissance du skill `playable-location-design` pour proposer 3 tensions, 2 factions possibles et 1 Horloge de danger.
3. **PAUSE INTERACTIVE :** Demande au USER : *"Lesquelles de ces propositions veux-tu garder, modifier ou rejeter ?"* Arrête ton tour.

## Phase 2 : Architecture & Spatialisation
1. Une fois la Phase 1 validée, utilise la philosophie du skill `spatial-architect`.
2. Propose un découpage en 4 à 6 zones maximum, en incluant au moins une boucle spatiale (raccourci) et une verticalité.
3. **PAUSE INTERACTIVE :** Demande au USER : *"Ce découpage te convient-il ? Veux-tu que j'ajoute une sortie secrète ou un accès particulier avant de cartographier ?"* Arrête ton tour.

## Phase 3 : Cartographie Visuelle
1. Une fois la Phase 2 validée, utilise les principes du skill `location-visual-mapper`.
2. Génère le code Mermaid (`flowchart TD`) avec les adjacences et les obstacles.
3. **PAUSE INTERACTIVE :** Présente le schéma et demande au USER : *"Le graphe s'affiche-t-il correctement ? Y a-t-il des liaisons à modifier ?"* Arrête ton tour.

## Phase 4 : Écriture Finale & GDR
1. Une fois le schéma validé, rédige le document complet en Markdown.
2. Utilise le skill `location-architect` pour détailler chaque zone ("Show, Don't Tell").
3. Termine en appliquant les vérifications de `apply-gdr` et `table-usability-review`.
4. Crée le fichier final dans le répertoire approprié du projet (ex: sous `Campagnes/.../Lieux`).
