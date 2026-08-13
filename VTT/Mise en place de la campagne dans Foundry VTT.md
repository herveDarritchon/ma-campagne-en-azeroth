# Champions of Azeroth — Mise en place de la campagne dans Foundry VTT

## 1. Objectif

Mettre en place un monde Foundry VTT permettant de jouer à **Champions of Azeroth**, l'adaptation Warcraft de D&D 5e créée par Silverblade, en conservant :

- le moteur D&D 5e de Foundry ;
    
- les règles générales de D&D 5e nécessaires à Champions of Azeroth ;
    
- les races de Champions of Azeroth ;
    
- les classes et spécialisations ;
    
- les capacités de classe ;
    
- les dons ;
    
- les sorts ;
    
- l'équipement spécifique ;
    
- puis progressivement les créatures, objets et autres éléments nécessaires à la campagne.
    

L'objectif n'est **pas de développer un nouveau Game System Foundry**.

Champions of Azeroth est explicitement conçu comme un supplément à D&D 5e : il ajoute des races, classes, dons, sorts, équipements et autres éléments Warcraft mais continue à utiliser les règles générales de D&D 5e.

La bonne architecture est donc :

**Foundry VTT**  
→ **système officiel D&D5e**  
→ **module de contenu Champions of Azeroth**  
→ **module / contenu spécifique à la campagne**

---

# 2. État des lieux de ce qui existe déjà

## Champions of Azeroth

À ce jour, aucune conversion Foundry publique complète de **Champions of Azeroth de Silverblade** n'a été identifiée.

Les recherches ont porté notamment sur :

- Foundry VTT ;
    
- GitHub ;
    
- Reddit / r/FoundryVTT ;
    
- Reddit / r/wc5e ;
    
- les publications liées à Champions of Azeroth ;
    
- les recherches autour de modules, compendiums et importateurs Foundry.
    

Le projet original fournit principalement ses documents PDF / GM Binder et un dossier de projet.

Il n'existe donc pas, dans les ressources publiques que nous avons pu identifier, de bouton :

> Install Champions of Azeroth

qui installerait directement les races, classes et sorts dans Foundry.

## Warcraft 5E Foundry

Il existe cependant un projet communautaire :

**JunkTurkey / warcraft-5e-fvtt**

Il fournit un module Foundry contenant le **Warcraft Heroes Handbook 3.0** sous forme de compendiums.

Le projet :

- dépend du système D&D5e ;
    
- contient des compendiums Foundry ;
    
- possède des dossiers `packs`, `scripts`, `images`, etc. ;
    
- est installable comme module ;
    
- a été vérifié jusqu'à Foundry VTT 12.331 ;
    
- est encore utilisé comme base par des membres de la communauté Warcraft 5E en août 2026.
    

Ce projet est extrêmement intéressant comme **référence technique**, mais son contenu ne doit pas être considéré comme celui de Champions of Azeroth.

Champions of Azeroth et Warcraft 5E sont deux adaptations différentes.

### Décision

**Ne pas utiliser les données WC5E comme règles de Champions of Azeroth.**

En revanche :

**réutiliser / étudier son architecture Foundry pour construire notre propre module Champions of Azeroth.**

---

# 3. Socle Foundry à installer

## Foundry VTT

Utiliser :

**Foundry VTT 14**

## Game System

Installer :

**Dungeons & Dragons Fifth Edition — `dnd5e`**

La version actuelle identifiée lors de cette préparation est :

**D&D5e 5.3.3**

Elle est officiellement vérifiée pour Foundry VTT 14.

Elle fournit déjà :

- Actors ;
    
- fiches de personnages ;
    
- Items ;
    
- caractéristiques ;
    
- compétences ;
    
- attaques ;
    
- dégâts ;
    
- sorts ;
    
- ressources ;
    
- repos ;
    
- progression ;
    
- vision ;
    
- classes ;
    
- sous-classes ;
    
- feats ;
    
- équipements ;
    
- compendium browser ;
    
- gestion générale des règles 5e.
    

Il est donc inutile de réimplémenter ces mécanismes.

---

# 4. Référence de règles

La version originale de Champions of Azeroth est construite sur la **D&D 5e pré-révision 2024**.

Elle recommande notamment l'utilisation :

- du Player's Handbook ;
    
- du Dungeon Master's Guide ;
    
- du Monster Manual ;
    
- de Xanathar's Guide to Everything ;
    
- de Tasha's Cauldron of Everything.
    

Pour la campagne initiale, la règle doit donc être :

