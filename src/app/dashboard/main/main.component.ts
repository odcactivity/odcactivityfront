import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterLink } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { Participant } from '@core/models/Participant';
import { NgIf } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from '@core/models/Activity';

type PeriodType = 'semaine' | 'mois' | 'annee';

interface EntityActivityStat {
  entite: string;
  total: number;
  hommes: number;
  femmes: number;
  titres: string[];
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    RouterLink,
    NgApexchartsModule,
    NgIf
  ]
})
export class MainComponent implements OnInit {
  public statusChartOptions: any;
  public entityChartOptions: any;
  nombreUtilisateurs: number | undefined;
  nombreActivite: number = 0;
  nombreActiviteEncours: number = 0;
  nombreActiviteEnAttente: number = 0;
  nombreActiviteTerminer: number = 0;
  selectedPeriod: PeriodType = 'annee';
  readonly targetEntities = ['Kalanso', 'Multimedia', 'Orange Fab', 'FabLab'];
  allActivities: Activity[] = [];
  allParticipants: Participant[] = [];
  safeParticipants: Participant[] = [];
  entityActivityStats: EntityActivityStat[] = [];
  selectedEntityCard: EntityActivityStat | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.getNombreUitlisateur();
    this.getNombreActivite();
    this.getNombreActiviteEncours();
    this.getNombreActiviteEnAttente();
    this.getNombreActiviteTerminer();
    this.initEmptyCharts();
    this.loadDashboardData();
  }

  getNombreUitlisateur() {
    this.globalService.get('utilisateur/nombre').subscribe({
      next: (count) => this.nombreUtilisateurs = count,
      error: err => console.log(err),
    });
  }

  getNombreActivite() {
    this.globalService.get('activite/nombre').subscribe({
      next: (count) => this.nombreActivite = count,
      error: err => console.log(err),
    });
  }

  getNombreActiviteEncours() {
    this.globalService.get('activite/nombreActivitesEncours').subscribe({
      next: (count) => this.nombreActiviteEncours = count,
      error: err => console.log(err),
    });
  }

  getNombreActiviteEnAttente() {
    this.globalService.get('activite/nombreActivitesEnAttente').subscribe({
      next: (count) => this.nombreActiviteEnAttente = count,
      error: err => console.log(err),
    });
  }

  getNombreActiviteTerminer() {
    this.globalService.get('activite/nombreActivitesTerminer').subscribe({
      next: (count) => this.nombreActiviteTerminer = count,
      error: err => console.log(err),
    });
  }

  setPeriod(period: PeriodType): void {
    this.selectedPeriod = period;
    this.buildEntityChart();
  }

  private loadDashboardData(): void {
    forkJoin({
      activities: this.globalService.get('activite').pipe(catchError(() => of([]))),
      participants: this.globalService.get('participant').pipe(catchError(() => of([]))),
      blacklist: this.globalService.get('blacklist').pipe(catchError(() => of([])))
    }).subscribe(({ activities, participants, blacklist }: any) => {
      this.allActivities = Array.isArray(activities) ? activities : [];
      this.allParticipants = Array.isArray(participants) ? participants : [];

      const blacklistedEmails = new Set(
        (Array.isArray(blacklist) ? blacklist : [])
          .map((b: any) => String(b?.email || '').toLowerCase())
          .filter(Boolean)
      );

      this.safeParticipants = this.allParticipants.filter(
        p => !blacklistedEmails.has(String(p.email || '').toLowerCase())
      );

      this.buildStatusChart();
      this.buildEntityChart();
    });
  }

  private initEmptyCharts(): void {
    this.statusChartOptions = {
      series: [0, 0, 0],
      chart: { type: 'pie', height: 360, toolbar: { show: false } },
      labels: ['En cours', 'Terminées', 'En attente'],
      colors: ['#1E88E5', '#14B8A6', '#F5B427'],
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '16px',
        labels: { colors: '#1f2937' },
        markers: { width: 10, height: 10, radius: 12 }
      },
      dataLabels: {
        enabled: true,
        formatter: (value: number) => `${Math.round(value)}%`,
        style: { fontSize: '16px', fontWeight: '500' }
      },
      stroke: { width: 1, colors: ['#ffffff'] }
    };

    this.entityChartOptions = {
      series: [{ name: 'Total inscrits', data: [0, 0, 0, 0] }],
      chart: { type: 'area', height: 320, toolbar: { show: false } },
      xaxis: { categories: this.targetEntities },
      yaxis: { title: { text: 'Nombre d’inscrits' }, min: 0 },
      stroke: { curve: 'smooth', width: 3 },
      markers: { size: 5 },
      colors: ['#9CA3AF']
    };
  }

  private buildStatusChart(): void {
    const inProgress = this.allActivities.filter(a => this.resolveStatus(a) === 'encours').length;
    const done = this.allActivities.filter(a => this.resolveStatus(a) === 'terminee').length;
    const waiting = this.allActivities.filter(a => this.resolveStatus(a) === 'attente').length;

    this.statusChartOptions = {
      ...this.statusChartOptions,
      series: [inProgress, done, waiting],
      tooltip: {
        y: {
          formatter: (value: number) => `${value} activité(s)`
        }
      }
    };
  }

  private buildEntityChart(): void {
    const filteredActivities = this.filterActivitiesByPeriod(this.selectedPeriod);

    this.entityActivityStats = this.targetEntities.map((entityName) => {
      const entityActivities = filteredActivities.filter(a =>
        this.normalizeValue(a.entite?.nom) === this.normalizeValue(entityName)
      );
      const entityActivityIds = new Set(entityActivities.map(a => a.id));
      const participants = this.safeParticipants.filter(p => entityActivityIds.has(p.activite?.id));
      const hommes = participants.filter(p => this.normalizeValue(p.genre) === 'HOMME').length;
      const femmes = participants.filter(p => this.normalizeValue(p.genre) === 'FEMME').length;
      const titres = [...new Set(entityActivities.map(a => a.titre || a.nom).filter(Boolean))] as string[];

      return {
        entite: entityName,
        total: participants.length,
        hommes,
        femmes,
        titres
      };
    });

    const that = this;
    this.entityChartOptions = {
      series: [{
        name: 'Total inscrits',
        data: this.entityActivityStats.map(stat => stat.total)
      }],
      chart: {
        type: 'area',
        height: 320,
        toolbar: { show: false },
        events: {
          dataPointMouseEnter: function (_: any, __: any, config: any) {
            that.selectEntityFromChart(config.dataPointIndex);
          },
          dataPointSelection: function (_: any, __: any, config: any) {
            that.selectEntityFromChart(config.dataPointIndex);
          }
        }
      },
      xaxis: {
        categories: this.targetEntities,
        labels: { style: { fontSize: '14px', colors: '#6b7280' } }
      },
      yaxis: {
        min: 0,
        title: { text: 'Nombre d’inscrits' },
        labels: { style: { colors: '#6b7280' } }
      },
      stroke: { curve: 'smooth', width: 3, colors: ['#d1d5db'] },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.6, opacityTo: 0.08 }
      },
      markers: {
        size: 5,
        colors: ['#111827'],
        strokeColors: '#ffffff',
        strokeWidth: 2,
        hover: { size: 7 }
      },
      grid: {
        borderColor: '#e5e7eb',
        strokeDashArray: 3
      },
      colors: ['#d1d5db'],
      tooltip: {
        custom: ({ dataPointIndex }: { dataPointIndex: number }) => {
          const stat = this.entityActivityStats[dataPointIndex];
          if (!stat) {
            return '';
          }
          const titres = stat.titres.length > 0 ? stat.titres.join(', ') : 'Aucune activité';
          return `<div class="odl-tooltip">
            <div><strong>${stat.entite}</strong></div>
            <div>Titre Activité: ${titres}</div>
            <div>Nombre d'Homme: ${stat.hommes}</div>
            <div>Nombre de Femme: ${stat.femmes}</div>
            <div>Total inscrit: ${stat.total}</div>
          </div>`;
        }
      }
    };

    this.selectedEntityCard = this.entityActivityStats[0] || null;
  }

  private selectEntityFromChart(index: number): void {
    this.selectedEntityCard = this.entityActivityStats[index] || null;
  }

  private filterActivitiesByPeriod(period: PeriodType): Activity[] {
    const today = new Date();

    return this.allActivities.filter(activity => {
      const rawDate = activity.dateDebut || activity.dateFin;
      if (!rawDate) {
        return false;
      }

      const activityDate = new Date(rawDate);
      if (Number.isNaN(activityDate.getTime())) {
        return false;
      }

      if (period === 'annee') {
        return activityDate.getFullYear() === today.getFullYear();
      }
      if (period === 'mois') {
        return activityDate.getFullYear() === today.getFullYear()
          && activityDate.getMonth() === today.getMonth();
      }

      return this.isSameWeek(activityDate, today);
    });
  }

  private isSameWeek(date: Date, reference: Date): boolean {
    const ref = new Date(reference);
    ref.setHours(0, 0, 0, 0);
    const day = (ref.getDay() + 6) % 7;
    const start = new Date(ref);
    start.setDate(ref.getDate() - day);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return date >= start && date <= end;
  }

  private resolveStatus(activity: Activity): 'encours' | 'terminee' | 'attente' {
    const status = this.normalizeValue(activity.statut);
    if (status.includes('COURS')) {
      return 'encours';
    }
    if (status.includes('TERM')) {
      return 'terminee';
    }
    return 'attente';
  }

  private normalizeValue(value: unknown): string {
    return String(value || '').trim().toUpperCase();
  }
}
