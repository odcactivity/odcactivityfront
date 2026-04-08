import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgIf } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '@core';
import { canonicalizeAppRoles, rolesFromJwtPayload } from '@core/utils/app-roles';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgScrollbar,
    NgIf,
    FeatherModule,
    TranslateModule,
  ]
})
export class SidebarComponent implements OnInit {
  sidebarItems: any[] = [];

  nomComplet = 'Utilisateur';
  genre = 'Homme';
  useRole: string[] = [];
  roleLabel = '';
  listMaxHeight = '500';

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.refreshSidebarMenu();
    this.authService.currentUser
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refreshSidebarMenu());

    this.setMenuHeight();
  }

  /** Rôles effectifs : localStorage + complément JWT si besoin (évite menu vide pour directeur ODC). */
  private resolveEffectiveRoles(): string[] {
    const user = this.authService.getCurrentUserFromStorage();
    let raw: unknown = user?.roles ?? [];
    if (!Array.isArray(raw) || raw.length === 0) {
      raw = [];
    }
    let merged = canonicalizeAppRoles(raw);
    if (merged.length === 0 && user?.bearer) {
      try {
        const p = JSON.parse(atob(user.bearer.split('.')[1])) as Record<string, unknown>;
        merged = rolesFromJwtPayload(p);
      } catch {
        /* ignore */
      }
    } else if (user?.bearer) {
      try {
        const p = JSON.parse(atob(user.bearer.split('.')[1])) as Record<string, unknown>;
        const fromJwt = rolesFromJwtPayload(p);
        merged = canonicalizeAppRoles([...merged, ...fromJwt]);
      } catch {
        /* ignore */
      }
    }
    return merged;
  }

  private refreshSidebarMenu(): void {
    this.useRole = this.resolveEffectiveRoles();
    this.roleLabel = this.useRole
      .map((r) => {
        if (r === 'DIRECTEUR') {
          return 'DCIRE';
        }
        if (r === 'DIRECTEUR_ODC') {
          return 'Directeur ODC';
        }
        return r;
      })
      .join(', ');

    const user = this.authService.getCurrentUserFromStorage();
    if (user?.bearer) {
      const decoded = this.authService.getDecodedToken(user.bearer);
      this.nomComplet = `${decoded.prenom} ${decoded.nom}`;
      this.genre = decoded.genre || 'Homme';
    }

    this.sidebarService.getRouteInfo().subscribe((routes) => {
      this.sidebarItems = routes
        .filter((item) => this.itemVisibleForUser(item))
        .map((item) => ({
          ...item,
          submenu: (item.submenu || []).filter((x) => this.itemVisibleForUser(x)),
          open: item.title === 'Directeur ODC',
        }));
    });
  }

  checkRoles(roles?: string[]): boolean {
    if (!roles || roles.length === 0) {
      return true;
    }
    const requestedRoles = canonicalizeAppRoles(roles);
    return requestedRoles.some(r => this.useRole.includes(r));
  }

  /** Les personnels (sans rôle de gestion) ne voient pas la gestion des courriers. */
  private itemVisibleForUser(item: { path?: string; roles?: string[] }): boolean {
    if (!this.checkRoles(item.roles)) {
      return false;
    }
    if (item.path === '/courrier') {
      const gestion = ['SUPERADMIN', 'ADMIN', 'DIRECTEUR', 'DIRECTEUR_ODC'];
      if (this.useRole.includes('PERSONNEL') && !gestion.some((r) => this.useRole.includes(r))) {
        return false;
      }
    }
    return true;
  }

  toggle(item: any) {
    item.open = !item.open;
  }

  setMenuHeight() {
    const navbarHeight = 60;
    const userPanelHeight = 140;
    this.listMaxHeight = (window.innerHeight - navbarHeight - userPanelHeight) + '';
  }
}