> **Champions of Azeroth original fait autorité, avec D&D 5e 2014 comme référentiel lorsque Champions of Azeroth renvoie aux règles D&D.**

Il faut éviter de convertir simultanément toute l'adaptation vers D&D 2024.

Une révision 2024 de Champions of Azeroth a été annoncée par son auteur et était encore décrite comme un travail en cours dans ses communications publiques retrouvées. Tant qu'une version complète et stabilisée n'est pas choisie comme référence, elle ne doit pas être mélangée avec la version originale.

---

# 5. Créer deux couches distinctes

Il faut impérativement séparer :

## Module 1 — Champions of Azeroth

Contient uniquement les règles réutilisables.

Par exemple :

`champions-of-azeroth`

Il doit pouvoir être installé dans n'importe quelle future campagne Warcraft.

## Module 2 — Campagne

Contient uniquement le contenu de notre campagne.

Par exemple :

`champions-of-azeroth-durotar`

ou directement les données du World Foundry tant que le contenu ne nécessite pas encore d'être mutualisé.

Cette séparation évite de transformer le module de règles en dépôt de PNJ, cartes et scénarios propres à une campagne.

---

# 6. Compendiums Champions of Azeroth

Le module doit progressivement proposer les compendiums suivants.

## Character Options

### Races / Species

Contient les races jouables de Champions of Azeroth.

Exemples du contenu Classic :

- Human
    
- Dwarf
    
- Night Elf
    
- Gnome
    
- Orc
    
- Tauren
    
- Troll
    
- Forsaken
    

Chaque entrée doit contenir les caractéristiques mécaniques nécessaires au système D&D5e et ses traits associés.

---

## Classes

Un compendium contenant les classes Champions of Azeroth.

Chaque classe doit utiliser autant que possible le mécanisme natif de classe du système D&D5e.

Il faut notamment renseigner :

- Hit Die ;
    
- proficiencies ;
    
- progression ;
    
- caractéristiques principales ;
    
- spellcasting éventuel ;
    
- capacités obtenues aux différents niveaux.
    

---

## Subclasses / Specializations

Les spécialisations Warcraft doivent être représentées par les mécanismes de sous-classe de D&D5e lorsque Champions of Azeroth les traite ainsi.

Elles doivent rester séparées des classes afin que le système de progression Foundry puisse les utiliser normalement.

---

## Class Features

C'est probablement le compendium qui contiendra le plus d'éléments.

Chaque pouvoir ou capacité doit devenir un Item / Feature D&D5e.

Exemples conceptuels :

Blood Fury

Charge

Battle Shout

Stealth

Totemic Ability

etc.

Une Feature doit notamment décrire lorsque nécessaire :

- activation ;
    
- portée ;
    
- cible ;
    
- durée ;
    
- usages ;
    
- recharge ;
    
- ressources consommées ;
    
- jets ;
    
- dégâts ;
    
- effets ;
    
- description.
    

Il ne faut pas automatiser immédiatement tout ce qui peut fonctionner simplement avec une Feature standard.

---

## Feats

Tous les dons spécifiques à Champions of Azeroth deviennent des Feats D&D5e.

---

## Spells

Tous les sorts spécifiques à Champions of Azeroth deviennent des Spells D&D5e.

Pour chaque sort :

- niveau ;
    
- école ;
    
- temps d'incantation ;
    
- portée ;
    
- cible ;
    
- durée ;
    
- composants si applicable ;
    
- jet d'attaque ou sauvegarde ;
    
- dégâts / soins ;
    
- scaling ;
    
- description.
    

Il faudra distinguer :

**sorts provenant de D&D**

et

**sorts réellement créés ou modifiés par Champions of Azeroth.**

Les premiers ne doivent pas être recréés inutilement lorsqu'ils sont déjà disponibles dans notre référentiel D&D.

---

## Equipment

Contient uniquement le matériel propre à Champions of Azeroth :

- armes spécifiques ;
    
- armures ;
    
- objets ;
    
- consommables ;
    
- éventuellement composants ou équipements Warcraft.
    

L'équipement D&D standard utilisé sans modification reste celui du système D&D.

---

# 7. Deuxième vague de compendiums

Ces compendiums ne sont pas nécessaires pour commencer à créer les personnages.

Ils pourront être ajoutés ensuite.

## Creatures

Créatures Warcraft converties en Actors NPC D&D5e.

Exemples pour Durotar :

- boars ;
    
- scorpids ;
    
- harpies ;
    
- quilboars ;
    
- Burning Blade cultists ;
    
