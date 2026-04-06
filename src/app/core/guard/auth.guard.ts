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
import { canonicalizeAppRoles, rolesFromJwtPayload } from '../utils/app-roles';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const currentUser = this.authService.getCurrentUserFromStorage();
    const roles = canonicalizeAppRoles(currentUser?.roles || []);

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

    let effectiveRoles = roles;
    if (effectiveRoles.length === 0) {
      try {
        const payload = JSON.parse(atob(currentUser.bearer.split('.')[1])) as Record<string, unknown>;
        effectiveRoles = rolesFromJwtPayload(payload);
      } catch {
        /* ignore */
      }
    }

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

    if (isRestricted && isPersonnel) {
      this.router.navigate(['/dashboardActivite'], { replaceUrl: true });
      return false;
    }

    return true;
  }
}
