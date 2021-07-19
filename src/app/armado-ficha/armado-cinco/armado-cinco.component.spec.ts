import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoCincoComponent } from './armado-cinco.component';

describe('ArmadoCincoComponent', () => {
  let component: ArmadoCincoComponent;
  let fixture: ComponentFixture<ArmadoCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
