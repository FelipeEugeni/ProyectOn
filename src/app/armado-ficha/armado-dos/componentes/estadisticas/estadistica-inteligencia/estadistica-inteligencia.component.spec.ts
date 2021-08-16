import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaInteligenciaComponent } from './estadistica-inteligencia.component';

describe('EstadisticaInteligenciaComponent', () => {
  let component: EstadisticaInteligenciaComponent;
  let fixture: ComponentFixture<EstadisticaInteligenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaInteligenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaInteligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
