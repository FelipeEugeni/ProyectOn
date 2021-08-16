import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTecnicaComponent } from './crear-tecnica.component';

describe('CrearTecnicaComponent', () => {
  let component: CrearTecnicaComponent;
  let fixture: ComponentFixture<CrearTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
