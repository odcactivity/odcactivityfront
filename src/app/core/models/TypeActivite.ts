import {Entite} from "@core/models/Entite";
import { Utilisateur } from '@core/models/Utilisateur.model';


export class TypeActivite{
  id?: number;
  type?: string;
  entiteId?: Entite;
  createdBy?: Utilisateur;
}
