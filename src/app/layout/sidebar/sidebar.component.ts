import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgIf } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '@core';
import { canonicalizeAppRoles } from '@core/utils/app-roles';
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

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    const rawRoles = this.authService.getCurrentUserFromStorage()?.roles || [];
    this.useRole = canonicalizeAppRoles(rawRoles);
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

    // Charger JSON Menu + filtrer par rôle
    this.sidebarService.getRouteInfo().subscribe(routes => {
      this.sidebarItems = routes
        .filter(item => this.checkRoles(item.roles))
        .map(item => ({
          ...item,
          submenu: (item.submenu || []).filter(x => this.checkRoles(x.roles)),
          open: item.title === 'Directeur ODC'
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
    const requestedRoles = canonicalizeAppRoles(roles);
    return requestedRoles.some(r => this.useRole.includes(r));
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
