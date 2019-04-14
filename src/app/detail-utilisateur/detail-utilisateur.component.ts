import { Component, OnInit, Input } from '@angular/core';
import { Adresse } from '../model/Adresse';
import { Entite } from '../model/entite';
import { Utilisateur } from '../model/Utilisateurs';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {

  @Input()
  utilisateur;
  constructor() {
    
   }

  ngOnInit() {
   
  }
  ngAfterViewInit(): void {
  
  
  
  }

  ngOnChanges() {
        
  }
  initialize(){
    
    this.utilisateur=new Utilisateur();
    this.utilisateur.adresse=new Adresse();
    this.utilisateur.entite=new Entite();
  }

  

}
