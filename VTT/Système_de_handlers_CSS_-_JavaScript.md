# Wizzlethorpe Vaults — Système de handlers CSS / JavaScript

## 1. Principe

Les **handlers** permettent d’étendre le moteur de rendu de Vaults sans modifier son code source.

Ils peuvent servir à deux choses complémentaires :

1. **Transformer du Markdown particulier** en Markdown ou HTML personnalisé.
    
2. **Embarquer du CSS et du JavaScript** dans le site généré, avec possibilité de les importer également dans Foundry VTT.
    

Ils sont chargés au moment du `vaults build`, `vaults preview` ou `vaults push`.

Architecture générale :

```text
Obsidian / Markdown
        │
        ▼
   Vaults handlers
        │
        ├── transformation Markdown / HTML
        ├── CSS
        └── JavaScript
        │
        ├───────────────────┐
        ▼                   ▼
    Site Web            Foundry VTT
                       (si autorisé)
```

---

# 2. Emplacement

Les handlers se placent obligatoirement dans :

```text
.vaults/
└── handlers/
```

Exemple :

```text
Monde/
├── .vaults/
│   └── handlers/
│       ├── coa-theme.mjs
│       ├── coa-theme.css
│       └── coa-theme.runtime.js
│
├── Campagne/
├── Localisations/
├── PNJs/
└── settings.md
```

Le fichier définissant le handler doit avoir l'extension :

```text
.mjs
```

Les fichiers JavaScript destinés au navigateur utilisent normalement :

```text
.js
```

Vaults ne traite comme modules de handlers que les fichiers `.mjs`. Les `.js` présents dans le même dossier ne sont chargés que lorsqu'un handler les référence dans ses assets.

---

# 3. Deux types de handlers

Vaults prend en charge deux mécanismes.

## Handler inline

Il intercepte une syntaxe de ce type :

```markdown
`prefix: contenu`
```

Par exemple :

```markdown
`npc: Thrall`
```

avec :

```javascript
export const handler = {
  inline: "npc",

  render(content) {
    return {
      markdown: `**PNJ :** [[${content}]]`,
    };
  },
};
```

Le résultat est réinjecté dans le moteur Markdown.

---

## Handler code block

Il intercepte un bloc :

````markdown
```quest
Sécuriser la route vers Razor Hill
```
````

avec :

```javascript
export const handler = {
  codeBlock: "quest",

  render(content, ctx) {
    return {
      html: `<div class="coa-quest">${ctx.escape(content)}</div>`,
    };
  },
};
```

Vaults documente explicitement les deux formes `inline` et `codeBlock`.

---

# 4. Deux types de résultat

Un handler peut retourner :

```javascript
{ markdown: "..." }
```

ou :

```javascript
{ html: "..." }
```

### `markdown`

Le résultat repasse dans la chaîne normale de traitement Vaults.

À privilégier lorsque l'on souhaite conserver les fonctionnalités Markdown :

- wikilinks ;
    
- callouts ;
    
- listes ;
    
- emphase ;
    
- etc.
    

### `html`

Le HTML est inséré directement dans la page après sanitisation par Vaults.

À utiliser pour construire de vrais composants :

```html
<div class="coa-quest">
...
</div>
```

Vaults documente explicitement ces deux modes.

---

# 5. Ajouter du CSS

Un handler peut déclarer des feuilles de style :

```javascript
export const handler = {
  inline: "coa-theme",

  assets: {
    styles: ["./coa-theme.css"],
  },

  render(content, ctx) {
    return {
      html: ctx.escape(content),
    };
  },
};
```

Vaults rassemble les CSS déclarés par les handlers dans :

```text
/_handlers.css
```

et les injecte dans le site généré.

Cela permet de transformer profondément l'apparence du wiki :

```css
article h2 {
  border-bottom: 2px solid #a4813d;
}

.callout {
  border-radius: 4px;
}

.coa-quest {
  padding: 1rem;
  border: 1px solid #a4813d;
}
```

Il est donc possible d'utiliser les handlers comme un véritable **système de thème Vaults**.

---

# 6. Ajouter du JavaScript

Même principe :

```javascript
assets: {
  scripts: ["./coa-theme.runtime.js"],
}
```

