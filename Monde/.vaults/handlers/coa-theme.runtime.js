(function () {
  console.log("⚔️ CoA Theme loaded: LOK'TAR OGAR!");

  function updateRoleRibbon() {
    // Nettoyer l'ancien bandeau s'il existe (lors des navigations SPA)
    const existing = document.querySelector('.coa-role-ribbon-container');
    if (existing) existing.remove();

    // Chercher le rôle dans le frontmatter généré par Vaults
    let role = "public"; // Rôle par défaut
    const fmEl = document.querySelector('.frontmatter-yaml');
    if (fmEl) {
      const match = fmEl.textContent.match(/^role:\s*['"]?([a-zA-Z0-9_-]+)['"]?$/m);
      if (match) {
        role = match[1].trim().toLowerCase();
      }
    }

    // Créer le conteneur du ruban (pour cacher les débordements de rotation)
    const container = document.createElement("div");
    container.className = "coa-role-ribbon-container";

    // Créer le ruban
    const ribbon = document.createElement("div");
    ribbon.className = "coa-role-ribbon role-" + role;
    ribbon.textContent = role.toUpperCase();
    
    container.appendChild(ribbon);
    document.body.appendChild(container);
  }

  // S'abonner à l'événement 'nav' (SPA routing de Quartz/Vaults)
  document.addEventListener("nav", updateRoleRibbon);
  
  // Exécuter au chargement initial
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateRoleRibbon);
  } else {
    updateRoleRibbon();
  }
})();
