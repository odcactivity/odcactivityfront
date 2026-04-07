import { Entite } from '@core/models/Entite';

export function normalizeEntiteNom(value: string | undefined): string {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Piliers ODC (Kalanso, Fab / FabLab, Multimedia, ODK…) — même périmètre que le tableau de bord.
 * Exclut les autres directions de la division (ex. Orange Digital Center, Fondation, RSE, DCI).
 */
export function isOdcPillarEntiteName(nom: string | undefined): boolean {
  const n = normalizeEntiteNom(nom);
  if (!n) {
    return false;
  }
  return (
    n.includes('ORANGE DIGITAL KALANSO') ||
    n.includes('ODK') ||
    n.includes('ORANGE DIGITAL MULTIMEDIA') ||
    n.includes('MULTIMEDIA') ||
    n.includes('ORANGE FABLAB') ||
    n.includes('FABLAB') ||
    n.includes('ORANGE FAB')
  );
}

export function filterEntitesOdcPiliers(entites: Entite[]): Entite[] {
  return entites.filter((e) => isOdcPillarEntiteName(e?.nom));
}
