import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-activite-temp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-warning text-dark">
              <h4 class="mb-0">Tableau de bord Personnel</h4>
            </div>
            <div class="card-body">
              <p class="card-text">Bienvenue sur votre espace personnel !</p>
              <div class="alert alert-info">
                <i class="fas fa-info-circle me-2"></i>
                Le calendrier des activités est en cours de maintenance. 
                Les autres fonctionnalités sont disponibles dans le menu.
              </div>
              <div class="row mt-4">
                <div class="col-md-4">
                  <div class="card text-center">
                    <div class="card-body">
                      <i class="fas fa-calendar fa-3x text-warning mb-3"></i>
                      <h5 class="card-title">Activités</h5>
                      <p class="card-text">Gérez vos activités</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card text-center">
                    <div class="card-body">
                      <i class="fas fa-users fa-3x text-primary mb-3"></i>
                      <h5 class="card-title">Participants</h5>
                      <p class="card-text">Gérez les participants</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card text-center">
                    <div class="card-body">
                      <i class="fas fa-chart-bar fa-3x text-success mb-3"></i>
                      <h5 class="card-title">Rapports</h5>
                      <p class="card-text">Consultez les rapports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
    }
  `]
})
export class DashActiviteTempComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    console.log('Tableau de bord personnel chargé avec succès');
  }
}
