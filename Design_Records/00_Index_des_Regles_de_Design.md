---
type: index
date: 2026-08-08
tags: [design-record, index, rules]
ai-first: true
---
# Index des Règles de Design (GDR - Game Design Records) — Au Nom de la Horde

## 📌 Principe
Cet index recense l'ensemble des **Game Design Records (GDR)** ou **Règles de Design Editoriales** de cette campagne / univers.
Comme les ADR (Architectural Design Records) en informatique, chaque GDR est une règle immuable à l'instant T qui s'applique à la conception, la structuration ou la rédaction des documents du Vault.

*Lorsqu'un agent IA ou un humain crée un nouveau document, il doit se référer aux GDR applicables à son type de document.*

---

## 📚 Règles par Type de Document

### 🌐 Transverses (Applicables partout)
- [[GDR-018_Dualite_Documentaire_Immersion_vs_Action]] - Séparation entre documents d'Immersion (préparation) et documents d'Action (table).
- [[GDR-016_Status_des_Documents]] - Statut obligatoire des documents (brouillon, en_relecture, final) et verrouillage en modification par l'IA.
- [[GDR-015_Descriptions_Courtes_et_Immersives]] - Les descriptions doivent être courtes, engageantes et utiles au jeu.
- [[GDR-012_Utilisation_Obligatoire_des_Templates_Optimises]] - Utilisation exclusive et obligatoire des templates optimisés pour tout nouvel élément.
- [[GDR-001_Presentation_Actionnable_des_Elements]] - Présentation actionnable de tout élément narratif (PNJ, Lieux, Factions, Objets).
- [[GDR-002_Nomenclature_et_Nommage_des_Fichiers]] - Remplacement des espaces par des underscores et utilisation d'émojis de catégorisation.
- [[GDR-003_En-tetes_Standard_Entites]] - Métadonnées en haut de note pour les Factions, Lieux, Organisations.
- [[GDR-004_Tracabilite_du_Lore_et_Facts]] - Règle de sourçage (Canon, Officiel, Inférence, Spéculation).

### 🗺️ Campagnes, Scénarios & Aventures
- [[GDR-005_Regle_du_Ouvre_et_Joue]] - Format "Lancer en 5 minutes" et Handouts obligatoires.
- [[GDR-006_Quota_de_Densite_Jouable]] - Quotas minimaux exigés (3 scènes, 6 rumeurs, etc.).
- [[GDR-007_Structure_Set-Piece]] - Les 4 piliers d'une scène d'action (Entrée, Enjeu, Décor, Escalade).
- [[GDR-013_Rythme_et_Fluidite_des_Flashbacks]] - Alternance entre flashbacks de groupe et individuels pour le rythme.
- [[GDR-017_Moteur_de_Jeu_Decision_Choix_Tension]] - Les scènes doivent être jouables et reposer sur des décisions réelles, des choix lisibles et une tension active.
- [[GDR-021_Voyages_Actifs_et_Enjeux_Logistiques]] - Les voyages doivent être des phases actives impliquant gestion logistique, navigation à risque et rencontres porteuses de situations.
- [[GDR-022_Enquetes_en_Iceberg]] - Structure d'enquête par niveaux de vérité (Iceberg) et génération dynamique d'indices au lieu d'indices scriptés.
- [[GDR-023_Lisibilite_Historique_des_Lieux]] - L'exploration d'un lieu doit révéler son histoire par des indices environnementaux (La Ruine Habitée) à trois échelles (salle, bâtiment, site).
- [[GDR-024_Construction_des_Lieux]] - Construction d'un lieu explorable de manière systémique à partir de son contexte (fonction, flux, histoire) avant ses pièces.

### 📖 Lieux, Factions & Univers
- [[GDR-008_Format_Lieux_POI]] - Structure d'un lieu (Atmosphère, Contrôle, Danger/Opportunité).
- [[GDR-009_Factions_Actives]] - Moteur de Faction (But, Pression temporelle, Actions du MJ).

### 🧩 Modules & Outils
- [[GDR-011_Tables_Aleatoires_Actionnables]] - Chaque entrée doit contenir un "verbe" générant du jeu.

---
## 📝 Créer un nouveau GDR
Pour créer une nouvelle règle de design, copiez le modèle [[_Template_GDR]] et nommez-le `GDR-XXX_Titre_de_la_regle.md`. Ajoutez ensuite le lien dans cet index sous la bonne catégorie.