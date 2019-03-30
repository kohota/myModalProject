import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurPopUpComponent } from './pop-up/utilisateur-pop-up/utilisateur-pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myModalProject';
  bsModalRef;
  constructor(private modalService: BsModalService) {

  }

  ngOnInit(): void {

  }

  openModalWithComponent() {
    let userId = 1222;
    const initialState = {
      idUtilisateur: userId
    };
    this.bsModalRef = this.modalService.show(UtilisateurPopUpComponent, { initialState });
  }

}
