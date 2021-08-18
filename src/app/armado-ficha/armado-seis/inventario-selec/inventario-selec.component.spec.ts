import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InventarioSelecComponent} from './inventario-selec.component';

describe('InventarioSelecComponent', () => {
  let component: InventarioSelecComponent;
  let fixture: ComponentFixture<InventarioSelecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventarioSelecComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioSelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
