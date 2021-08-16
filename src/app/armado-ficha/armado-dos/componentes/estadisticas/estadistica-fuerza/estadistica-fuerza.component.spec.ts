import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaFuerzaComponent } from './estadistica-fuerza.component';

describe('EstadisticaFuerzaComponent', () => {
  let component: EstadisticaFuerzaComponent;
  let fixture: ComponentFixture<EstadisticaFuerzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaFuerzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaFuerzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
