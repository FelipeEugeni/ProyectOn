import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EstadisticaVoluntadComponent} from './estadistica-voluntad.component';

describe('EstadisticaVoluntadComponent', () => {
  let component: EstadisticaVoluntadComponent;
  let fixture: ComponentFixture<EstadisticaVoluntadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaVoluntadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaVoluntadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
