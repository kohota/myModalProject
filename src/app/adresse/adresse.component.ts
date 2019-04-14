import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import { Adresse } from '../model/Adresse';


@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input() Utilisateur;

  @Output() onEmitAdresse :EventEmitter<Adresse>=new EventEmitter();

  adresse=new Adresse();
  constructor() { }

  ngOnInit() {
  }

  emitObject(){
    this.onEmitAdresse.emit(this.adresse);
  }

}
