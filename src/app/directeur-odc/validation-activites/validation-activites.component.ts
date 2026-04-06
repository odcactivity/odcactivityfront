import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-activites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-activites.component.html',
  styleUrl: './validation-activites.component.scss'
})
export class ValidationActivitesComponent implements OnInit {
  rows: any[] = [];
  loading = false;

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.global.get('activite/en-attente-validation-directeur-odc').subscribe({
      next: (d) => {
        this.rows = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Impossible de charger les activités en attente.');
      }
    });
  }

  valider(id: number | undefined): void {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/valider-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success('Activité validée. Les personnels ont été notifiés.');
        this.load();
      },
      error: () => this.toast.error('Validation impossible.')
    });
  }

  rejeter(id: number | undefined): void {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/rejeter-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success('Activité refusée. Le créateur a été informé.');
        this.load();
      },
      error: () => this.toast.error('Refus impossible.')
    });
  }
}
