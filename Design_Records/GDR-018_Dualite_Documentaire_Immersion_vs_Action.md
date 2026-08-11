---
type: gdr
date: 2026-06-24
tags: [design-record, documentation, immersion, action]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-018 : Dualité Documentaire (Immersion vs Action)

## 1. Contexte & Problématique
Le Vault rassemble deux besoins contradictoires pour le Meneur de Jeu : 
1. **L'immersion et la préparation à froid** : le MJ a besoin de textes riches, de descriptions longues, de contexte historique et de lore pour s'imprégner de la campagne avant la séance.
2. **L'actionnabilité à la table** : en cours de jeu, le MJ n'a pas le temps de lire de longs paragraphes et a besoin d'informations chirurgicales, formatées en listes à puces ou tableaux (cf. GDR-001 et GDR-015).

Un seul document ne peut pas satisfaire ces deux usages sans devenir indigeste ou perdre sa saveur.

## 2. La Règle de Design (La Décision)
Il est officiellement institué une **règle à deux niveaux** pour la documentation de campagne :
1. **Les Documents de Préparation (Immersion) :** Textes longs, riches en lore et en descriptions. Ils doivent contenir le tag de métadonnée `usage: preparation_mj` dans leur en-tête YAML. Ils sont conçus pour être lus avant la séance.
2. **Les Documents de Table (Action) :** Fiches ultra-condensées, Mémentos, fiches de PNJs ou de Lieux utilisant strictement des puces et tableaux. Ils ne contiennent aucun "bruit" narratif superflu.

Lorsqu'un document d'Immersion est rédigé, son "essence" doit systématiquement être extraite vers des Documents de Table. Les deux types coexistent, mais sont utilisés à des moments différents.

## 3. Périmètre d'Application
- [x] Campagne
- [x] Scénario
- [x] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
- **Document de Préparation :** `Sables_et_Éclats_d’Étoile.md` (Contient les intentions, le ton global, les développements du scénario).
- **Document de Table :** `Mémento_Sables_et_Éclats_Actionnable.md` (Contient uniquement la table du NAI, la checklist des actes et les fiches PNJ simplifiées).

## 5. Exceptions
Les notes de règles ou de mécaniques pures n'ont généralement pas besoin d'un niveau d'immersion et peuvent exister uniquement au format "Actionnable".

## 6. Conséquences
Cette règle légitime la conservation des longs textes narratifs, tout en rendant obligatoire leur synthèse dans des modules séparés pour le jeu réel. Les auteurs (et l'IA) ne doivent plus tenter de forcer un document narratif à devenir une fiche de table et vice versa.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-24
- **Modifié le :**
- **Remplace :** N/A
