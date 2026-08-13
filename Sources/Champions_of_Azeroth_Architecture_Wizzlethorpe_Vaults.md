---
author: python-docx
date: 2013-12-23
updated: 2013-12-23
source: Champions_of_Azeroth_Architecture_Wizzlethorpe_Vaults.docx
---

**CHAMPIONS OF AZEROTH**

Architecture Obsidian → Wizzlethorpe Vaults → Foundry VTT

*Document de synthèse technique et opérationnelle pour la campagne*


| **VTT cible** | Foundry VTT V14 |
|---|---|
| **Système** | D&D5e + contenu Champions of Azeroth |
| **Source éditoriale** | Obsidian |
| **Pont de publication** | Wizzlethorpe Vaults 0.12.0 (V14 vérifié) |

Décision d’architecture : Obsidian devient la source de vérité pour le contenu éditorial et de référence ; Foundry reste la source de vérité pour l’état vivant de la partie.


# 1. Objectif

L’objectif est de préparer et maintenir la campagne Champions of Azeroth dans Obsidian, puis de publier ou synchroniser les éléments utiles vers Foundry VTT sans double saisie systématique. Wizzlethorpe Vaults sert de couche de transformation entre le vault Markdown et Foundry.

Cette architecture doit permettre de gérer aussi bien le contenu narratif (lieux, factions, secrets, scénarios) que des documents Foundry natifs (Actors, Items, Scenes, RollTables, etc.) lorsque les pages Obsidian contiennent un bloc de frontmatter `foundry:`.


# 2. Ce que Wizzlethorpe Vaults apporte réellement


| **Fonction** | **Comportement** | **Intérêt pour la campagne** |
|---|---|---|
| Synchronisation incrémentale | Le module compare le manifest au dernier sync et ne récupère que les pages/médias modifiés. | Évite de réimporter tout le vault à chaque changement. |
| Journals | Chaque dossier du vault devient un JournalEntry et chaque page une JournalEntryPage. | Idéal pour lieux, factions, quêtes, secrets et notes MJ. |
| Wikilinks | [[Page]] est converti en lien Foundry @UUID. | Conserve le réseau de navigation construit dans Obsidian. |
| Médias | Images, audio, vidéo, PDF et JSON sont mis en cache localement par vault. | Permet d’utiliser les médias du vault dans Foundry sans URL figée. |
| Documents dérivés | Une page avec `foundry:` peut créer Actor, Item, Scene, RollTable, Macro, Cards, Playlist, etc. | Permet de transformer certaines notes en objets de jeu natifs. |
| Permissions | Le seuil dmRole détermine ce qui est visible par les joueurs et ce qui reste MJ. | Un même corpus peut servir au MJ et aux joueurs. |
| IDs déterministes | Les documents dérivés sont mis à jour en place lors des resyncs. | Réduit les doublons et permet des références stables. |


# 3. Architecture cible du projet

OBSIDIAN - SOURCE<br>Champions of Azeroth/<br>├── Rules/<br>│ ├── Races/<br>│ ├── Classes/<br>│ ├── Features/<br>│ ├── Feats/<br>│ ├── Spells/<br>│ └── Equipment/<br>├── World/<br>│ ├── Locations/<br>│ ├── Factions/<br>│ ├── NPC/<br>│ └── Bestiary/<br>├── Campaign/<br>│ └── Season 1 - Durotar/<br>│ ├── Razor Hill/<br>│ ├── Pointcrawl/<br>│ ├── Quests/<br>│ ├── Dungeons/<br>│ └── Ragefire Chasm/<br>└── Compendium/<br> └── ... contenu destiné aux packs Foundry<br><br> ↓ Vaults CLI / compiler / sync<br><br>FOUNDRY VTT - RUNTIME<br>├── Journals<br>├── Actors<br>├── Items<br>├── Scenes<br>├── RollTables<br>├── Playlists<br>└── Compendiums<br>


# 4. Répartition des responsabilités


| **Donnée** | **Source de vérité** | **Destination Foundry** | **Règle** |
|---|---|---|---|
| Scénarios / situations | Obsidian | Journal | Écrire et corriger dans Obsidian. |
| Lieux / factions / lore | Obsidian | Journal | Conserver wikilinks et médias. |
| PNJ de référence | Obsidian | Actor + Journal éventuel | Statblock synchronisable ; état de jeu conservé dans Foundry. |
| Sorts / feats / équipement CoA | Obsidian structuré | Item / Compendium | Nécessite un schéma D&D5e strict. |
| Classes / races CoA | Obsidian structuré | Items/Compendiums D&D5e | À prototyper avant import massif. |
| HP / conditions / équipement courant | Foundry | Actor | Ne pas resynchroniser comme vérité éditoriale. |
| Position des tokens / portes / fog | Foundry | Scene | État de session uniquement. |
| Notes de préparation | Obsidian | Optionnel | `foundry.sync: false` si elles ne doivent pas arriver à la table. |


