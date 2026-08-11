---
name: poi-star-wars
description: Génère un point d’intérêt Star Wars JDR à partir d’un brief utilisateur, en choisissant automatiquement le template POI complet ou POI secondaire. À utiliser uniquement pour créer, structurer ou compléter un POI de campagne Star Wars Edge of the Empire / Age of Rebellion / Force and Destiny.
argument-hint: "[poi complet|poi secondaire] [brief du POI]"
---

# POI Star Wars

## Objectif

Créer un point d’intérêt jouable pour une campagne Star Wars JDR, sans sortir du périmètre demandé.

Le skill accepte deux modes :

- `poi complet` : utiliser `templates/poi-complet.md`
- `poi secondaire` : utiliser `templates/poi-secondaire.md`

Si le mode n’est pas fourni, demander lequel utiliser avant de générer.

## Règle de décision

Utiliser `poi complet` si le POI doit être un lieu important, un nœud de campagne, un front actif, une base, une planète, un sanctuaire, une zone dangereuse majeure ou un mini-scénario.

Utiliser `poi secondaire` si le POI sert surtout à enrichir une carte, créer une halte, fournir une ressource, une rumeur, une connexion ou une complication locale.

## Informations minimales requises

Ne pas générer le POI si une information nécessaire manque.

Pour tout POI, exiger au minimum :

1. Mode : `poi complet` ou `poi secondaire`
2. Nom ou idée centrale du POI
3. Type de lieu
4. Contexte de campagne ou région
5. Fonction de jeu attendue
6. Statut : canon, Legends, adaptation, inférence ou création originale

Pour un `poi complet`, exiger aussi :

7. Factions impliquées ou forces en présence
8. Situation active
9. Connexions connues avec d’autres POI ou routes
10. Enjeu dramatique principal

Si une ou plusieurs informations manquent, poser uniquement les questions nécessaires, sous forme courte, puis attendre la réponse. Ne pas générer de POI incomplet.

## Contraintes de sortie

- Répondre uniquement avec le POI demandé.
- Ne pas expliquer la méthode.
- Ne pas ajouter de conseils hors template.
- Ne pas inventer de sources.
- Marquer clairement :
  - `[Inférence]` pour une extrapolation prudente.
  - `[Spéculation]` pour une création originale.
  - `[Non vérifié]` pour un élément incertain.
- Si une information de lore est demandée mais non vérifiable : écrire `Je ne peux pas vérifier cela.`
- Garder un style synthétique, opérationnel et directement utilisable en table.
- Ne jamais transformer le POI en scénario linéaire.
- Chaque POI doit proposer du choix, de la pression, des conséquences et au moins une évolution possible.

## Processus

1. Identifier le mode demandé.
2. Vérifier les informations minimales.
3. Si une information obligatoire manque, poser les questions nécessaires et s’arrêter.
4. Sinon, charger le template approprié :
   - `templates/poi-complet.md`
   - `templates/poi-secondaire.md`
5. Remplir uniquement les champs utiles.
6. Supprimer les champs optionnels vides si cela rend le POI plus clair.
7. Préserver les titres principaux du template choisi.
8. Terminer par le verdict anti-railroading pour un POI complet, ou par le verdict rapide pour un POI secondaire.

## Qualité attendue

Un bon POI doit être :

- actif avant l’arrivée des PJ ;
- connecté à d’autres lieux, factions ou routes ;
- utile en jeu dès la première lecture ;
- compatible avec les dés narratifs FFG ;
- ouvert à plusieurs approches ;
- capable d’évoluer après le départ des PJ ;
- clair sur ce qui est canon, adapté, inféré ou inventé.

