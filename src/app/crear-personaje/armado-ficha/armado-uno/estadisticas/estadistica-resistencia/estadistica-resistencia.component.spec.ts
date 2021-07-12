import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaResistenciaComponent } from './estadistica-resistencia.component';

describe('EstadisticaResistenciaComponent', () => {
  let component: EstadisticaResistenciaComponent;
  let fixture: ComponentFixture<EstadisticaResistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaResistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaResistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
