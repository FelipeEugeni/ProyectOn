import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArmadoFichaSimpleComponent} from './armado-ficha-simple.component';

describe('ArmadoFichaSimpleComponent', () => {
  let component: ArmadoFichaSimpleComponent;
  let fixture: ComponentFixture<ArmadoFichaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArmadoFichaSimpleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoFichaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
