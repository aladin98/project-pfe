import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleDeActiviteComponent } from './feuille-de-activite.component';

describe('FeuilleDeActiviteComponent', () => {
  let component: FeuilleDeActiviteComponent;
  let fixture: ComponentFixture<FeuilleDeActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleDeActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleDeActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
