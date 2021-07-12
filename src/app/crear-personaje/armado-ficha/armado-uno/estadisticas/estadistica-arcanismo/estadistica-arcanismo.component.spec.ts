import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaArcanismoComponent } from './estadistica-arcanismo.component';

describe('EstadisticaArcanismoComponent', () => {
  let component: EstadisticaArcanismoComponent;
  let fixture: ComponentFixture<EstadisticaArcanismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaArcanismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaArcanismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
