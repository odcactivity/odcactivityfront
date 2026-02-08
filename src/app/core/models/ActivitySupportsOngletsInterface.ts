import {Etape} from "@core/models/Etape";
import {Entite} from "@core/models/Entite";
import {Salle} from "@core/models/Salle";
import { ActivityValidation } from "./ActivityValidation";
import { Utilisateur } from "./Utilisateur";
import { Activity } from "./Activity";
import { ActivitySupports } from "./ActivitySupports";

export interface ActivitySupportsOngletsInterface {
  typeOnglet: string;     //Nom de l'onglet...
  nombreFichier: number;     //Nombre total de Fichier...
  tailleTotale: number;     //Taille Total des Octets...
  fichiers: ActivitySupports[]; //liste des fichiers type...


  // constructor(data?: Partial<Activity>) {
  //   if (data) {
  //     Object.assign(this, data);
  //     this.etapes = Array.isArray(data.etapes) ? data.etapes : data.etapes ? [data.etapes] : [];
  //   }
  // }
}
