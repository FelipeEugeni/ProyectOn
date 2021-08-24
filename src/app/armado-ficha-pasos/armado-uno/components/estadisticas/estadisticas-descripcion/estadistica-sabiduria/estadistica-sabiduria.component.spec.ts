import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EstadisticaSabiduriaComponent} from './estadistica-sabiduria.component';

describe('EstadisticaSabiduriaComponent', () => {
  let component: EstadisticaSabiduriaComponent;
  let fixture: ComponentFixture<EstadisticaSabiduriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaSabiduriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaSabiduriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
