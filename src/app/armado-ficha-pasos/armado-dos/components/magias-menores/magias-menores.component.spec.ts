import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MagiasMenoresComponent} from './magias-menores.component';

describe('ArmadoCuatroComponent', () => {
  let component: MagiasMenoresComponent;
  let fixture: ComponentFixture<MagiasMenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagiasMenoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagiasMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
