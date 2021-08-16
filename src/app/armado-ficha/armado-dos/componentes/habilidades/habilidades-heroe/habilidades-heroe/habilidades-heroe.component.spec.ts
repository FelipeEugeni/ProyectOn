import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesHeroeComponent } from './habilidades-heroe.component';

describe('HabilidadesHeroeComponent', () => {
  let component: HabilidadesHeroeComponent;
  let fixture: ComponentFixture<HabilidadesHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
