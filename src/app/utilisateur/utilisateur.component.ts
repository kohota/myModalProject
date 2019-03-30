import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../model/Utilisateurs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  @Input()
  userId;
  
  utilisateur :Utilisateur=new Utilisateur();
  constructor() { }

  ngOnInit() {
    this.utilisateur.id=this.userId;
  }

  save(){
    //Faire appel a votre service pour perssister votre objet 
    console.log(this.utilisateur);
  }
}