- familiers démoniaques ;
    
- etc.
    

Mais Champions of Azeroth ne fournit pas nécessairement tous les monstres de Warcraft.

Nous pourrons donc utiliser trois niveaux :

1. monstre D&D standard inchangé ;
    
2. monstre D&D reskinné Warcraft ;
    
3. véritable statblock Warcraft lorsque cela apporte une différence mécanique intéressante.
    

---

## Warcraft Items

Objets magiques et récompenses Warcraft.

Ce compendium pourra devenir beaucoup plus conséquent à terme.

Un travail communautaire Foundry très récent a justement commencé à importer massivement des objets World of Warcraft afin de créer ultérieurement des loot tables.

Ce travail n'est pas encore présenté comme un module stabilisé et publiquement disponible.

---

## Roll Tables

À terme :

- loot ;
    
- rencontres ;
    
- objets ;
    
- ressources ;
    
- événements de voyage ;
    
- trésors.
    

---

# 8. Ne pas convertir tout Champions of Azeroth avant de jouer

C'est une règle importante du projet.

Il serait techniquement possible d'importer l'intégralité du livre.

Ce serait cependant une mauvaise priorité.

Nous devons commencer par déterminer les personnages réellement choisis par les joueurs.

Exemple :

**PJ 1**  
Orc — Shaman

**PJ 2**  
Tauren — Warrior

**PJ 3**  
Troll — Hunter

**PJ 4**  
Forsaken — Rogue

La V1 réellement nécessaire devient alors :

### 4 races

- Orc
    
- Tauren
    
- Troll
    
- Forsaken
    

### 4 classes

- Shaman
    
- Warrior
    
- Hunter
    
- Rogue
    

### capacités

Uniquement :

- capacités de niveau 1 ;
    
- puis capacités des prochains niveaux nécessaires.
    

### sorts

Uniquement :

- sorts auxquels les personnages ont réellement accès.
    

Le reste peut entrer progressivement dans le compendium.

---

# 9. Stratégie de développement

Il faut distinguer trois niveaux.

## Niveau A — Data only

À privilégier systématiquement.

Utiliser uniquement les objets natifs de D&D5e :

- Class ;
    
- Subclass ;
    
- Species/Race selon le modèle retenu ;
    
- Feat ;
    
- Spell ;
    
- Equipment ;
    
- Feature.
    

Aucun JavaScript spécifique.

**Objectif : rendre Champions of Azeroth jouable.**

---

## Niveau B — automatisations légères

Seulement lorsqu'une mécanique Warcraft ne peut pas être correctement représentée par les capacités natives de D&D5e.

Exemples potentiels :

- ressources particulières ;
    
- capacités qui modifient automatiquement certains jets ;
    
- buffs temporaires ;
    
- transformations ;
    
- mécaniques de familiers ou invocations.
    

On utilise alors les mécanismes d'effets et d'activités disponibles dans D&D5e.

**Objectif : améliorer le confort.**

---

## Niveau C — développement Champions of Azeroth spécifique

Seulement après avoir identifié un véritable besoin pendant le jeu.

Par exemple :

- interface particulière ;
    
- nouvelle ressource ;
    
- UI Warcraft ;
    
- comportement automatisé absent de D&D5e ;
    
- extension du modèle de données ;
    
- hooks ;
    
- macros ou services spécifiques.
    

**Objectif : améliorer l'expérience Warcraft, pas permettre au jeu de fonctionner.**

Le développement spécifique ne doit donc jamais être un prérequis à la première session.

---

# 10. Architecture technique cible

La structure conceptuelle du module pourrait devenir :

champions-of-azeroth/  
│  
├── module.json  
│  
├── scripts/  
│  
├── styles/  
│  
├── lang/  
│  
├── assets/  
│  
└── packs/  
│  
├── races  
├── classes  
├── subclasses  
├── class-features  
├── feats  
├── spells  
├── equipment  
├── creatures  
└── items

Dans un premier temps, `scripts/` peut parfaitement rester quasiment vide.

La valeur du module réside d'abord dans **ses données de compendium**, pas dans son code.

---

# 11. Utiliser Warcraft-5e-fvtt comme référence

Le repository :

**JunkTurkey/warcraft-5e-fvtt**

doit être étudié avant de créer notre module.

Pas pour reprendre ses règles.

Mais pour examiner :

- son `module.json` ;
    
- la déclaration de ses packs ;
    
- leur organisation ;
    
- la manière dont les documents D&D5e sont stockés ;
    
- les éventuels scripts de maintenance ;
    
