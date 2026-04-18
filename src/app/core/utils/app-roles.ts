import { jwtDecode } from 'jwt-decode';

/**
 * Décode le payload JWT de façon fiable (base64url). `atob` sur le segment milieu échoue souvent → rôles vides → menu latéral vide.
 */
export function decodeJwtPayload(token: string | undefined | null): Record<string, unknown> | null {
  if (!token || typeof token !== 'string') {
    return null;
  }
  try {
    return jwtDecode<Record<string, unknown>>(token);
  } catch {
    return null;
  }
}

/**
 * Rôles alignés avec routes.json et @PreAuthorize côté API (sans préfixe Spring ROLE_).
 */
export function canonicalizeAppRoles(roles: unknown): string[] {
  const roleArray = Array.isArray(roles)
    ? roles
    : typeof roles === 'string'
      ? [roles]
      : [];
  const normalized = roleArray
    .map((r) => {
      let x = String(r).trim().toUpperCase().replace(/\s+/g, '_');
      if (x.startsWith('ROLE_')) {
        x = x.slice(5);
      }
      return x;
    })
    .filter(Boolean);
  const set = new Set(normalized);
  if (set.has('ADMIN') && !set.has('SUPERADMIN')) {
    set.add('SUPERADMIN');
  }
  if (set.has('SUPERADMIN') && !set.has('ADMIN')) {
    set.add('ADMIN');
  }
  return [...set];
}

export function rolesFromJwtPayload(payload: Record<string, unknown> | null | undefined): string[] {
  if (!payload) {
    return [];
  }
  const r = payload['role'];
  if (r != null) {
    if (typeof r === 'object' && r !== null && !Array.isArray(r)) {
      const o = r as Record<string, unknown>;
      if (typeof o['nom'] === 'string') {
        return canonicalizeAppRoles([o['nom']]);
      }
    }
    if (Array.isArray(r)) {
      return canonicalizeAppRoles(r);
    }
    return canonicalizeAppRoles([String(r)]);
  }
  const auth = payload['authorities'];
  if (Array.isArray(auth)) {
    const names = auth.map((a) => {
      if (typeof a === 'string') {
        return a.replace(/^ROLE_/i, '');
      }
      if (a && typeof a === 'object' && 'authority' in (a as object)) {
        return String((a as { authority?: string }).authority || '').replace(/^ROLE_/i, '');
      }
      return String(a);
    });
    return canonicalizeAppRoles(names);
  }
  return [];
}
