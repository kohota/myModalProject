import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { UtilisateurPopUpComponent } from './pop-up/utilisateur-pop-up/utilisateur-pop-up.component';
import { AdresseComponent } from './adresse/adresse.component';
import { EntiteComponent } from './entite/entite.component';
import { WizzardComponent } from './wizzard/wizzard.component';
import { ArchwizardModule } from 'angular-archwizard';
import { DetailUtilisateurComponent } from './detail-utilisateur/detail-utilisateur.component';
import {RouterModule,Routes} from '@angular/router';

const mesRoutes:Routes = [
  {  path:"detail",component:DetailUtilisateurComponent },
  {  path:"wizzard",component:WizzardComponent },
  { path:"",redirectTo:"/wizzard",pathMatch:'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    UtilisateurPopUpComponent,
    AdresseComponent,
    EntiteComponent,
    WizzardComponent,
    DetailUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    ArchwizardModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [],
  entryComponents : [UtilisateurPopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
