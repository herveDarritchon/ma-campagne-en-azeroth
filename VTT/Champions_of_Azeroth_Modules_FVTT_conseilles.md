# Champions of Azeroth — Modules Foundry VTT conseillés

> Stack recommandée pour **Foundry VTT V14 + D&D5e 5.3.x**, avec un objectif d'expérience proche d'un RPG/CRPG : exploration, HUD, effets visuels, combats lisibles et boss mis en scène.

## Stack V1 — à installer en priorité

| Fonction | Module | Priorité | Rôle |
|---|---|---:|---|
| Interface de combat | **Argon Combat HUD — D&D5e** | 🔴 | Barre d'actions façon CRPG / Solasta |
| Animations | **Sequencer** | 🔴 | Moteur VFX / SFX et séquences |
| Assets VFX | **JB2A** | 🔴 | Bibliothèque d'animations d'attaques, sorts et projectiles |
| Auto-animation | **BLFX Animation Editor** | 🔴/🟠 | Associe automatiquement attaques, sorts et Features à des VFX/SFX |
| Exploration interactive | **Monk's Active Tile Triggers** | 🔴 | Pièges, sons, téléportation, portes, révélations, événements |
| Combat | **Monk's Combat Details** | 🔴 | Tours, notifications, initiative, defeated, lair actions |
| Boss | **Boss Bar** | 🔴 | Barre de vie de boss façon jeu vidéo |
| État des ennemis | **Health Estimate** | 🟠 | Affiche Blessé / Gravement blessé / À l'agonie sans révéler les PV |
| Dés | **Dice So Nice!** | 🟠 | Dés 3D, sons et effets |
| Effets sur tokens | **Token Magic FX** | 🟠 | Poison, invisibilité, aura, gel, feu, etc. |
| Fiches D&D5e | **Tidy 5e Sheets** | 🟠 | Interface plus ergonomique pour les fiches |

## Stack V2 — à tester après quelques séances

| Fonction | Module | Priorité | Usage |
|---|---|---:|---|
| Initiative visuelle | **Carousel Combat Tracker** | 🟠 | Présentation horizontale / CRPG de l'ordre des tours |
| Verticalité | **Levels** | 🟠 | Donjons, tours, bâtiments et passerelles sur plusieurs niveaux |
| Terrain / élévation | **Terrain Mapper** | 🟠 | Relief, rampes, escaliers et changements d'élévation |
| Automatisation avancée | **Midi-QOL** | ⚪ | À envisager seulement si les manipulations D&D5e deviennent trop lourdes |
| Automatisation effets | **DAE / CPR** | ⚪ | À ajouter uniquement si la stack Midi-QOL devient réellement nécessaire |

## Liens utiles

- Argon Combat HUD — D&D5e  
  https://foundryvtt.com/packages/enhancedcombathud-dnd5e

- Sequencer  
  https://foundryvtt.com/packages/sequencer

- Boss Bar  
  https://foundryvtt.com/packages/bossbar

- Health Estimate  
  https://foundryvtt.com/packages/healthEstimate

- Monk's Active Tile Triggers  
  https://foundryvtt.com/packages/monks-active-tiles

- Monk's Combat Details  
  https://foundryvtt.com/packages/monks-combat-details

- Levels  
  https://foundryvtt.com/packages/levels

- Terrain Mapper  
  https://foundryvtt.com/packages/terrainmapper

- Token Magic FX  
  https://foundryvtt.com/packages/tokenmagic

- Carousel Combat Tracker  
  https://foundryvtt.com/packages/combat-tracker-dock

- Dice So Nice!  
  https://foundryvtt.com/packages/dice-so-nice

- Midi-QOL  
  https://foundryvtt.com/packages/midi-qol

## Architecture par expérience

### 🌍 Exploration

- Foundry Core : Regions, murs, lumières, Fog of War
- Monk's Active Tile Triggers
- Terrain Mapper si l'élévation devient importante
- Ambiances sonores / playlists

**Objectif :** permettre aux joueurs d'explorer réellement Durotar et les donjons, avec des événements qui se déclenchent dans l'environnement.

### ⚔️ Combat

- Argon Combat HUD
- Monk's Combat Details
- Health Estimate
- Dice So Nice!
- éventuellement Carousel Combat Tracker

**Objectif :** rapprocher la lisibilité et l'ergonomie du combat d'un CRPG tout en conservant la logique de D&D5e.

### ✨ Spectacle

- Sequencer
- JB2A
- BLFX Animation Editor
- Token Magic FX
- Boss Bar

**Objectif :** donner un feedback audiovisuel immédiat aux attaques, sorts, buffs/debuffs et rencontres de boss.

## Boss Experience recommandée

Lorsqu'un vrai boss de donjon commence :

1. **Monk's Active Tile Triggers**
   - verrouille les accès ;
   - révèle le boss ;
   - modifie éventuellement les lumières ;
   - lance la musique.

2. **Boss Bar**
   - affiche la barre de vie et le nom du boss.

3. **Monk's Combat Details**
   - lance / structure le combat ;
   - permet d'intégrer des lair actions ou événements de round.

4. **Sequencer + JB2A / BLFX**
   - joue l'animation d'entrée ;
   - déclenche les VFX des capacités ;
   - accompagne les transitions de phase.

5. **Token Magic FX**
   - rend les états et transformations visuellement perceptibles.

### Exemple de phases

- **Phase 1** : présentation des mécaniques du boss.
- **Phase 2** : changement du terrain, de la musique ou d'un objectif.
- **Phase 3** : transformation de la situation et décision finale.

Le changement de phase ne doit pas reposer uniquement sur un seuil de PV.

## Ce qu'il ne faut pas faire au départ

Éviter de cumuler immédiatement :

- Midi-QOL
- DAE
- CPR
- beaucoup de macros personnalisées
- plusieurs modules faisant le même travail

**Raison :** Champions of Azeroth ajoute déjà une couche homebrew à D&D5e. Il vaut mieux identifier d'abord les manipulations réellement pénibles en jeu avant d'ajouter une automatisation lourde.

## Stack recommandée de départ

```text
Foundry VTT V14
└── D&D5e
    ├── Champions of Azeroth Core
    ├── Argon Combat HUD
    ├── Sequencer
    ├── JB2A
    ├── BLFX Animation Editor
    ├── Monk's Active Tile Triggers
    ├── Monk's Combat Details
    ├── Boss Bar
    ├── Health Estimate
    ├── Dice So Nice!
    ├── Token Magic FX
    └── Tidy 5e Sheets
```

Puis, seulement si besoin :

```text
+ Carousel Combat Tracker
+ Levels
+ Terrain Mapper
+ Midi-QOL / DAE / CPR
```

## Principe directeur

L'objectif n'est pas de transformer Foundry en clone de World of Warcraft.

L'objectif est d'utiliser les codes d'un jeu vidéo — HUD, feedback visuel, exploration interactive, combats lisibles, boss fortement mis en scène — pour renforcer l'immersion tout en conservant la liberté et les choix d'un JDR de table.
