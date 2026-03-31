import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgIf } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '@core';
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
  listMaxHeight = '500';

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    const rawRoles = this.authService.getCurrentUserFromStorage()?.roles || [];
    this.useRole = this.normalizeRoles(rawRoles);

    // Charger JSON Menu + filtrer par rôle
    this.sidebarService.getRouteInfo().subscribe(routes => {
      this.sidebarItems = routes
        .filter(item => this.checkRoles(item.roles))
        .map(item => ({
          ...item,
          submenu: (item.submenu || []).filter(x => this.checkRoles(x.roles)),
          open: false
        }));
    });

    // Charger infos user
    const user = this.authService.getCurrentUserFromStorage();
    if (user && user.bearer) {
      const decoded = this.authService.getDecodedToken(user.bearer);
      this.nomComplet = `${decoded.prenom} ${decoded.nom}`;
      this.genre = decoded.genre || 'Homme';
    }

    this.setMenuHeight();
  }

  checkRoles(roles?: string[]): boolean {
    if (!roles || roles.length === 0) {
      return true;
    }
    const requestedRoles = this.normalizeRoles(roles);
    return requestedRoles.some(r => this.useRole.includes(r));
  }

  private normalizeRoles(roles: unknown): string[] {
    const roleArray = Array.isArray(roles)
      ? roles
      : typeof roles === 'string'
        ? [roles]
        : [];

    const normalized = roleArray
      .map(r => String(r).trim().toUpperCase())
      .filter(Boolean);

    // Compatibilite entre les deux libelles utilises dans l'application.
    if (normalized.includes('ADMIN') && !normalized.includes('SUPERADMIN')) {
      normalized.push('SUPERADMIN');
    }
    if (normalized.includes('SUPERADMIN') && !normalized.includes('ADMIN')) {
      normalized.push('ADMIN');
    }

    return [...new Set(normalized)];
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
