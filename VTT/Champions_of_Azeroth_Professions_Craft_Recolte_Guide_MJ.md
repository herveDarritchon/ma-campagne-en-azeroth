---
author: python-docx
date: 2013-12-23
updated: 2013-12-23
source: Champions_of_Azeroth_Professions_Craft_Recolte_Guide_MJ.docx
---

**CHAMPIONS OF AZEROTH**

**Professions, récolte & artisanat**

*Document de synthèse pour le Maître de Jeu*


| **DÉCISION DE DESIGN**<br>Privilégier la cohérence à la sophistication locale : un seul moteur de règles pour presque toutes les professions. Le système recommandé est Kibbles’ Crafting System, adapté à l’univers de Warcraft. Les exceptions doivent rester des variantes légères du même moteur, pas de nouveaux sous-systèmes. |
|---|
| **BOUCLE DE JEU CIBLE**<br>Découverte d’une ressource → Récolte → Matériau → Recette connue → Fabrication → Objet ou avantage utile dans l’aventure. |

Cadre : World of Warcraft Classic / Vanilla • D&D 5e • Champions of Azeroth


# 1. Objectif du système

Le but n’est pas de reproduire la progression 1–300, le farming ou les boucles répétitives du MMORPG. Il s’agit de retrouver la sensation Warcraft : reconnaître une ressource, la récolter, connaître une recette, fabriquer un objet utile et progresser dans un métier.

Champions of Azeroth revendique une philosophie de design simple : partir de D&D 5e, ne changer les règles que lorsque c’est nécessaire et conserver les mécaniques 5e lorsqu’elles fonctionnent. Cette orientation justifie un moteur unique de professions plutôt qu’un assemblage de mini-jeux spécialisés.


# 2. Les professions de WoW Classic

WoW Classic distingue neuf professions principales et trois compétences secondaires. Pour la campagne, la pêche est traitée comme une activité de récolte. Les poisons du voleur peuvent être ajoutés comme compétence spéciale, sans en faire une profession principale.


| **Compétence** | **Famille** | **Statut WoW** | **Produit principal** |
|---|---|---|---|
| Herbalism | Récolte | Principale | Plantes |
| Mining | Récolte | Principale | Minerais, pierre |
| Skinning | Récolte | Principale | Cuirs, peaux |
| Fishing | Récolte | Secondaire | Poissons, prises |
| Alchemy | Fabrication | Principale | Potions, élixirs |
| Blacksmithing | Fabrication | Principale | Armes, armures métalliques |
| Engineering | Fabrication | Principale | Bombes, gadgets, machines |
| Leatherworking | Fabrication | Principale | Armures et objets en cuir |
| Tailoring | Fabrication | Principale | Étoffes, vêtements, sacs |
| Enchanting | Service / fabrication | Principale | Enchantements, désenchantement |
| Cooking | Fabrication | Secondaire | Nourriture, buffs |
| First Aid | Fabrication | Secondaire | Bandages |
| Poisons | Spéciale | Voleur | Poisons d’armes |


# 3. Moteur retenu : Kibbles’ Crafting System

Kibbles est retenu non parce qu’il est nécessairement le meilleur système spécialisé pour chaque activité, mais parce qu’il fournit la meilleure cohérence transversale : outils, caractéristique associée, maîtrise, recettes, matériaux, temps et tests de fabrication obéissent à une même logique. Le système couvre explicitement Blacksmithing, Alchemy, Enchanting, Cooking, Engineering, Leatherworking, Poisoncraft et d’autres branches.

La version de Kibbles repose sur des tests de fabrication effectués avec l’outil ou la compétence appropriée ; chaque test représente une période de travail. Pour Champions of Azeroth, le détail exact du temps peut être conservé pour les projets importants et abstrait pour les objets simples afin de ne pas ralentir les séances.


