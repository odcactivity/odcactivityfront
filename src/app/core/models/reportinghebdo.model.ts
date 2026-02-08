export interface Entite {
  id: number;
  nom: string;
}

export interface TypeActivite {
  id: number;
  libelle: string;
}

export enum Statut {
  Planifie = 'Planifie',
  EnCours = 'EnCours',
  Termine = 'Termine'
}

export interface ReportingHebdoActiviteDTO {
  id: number;
  nom: string;
  titre: string;
  dateDebut: string; // ISO date string
  dateFin: string;   // ISO date string
  statut: Statut;
  lieu: string;
  description: string;
  objectifParticipation: number;
  entite: Entite;
  createdBy: string;
  typeActivite: TypeActivite;
 
}
