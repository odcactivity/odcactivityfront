import { Utilisateur } from '@core/models/Utilisateur.model';


export class Entite {
  id?: number;
  nom?: string;
  description?: string;
  logo?: string;
  type?: string; // Ajout de la propriété type manquante
  parentId?: number; // Ajout de la propriété parentId pour la hiérarchie
  listeDebut?: string;
  listeResultat?: string;
  utilisateur?: Utilisateur;
  responsable?: Utilisateur;
  typeActiviteIds?: number[]; // Corrigé pour correspondre au backend (sans 's' final)
}
