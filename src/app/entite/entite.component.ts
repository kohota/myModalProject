import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entite } from '../model/entite';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.component.html',
  styleUrls: ['./entite.component.css']
})
export class EntiteComponent implements OnInit {

  entite=new Entite();
  @Output() onEmitEntite:EventEmitter<Entite>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitObject(){
    this.onEmitEntite.emit(this.entite);
  }
}
