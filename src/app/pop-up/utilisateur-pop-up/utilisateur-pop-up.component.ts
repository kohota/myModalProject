import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-utilisateur-pop-up',
  templateUrl: './utilisateur-pop-up.component.html',
  styleUrls: ['./utilisateur-pop-up.component.css']
})
export class UtilisateurPopUpComponent implements OnInit {

  idUtilisateur;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.idUtilisateur);
  }

}
