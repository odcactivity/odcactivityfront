import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule, NgClass } from "@angular/common";
import { DatatableComponent, NgxDatatableModule, SelectionType } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { RouterLink } from "@angular/router";

import { GlobalService } from "@core/service/global.service";
import { Participant } from "@core/models/Participant";
import { Activity } from "@core/models/Activity";

@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [
    CommonModule,         
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;

  participants: Participant[] = [];
  filteredData: Participant[] = [];
  filteredParticipants: Participant[] = [];

  blacklistedEmails: string[] = [];
  blacklistedPhones: string[] = [];

  loadingIndicator = true;
  scrollBarHorizontal = window.innerWidth < 1200;
  reorderable = true;
  isRowSelected = false;

  public selected: any[] = [];
  selection!: SelectionType;

  register!: UntypedFormGroup;
  editForm!: UntypedFormGroup;

  //  Typage propre
  createurActivite?: CreateurActivite;

  constructor(
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private globalService: GlobalService
  ) {
    this.selection = SelectionType.checkbox;

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  // =============================
  // INITIALISATION DES FORMULAIRES
  // =============================
  initForms() {
    this.register = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      genre: ['', Validators.required],
    });

    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      prenom: new UntypedFormControl(),
      email: new UntypedFormControl(),
      phone: new UntypedFormControl(),
      genre: new UntypedFormControl(),
    });
  }

  // =============================
  // CHARGEMENT GLOBAL
  // =============================
  loadData() {
    this.loadingIndicator = true;

    // Charger d'abord les blacklistés
    this.globalService.get('blacklist').subscribe({
      next: (blacklist: any[]) => {
        this.blacklistedEmails = blacklist.map(item => item.email?.toLowerCase());
        this.blacklistedPhones = blacklist.map(item => item.phone);

        // Ensuite charger les participants
        this.getAllParticipant();
      },
      error: () => {
        this.toastr.error('Erreur lors du chargement de la blacklist.');
        this.loadingIndicator = false;
      }
    });
  }

  // =============================
  // RÉCUPÉRATION PARTICIPANTS
  // =============================
  getAllParticipant() {
    this.globalService.get('participant').subscribe({
      next: (value: Participant[]) => {

        this.participants = value.map(participant => ({
          ...participant,
          isBlacklisted: this.checkIfBlacklisted(participant)
        }));

        this.filteredData = [...this.participants];

        //  Récupérer le créateur
        if (this.participants.length > 0 && this.participants[0].activite?.createdBy) {
          this.createurActivite = {
            nom: this.participants[0].activite.createdBy.nom,
            prenom: this.participants[0].activite.createdBy.prenom
          };
        }

        this.loadingIndicator = false;
      },
      error: () => {
        this.toastr.error('Erreur lors de la récupération des participants.');
        this.loadingIndicator = false;
      }
    });
  }

  // =============================
  // FILTRE RECHERCHE
  // =============================
  filterDatatable(event: any) {
    const val = event.target.value.toLowerCase();

    this.participants = this.filteredData.filter(item =>
      Object.values(item).some((field: any) =>
        field?.toString().toLowerCase().includes(val)
      )
    );

    if (this.table) this.table.offset = 0;
  }

  // =============================
  // SÉLECTION TABLEAU
  // =============================
  onSelect({ selected }: { selected: any[] }) {
    this.selected = [...selected];
    this.isRowSelected = this.selected.length > 0;
  }

  // =============================
  // STYLE LIGNE BLACKLISTÉE
  // =============================
  getRowClass = (row: any) => ({
    'blacklisted-row': row.isBlacklisted === true
  });

  // =============================
  // CHECK BLACKLIST
  // =============================
  checkIfBlacklisted(participant: Participant): boolean {
    const emailBlacklisted =
      participant.email &&
      this.blacklistedEmails.includes(participant.email.toLowerCase());

    const phoneBlacklisted =
      participant.phone &&
      this.blacklistedPhones.includes(participant.phone);

    return !!emailBlacklisted || !!phoneBlacklisted;
  }
}


// =============================
// INTERFACE CREATEUR
// =============================
interface CreateurActivite {
  nom?: string;
  prenom?: string;
}

// =============================
// INTERFACE SELECT
// =============================
export interface selectParticipantInterface {
  nom?: string;
  prenom?: string;
  email?: string;
  phone?: string;
  genre?: string;
  isBlacklisted?: boolean;
  activite?: Activity;
}

