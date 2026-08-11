---
type: gdr
date: 2026-06-09
tags: [design-record, template, optimisation]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-012 : Utilisation Obligatoire des Templates Optimisés

## 1. Contexte & Problématique
Le vault contenait 11 templates différents pour décrire les POI, Lieux, PNJ, Factions et Fronts. Ces templates étaient scindés en deux extrêmes :
- Des "Guides de Game Design" encyclopédiques (parfois de 900 lignes) exigeant de remplir plus de 20 sections. Ils étaient illisibles et inexploitables en cours de partie.
- Des "Notes ultra-minimalistes" qui omettaient les mécanismes de jeu brillants (dilemmes, horloges, règles FFG/PBtA).

Il y avait donc de fortes redondances et une incapacité à générer rapidement du contenu de jeu immédiatement actionnable et lisible pour le Maître du Jeu à la table.

## 2. La Règle de Design (La Décision)
Il est dorénavant **strictement obligatoire** d'utiliser de manière exclusive les 5 templates optimisés situés à la racine du dossier `Templates/` :
- `Template_POI.md`
- `Template_Lieu.md`
- `Template_PNJ.md`
- `Template_Faction.md`
- `Template_Front.md`

Tout nouveau document créé (par un humain ou par un agent IA) représentant l'une de ces 5 entités doit se baser sur ce modèle, qui garantit un format court (50 à 80 lignes), orienté sur la prise de décision, les horloges, les leviers PNJ et les déclencheurs de jeu, sans tomber dans le remplissage de lore inutile.

## 3. Périmètre d'Application
- [ ] Campagne
- [ ] Scénario
- [ ] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
Lors de la création d'un nouveau PNJ, au lieu de remplir une biographie de 3 pages, l'auteur (ou l'agent) copie le contenu de `Templates/Template_PNJ.md` et ne remplit que les informations essentielles : Ses Moteurs (Ce qu'il veut, ce qu'il craint), Ses Leviers, Ses Réactions dynamiques et sa Mécanique (Mouvement PBtA / Profil FFG).

## 5. Exceptions
Cette règle ne s'applique pas aux fiches de Personnages Joueurs (PJ), ni aux simples notes d'idées "scratchpad" qui n'ont pas encore le statut d'entité pérenne dans la campagne.

## 6. Conséquences
- Les 11 anciens templates redondants du dossier `Campagnes/Template/` (puis déplacés dans `Templates/`) ont été définitivement supprimés.
- Toute requête de l'utilisateur demandant la génération d'un PNJ, Lieu, Faction, Front ou POI fera désormais appel à ces nouveaux templates.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-09
- **Modifié le :**
- **Remplace :** La prolifération incontrôlée d'anciens templates de Game Design.
