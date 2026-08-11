---
type: gdr
date: 2026-06-09
tags: [design-record, lore, canon, tracabilite]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-004 : Traçabilité du Lore et "Facts"

## 1. Contexte & Problématique
Dans tout univers de jeu de rôle (qu'il soit issu d'un cadre officiel publié, d'un univers étendu ou d'une création maison / homebrew), il est fondamental de savoir d'où vient une information. Si un MJ improvise sur une information qu'il croyait "Canon" / "Officielle" mais qui était une "Spéculation" d'IA, cela peut créer des incohérences futures dans la campagne.

## 2. La Règle de Design (La Décision)
1. **Marquage :** Tout élément narratif, fait d'univers ou faction doit être qualifié par son origine avec un tag textuel : `[Canon]` / `[Officiel]` (information tirée des ouvrages officiels), `[Inférence]` (déduction logique de l'IA à partir des faits établis) ou `[Spéculation]` (création 100% originale / homebrew).
2. **Preuve (Evidence ID) :** Dans les documents structurés de campagne, toute affirmation considérée comme un fait établi doit faire l'objet d'une traçabilité (pouvoir être reliée à une source via un système d'Evidence ID `eid` ou une citation de livre). Si l'information n'est pas sourcée, elle bascule automatiquement en `[Spéculation]`.

## 3. Périmètre d'Application
- [ ] Campagne
- [ ] Scénario
- [ ] Lore / Ambiance
- [ ] Règles / Système
- [ ] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
**Dans un texte descriptif :**
> La cité portuaire est dirigée par le Conseil des Marchands `[Canon / Officiel]`. Toutefois, de récentes rumeurs indiquent qu'une confrérie de voleurs tente d'infiltrer la trésorerie `[Spéculation - Arc narratif PJ]`.

**Dans un fichier de données structurées (Sources Pack) :**
Une affirmation sur la géographie ou les factions majeures doit pouvoir être vérifiée ou porter son statut d'inférence.

## 5. Exceptions
Les documents purement techniques (mécaniques de dés, tables de rumeurs improvisées génériques) ne nécessitent pas un marquage lourd, sauf si des faits précis du lore y sont insérés.

## 6. Conséquences
Assure un "Fail-Closed" pour la génération d'IA : l'IA ne peut plus "halluciner" de faits présentés comme officiels. Elle est forcée de soit citer la source, soit d'indiquer explicitement que c'est une inférence ou une spéculation, ce qui maintient la pureté de la bible de campagne.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-09
- **Modifié le :**
- **Remplace :** N/A
