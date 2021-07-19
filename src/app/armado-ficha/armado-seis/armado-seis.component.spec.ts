import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoSeisComponent } from './armado-seis.component';

describe('ArmadoSeisComponent', () => {
  let component: ArmadoSeisComponent;
  let fixture: ComponentFixture<ArmadoSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