# 5. Deux usages complémentaires de Vaults


## 5.1 Synchroniser un vault dans un monde vivant

Le module Foundry Wizzlethorpe Vaults synchronise un vault préalablement déployé via le CLI. Dans Foundry : Sync Vault → Add Vault → URL de déploiement → Sync. Le module récupère le manifest, calcule les différences et importe uniquement ce qui a changé.

- Usage privilégié : campagne en cours, notes, Journals, PNJ, scènes et ressources qui évoluent.
- Le document dérivé reçoit un ID déterministe basé sur le vault et le chemin de page.
- Les champs non surchargés par le frontmatter peuvent survivre au resync : le README cite notamment HP, conditions et objets équipés.
- Une suppression de page entraîne la suppression du document dérivé, sauf cas d’ID explicitement épinglé/manipulé.

## 5.2 Compiler des Compendiums installables

Le sous-projet `foundry-compiler` (`vfmc`) répond à un autre besoin : compiler le contenu d’un vault en véritable module Foundry installable. Il génère les packs LevelDB et ne réécrit que le tableau `packs` de `module.json` ; scripts, styles, traductions, relations et autres métadonnées restent sous le contrôle du projet.

<vault>/<br>├── Compendium/<br>│ ├── spells/<br>│ ├── feats/<br>│ ├── equipment/<br>│ └── ...<br>└── foundry/<br> ├── module.json<br> ├── scripts/<br> ├── styles/<br> └── packs/ ← générés / synchronisés par vfmc<br>

Conséquence pour Champions of Azeroth : les règles réutilisables (sorts, feats, équipement, puis éventuellement classes/races) ont intérêt à être compilées en Compendiums, tandis que le contenu de campagne peut rester synchronisé directement dans le World.


# 6. Convention de page Obsidian

Une page purement narrative n’a besoin d’aucun bloc Foundry particulier. Elle devient un Journal lors du sync.


## 6.1 Exemple : PNJ / Actor

---<br>tags:<br> - npc<br> - burning-blade<br>foundry:<br> base: Compendium.dnd5e.monsters.Actor.bandit<br> data:<br> name: Initié de la Lame Ardente<br> system:<br> attributes:<br> hp:<br> value: 22<br> embed: true<br>---<br><br># Initié de la Lame Ardente<br><br>## Motivation<br>Obtenir du pouvoir et la reconnaissance du culte.<br><br>## Informations<br>- connaît l’entrée secondaire de Skull Rock ;<br>- connaît son recruteur ;<br>- ignore le véritable objectif du rituel.<br>

`base` peut cloner un document existant via UUID de Compendium ou créer un document vide via une forme comme `Actor:npc`. Le bloc `data` est appliqué comme un deep-merge sur le document de base.


## 6.2 Contrôler l’import


| **Option** | **Effet** | **Usage recommandé** |
|---|---|---|
| foundry.embed: false | Crée/synchronise le document dérivé mais n’embarque pas le corps de la page dans sa description. | Statblock propre ou notes MJ séparées. |
| foundry.sync: false | La page reste dans le vault/wiki mais n’est pas importée dans Foundry. | Brouillons, notes de build, documentation interne. |
| foundry.id | Fixe un ID explicite de 16 caractères. | Macros ou flags externes nécessitant un identifiant stable. |
| dmRole | Fixe le seuil de visibilité joueur/MJ par vault. | Séparer contenu public et notes MJ. |


# 7. Organisation recommandée pour Champions of Azeroth


## 7.1 Couche Rules - réutilisable

- Races / Species
- Classes et spécialisations
- Class Features
- Feats
- Spells
- Equipment
- Bestiary générique Warcraft
Cette couche doit être pensée comme un produit réutilisable entre saisons. Le `foundry-compiler` est particulièrement pertinent ici, car il peut maintenir des Compendiums synchronisés avec le vault.


## 7.2 Couche World - Azeroth

- Lieux et lore récurrents
- Factions
- PNJ persistants
- Créatures et organisations
- Références générales de Durotar et de la Horde

## 7.3 Couche Campaign - Saison 1

- Razor Hill comme hub
- Pointcrawl de Durotar
- Routes et raccourcis
- Situations et quêtes
- Trois donjons secondaires
- Ragefire Chasm
- Secrets, conséquences et évolution de la zone
Cette structure correspond à la campagne déjà définie : Durotar est la zone de toute la saison, Razor Hill le hub, avec un pointcrawl, des factions actives et Ragefire Chasm comme climax. Les contenus de campagne sont donc naturellement adaptés à une synchronisation Journals/Actors/Scenes depuis Obsidian.


# 8. Workflow quotidien recommandé


