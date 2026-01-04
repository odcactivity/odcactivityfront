import {Role} from "@core/models/Role";
import {Entite} from "@core/models/Entite";

export interface Utilisateur {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  phone?: string;
  genre?: string;
  password?: string;
  etat?: boolean;

  role?: Role;
  entite?: Entite;
}
