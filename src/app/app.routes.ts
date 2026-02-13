import { Route } from '@angular/router';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from '@core/guard/auth.guard';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTE),
      },

      { path: 'role', loadComponent: () => import('./admin/role/role.component').then(c => c.RoleComponent) },
      { path: 'utilisateur', loadComponent: () => import('./admin/utilisateur/utilisateur.component').then(c => c.UtilisateurComponent) },
      { path: 'entite', loadComponent: () => import('./admin/entite/entite.component').then(c => c.EntiteComponent) },
{
            path: 'entiteDetail',
            loadComponent: () => import('./admin/entite-detail/entite-detail.component').then(c => c.EntiteDetailComponent)
          },
      { path: 'dashboard2', loadComponent: () => import('./personnels/dashboard/dashboard.component').then(c => c.DashboardComponent) },
      { path: 'courrier', loadComponent: () => import('./personnels/courriers/courriers.component').then(c => c.CourriersComponent) },

      { path: 'dashboardActivite', loadComponent: () => import('./personnels/dash-activite/dash-activite.component').then(c => c.DashActiviteComponent) },
      { path: 'typeActivite', loadComponent: () => import('./personnels/type-activite/type-activite.component').then(c => c.TypeActiviteComponent) },
      { path: 'critere', loadComponent: () => import('./personnels/critere/critere.component').then(c => c.CritereComponent) },
      { path: 'etape',loadComponent: () => import('./personnels/etape/etape.component').then(c => c.EtapeComponent)},
      {
            path: 'listeDebut',
            loadComponent: () => import('./personnels/etape/liste-debut/liste-debut.component').then(c => c.ListeDebutComponent)
          },

           {
            path: 'listeGlobale',
            loadComponent: () => import('./personnels/etape/liste-affichage/liste-affichage.component').then(c => c.ListeAffichageComponent)
          },

          {
            path: 'listeResultat',
            loadComponent: () => import('./personnels/etape/liste-resultat/liste-resultat.component').then(c => c.ListeResultatComponent)
          },
      { path: 'activite', loadComponent: () => import('./personnels/activity/activity.component').then(c => c.ActivityComponent) },
      { path: 'salle', loadComponent: () => import('./personnels/salle/salle.component').then(c => c.SalleComponent) },
      { path: 'activityvalidation', loadComponent: () => import('./personnels/activityvalidation/activityvalidation.component').then(c => c.ActivityvalidationComponent) },
      { path: 'participant', loadComponent: () => import('./personnels/participant/participant.component').then(c => c.ParticipantComponent) },

      { path: 'supportactivites', loadComponent: () => import('./personnels/activitysupport/activitysupport.component').then(c => c.ActivitysupportComponent) },
      { path: 'reporting', loadComponent: () => import('./personnels/reporting/reporting.component').then(c => c.ReportingComponent) },
      { path: 'reportinghebdo', loadComponent: () => import('./personnels/reportinghebdo/reportinghebdo.component').then(c => c.ReportinghebdoComponent) },

      { path: 'profile', loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent) }
    ]
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/auth.routes').then(m => m.AUTH_ROUTE),
  },

  { path: '**', component: Page404Component }
];
