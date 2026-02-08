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
    this.useRole = this.authService.getCurrentUserFromStorage()?.roles || [];

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
    return !roles || roles.length === 0 || roles.some(r => this.useRole.includes(r));
  }

  toggle(item: any) {
    item.open = !item.open;
  }

  setMenuHeight() {
    const height = window.innerHeight - 60;
    this.listMaxHeight = height + '';
  }
}
