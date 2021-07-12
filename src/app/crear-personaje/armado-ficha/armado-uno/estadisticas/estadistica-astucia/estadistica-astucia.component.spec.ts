import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaAstuciaComponent } from './estadistica-astucia.component';

describe('EstadisticaAstuciaComponent', () => {
  let component: EstadisticaAstuciaComponent;
  let fixture: ComponentFixture<EstadisticaAstuciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaAstuciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaAstuciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
