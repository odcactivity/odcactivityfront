
import { Etape } from "@core/models/Etape";
import { Participant } from "./Participant";

export class Liste {
  id!: number;
  dateHeure!: Date;
  listeDebut!: boolean;
  listeResultat!: boolean;
  etape!: Etape;
  listeId!: number;
  participants!: Participant[];
}
