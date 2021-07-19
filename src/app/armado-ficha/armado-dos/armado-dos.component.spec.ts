import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoDosComponent } from './armado-dos.component';

describe('ArmadoDosComponent', () => {
  let component: ArmadoDosComponent;
  let fixture: ComponentFixture<ArmadoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
