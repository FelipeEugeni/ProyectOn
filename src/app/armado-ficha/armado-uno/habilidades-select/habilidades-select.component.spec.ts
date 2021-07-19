import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesSelectComponent } from './habilidades-select.component';

describe('HabilidadesSelectComponent', () => {
  let component: HabilidadesSelectComponent;
  let fixture: ComponentFixture<HabilidadesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
