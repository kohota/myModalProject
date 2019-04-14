import { Adresse } from "./Adresse";
import { Entite } from "./entite";

export class Utilisateur {

    public id: number;
    public nom: string;
    public prenom: string;
    public adresse:Adresse;
    public entite:Entite;
}