import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EsenciasComponent} from './esencias.component';

describe('EsenciasComponent', () => {
  let component: EsenciasComponent;
  let fixture: ComponentFixture<EsenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