| **RÈGLE DE COHÉRENCE**<br>On ne change de système que si Kibbles ne couvre réellement pas l’activité. Dans ce cas, on crée une variante qui conserve la même grammaire : outil + caractéristique + maîtrise + difficulté + résultat. | | | |
|---|---|---|---|
| **Métier** | **Hack retenu** | **Adéquation** | **Adaptation CoA** |
| Herbalism | Kibbles Gathering / Harvesting | Très bon | Reskin des plantes en flore WoW ; ne pas importer un second moteur d’herboristerie. |
| Mining | Kibbles Gathering | Très bon | Filons placés dans le monde ; un test détermine surtout quantité/qualité récoltée. |
| Skinning | Kibbles Harvesting | Excellent | Cadavres = ressources ; cuir + composants spéciaux selon créature. |
| Fishing | Variante légère de Gathering | Bon | Même logique que la récolte : spot + canne + test + table de prise. |
| Alchemy | Kibbles Alchemy | Excellent | Catalogue de recettes remplacé/complété par les potions et élixirs WoW. |
| Blacksmithing | Kibbles Blacksmithing | Excellent | Chaîne Mining → Smelting → Bars → Forge. |
| Engineering | Kibbles Engineering / Tinkering | Excellent | Très proche de la fantasy Warcraft ; futur embranchement gobelin / gnome possible. |
| Leatherworking | Kibbles Leatherworking | Excellent | Boucle directe Skinning → cuir → équipement. |
| Tailoring | Kibbles Tailoring / branche textile légère | Correct | Point le moins riche ; conserver le moteur, enrichir surtout les recettes. |
| Enchanting | Kibbles Enchanting | Excellent | Ajouter Disenchanting comme méthode de récolte de poussières/essences/éclats. |
| Cooking | Kibbles Cooking | Excellent | Ingrédients issus de Fishing, chasse et récolte ; conserver l’idée de Well Fed. |
| First Aid | Mini-branche Kibbles | Bon | Cloth + Healer’s Kit ; recettes très simples, pas de sous-système complet. |
| Poisons | Kibbles Poisoncraft | Excellent | Idéal pour la compétence spéciale du voleur ; ingrédients issus de plantes/créatures. |


# 4. Choix métier par métier


# 5. Règles recommandées par famille


## 5.1 Récolte : règle commune

La récolte ne doit pas devenir une succession de jets gratuits à chaque trajet. Une ressource apparaît parce qu’elle existe dans le lieu : filon, zone de plantes, créature abattue, spot de pêche. Le test détermine l’exploitation de cette opportunité, non son apparition arbitraire.


| **Étape** | **Principe** |
|---|---|
| 1. Identifier | La ressource est visible, découverte par exploration ou connue grâce à une carte/PNJ. |
| 2. Disposer de l’outil | Pioche, couteau de dépeçage, kit adapté, canne à pêche, etc. |
| 3. Tester | Caractéristique pertinente + maîtrise du métier/outil contre un DD fixé par le MJ. |
| 4. Résultat | Succès = quantité normale ; réussite élevée = surplus/qualité ; échec = rendement faible, temps perdu ou complication. |
| 5. Épuiser / préserver | Le lieu peut être épuisé, dangereux, contesté ou exploitable à nouveau selon la fiction. |


## 5.2 Fabrication : règle commune

La fabrication repose sur quatre prérequis : connaître la recette, posséder les composants, disposer des outils ou d’un atelier adéquat, puis consacrer le temps nécessaire. Les objets courants peuvent être abstraits ; les objets rares ou emblématiques doivent devenir de véritables projets.


| **Élément** | **Règle MJ** |
|---|---|
| Recette | Connue par défaut, achetée, apprise d’un maître, trouvée, volée ou gagnée. |
| Composants | Ressources WoW concrètes plutôt qu’un coût abstrait en pièces d’or. |
| Outils / lieu | Kit personnel pour le simple ; forge, laboratoire ou atelier pour les projets complexes. |
| Test | Utiliser la caractéristique et l’outil définis par la branche Kibbles. |
| Temps | Conserver le temps comme coût significatif, mais éviter de simuler chaque heure lorsque rien n’est en jeu. |
| Échec | Éviter la punition stérile. Préférer perte partielle, qualité inférieure, délai, bruit, dette ou besoin d’un composant supplémentaire. |


# 6. Adaptations Warcraft indispensables


## 6.1 Matériaux Warcraft

Le moteur peut rester Kibbles, mais l’habillage matériel doit être Warcraft. Le plaisir de reconnaissance vient des noms et des chaînes de transformation : Copper Ore, Rough Stone, Peacebloom, Silverleaf, Light Leather, Linen Cloth, Strange Dust, etc.

Conseil MJ : ne créer que les matériaux réellement utilisés dans la saison en cours. Il n’est pas nécessaire de préparer dès maintenant tout le catalogue 1–300 de WoW Classic.


## 6.2 Recettes Warcraft

Même principe : remplacer progressivement les formules génériques par des recettes reconnaissables de WoW. Les recettes doivent rester peu nombreuses et utiles afin que leur découverte soit mémorable.


## 6.3 Fishing

