import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoTresComponent } from './armado-tres.component';

describe('ArmadoTresComponent', () => {
  let component: ArmadoTresComponent;
  let fixture: ComponentFixture<ArmadoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