- son système de build ;
    
- ses conventions de contribution ;
    
- les difficultés rencontrées lors des changements de versions de Foundry/D&D5e.
    

C'est probablement le meilleur accélérateur technique existant.

Il constitue pratiquement un **proof of concept public démontrant exactement le type d'architecture dont Champions of Azeroth a besoin**.

Attention néanmoins :

le repository annonce une compatibilité :

**minimum Foundry 10.303**  
**vérifié Foundry 12.331**

alors que notre environnement cible est Foundry 14.

Il faut donc l'utiliser comme source d'architecture et de données comparatives, pas supposer qu'il fonctionne parfaitement sans migration sous Foundry 14.

---

# 12. Architecture de notre monde de campagne

Une fois le socle Champions of Azeroth créé :

**World : Champions of Azeroth — Saison 1**

### Rules

Champions of Azeroth

### Characters

Player Characters

Important NPCs

### Azeroth

Factions

Locations

Lore

Bestiary

### Campaign

Durotar

Razor Hill

Quests

Rumors

Secrets

Encounters

### Dungeons

Secondary Dungeons

Ragefire Chasm

### Assets

Scenes

Maps

Tokens

Sounds

Music

---

# 13. Roadmap recommandée

## Étape 1 — figer le référentiel

- Foundry VTT 14
    
- D&D5e 5.3.x
    
- Champions of Azeroth original
    
- règles D&D 5e 2014 lorsqu'une règle externe est nécessaire
    

---

## Étape 2 — créer le World

Créer :

**Champions of Azeroth — Saison 1**

avec le système :

**Dungeons & Dragons Fifth Edition**

---

## Étape 3 — créer le module

Créer :

**Champions of Azeroth Core**

ID proposé :

`champions-of-azeroth`

Le module dépend de :

`dnd5e`

---

## Étape 4 — créer les premiers compendiums

Priorité :

1. Races
    
2. Classes
    
3. Subclasses
    
4. Class Features
    
5. Spells
    
6. Feats
    
7. Equipment
    

---

## Étape 5 — Session 0

Faire choisir les personnages.

Cette étape détermine exactement le contenu réellement nécessaire.

---

## Étape 6 — vertical slice

Implémenter complètement **un personnage niveau 1**.

Par exemple :

Orc Shaman niveau 1

Il doit pouvoir :

- recevoir sa race ;
    
- recevoir sa classe ;
    
- disposer de toutes ses features ;
    
- utiliser ses sorts ;
    
- effectuer ses jets ;
    
- subir ses dégâts ;
    
- se reposer ;
    
- progresser.
    

Cette étape permet de découvrir tous les éventuels problèmes de modélisation avant de saisir des dizaines de classes.

---

## Étape 7 — compléter le groupe

Une fois le premier personnage validé :

- deuxième race / classe ;
    
- troisième ;
    
- quatrième ;
    
- etc.
    

---

## Étape 8 — jouer

La campagne commence.

Le développement du compendium continue uniquement selon les besoins réels.

---

## Étape 9 — automatisation

Après plusieurs sessions, identifier :

- ce qui est pénible ;
    
- ce qui demande des manipulations manuelles répétitives ;
    
- ce qui génère des erreurs ;
    
- ce que D&D5e représente mal.
    

Seulement alors développer les automatisations correspondantes.

---

# 14. Principe directeur

Le projet ne doit jamais devenir :

> « développer Champions of Azeroth sur Foundry avant de pouvoir jouer à Champions of Azeroth ».

Il doit devenir :

> « jouer à Champions of Azeroth avec D&D5e Foundry, puis améliorer progressivement l'intégration ».

La priorité est donc :

**contenu → jouabilité → campagne → automatisation → cosmétique**

et non :

**code → UI → automatisation → contenu → éventuellement campagne.**

---

# 15. Résultat cible V1

La V1 sera considérée comme terminée lorsque :

- le World Foundry existe ;
    
- D&D5e fonctionne ;
    
- Champions of Azeroth est installé comme module ;
    
- les races choisies par les joueurs existent ;
    
- leurs classes existent ;
    
- leurs capacités niveau 1 existent ;
    
- leurs sorts nécessaires existent ;
    
- leurs équipements de départ existent ;
    
- chaque joueur peut créer ou recevoir son personnage ;
    
- les jets principaux fonctionnent ;
    
- aucune règle fondamentale ne nécessite une saisie hors Foundry.
    

À ce stade :

**la campagne peut commencer.**

Tout le reste est de l'amélioration.