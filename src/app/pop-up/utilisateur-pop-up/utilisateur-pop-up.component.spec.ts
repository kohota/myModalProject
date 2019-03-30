import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurPopUpComponent } from './utilisateur-pop-up.component';

describe('UtilisateurPopUpComponent', () => {
  let component: UtilisateurPopUpComponent;
  let fixture: ComponentFixture<UtilisateurPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
