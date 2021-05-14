import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleDeTempsComponent } from './feuille-de-temps.component';

describe('FeuilleDeTempsComponent', () => {
  let component: FeuilleDeTempsComponent;
  let fixture: ComponentFixture<FeuilleDeTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleDeTempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleDeTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
