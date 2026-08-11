---
type: gdr
date: 2026-06-16
tags: [design-record, scenario, moteur-jeu, lieu, poi]
status: Accepté
scope: Scénario, Campagne, Lore
ai-first: true
---
# GDR-017 : Moteur de Jeu - Décision, Choix, Tension

## 1. Contexte & Problématique
Une scène, un Lieu ou un Point of Interest (POI) de JDR peut avoir une belle ambiance, un "fuselage" narratif très travaillé, des PNJ forts, et pourtant s'effondrer à la table car les joueurs n'ont rien de concret à faire. La liberté totale dans un environnement vide (ex: une pièce sans porte, ou avec trois portes identiques) est stérile. Les scènes et les lieux explorables doivent être conçus autour d'un moteur de jeu fonctionnel avant de chercher l'esthétique narrative.

## 2. La Règle de Design (La Décision)
Avant de finaliser le lore, les arcs ou les descriptions d'une scène, d'un lieu ou d'un POI, le concepteur (MJ ou IA) doit s'assurer qu'il intègre les **3 piliers du moteur de jeu** (d'inspiration OSR) :
1. **La Décision :** La situation appelle une action ("Que fais-tu ?"), pas seulement un ressenti. Les joueurs doivent avoir l'opportunité d'agir concrètement.
2. **Les Choix (différenciés) :** Les options offertes aux joueurs doivent être comparables et distinguables grâce à des indices (ex: odeur, lumière, bruit). Les faux choix ou les choix purement arbitraires sont proscrits.
3. **La Tension :** Il doit y avoir une pression fictionnelle qui donne une raison d'agir *maintenant* ("ne rien faire" ne doit pas être une option viable). La tension donne du poids à la décision (conséquences) et crée du rythme en empêchant l'analyse infinie.

## 3. Périmètre d'Application
- [x] Campagne
- [x] Scénario
- [x] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [ ] Transverse (Tous)

## 4. Exemple Concret d'Application

**Avant (À éviter) :**
> *La pièce est sombre, les murs suintent d'une substance visqueuse. L'ambiance est terrifiante. Il y a trois portes métalliques.*
*(Problème : Belle ambiance, mais liberté stérile. Les choix sont arbitraires. Pas de pression pour avancer).*

**Après (Application de la règle) :**
> *La pièce est sombre. Sous la porte de gauche filtre une lumière bleutée vacillante. Derrière la porte centrale, on entend un raclement lourd et régulier. La porte de droite est verrouillée, mais son panneau de commande semble endommagé. Soudain, l'écoutille au-dessus de vous grince dangereusement, et une nuée de créatures commence à s'y faufiler. Que faites-vous ?*
*(Résultat : Choix différenciés par des indices, décision claire requise, et tension active forçant l'action immédiate).*

## 5. Exceptions
Cette grille est moins stricte pour les scènes purement contemplatives, intimes ou relationnelles (ex: un moment de répit, un dialogue émotionnel). Cependant, même dans ces scènes, il reste bénéfique d'inclure des éléments à arbitrer (une vérité à dire ou à cacher, une dette à honorer, une relation à sacrifier).

## 6. Conséquences
- **Pour l'IA génératrice :** Toute proposition de scène, de lieu explorable ou d'épreuve doit être soumise à ce filtre. Toute situation "bouchon", cinématique forcée ou zone sans indices devra être reprise pour y injecter du choix lisible et une pression (temporelle, physique, morale).
- **Pour les documents existants :** Les scénarios et campagnes en cours devront être audités avec cette grille ("Anti-railroading review") pour s'assurer qu'ils offrent de vrais espaces de jeu.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-16
- **Modifié le :**
- **Remplace :** N/A
