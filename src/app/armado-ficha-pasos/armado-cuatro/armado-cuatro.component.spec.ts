import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArmadoCuatroComponent} from './armado-cuatro.component';

describe('ArmadoCuatroComponent', () => {
  let component: ArmadoCuatroComponent;
  let fixture: ComponentFixture<ArmadoCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArmadoCuatroComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
