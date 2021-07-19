import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoUnoComponent } from './armado-uno.component';

describe('ArmadoUnoComponent', () => {
  let component: ArmadoUnoComponent;
  let fixture: ComponentFixture<ArmadoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
