import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { UtilisateurPopUpComponent } from './pop-up/utilisateur-pop-up/utilisateur-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    UtilisateurPopUpComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  entryComponents : [UtilisateurPopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