Vaults rassemble les scripts déclarés dans :

```text
/_handlers.js
```

qui est ensuite chargé par le site.

Exemple :

```javascript
(function () {
  document
    .querySelectorAll(".coa-quest")
    .forEach((element) => {
      // comportement interactif
    });
})();
```

Vaults recommande d'encapsuler le runtime dans une IIFE afin de ne pas polluer l'espace global JavaScript.

Le JavaScript permet par exemple :

- accordéons ;
    
- boutons ;
    
- filtres ;
    
- widgets ;
    
- interactions avec les éléments générés par un handler ;
    
- affichage dynamique.
    

---

# 7. Un même handler peut associer HTML + CSS + JS

Exemple conceptuel :

```text
quest.mjs
   │
   ├── transforme ```quest
   │
   ├── quest.css
   │
   └── quest.runtime.js
```

avec :

```javascript
export const handler = {
  codeBlock: "quest",

  assets: {
    styles: ["./quest.css"],
    scripts: ["./quest.runtime.js"],
  },

  render(content, ctx) {
    return {
      html: `
        <section class="coa-quest">
          ${ctx.escape(content)}
        </section>
      `,
    };
  },
};
```

On peut donc construire progressivement une petite bibliothèque de composants :

```text
Handlers
├── theme
├── quest
├── npc
├── location
├── warning
├── encounter
└── loot
```

---

# 8. Import du CSS/JS dans Foundry

Le module Foundry Vaults peut également récupérer les assets des handlers.

Dans les réglages du Vault dans Foundry :

```text
Import handler stylesheets (CSS)
Import handler scripts (JS)
```

Ces deux options sont désactivées par défaut.

Un handler doit également **autoriser explicitement** son asset à être utilisé dans Foundry. Le README Foundry précise ce principe et indique que CSS et JS sont contrôlés indépendamment.

Le handler de démonstration actuellement présent dans le dépôt utilise :

```javascript
assets: {
  scripts: ["./clicker.runtime.js"],
  styles: ["./clicker.css"],

  foundry: {
    scripts: true,
    styles: true,
  },
},
```

Donc pour notre thème :

```javascript
assets: {
  styles: ["./coa-theme.css"],

  foundry: {
    styles: true,
    scripts: false,
  },
},
```

permettrait au CSS d'être utilisé :

```text
                       coa-theme.css
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
         Site Vaults                 Foundry VTT
```

### Attention à une incohérence de documentation

Le README Foundry décrit textuellement ce mécanisme comme :

```text
assets.targets.foundry.{styles,scripts}
```

mais l'exemple fonctionnel actuellement fourni dans le dépôt utilise :

```javascript
assets.foundry
```

Pour notre implémentation, il faudra donc se caler sur **la syntaxe réellement supportée par la version installée**. L'exemple actuel du dépôt constitue à ce stade la référence la plus concrète.

---

# 9. Sécurité côté Foundry

L'import CSS et surtout JavaScript n'est pas automatique.

Le module Foundry précise que :

- CSS : désactivé par défaut ;
    
- JS : désactivé par défaut ;
    
- l'activation du JavaScript demande confirmation ;
    
- si le bundle JavaScript change, Foundry redemande une confirmation au cours de la session ;
    
- les bundles suivent les permissions des rôles Vaults.
    

C'est important car un handler JavaScript est du **code exécuté dans Foundry**.

Il faut donc considérer :

```text
.vaults/handlers/
```

comme du code applicatif et non comme de simples fichiers de contenu.

Vaults rappelle également que les handlers s'exécutent avec les mêmes permissions que le processus de build : il ne faut utiliser que des handlers auxquels on fait confiance.

---

# 10. CSS partagé Web / Foundry

Pour Champions of Azeroth, l'intérêt principal est de pouvoir définir une charte commune.

Je recommande :

```text
.vaults/
└── handlers/
    └── coa-theme/
```

ou, avec la structure actuellement supportée :

```text
.vaults/
└── handlers/
    ├── coa-theme.mjs
    ├── coa-theme.css
    └── coa-theme.runtime.js
```

Le CSS pourrait être organisé en trois couches :

```css
/* ========================================
   1 — Design tokens
   ======================================== */

