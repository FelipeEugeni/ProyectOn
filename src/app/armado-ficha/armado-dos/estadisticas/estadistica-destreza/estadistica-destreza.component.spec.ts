import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaDestrezaComponent } from './estadistica-destreza.component';

describe('EstadisticaDestrezaComponent', () => {
  let component: EstadisticaDestrezaComponent;
  let fixture: ComponentFixture<EstadisticaDestrezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaDestrezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaDestrezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
