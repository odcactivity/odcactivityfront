export type ResponsableEntiteRole =
  | 'RESPONSABLE_ODK'
  | 'RESPONSABLE_FABLAB'
  | 'RESPONSABLE_OFAB'
  | 'RESPONSABLE_MULTIMEDIA';

export interface ResponsableEntiteProfile {
  role: ResponsableEntiteRole;
  routePrefix: string;
  title: string;
}

export const RESPONSABLE_ENTITE_PROFILES: ResponsableEntiteProfile[] = [
  { role: 'RESPONSABLE_ODK', routePrefix: 'responsable-odk', title: 'Responsable ODK (Kalanso)' },
  { role: 'RESPONSABLE_FABLAB', routePrefix: 'responsable-fablab', title: 'Responsable FabLab' },
  { role: 'RESPONSABLE_OFAB', routePrefix: 'responsable-ofab', title: 'Responsable Orange Fab' },
  { role: 'RESPONSABLE_MULTIMEDIA', routePrefix: 'responsable-multimedia', title: 'Responsable Multimedia' },
];

export const RESPONSABLE_ENTITE_ROLES = RESPONSABLE_ENTITE_PROFILES.map((p) => p.role);

export function profileForRole(role: string | undefined | null): ResponsableEntiteProfile | null {
  if (!role) {
    return null;
  }
  const r = role.trim().toUpperCase();
  return RESPONSABLE_ENTITE_PROFILES.find((p) => p.role === r) ?? null;
}

export function profileFromRoles(roles: string[]): ResponsableEntiteProfile | null {
  for (const p of RESPONSABLE_ENTITE_PROFILES) {
    if (roles.includes(p.role)) {
      return p;
    }
  }
  return null;
}

export function dashboardPathForRoles(roles: string[]): string | null {
  const p = profileFromRoles(roles);
  return p ? `/${p.routePrefix}/dashboard` : null;
}

export function activitesPathForRoles(roles: string[]): string | null {
  const p = profileFromRoles(roles);
  return p ? `/${p.routePrefix}/activites` : null;
}

/** Entrées sidebar pour un responsable d'entité (indépendant de routes.json déployé). */
export function buildResponsableEntiteMenuItems(profile: ResponsableEntiteProfile) {
  return [
    {
      path: `/${profile.routePrefix}/dashboard`,
      title: 'Dashboard',
      iconType: 'feather',
      icon: 'monitor',
      class: '',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      submenu: [],
      roles: [profile.role],
    },
    {
      path: '/activite',
      title: 'Liste activités',
      iconType: 'feather',
      icon: 'list',
      class: '',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      submenu: [],
      roles: [profile.role],
    },
    {
      path: `/${profile.routePrefix}/activites`,
      title: 'Gestion activités',
      iconType: 'feather',
      icon: 'check-square',
      class: '',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      submenu: [],
      roles: [profile.role],
    },
    {
      path: `/${profile.routePrefix}/courriers`,
      title: 'Courriers délégués',
      iconType: 'feather',
      icon: 'inbox',
      class: '',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      submenu: [],
      roles: [profile.role],
    },
  ];
}

export function isResponsableEntiteMenuPath(path: string | undefined): boolean {
  if (!path) {
    return false;
  }
  if (path === '/activite') {
    return true;
  }
  return RESPONSABLE_ENTITE_PROFILES.some(
    (p) =>
      path === `/${p.routePrefix}/dashboard` ||
      path === `/${p.routePrefix}/activites` ||
      path === `/${p.routePrefix}/courriers`
  );
}
