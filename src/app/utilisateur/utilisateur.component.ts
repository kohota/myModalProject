import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Utilisateur } from '../model/Utilisateurs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  @Input()
  userId;
  @Output() onSaveUser:EventEmitter<Utilisateur>=new EventEmitter();
  utilisateur :Utilisateur=new Utilisateur();
  constructor() { }

  ngOnInit() {
    this.utilisateur.id=this.userId;
  }

  save(){
    //Faire appel a votre service pour perssister votre objet 
    
    this.utilisateur.id=5656;
    this.onSaveUser.emit(this.utilisateur);
  }
}
