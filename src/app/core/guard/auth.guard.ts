/*
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    //console.log('AuthGuard - Utilisateur actuel :', currentUser);
    if (currentUser) {
      // Si l'utilisateur est connecté, il peut accéder aux routes protégées
      return true;
    }
    // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
*/

// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '../service/auth.service';
import {
  canonicalizeAppRoles,
  decodeJwtPayload,
  rolesFromJwtPayload,
  structureCourriersPathForRoles,
} from '../utils/app-roles';
import {
  dashboardPathForRoles,
  activitesPathForRoles,
  RESPONSABLE_ENTITE_PROFILES,
} from '../utils/responsable-entite-config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const currentUser = this.authService.getCurrentUserFromStorage();
    const fromStorage = canonicalizeAppRoles(currentUser?.roles || []);
    const payload = decodeJwtPayload(currentUser?.bearer);
    const fromJwt = payload ? rolesFromJwtPayload(payload) : [];
    const roles = canonicalizeAppRoles([...fromStorage, ...fromJwt]);

    const restrictedRoutes = [
      '/dashboard/main',
      '/entite',
      '/utilisateur',
      '/role',
      '/courrier'
    ];

    const isRestricted = restrictedRoutes.some((path) => state.url.startsWith(path));
    const isPersonnel = roles.includes('PERSONNEL');

    if (!currentUser?.bearer) {
      return this.router.parseUrl('/authentication/signin');
    }

    const effectiveRoles = roles;

    if (effectiveRoles.length === 0) {
      return this.router.parseUrl('/authentication/signin');
    }

    if (state.url.startsWith('/directeur-odc')) {
      const ok =
        effectiveRoles.includes('DIRECTEUR_ODC') ||
        effectiveRoles.includes('SUPERADMIN') ||
        effectiveRoles.includes('ADMIN');
      if (!ok) {
        this.router.navigate([isPersonnel ? '/dashboardActivite' : '/dashboard/main'], { replaceUrl: true });
        return false;
      }
    }

    if (state.url.startsWith('/structure')) {
      const adminOk =
        effectiveRoles.includes('SUPERADMIN') || effectiveRoles.includes('ADMIN');
      let segmentOk = true;
      if (state.url.includes('/structure/fondation/')) {
        segmentOk = adminOk || effectiveRoles.includes('DIRECTEUR_FONDATION');
      } else if (state.url.includes('/structure/rse/')) {
        segmentOk = adminOk || effectiveRoles.includes('DIRECTEUR_RSE');
      } else if (state.url.includes('/structure/dci/')) {
        segmentOk = adminOk || effectiveRoles.includes('DIRECTEUR_DCI');
      }
      const genericOk =
        adminOk ||
        effectiveRoles.includes('DIRECTEUR_FONDATION') ||
        effectiveRoles.includes('DIRECTEUR_RSE') ||
        effectiveRoles.includes('DIRECTEUR_DCI');
      const pathIsSegmented =
        state.url.includes('/structure/fondation/') ||
        state.url.includes('/structure/rse/') ||
        state.url.includes('/structure/dci/');
      const ok = pathIsSegmented ? segmentOk : genericOk;
      if (!ok) {
        this.router.navigate([isPersonnel ? '/dashboardActivite' : '/dashboard/main'], { replaceUrl: true });
        return false;
      }
    }

    if (isRestricted && isPersonnel) {
      this.router.navigate(['/dashboardActivite'], { replaceUrl: true });
      return false;
    }

    const adminRoutes = ['/utilisateur', '/role'];
    const isAdminRoute = adminRoutes.some((path) => state.url.startsWith(path));
    const isAdmin =
      effectiveRoles.includes('SUPERADMIN') || effectiveRoles.includes('ADMIN');
    if (isAdminRoute && !isAdmin) {
      const fallback = isPersonnel ? '/dashboardActivite' : '/dashboard/main';
      return this.router.parseUrl(fallback);
    }

    const structureCourriersPath = structureCourriersPathForRoles(effectiveRoles);
    if (structureCourriersPath) {
      if (
        state.url.startsWith('/dashboard/main') ||
        state.url === '/dashboard' ||
        state.url === '/'
      ) {
        return this.router.parseUrl(structureCourriersPath);
      }
    }

    const responsableDashboard = dashboardPathForRoles(effectiveRoles);
    const responsableActivites = activitesPathForRoles(effectiveRoles);
    if (responsableDashboard) {
      if (state.url.startsWith('/courrier') && responsableActivites) {
        return this.router.parseUrl(responsableActivites);
      }
      if (state.url === '/' || state.url === '/dashboard') {
        return this.router.parseUrl(responsableDashboard);
      }
    }

    for (const profile of RESPONSABLE_ENTITE_PROFILES) {
      if (state.url.startsWith(`/${profile.routePrefix}`) && !effectiveRoles.includes(profile.role)) {
        const fallback = isPersonnel ? '/dashboardActivite' : '/dashboard/main';
        return this.router.parseUrl(fallback);
      }
    }

    return true;
  }
}
