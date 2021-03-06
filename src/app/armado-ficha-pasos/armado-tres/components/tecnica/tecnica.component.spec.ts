import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TecnicaComponent} from './tecnica.component';

describe('CrearTecnicaComponent', () => {
  let component: TecnicaComponent;
  let fixture: ComponentFixture<TecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
