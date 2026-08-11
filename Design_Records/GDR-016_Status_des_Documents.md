---
type: gdr
date: 2026-06-15
tags: [design-record, status, ai-instruction]
status: Accepté
scope: Transverse
ai-first: true
---
# GDR-016 : Status des Documents et Verrouillage

## 1. Contexte & Problématique
Il est crucial de pouvoir distinguer les documents en cours de rédaction de ceux qui sont finalisés et prêts à être joués ou consultés sans modification ultérieure. En l'absence d'indicateur clair, les agents IA risquent de modifier des documents déjà validés et de corrompre des informations approuvées, et les utilisateurs humains ne savent pas si un document est prêt.

## 2. La Règle de Design (La Décision)
Chaque document Markdown de la campagne DOIT comporter un attribut `status` dans son *front matter*. 

Les valeurs autorisées pour cet attribut sont :
- `brouillon` : Le document est en cours de création, il est incomplet et peut être librement modifié.
- `en_relecture` : Le document est complet mais nécessite une validation (humaine ou AI).
- `final` : Le document est terminé et validé. **IL NE DOIT PLUS ÊTRE MODIFIÉ** par un agent IA ou un humain (sauf exception majeure justifiée par un erratum).

**Instruction stricte pour les IA :** Avant de modifier un fichier, l'agent IA DOIT vérifier l'attribut `status` de son *front matter*. Si le `status` est `final`, l'agent IA doit refuser la modification, ne pas éditer le fichier, et en informer l'utilisateur.

## 3. Périmètre d'Application
- [x] Campagne
- [x] Scénario
- [x] Lore / Ambiance
- [x] Règles / Système
- [x] Module / Outil
- [x] Transverse (Tous)

## 4. Exemple Concret d'Application
*Avant (Non-conforme) :*
```yaml
---
type: poi
tags: [lieu]
---
```

*Après (Conforme) :*
```yaml
---
type: poi
tags: [lieu]
status: final
---
```

## 5. Exceptions
Les index automatiques (comme le dashboard principal) et les fichiers de log ou de configuration IA qui ne font pas partie du lore jouable peuvent être exemptés de cette règle de verrouillage, ou mis à jour automatiquement par le système.

## 6. Conséquences
- Tous les documents existants dans le module en cours (ex: *Sables et Éclats d'Étoile*) ont été mis à jour pour inclure un `status` (ex: `brouillon`).
- Tous les nouveaux templates ou scripts de génération devront inclure cet attribut.

---
## Historique & Traçabilité
- **Créé le :** 2026-06-15
- **Modifié le :**
- **Remplace :** N/A