:root {
  --coa-background: ...;
  --coa-text: ...;
  --coa-accent: ...;
  --coa-border: ...;
}


/* ========================================
   2 — Site Vaults
   ======================================== */

article {
   ...
}


/* ========================================
   3 — Foundry VTT
   ======================================== */

.journal-entry-content {
   ...
}
```

Objectif :

```text
               Design system CoA
                       │
               coa-theme.css
                       │
           ┌───────────┴───────────┐
           ▼                       ▼
      Wiki Cloudflare          Foundry VTT
```

---

# 11. Bien scoper le CSS

C'est particulièrement important côté Foundry.

Éviter :

```css
h1 {
  color: red;
}
```

car cela pourrait toucher beaucoup plus que les Journaux Vaults.

Préférer :

```css
.journal-entry-content h1 {
  ...
}
```

voire, si une classe spécifique Vaults est disponible :

```css
.vaults-journal .coa-quest {
  ...
}
```

L'objectif est d'éviter qu'un thème Champions of Azeroth modifie :

- les Actor Sheets ;
    
- les Item Sheets ;
    
- les fenêtres Foundry ;
    
- les autres modules.
    

Les sélecteurs précis devront être établis à partir du DOM réel de Foundry V14 et du HTML actuellement produit par Vaults.

---

# 12. Handlers et rôles

Vaults applique également les contrôles de rôle aux contenus et bundles importés.

Côté Foundry, les assets de handlers sont role-gated : un bundle réservé à un niveau `dm` n'est pas exposé à un utilisateur public.

Cela permet à terme d'imaginer :

```text
PUBLIC
├── thème général
└── composants de lecture

PLAYER
├── widgets de quête
└── outils joueurs

DM
├── outils de préparation
└── widgets réservés MJ
```

---

# 13. Built-ins

Vaults fournit déjà au moins un handler intégré :

```markdown
`dice: 1d20+5`
```

qui génère un bouton permettant de relancer le dé dans le navigateur.

Un handler utilisateur peut remplacer un built-in s'il utilise le même nom.

Cela montre que les handlers ne sont pas uniquement un système de thème : ils constituent réellement un **système d'extension du Markdown de Vaults**.

---

# 14. Architecture recommandée pour Champions of Azeroth

Je recommande de distinguer deux catégories.

## Handler global de thème

```text
coa-theme.mjs
coa-theme.css
```

Responsable de :

- palette ;
    
- typographie ;
    
- titres ;
    
- liens ;
    
- images ;
    
- tableaux ;
    
- callouts ;
    
- citations ;
    
- présentation générale.
    

Il doit être compatible :

```text
Web + Foundry
```

---

## Handlers fonctionnels

À créer uniquement lorsqu'un vrai besoin apparaît :

```text
quest.mjs
quest.css

npc.mjs
npc.css

encounter.mjs
encounter.css
encounter.runtime.js
```

Ils permettent d'ajouter des composants sémantiques spécialisés sans polluer le Markdown classique.

---

# 15. Pipeline cible

```text
                     OBSIDIAN
                         │
                         │ Markdown
                         ▼
                 Vaults renderer
                         │
                 .vaults/handlers
                         │
         ┌───────────────┼────────────────┐
         │               │                │
         ▼               ▼                ▼
      Markdown           HTML            Assets
                                         │
                                  ┌──────┴──────┐
                                  ▼             ▼
                                CSS             JS
                                  │             │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
              SITE CLOUDFLARE              FOUNDRY VTT
```

---

# 16. Règle d'architecture à retenir

Les responsabilités doivent rester séparées :

```text
Markdown
   = contenu

Frontmatter
   = métadonnées / permissions / Foundry

Handler
   = transformation sémantique

CSS
   = présentation

JavaScript
   = comportement
```

Pour Champions of Azeroth, la priorité devrait être de commencer par :

```text
coa-theme.mjs
coa-theme.css
```

sans JavaScript.

Le JS ne devrait être ajouté que lorsqu'un composant nécessite réellement une interaction.

Cela permettra d'obtenir rapidement une **identité graphique commune au site Vaults et aux Journaux Foundry**, tout en conservant Obsidian comme source de vérité et sans développer un fork spécifique de Vaults.