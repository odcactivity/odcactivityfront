// src/app/core/utils/odc-entite.ts
function normalizeEntiteNom(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/\s+/g, " ").trim();
}
function isOdcPillarEntiteName(nom) {
  const n = normalizeEntiteNom(nom);
  if (!n) {
    return false;
  }
  return n.includes("ORANGE DIGITAL KALANSO") || n.includes("ODK") || n.includes("ORANGE DIGITAL MULTIMEDIA") || n.includes("MULTIMEDIA") || n.includes("ORANGE FABLAB") || n.includes("FABLAB") || n.includes("ORANGE FAB");
}
function filterEntitesOdcPiliers(entites) {
  return entites.filter((e) => isOdcPillarEntiteName(e?.nom));
}

export {
  isOdcPillarEntiteName,
  filterEntitesOdcPiliers
};
//# sourceMappingURL=chunk-WPI52N3A.js.map
