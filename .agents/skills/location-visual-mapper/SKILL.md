---
name: location-visual-mapper
description: Génère un schéma Mermaid d'un lieu (plan visuel pour le MJ) avec les salles, les connexions et l'état des accès.
---

# Location Visual Mapper

Utilise ce skill lorsque l'utilisateur te demande de générer un plan visuel, un schéma de circulation ou une carte Mermaid pour un lieu existant ou en cours de création. 

## 🎯 Objectif
Fournir au Meneur de Jeu (MJ) une représentation visuelle immédiate, synthétique et actionnable d'un lieu. Ce schéma doit permettre au MJ de visualiser instantanément l'adjacence des pièces, les itinéraires possibles et l'état de chaque accès (verrouillé, piégé, secret, ouvert, etc.).

## 📜 Principes de construction du schéma Mermaid

### 1. Nœuds (Les Salles)
- **Concision avant tout :** Les nœuds du graphe doivent contenir uniquement le nom ou le numéro de la salle, et éventuellement une très courte fonction (ex: `Z1[Zone 1: Sas d'entrée]`).
- **Formes :** Utilise des formes de nœuds simples pour garder le schéma lisible (rectangles `[]` ou bords arrondis `()`).

### 2. Liens (Les Accès et Connexions)
- **Typologie d'accès :** Chaque flèche (`-->` ou `---`) doit inclure un texte décrivant l'accès.
- **État de l'accès :** Précise l'état actuel et le type de porte. Exemples :
  - `-->|Porte blindée (Verrouillée)|`
  - `-->|Conduit étroit (Ouvert)|`
  - `-.->|Passage secret (Caché)|`
  - `==>|Ascenseur (En panne)|`
  - `-->|Double porte (Ouverte)|`
- **Direction :** Utilise des flèches unidirectionnelles (`-->`) si le passage est à sens unique (ex: toboggan, chute) ou bidirectionnelles (`<-->` ou `---`) si la circulation est fluide dans les deux sens. 

### 3. Structure et Lisibilité
- **Orientation :** Utilise `graph TD` (Haut vers Bas) ou `graph LR` (Gauche vers Droite) selon ce qui rend le graphe le plus lisible.
- **Groupement (Subgraphs) :** Si le lieu possède plusieurs étages ou ailes très distincts, n'hésite pas à utiliser des `subgraph` pour grouper visuellement les zones. **RÈGLE STRICTE MERMAID :** N'utilise JAMAIS de caractères spéciaux (espaces, parenthèses `()`, esperluettes `&`) directement dans l'ID du subgraph. Utilise toujours la syntaxe stricte avec identifiant et label entre crochets : `subgraph S1 [Niveau 1 (Détails)]`.

## ⚙️ Méthodologie (Step-by-Step)

1. **Lecture du lieu :** Analyse la description du lieu fournie par l'utilisateur (ou générée par un autre skill). Identifie toutes les salles distinctes et leurs adjacences.
2. **Extraction des accès :** Pour chaque lien entre deux salles, détermine la nature physique de la connexion (couloir, porte, puits, etc.) et son état par défaut (ouvert, fermé, bloqué, biométrique, etc.).
3. **Génération du code :** Rédige le bloc de code ```mermaid contenant le graphe.
4. **Vérification syntaxique :** Assure-toi que les textes dans les liens ne cassent pas la syntaxe Mermaid (évite les caractères spéciaux non échappés).

## 📋 Exemple de sortie attendue

```markdown
Voici le plan visuel du lieu pour le MJ :

\`\`\`mermaid
graph TD
    subgraph Surface
        Ext[Extérieur / Désert] -->|Entrée béante| Z1[Z1: Hall d'accueil]
        Ext -.->|Grille rouillée (Cadenas)| Z4[Z4: Ventilation]
    end

    subgraph Sous-sol
        Z1 -->|Porte de sécurité (Ouverte)| Z2[Z2: Couloir Principal]
        Z1 -->|Monte-charge (Bloqué)| Z3[Z3: Réserve]
        Z2 -->|Porte blindée (Code)| Z5[Z5: Salle des Serveurs]
        Z4 -->|Trappe au plafond| Z5
        Z3 -->|Mur fissuré (À percer)| Z5
    end
\`\`\`
```

Ce skill s'assure que le MJ dispose toujours d'un plan topologique clair, centré sur la navigabilité et les obstacles physiques, pour fluidifier l'exploration à la table.
