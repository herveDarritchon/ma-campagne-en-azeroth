---
name: spatial-architect
description: Audite et conçoit la structure spatiale, géographique et la circulation d'un lieu pour le rendre physiquement jouable et éviter la linéarité.
---

# Spatial Architect

Utilise ce skill en complément de `location-architect` ou `playable-location-design` lorsque l'utilisateur te demande d'organiser, de cartographier, d'auditer ou de détailler la **construction spatiale** d'un lieu (bâtiment, base, station, donjon, etc.) pour qu'il soit véritablement jouable par les PJ.

## 🎯 Objectif
Combler les faiblesses d'un décor purement narratif en le transformant en véritable **espace de jeu** avec une géographie concrète, des itinéraires multiples, des flux matériels et humains, et des espaces qualifiés. Le lieu doit répondre aux principes énoncés dans la **Synthèse des faiblesses liées à l'organisation d'un lieu de jeu**, tout en respectant les **Game Design Records (GDR)** de la campagne.

## 📜 Les principes de construction spatiale (La Check-list des 23 points)

Lorsque tu conçois ou audites un lieu, tu dois t'assurer de valider ces principes essentiels :

### 1. Organisation, Agencement et Lisibilité
- **Schéma fonctionnel explicite :** Un lieu ne doit pas rester abstrait. Les positions relatives des zones doivent être claires et visualisables (via un graphe, un diagramme Mermaid ou une description d'adjacence rigoureuse).
- **Logique architecturale primordiale :** L'agencement ne doit pas être artificiellement pensé "pour le gameplay". La cohérence du site, sa fonction et son histoire dictent la disposition des pièces.
- **Définition et Sous-division des zones :** Ne regroupe pas de grands espaces ("Quartiers", "Laboratoire") en une seule zone. Sous-divise-les en pièces distinctes (ex: sas, dortoirs, cantine, salle de test, stockage).
- **Vestiges de la fonction originelle :** N'oublie pas les espaces logiques du passé du lieu (stockage, maintenance, traitement, administration, infirmerie, générateurs). Le bâtiment doit raconter ce qu'il était avant.
- **Échelle systématique et régulière :** Précise les dimensions (m², hauteurs) et les distances (temps de parcours) de manière homogène pour *toutes* les zones, afin que le MJ puisse juger des déplacements de façon réaliste.
- **Hiérarchie des espaces :** Distingue les zones de transition, d'exploration, de confrontation, de repos, d'information, de décision et de climax.

### 2. Circulation, Choix et Anti-Linéarité
- **Réseau et Connexions :** Précise le nombre de sorties par pièce, les passages étroits, conduits, escaliers, ascenseurs, passages secrets.
- **Boucles et Raccourcis véritables :** Évite la progression linéaire (ex: une descente en ligne droite). Crée des boucles de circulation réelles permettant de contourner des menaces entières ou d'approcher un objectif par de multiples angles.
- **Éclatement de la Zone Finale (Climax) :** Ne concentre pas tous les objectifs (boss, données, IA, trésor, autodestruction) dans une seule pièce finale. Répartis-les sur plusieurs sous-zones pour forcer l'exploration.
- **Gestion des accès multiples :** Si plusieurs entrées existent, elles doivent avoir des conséquences réelles (alerte différente, rencontres modifiées, atouts différents).
- **Valorisation des zones de transition :** Les sas, couloirs et coursives servent à l'anticipation, aux embuscades ou à modifier l'ambiance.
- **Verticalité :** Exploite les passerelles, fosses, puits, mezzanines, et conduits supérieurs.

### 3. Écologie, Flux et Interactions
- **Flux quotidiens crédibles :** Reconstitue les déplacements réels : où vont les déchets ? Par où passe la nourriture ? Comment le matériel est-il acheminé ? Quelles sont les rondes du personnel ?
- **Circulation des ressources (L'infrastructure) :** D'où vient l'énergie ? Par où passent l'air, l'eau, les communications ? (Ce sont des leviers tactiques pour les PJ).
- **Interactions systémiques :** Une action dans la pièce A (ex: couper le courant) doit affecter les autres zones (ouverture de portes, caméras HS).
- **Répartition :** Disperse intelligemment les indices, ressources, accès et dangers.
- **Évolution spatiale détaillée :** Si le lieu change (inondation, effondrement, coupure), détaille les conséquences *concrètes* sur chaque zone et chaque itinéraire. Ne reste pas vague.

### 4. Lisibilité pour le MJ (GDR-001)
- **Texte / Carte :** S'il y a un plan (ou si la disposition l'implique), les descriptions doivent correspondre numériquement et spatialement de manière évidente.
- **Structure stable :** Utilise un format de description homogène pour que le MJ trouve l'information instantanément à la table.

---

## ⚙️ Méthodologie (Step-by-Step)

1. **Analyse de la demande :** Audites-tu un lieu existant ou en crées-tu un nouveau ? Identifie l'échelle et la fonction centrale originelle et actuelle.
2. **Graphe Spatial (Schéma) :** Conçois le "Squelette" du lieu avec des *nœuds* (les salles sous-divisées) et des *liens* (les couloirs, conduits, portes) formant de vraies boucles. Représente-le de manière explicite (texte formaté ou diagramme Mermaid).
3. **Audit via la Synthèse :** Assure-toi que les macro-zones sont subdivisées, que le climax est éclaté, que la logique architecturale prime sur l'artifice, et que les flux (énergie, déchets, PNJ) sont crédibles.
4. **Rédaction Actionnable :** Rédige les pièces en respectant les **GDR**, de manière modulaire et en précisant l'échelle partout.

## 📋 Format de Zone Recommandé

Pour présenter efficacement une zone ou une pièce (et non une simple macro-zone), utilise cette structure :

```markdown
### [Numéro/Nom de la Pièce] - [Fonction Actuelle & Passée]
- **Accès & Adjacences :** (ex: *Porte Nord vers [Zone 2 - Sas], Conduit de 50cm au plafond vers [Zone 5]*)
- **Repères visuels & Échelle exacte :** (ex: *Salle carrée de 20x20m, 5m de plafond, passerelles rouillées, éclairage stroboscopique*)
- **Flux & Occupants :** (ex: *2 gardes patrouillent toutes les 10 min. Point de passage des chariots de minerai/déchets.*)
- **Ressources, Infrastructures & Vestiges :** (ex: *Générateur principal. Anciennes cuves de traitement. Si désactivé, l'aile Est s'éteint.*)
- **Dangers & Obstacles :** (ex: *Fosse de refroidissement (chute mortelle) au centre*)
- **Évolution spatiale (si déclenchée) :** (ex: *En cas de coupure de courant, les portes magnétiques s'ouvrent.*)
```

Ce skill s'assure que le lieu généré n'est pas qu'une liste d'ambiances ou un donjon artificiel, mais un véritable complexe architectural logique, précis, systémique et prêt à être joué.