| **Étape** | **Outil** | **Action** |
|---|---|---|
| 1. Concevoir | Obsidian | Écrire lieu, PNJ, situation, sort ou objet. |
| 2. Relier | Obsidian | Créer wikilinks, tags, embeds et médias. |
| 3. Structurer si nécessaire | Frontmatter | Ajouter `foundry:` uniquement aux pages devant créer un document natif. |
| 4. Prévisualiser | Vaults CLI | Vérifier le rendu du vault avant publication. |
| 5. Publier | `vaults push` | Déployer le vault vers le projet Cloudflare configuré. |
| 6. Synchroniser | Foundry Vaults | Importer seulement les changements dans le World. |
| 7. Jouer | Foundry | Laisser Foundry gérer l’état dynamique de la session. |
| 8. Corriger le canon | Obsidian | Faire les corrections éditoriales dans la source, puis resynchroniser. |


# 9. Workflow de build des règles / Compendiums

PDF / règles Champions of Azeroth<br> ↓<br>normalisation manuelle<br> ↓<br>pages Obsidian structurées<br> ↓<br>Compendium/<folder>/<br> ↓<br>frontmatter foundry.base / foundry.data_json / foundry.folder<br> ↓<br>vfmc<br> ↓<br>foundry/packs/<name>/<br> ↓<br>module Champions of Azeroth installable<br> ↓<br>Foundry VTT<br>

Le compiler indique que le corps Markdown devient la description HTML du document, que les wikilinks peuvent être réécrits vers des UUID de Compendium et que les dossiers peuvent être pilotés par `foundry.folder` ou par l’arborescence. C’est une base très adaptée à un futur module `Champions of Azeroth Core`.


# 10. Limites et points de vigilance


| **Point** | **Risque / limite** | **Décision** |
|---|---|---|
| D&D5e | Vaults est générique ; le schéma exact des Items/Actors dépend du DataModel D&D5e. | Prototyper un Actor et un Spell avant import massif. |
| Secrets | Les secret blocks peuvent fuiter lorsqu’ils sont embarqués dans un Actor/Item possédé par un joueur. | Mettre les notes MJ sur pages dédiées ou `embed: false`. |
| Backlinks | Les backlinks du wiki ne sont pas importés dans Foundry. | Ne pas en dépendre pour la navigation en session. |
| Gros vault | Le premier cache média peut prendre du temps. | Faire un premier sync avant la séance. |
| Édition Foundry | Les champs explicitement surchargés par Vaults seront réappliqués au sync. | Éditer le canon dans Obsidian ; réserver Foundry à l’état vivant. |
| Compendiums | Le compiler est une chaîne distincte du sync live-world. | Séparer clairement Rules/build et Campaign/sync. |


# 11. Plan d’implémentation conseillé


| **Phase** | **Livrable** | **Critère de validation** |
|---|---|---|
| P0 - Installation | Vaults CLI + module Foundry V14 | Le vault de test se synchronise. |
| P1 - Journals | Razor Hill + une faction + un lieu | Wikilinks, images et permissions fonctionnent. |
| P2 - Actor | 1 PNJ Burning Blade dérivé d’un Actor D&D5e | Resync sans duplication ; état non surchargé conservé. |
| P3 - Item | 1 sort ou Feature Champions of Azeroth | Le document D&D5e fonctionne réellement en V14. |
| P4 - Scene | 1 scène de Durotar avec média local | Texture et assets sont résolus après sync. |
| P5 - Compendium | Mini-pack CoA avec 3-5 Items | `vfmc` génère un module installable. |
| P6 - Vertical slice | 1 PJ niveau 1 complet | Race/classe/features/spells utilisables en partie. |
| P7 - Industrialisation | Conventions YAML + templates Obsidian | La saisie devient répétable et documentée. |


# 12. Décision finale

Architecture retenue : Obsidian → Wizzlethorpe Vaults → Foundry VTT, avec deux voies : synchronisation directe pour le contenu vivant de campagne, compilation en module/Compendiums pour les règles Champions of Azeroth réutilisables.

Cette architecture évite de transformer Foundry en outil principal de rédaction. Elle permet de conserver un corpus portable, versionnable et exploitable hors VTT, tout en donnant à Foundry les documents natifs dont il a besoin pour la partie.

La priorité technique n’est pas d’importer tout Champions of Azeroth immédiatement. Le prochain jalon doit être un prototype vertical très réduit : un Journal, un Actor, un Item D&D5e et un petit Compendium. Si ces quatre cas fonctionnent proprement en V14, l’architecture peut ensuite être industrialisée.


# Sources vérifiées

- Wizzlethorpe Vaults - dépôt GitHub, README principal (consulté le 12 août 2026).
- Wizzlethorpe Vaults - foundry/module.json : version 0.12.0, minimum Foundry 13, verified 14 (consulté le 12 août 2026).
- Wizzlethorpe Vaults - README du module Foundry : synchronisation, documents dérivés, permissions et limitations (consulté le 12 août 2026).
- Wizzlethorpe Vaults - README de foundry-compiler : compilation des Compendiums LevelDB et gestion du module Foundry (consulté le 12 août 2026).
- Guide MJ Durotar - Champions of Azeroth Saison 1 : structure de campagne Durotar/Razor Hill/pointcrawl/Ragefire Chasm.