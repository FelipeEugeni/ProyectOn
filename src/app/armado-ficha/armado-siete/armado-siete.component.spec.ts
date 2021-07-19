import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoSieteComponent } from './armado-siete.component';

describe('ArmadoSieteComponent', () => {
  let component: ArmadoSieteComponent;
  let fixture: ComponentFixture<ArmadoSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
