# Au Nom de la Horde - Champions of Azeroth (D&D 5e Hack)

[![Obsidian Vault](https://img.shields.io/badge/Obsidian-Vault-7c3aed?logo=obsidian)](https://obsidian.md/)
[![D&D 5e](https://img.shields.io/badge/D&D-5e-red?logo=dungeons-and-dragons)](https://dnd.wizards.com/)
[![AI-Assisted](https://img.shields.io/badge/AI-Assisted-blue?logo=google-gemini)](https://gemini.google.com/)

Bienvenue dans le dépôt de la campagne **Au Nom de la Horde**, un univers de jeu de rôle basé sur un hack de **Dungeons & Dragons 5e** se déroulant dans l'univers de **Warcraft/Azeroth** (Champions of Azeroth).

Ce projet est structuré comme un **Vault Obsidian** et sert de bible de campagne, d'encyclopédie de lore, et de gestionnaire de production assisté par Intelligence Artificielle.

## 📖 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Structure du Vault](#-structure-du-vault)
- [Utilisation et Installation](#-utilisation-et-installation)
- [Gestion Assistée par IA](#-gestion-assistée-par-ia)
- [Règles de Design (GDR)](#-règles-de-design-gdr)
- [Contact et Auteur](#-contact-et-auteur)

## 🎯 À propos du projet

Cette campagne met l'accent sur les aventures de personnages évoluant au sein de la Horde (ou en lien avec elle) dans le monde d'Azeroth. Le vault Obsidian centralise :
- **Le Lore** : Lieux, factions, PNJs et chronologies.
- **La Production** : Scénarios, bibles de lore, règles homebrew et suppléments.
- **Les Sessions** : Suivi des campagnes actives, logs et comptes-rendus.
- **Le Game Design** : Processus de création documenté via des Game Design Records (GDR).

## 🗂️ Structure du Vault

L'architecture du projet est pensée pour faciliter la navigation et l'interaction avec des agents IA :

| Dossier | Description |
| :--- | :--- |
| `📁 Campagnes/` | Espace de travail. Contenu en cours de rédaction (aventures, brouillons) en attente de validation. |
| `📁 Regles/` | Règles du jeu, classes, races, sorts, équipement. |
| `📁 Monde/` | Contenu de lore validé. Répertoire utilisé pour générer le contenu dans Foundry VTT (via Wizzlethorpe Vaults). |
| `📁 Compendiums/` | Contenu formaté pour compilation vers Foundry VTT (via `vfmc`). |
| `📁 Production/` | Répertoire de destination du contenu validé pour la génération de PDF finaux ou livres. |
| `📁 Sources/` | Documents de référence, extractions de livres et canon. |
| `📁 Design_Records/` | Règles d'édition et de game design immuables (GDR). |
| `📁 Templates/` | Modèles Markdown pour la création standardisée de contenu. |
| `📁 Bases/` | Vues de base de données (Obsidian Dataview / Bases). |
| `📁 Assets/` | Ressources visuelles (cartes, handouts, illustrations). |
| `📁 Logs/` | Historiques de sessions de dev IA et logs opérationnels. |

## 🚀 Utilisation et Installation

Ce projet est conçu pour être ouvert avec **Obsidian**, un puissant outil de prise de notes basé sur des fichiers Markdown locaux.

1. Téléchargez et installez [Obsidian](https://obsidian.md/).
2. Clonez ce dépôt sur votre machine locale.
3. Ouvrez Obsidian, choisissez **Ouvrir un dossier en tant que chambre forte (Vault)** et sélectionnez le dossier cloné.
4. Consultez le fichier d'entrée principal : `Index_du_Vault.md`.

## 🤖 Gestion Assistée par IA

Ce vault a été spécialement configuré pour être géré et enrichi en collaboration avec des agents IA. 

**Les objectifs principaux de l'IA sur ce projet sont :**
- **Organiser la roadmap :** Suivre et structurer les tâches du projet.
- **Ordonner la création des fichiers :** Garantir le respect du workflow (brouillons vs contenu validé).
- **Générer du contenu :** Créer des PNJ, factions, lieux et scénarios.
- **Aider à l'invention :** Brainstormer et proposer des idées créatives pour la campagne.
- **Rechercher le lore :** Sourcer et respecter le canon de WoW Classic (Warcraft).

**Fonctionnement technique :**
- L'IA utilise le manuel opératoire `_CLAUDE.md` (ou `GEMINI.md` / `AGENTS.md`) pour comprendre les conventions du vault.
- Chaque note générée par l'IA contient des métadonnées (frontmatter YAML) spécifiques pour maintenir la structure de la base de données (tags, types, niveau de confiance, etc.).
- Les requêtes et instructions sont gérées via un système de "skills" et "commands" (ex: `/obsidian-person`, `/obsidian-location`).

## 🎲 Intégration Foundry VTT (Wizzlethorpe Vaults)

Ce projet est pensé pour s'intégrer directement avec **Foundry VTT** via le module **Wizzlethorpe Vaults**.
- **Obsidian** est la source de vérité pour le contenu éditorial et de référence (Lore, scénarios, caractéristiques de base).
- **Foundry VTT** reste la source de vérité pour l'état vivant de la partie (HP actuels, position des tokens, etc.).

Les notes Markdown peuvent définir un frontmatter `foundry:` afin d'être automatiquement converties en entités natives (Actors, Items, Journals) lors de la synchronisation.

## 📐 Règles de Design (GDR)

La création de contenu dans ce projet obéit à des **Game Design Records (GDR)** stricts, documentés dans le dossier `Design_Records/`. Toute nouvelle entité (PNJ, lieu, faction, scénario) doit respecter ces conventions pour assurer la cohérence et la jouabilité de la campagne.

## ✉️ Contact et Auteur

- **Auteur / MJ :** Hervé Darritchon
- **Email :** herve.darritchon@gmail.com
