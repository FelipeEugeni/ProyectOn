import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTecnicaComponent } from './mostrar-tecnica.component';

describe('MostrarTecnicaComponent', () => {
  let component: MostrarTecnicaComponent;
  let fixture: ComponentFixture<MostrarTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