Fishing est la principale exception. Plutôt que d’importer un mini-jeu externe, on le traite comme une variante du Gathering : spot de pêche + canne + Wisdom (ou caractéristique cohérente avec le système retenu) + maîtrise de Fishing. Le résultat détermine la prise, sa quantité ou une découverte rare.


## 6.4 Disenchanting

Disenchanting doit être ajouté à Enchanting comme une forme de harvesting appliquée aux objets magiques : objet détruit → composants d’enchantement. Cela recrée la boucle emblématique de WoW sans créer un moteur séparé.


# 7. Progression des professions

Ne pas reprendre la barre 1–300. Elle représente du grind adapté au MMO, pas à la table. Utiliser plutôt des rangs fictionnels significatifs, inspirés de WoW, qui ouvrent des recettes et des projets plus ambitieux.


| **Rang** | **Fonction en campagne** |
|---|---|
| Apprenti | Recettes simples, matériaux communs, travail de terrain. |
| Compagnon | Recettes fiables, matériaux moins courants, meilleure autonomie. |
| Expert | Recettes spécialisées, équipement remarquable, accès à des maîtres et ateliers. |
| Artisan | Objets rares, techniques régionales, projets qui peuvent influencer une aventure. |
| Maître | Chef-d’œuvre, recette emblématique, spécialisation ou transmission du savoir. |


| **PROGRESSION RECOMMANDÉE**<br>On progresse par le jeu : apprendre auprès d’un maître, découvrir une formule, réaliser un ouvrage reconnu, obtenir un matériau exceptionnel ou accomplir une quête de maîtrise. Pas par répétition d’une même recette. | |
|---|---|
| **Chaîne** | **Exemple** |
| Mining | Copper Vein → Copper Ore + Rough Stone → Smelting → Copper Bar → Blacksmithing → outil / arme / pierre à aiguiser |
| Herbalism | Peacebloom + Silverleaf → Alchemy → potion ou élixir mineur |
| Skinning | Scorpid → cuir + glande à venin → Leatherworking / Poisoncraft / Alchemy |
| Fishing | Spot côtier → poisson → Cooking → repas → bénéfice Well Fed |
| Enchanting | Objet magique inutilisé → Disenchanting → Dust / Essence / Shard → nouvel enchantement |


# 8. Exemple de boucle complète à Durotar

Dans Durotar, ces activités doivent s’intégrer au pointcrawl et aux lieux existants. Une carrière, un ravin, un point d’eau ou une zone de chasse deviennent des ressources du territoire. La découverte d’un filon ou d’une plante rare peut être une récompense d’exploration au même titre qu’un raccourci ou une information.


# 9. Ce qu’il faut éviter

• Créer un jet de récolte à chaque déplacement ou après chaque combat.

• Transformer les professions en tableur de centaines de composants.

• Reproduire la progression 1–300 et le farming de recettes faciles.

• Utiliser un système différent pour chaque métier sous prétexte qu’il est localement meilleur.

• Faire fabriquer des objets puissants sans coût narratif, temps, atelier ou matériau significatif.

• Rendre une profession indispensable à la résolution d’une aventure.


# 10. Décision de référence pour la campagne


| **À RETENIR**<br>Kibbles dessous, Warcraft dessus. Kibbles fournit la grammaire mécanique ; WoW fournit les professions, matériaux, recettes, maîtres, spécialisations et la nostalgie. Fishing et Disenchanting sont ajoutés comme variantes du même moteur. Les systèmes spécialisés externes restent des sources d’idées, pas des règles parallèles. |
|---|


# 11. Sources et statut

Sources de cadrage du projet : Champions of Azeroth, Silverblade (30 mai 2021), notamment les principes de simplicité, de continuité avec D&D 5e et d’importance du jeu hors combat ; Guide MJ Durotar — Saison 1, pour l’importance concrète des ressources, routes, matériaux et de l’exploration ; Taxonomie des quêtes JDR papier, pour la conversion des profession quests en quêtes de maîtrise.

Sources externes vérifiées : KibblesTasty Homebrew, page officielle Crafting (consultée en août 2026) ; Kibbles’ Playtest Packet / GM Binder pour la liste des branches, outils et logique de tests ; Wowhead, Professions Guide And Best Professions For Each Class/Role — WoW Classic, mis à jour le 4 octobre 2025, pour la classification des professions de Classic.

Statut : document de décision MJ. Les DD précis, tables de rendement, listes de recettes et règles de progression détaillées restent à concevoir/adapter avant implémentation dans Foundry VTT.
