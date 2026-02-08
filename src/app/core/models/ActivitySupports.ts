import {Etape} from "@core/models/Etape";
import {Entite} from "@core/models/Entite";
import {Salle} from "@core/models/Salle";
import { ActivityValidation } from "./ActivityValidation";
import { Utilisateur } from "./Utilisateur.model";
import { Activity } from "./Activity";

enum StatutSupport {
    
  En_ATTENTE,
  VALIDER,
  A_CORRIGER,
  REFUSER
}


export class ActivitySupports {
  id?: number;
  nom?: string;
  type?: string;
  url?: string;
  description?: string;
  // taille?: number;
  statut?: StatutSupport;
  dateAjout?: Date;
  activiteId?: number;
  activiteNom?: string;
  emailutilisateurAutorise?: string;
  commentaire?: string;
  historiques?: any[];

  // private Long id;
  // private String nom;
  // private String type;
  // private String url;
  // private StatutSupport statut;
  // private String commentaire;
  // private String description; // ajoutée
  // private Date dateAjout;
  // private Long activiteId;
  // private String activiteNom;
  // private String emailutilisateurAutorise;
  // private List<HistoriqueSupportActiviteDTO> historiques;

  

  // constructor(data?: Partial<Activity>) {
  //   if (data) {
  //     Object.assign(this, data);
  //     this.etapes = Array.isArray(data.etapes) ? data.etapes : data.etapes ? [data.etapes] : [];
  //   }
  // }
}
