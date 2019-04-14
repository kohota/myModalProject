import { Component, OnInit } from '@angular/core';
import { Adresse } from '../model/Adresse';
import { Entite } from '../model/entite';
import { Utilisateur } from '../model/Utilisateurs';

@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.css']
})
export class WizzardComponent implements OnInit {
 
  utilisateur;
  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  detailsRedirect(event){
   
    
  }

  getUserAfterSave(event){    
    this.utilisateur=event;
  }

  valideUserStep1(){
    return this.utilisateur.nom && this.utilisateur.prenom;
  }

  getAdresse(event){    
    this.utilisateur.adresse=event;
  }

  valideUserStep2(){
    return this.valideUserStep1() && this.utilisateur.adresse && this.utilisateur.adresse.adresse && this.utilisateur.adresse.pays;
  }

  getEntite(event){    
    this.utilisateur.entite=event;
  }

  valideUserStep3(){
    return this.valideUserStep1() && this.valideUserStep2() && this.utilisateur.entite && this.utilisateur.entite.nom && this.utilisateur.entite.code;
  }

  initialize(){
    
    this.utilisateur=new Utilisateur();
    this.utilisateur.adresse=new Adresse();
    this.utilisateur.entite=new Entite();
  }
}
